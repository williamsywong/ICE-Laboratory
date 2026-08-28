#!/usr/bin/env python3
"""
ICE Group — Local Editor Server
================================
Run this once, then open http://localhost:8000/editor.html in Chrome.
The Save button will write directly to your HTML files — no copy-pasting needed.

Usage:
    python3 server.py

Requirements: Python 3 (already installed on Mac and most Windows machines)
"""

import http.server
import json
import os
import re
import base64
import shutil
import datetime
from pathlib import Path

PORT = 8000
SITE_DIR = Path(__file__).parent.resolve()
BACKUP_DIR = SITE_DIR / "_backups"
IMAGES_DIR = SITE_DIR / "images"

# Every folder an uploaded image might be filed under, keyed by editor page id.
# Avatars always go to "Headshots" regardless of which page they're on.
# The nav logo always goes to "Branding" regardless of which page it's set from.
UPLOAD_FOLDERS = {
    "home": "Home", "news": "News", "people": "People", "pubs": "Publications",
    "alumni": "Alumni", "photos": "Photos", "gallery": "Gallery", "abstracts": "Abstracts",
    "headshots": "Headshots", "branding": "Branding",
}

ALLOWED_FILES = {
    "index.html",
    "news.html",
    "people.html",
    "publications.html",
    "alumni.html",
    "photos.html",
    "gallery.html",
    "abstracts.html",
    # Gallery / Photos tile photos, and Publications thumbnails, are rendered
    # from these data files on every page load (see each page's own render()
    # script), so an image saved in the editor must also be written back
    # here, or it reverts to a placeholder the next time the page loads.
    "data/gallery.js",
    "data/photos.js",
    "data/publications.js",
    "data/abstracts.js",
    "data/team.js",
    "data/people.js",
    "data/research.js",
    "data/news.js",
    "data/alumni.js",

}

DATA_URL_RE = re.compile(r"^data:image/(?P<ext>[a-zA-Z0-9+.-]+);base64,(?P<data>.+)$", re.DOTALL)

EXT_MAP = {
    "jpeg": "jpg", "jpg": "jpg", "png": "png",
    "gif": "gif", "webp": "webp", "svg+xml": "svg",
}


def safe_folder(name: str) -> str:
    """Only allow a known upload-folder name — falls back to 'uploads' otherwise."""
    if name in UPLOAD_FOLDERS.values():
        return name
    return "uploads"


def safe_filename(name: str) -> str:
    """Strip path components and unsafe characters, keep extension."""
    name = os.path.basename(name or "image")
    name = re.sub(r"[^A-Za-z0-9_.-]", "_", name)
    return name or "image"


class ICEHandler(http.server.SimpleHTTPRequestHandler):

    # In-memory holder for the current live preview HTML (single-user local tool)
    _preview_html = {"content": None}

    def do_GET(self):
        """Serve the live preview page, or fall back to normal static file serving."""
        path_only = self.path.split("?")[0]
        if path_only == "/preview":
            html = ICEHandler._preview_html["content"]
            if html is None:
                body = "No preview available yet - click Preview in the editor first.".encode("utf-8")
                self.send_response(404)
                self._cors()
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            body = html.encode("utf-8")
            self.send_response(200)
            self._cors()
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def do_OPTIONS(self):
        """Handle CORS preflight."""
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_POST(self):
        """Handle save / upload / preview requests from the editor."""
        if self.path == "/save":
            self._handle_save()
        elif self.path == "/upload-image":
            self._handle_upload()
        elif self.path == "/preview":
            self._handle_preview()
        else:
            self._respond(404, {"ok": False, "error": "Not found"})

    def _handle_preview(self):
        """Store the current in-editor HTML so GET /preview can serve it."""
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body.decode("utf-8"))
            ICEHandler._preview_html["content"] = data.get("html", "")
            self._respond(200, {"ok": True})
        except Exception as e:
            self._respond(500, {"ok": False, "error": str(e)})

    def _handle_save(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body.decode("utf-8"))
            filename = data.get("filename", "")
            content  = data.get("content", "")

            # Safety check — only allow known HTML files
            if filename not in ALLOWED_FILES:
                self._respond(400, {"ok": False, "error": f"File '{filename}' not allowed."})
                return

            target = SITE_DIR / filename

            # Back up the old file before overwriting. Flatten any subdirectory
            # in the filename (e.g. "data/gallery.js") into the backup's name
            # itself, since _backups/ is a single flat folder.
            BACKUP_DIR.mkdir(exist_ok=True)
            flat_name = filename.replace("/", "__")
            if target.exists():
                ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
                backup = BACKUP_DIR / f"{flat_name}.{ts}.bak"
                shutil.copy2(target, backup)
                # Keep only the 5 most recent backups per file
                existing = sorted(BACKUP_DIR.glob(f"{flat_name}.*.bak"))
                for old in existing[:-5]:
                    old.unlink()

            # Write the new content — newline="" disables Python's automatic
            # newline translation. Without this, on Windows every "\n" gets
            # translated to "\r\n" on every save; since the sync-header/footer
            # feature re-saves every page on every click, any already-existing
            # "\r\n" would compound into "\r\r\n", "\r\r\r\n", etc. over repeated
            # saves. Writing the string byte-for-byte as given avoids this.
            content = content.replace("\r\n", "\n").replace("\r", "")  # normalize any incoming CRLF first
            target.write_text(content, encoding="utf-8", newline="\n")
            print(f"  ✓  Saved {filename}  ({len(content):,} bytes)")
            self._respond(200, {"ok": True, "saved": filename})

        except Exception as e:
            print(f"  ✗  Save error: {e}")
            self._respond(500, {"ok": False, "error": str(e)})

    def _handle_upload(self):
        """
        Decode a base64 data-URL image sent by the editor and save it
        as a real file under images/<Folder>/ (matching the page tab it
        was uploaded from, or "Headshots" for avatar photos), preserving
        its original format (png/jpg/etc). Returns the relative path to
        reference from the saved HTML.
        """
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body.decode("utf-8"))
            requested_name = safe_filename(data.get("filename", "image.png"))
            data_url = data.get("dataUrl", "")
            folder = safe_folder(data.get("folder", "uploads"))
            overwrite = bool(data.get("overwrite", False))

            m = DATA_URL_RE.match(data_url)
            if not m:
                self._respond(400, {"ok": False, "error": "Not a valid image data URL."})
                return

            ext = EXT_MAP.get(m.group("ext").lower(), "png")
            raw = base64.b64decode(m.group("data"))

            target_dir = IMAGES_DIR / folder
            target_dir.mkdir(parents=True, exist_ok=True)

            stem = Path(requested_name).stem or "image"

            if overwrite:
                # Replace-in-place: this filename already refers to a real, previously
                # saved image (e.g. a photo tile, avatar headshot, or hero banner being
                # swapped for a new one). Remove any existing file(s) with the same stem
                # — regardless of extension, in case the new upload is a different image
                # format — so the old file doesn't linger on disk as an orphan, then
                # write the new file under that same stem.
                for old in target_dir.glob(f"{stem}.*"):
                    try:
                        old.unlink()
                    except OSError:
                        pass
                candidate = target_dir / f"{stem}.{ext}"
            else:
                # Ensure the saved file keeps the correct extension for its actual format
                candidate = target_dir / f"{stem}.{ext}"
                counter = 1
                while candidate.exists():
                    candidate = target_dir / f"{stem}_{counter}.{ext}"
                    counter += 1

            candidate.write_bytes(raw)
            rel_path = f"images/{folder}/{candidate.name}"
            action = "Replaced" if overwrite else "Uploaded"
            print(f"  ✓  {action} {rel_path}  ({len(raw):,} bytes)")
            self._respond(200, {"ok": True, "path": rel_path})

        except Exception as e:
            print(f"  ✗  Upload error: {e}")
            self._respond(500, {"ok": False, "error": str(e)})

    def _respond(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "http://localhost:8000")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def log_message(self, fmt, *args):
        # Suppress noisy GET logs; only show saves
        if "POST" in fmt % args or "Error" in fmt % args:
            super().log_message(fmt, *args)


if __name__ == "__main__":
    os.chdir(SITE_DIR)

    # Pre-create every upload folder so they're visible right away, even
    # before the first photo/headshot is ever uploaded.
    for folder_name in list(UPLOAD_FOLDERS.values()) + ["uploads"]:
        (IMAGES_DIR / folder_name).mkdir(parents=True, exist_ok=True)

    print()
    print("  ╔══════════════════════════════════════════╗")
    print("  ║     ICE Laboratory — Local Editor Server              ║")
    print("  ╠══════════════════════════════════════════╣")
    print(f"  ║  Site folder : {str(SITE_DIR)[:28]:<28}              ║")
    print(f"  ║  Server URL  : http://localhost:{PORT}               ║")
    print("  ║  Backups     : ./_backups/                            ║")
    print("  ║  Uploads     : ./images/<Tab>/                        ║")
    print("  ╠══════════════════════════════════════════╣")
    print("  ║  1. Open Chrome                                       ║")
    print(f"  ║  2. Go to http://localhost:{PORT}/editor.html        ║")
    print("  ║  3. Edit any text — click Save page                   ║")
    print("  ║  4. File is saved instantly to disk ✓                 ║")
    print("  ╠══════════════════════════════════════════╣")
    print("  ║  Press Ctrl+C to stop the server                      ║")
    print("  ╚══════════════════════════════════════════╝")
    print()

    with http.server.ThreadingHTTPServer(("", PORT), ICEHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server stopped.")
