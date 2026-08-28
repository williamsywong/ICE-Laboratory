# ICE Group Website
**Interfacial Chemical Engineering & Multiphase Processes**
University of Sydney — School of Chemical & Biomolecular Engineering

Live site: `https://<your-github-username>.github.io/ice-group-website/`

---

## Project Structure

```
ice-group-website/
├── index.html            # Main homepage
├── publications.html     # Publications page (filterable, sortable)
├── css/
│   └── style.css         # Shared styles
├── data/
│   ├── publications.js   # Publication records — edit this to add papers
│   ├── news.js           # News items — edit this to add posts
│   ├── photos.js         # Photo gallery entries — edit this to add photos
│   ├── gallery.js        # Gallery tiles (with sizes) — edit this to add/resize tiles
│   ├── abstracts.js      # Graphical-abstract entries — edit this to add entries
│   ├── team.js           # "The Team" — shared by index.html AND people.html
│   └── alumni.js         # Alumni (auto-ranked by seniority) + Collaborators
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions: auto-deploy to GitHub Pages
└── README.md
```

---

## Deploying to GitHub Pages

### First-time setup

1. **Create a GitHub repository** named `ice-group-website` (or any name you like).

2. **Push this folder:**
   ```bash
   cd ice-group-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ice-group-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under *Source*, select **GitHub Actions**
   - The included workflow (`.github/workflows/deploy.yml`) handles the rest automatically.

4. After ~60 seconds, your site will be live at:
   `https://<your-username>.github.io/ice-group-website/`

### Every subsequent update

```bash
git add .
git commit -m "Update publications / news / etc."
git push
```
GitHub Actions redeploys automatically on every push to `main`.

---

## Customising the site

### Adding a publication

Open `data/publications.js` and add an entry to the `PUBLICATIONS` array:

```js
{
  year: 2025,
  authors: "Your Name, Co-Author",
  title: "Full paper title here",
  journal: "Journal of Something Important",
  volume: "42",
  pages: "100–115",
  doi: "10.1000/xyz123",          // leave "" if no DOI
  type: "article",                 // article | review | conference | book-chapter
  highlight: true,                 // true = shown with ★ badge
  thumbnail: ""                    // optional — filename in images/Publications/
},
```

Each publication now shows a small thumbnail square. Leave `thumbnail` unset for a plain placeholder icon, or set it to a filename in `images/Publications/` for a real image (e.g. a graphical abstract crop or journal cover). You can also add one from the Site Editor: hover a publication's thumbnail square on the Publications tab and click **📷** to upload an image — the confirmation tells you the exact filename to paste into this field to make it permanent (see "Which tiles/cards can be deleted from the editor" below for why that extra step is needed).

### Updating team members

Open `data/team.js` and add an entry to the `TEAM` array (this one file updates both the homepage's "The Team" preview and the full grid on `people.html`):

```js
{
  name: "Dr. Alice Brown",
  role: "Research Fellow",
  photo: "",                       // filename in images/Headshots/, or "" for initials
  initials: "AB",
  color: "linear-gradient(135deg,#5bb8e8,#1a3a5c)"
},
```

To add an open position instead of a real member:
```js
{ open: true, role: "Postdoc Position Open", linkText: "Apply now →", link: "index.html#contact" },
```

### Updating alumni & collaborators

Open `data/alumni.js` — add to the `ALUMNI` array (`name`, `level`: `"Postdoc"`/`"PhD"`/`"Masters"`/`"Bachelor"`, `focus`, `position`, optional `institution`) or the `COLLABORATORS` array (`name`, `institution`, `topic`). Alumni are ranked by seniority automatically, so you don't need to insert them in any particular order.

### Changing contact details

Edit the contact section in `index.html` — search for `ice.group@sydney.edu.au` and the address block.

---

## Tech stack

- Plain HTML + CSS + vanilla JS — no build step, no framework.
- Google Fonts (Playfair Display + DM Sans) loaded via CDN.
- Works offline after first load (fonts cached by browser).
- GitHub Actions deploys via the official `actions/deploy-pages` action.

---

## News system

Edit `data/news.js` to add items. Each entry has:

```js
{
  date:     "2025-06-15",        // YYYY-MM-DD
  tag:      "Publication",       // Publication | Award | Grant | Recruitment | Event | Milestone | Welcome
  title:    "Paper title...",
  body:     "Short description.",
  link:     "https://doi.org/...",  // or "" for none
  linkText: "Read paper",            // label for the link
  image:    "2025-paper.jpg",        // filename in images/news/, or ""
}
```

Add new items at the **top** of the array (newest first).

---

## Photo gallery

1. Place image files in `images/photos/`
2. Add an entry to `data/photos.js`:

```js
{
  file:     "2025-group-photo.jpg",
  caption:  "ICE Group photo, University of Sydney, 2025",
  year:     2025,
  category: "group",    // group | lab | event | conference
  wide:     true,       // true = spans full width (good for panoramas)
  tall:     false,      // true = taller tile (good for portrait shots)
}
```

Photos are automatically sorted by year on the page. You can also replace an existing photo's image file directly from the Site Editor — hover the tile and click 📷 to pick a new file; since the tile already links to a real saved file, Save will overwrite that exact file in place (same filename) rather than leaving the old one behind. (This works the same way for avatar headshots and the hero banner — see below.)

---

## Gallery & Abstracts pages

- **gallery.html** — a mosaic of image tiles, each optionally linking out to a paper, dataset, or video. Tile data lives in **`data/gallery.js`** (the `GALLERY` array) — edit that file to add, remove, reorder, or resize tiles; `gallery.html` itself just renders it. Each entry supports:
  - `file` — filename in `images/Gallery/` (leave `""` for a placeholder tile with an icon)
  - `caption`, `link`, `category`, `icon`
  - `size` — `"small"`, `"medium"`, or `"large"` (see `GALLERY_SIZES` at the bottom of `data/gallery.js` to change what each size means, e.g. width/height).
- **abstracts.html** — a list of graphical-abstract cards (image + text) for selected publications. Entry data lives in **`data/abstracts.js`** (the `ABSTRACTS` array) — edit that file to add, remove, or reorder entries. Each entry supports `file` (filename in `images/Abstracts/`, or `""` for a placeholder), `icon`, `journal`, `title`, `authors`, `text`, and `link`.

Both pages are also viewable and lightly editable (text, tile photos, layout position) directly through the Site Editor (`editor.html`) — tabs "🖼 Gallery" and "📄 Abstracts" are in the top bar — but adding, removing, resizing, or reordering *entries* is done in their `data/*.js` file, same as Publications, News, and Photos, so those changes are never lost when the page reloads.

---

## The Team (Home & People)

The "The Team" grid — the small preview on the homepage AND the full grid on the People page — is rendered from **one shared file, `data/team.js`** (the `TEAM` array). Edit that file once and both pages update together. Each entry is either a real member (`name`, `role`, optional `photo` in `images/Headshots/` or `initials`/`color` for a plain avatar, `lead: true` for the group leader) or an open position (`open: true`, `role`, `linkText`, `link`).

---

## Alumni & Collaborators

`alumni.html` is fully data-driven from **`data/alumni.js`**:

- **Alumni** — one flowing grid (no more separate Postdoc / PhD / Masters / Bachelor sections, and no institution grouping). Every entry in the `ALUMNI` array just needs `name`, `level` (`"Postdoc"`, `"PhD"`, `"Masters"`, or `"Bachelor"`), `focus` (research focus / thesis / dissertation / project topic), `position` (where they are now), and optionally `institution`. The page **automatically ranks everyone by seniority** — Postdocs, then PhD, then Masters, then Bachelor — no matter what order the entries are listed in the file (you can keep adding them in date order for your own bookkeeping). The stats strip at the top of the page (postdocs supervised, PhD students, etc.) is also computed live from this same array.
- **Collaborators** — a single grid rendered from the `COLLABORATORS` array (`name`, `institution`, `topic`).

---

## Editor features (editor.html)

**Navigation order:** Research, Abstracts, Gallery, Publications, People, Alumni, News, Photos, Join Us.

**Image folders** — every upload destination is pre-created automatically the moment the server starts, even before you upload anything: `images/Home/`, `images/News/`, `images/People/`, `images/Publications/`, `images/Alumni/`, `images/Photos/`, `images/Gallery/`, `images/Abstracts/`, and `images/Headshots/` (for avatar photos specifically, regardless of which page the avatar is on).

**Buttons stay within the object they control** — every hover control (move ✥, delete ✕, camera 📷, crop ✂, resize ⇲) is positioned just inside the edge of its element rather than straddling the edge, so it's never clipped by a tile or hero's rounded corners/`overflow:hidden` and never overlaps neighbouring content.

**Which tiles/cards can be deleted from the editor:** any tile or card that is *populated from a `data/*.js` file* — Gallery, Photos, News, Publications, Abstracts, the Team grid, Alumni, and Collaborators — is edited by editing that data file; deleting isn't offered in the editor for these, since a data-driven grid re-renders itself from the array on every page load and would silently undo an editor-only delete. (Every card/tile on the site is data-driven at this point — if you ever hand-author a new card section directly in a page's HTML instead, it can be made deletable in the editor the same way the others used to be; ask for that if you need it.)

- **Gallery / Photos / News tiles** — every tile in these three grids can be moved and have its photo added/replaced/cropped, with directly-editable captions. To add, remove, resize, or reorder tiles, edit `data/gallery.js`, `data/photos.js`, or `data/news.js` respectively.
  - **Move** — hover a tile and drag its **✥** handle; it snaps into place among the other tiles as you drag (pull-and-snap), just like reordering nav links.
  - **Caption** — click directly on a tile's caption/title text to edit it.
  - **Add / replace photo** — hover a tile and click the **📷** button (or drop an image file straight onto the tile) to set or swap its photo — works on both placeholder tiles and tiles that already have a photo. Saved to `images/Gallery/`, `images/Photos/`, or `images/News/` respectively. If the tile already had a real photo, saving **replaces that exact file** rather than uploading the new one under a different name and leaving the old one behind.
  - **Crop photo** — once a tile has a photo, hover it and click the **✂** button to open the crop tool: drag the selection box to move it, drag its corner to resize it, then **Apply crop**. A crop always saves as a new file (it's a derivative of the original, not a replacement of it).
- **Publications thumbnails** — every publication now has a small thumbnail square. Hover it and click **📷** to upload an image (or **✂** to crop one that's set). Since Publications entries come from `data/publications.js`, the upload is a same-session preview — the confirmation toast gives you the exact filename to paste into that entry's `thumbnail` field to make it permanent (see `data/publications.js`'s header comment for the field format).

The site is organised into three conceptual layers, just like Wix: a shared **header** (logo, "ICE Group", "University of Sydney", nav links), a per-page **body** (everything specific to that page), and a shared **footer** (copyright line, visitor counter, "The University of Sydney"). Header and footer content is kept identical across every page automatically — see below.

- **Click any text** to edit it directly, with a floating toolbar for font, size, bold/italic/underline, colour, and alignment.
- **Move** — hover any text block, image, or the phase-diagram schematic to reveal a blue **✥** handle in its top-left corner. Click and drag it to reposition the element freely.
- **Delete** — hover any element to reveal a red **✕** in its top-right corner. Click it to remove the element instantly.
- **Undo** — click **↩ Undo** in the top bar, or press **Ctrl+Z** (Cmd+Z on Mac) anywhere on the page, to step back through your last actions (edits, moves, deletes, crops, resizes, image inserts, nav reorders).
- **🔗 Link** — select text or click an image, then click Link to add a hyperlink (opens in a new tab). **🔗✕ Unlink** removes it.
- **🖼 Insert image / drag-and-drop** — click the toolbar button, or simply drag a `.png`/`.jpg`/`.gif` file from your computer and drop it anywhere on the page — it's placed exactly where you release the mouse. Works on every page.
  - **Resize** — every freely-inserted or dropped image (on every page) gets a small **⇲** grip in its bottom-right corner. Drag it to make the image bigger or smaller, in either direction — there's no upper limit other than 95% of your screen width, so you can freely enlarge an image, not just shrink it. Resizing only ever changes the image's width; height always follows automatically from the picture's real aspect ratio, so it's never stretched or squashed. Undo-able with **Ctrl+Z** right after resizing. (Gallery/Photos/News grid tiles keep their own separate free-form resize, since a tile's box shape is an intentional part of the mosaic layout, independent of the photo's own aspect ratio.)
  - **Crop** — hover any image and click the small **✂** button that appears next to its move/delete/resize handles to open the crop tool: drag the selection box to reposition it and drag its corner handle to resize it, then click **✓ Apply crop**. The cropped result becomes the image's new content (undo-able).
  - When you click **Save page**, any dropped or cropped images are automatically written to **`images/<Tab>/`** (e.g. `images/Publications/`, `images/Abstracts/`, `images/Gallery/`) — matching whichever page tab you were on when you added them — in their original format (PNG stays PNG, JPG stays JPG, GIF stays GIF; crops are saved as PNG, since a crop takes a single still frame). The saved HTML references that real file instead of an embedded copy.
- **Header / nav editing** — the logo, "ICE Group", "University of Sydney", and each nav link (Research, People, Gallery, Abstracts, etc.) are all individually editable, movable, and deletable. Dragging a nav link's move handle left/right **live-reorders** it among the other links with a "pull and snap" motion — release the mouse to lock in the new order.
- **Hero banner image (every page)** — every page's hero section (the dark banner at the top) can have its plain gradient background replaced with a real photo or an **animated GIF**. Two ways to set one:
  - Click **🏞 Hero image** in the main toolbar (next to "Insert image") — always visible, works on whichever page tab is currently open.
  - Or hover the top-right corner of the hero itself for **🖼** (upload), **✂** (crop — always saves as a still PNG, since a crop needs one fixed frame; the un-cropped original stays animated), and **✕** (remove, restoring the plain gradient). You can also just drag an image/GIF file straight onto the hero.
  - A dark tint is automatically layered over the image so the white hero heading/text stays readable regardless of how bright the photo or GIF is. Saved to `images/<Tab>/` on **Save page** — replacing the existing hero image in place if one was already set, same as tile/avatar photos. Undo-able with **Ctrl+Z**.
- **Schematic diagram** — the gas/liquid/solid phase diagram on the homepage (and any inline SVG graphic on any page) can now be moved and deleted the same way as images.
- **Avatar spheres (PI / PD / PhD / initials)** — every circular avatar on the People, Home, and Alumni pages is editable: click to edit the initials text directly, hover and click the small **📷** button (or drag a photo file straight onto the sphere) to replace the initials with a real headshot, hover and click **✂** to crop a headshot that's already set, or hover and drag the **✥** handle to reposition the whole sphere. Uploaded headshots are always saved to **`images/Headshots/`**, regardless of which page they're on — replacing the existing headshot file in place if one was already set.
- **Undo works for moves, resizes, and crops too** — repositioning any image, the SVG schematic, an avatar sphere, or the logo (via its ✥ handle, or Alt+drag), resizing any freely-inserted image, and cropping any image, hero banner, or headshot, are all undo-able. Press **Ctrl+Z** or click **↩ Undo** right after to step back.
- **👁 Preview** — opens the current page in a new tab exactly as a visitor would see it, with no editor toolbar, handles, or outlines — including any unsaved edits. Requires the local server to be running (so styling and images resolve correctly).
- **Visitor counter** — a live visitor-count badge sits in the footer of every page (powered by a free external counting service, no backend needed). It isn't editable/movable — it's a fixed, permanent element like the copyright line.
- **💾 Save page — global header/footer sync** — clicking Save does three things:
  1. Writes the current page to disk (e.g. `index.html`), including its full styling and any uploaded images.
  2. **Automatically copies the header (logo/nav links) and footer (copyright + visitor badge) to all 7 other pages**, adjusting each nav link's URL to be correct for that page (e.g. "Research" points to `#research` on the homepage but `index.html#research` everywhere else). This means editing the header or footer on *any* page — renaming a link, reordering the nav, editing the copyright text — updates the *entire site* in one click, just like a Wix global header/footer.
  3. Updates the editor's own top tab labels (People / Publications / Alumni / etc.) to match any renamed nav link, so the editor stays in sync with your changes.
  - A toast confirms how many other pages were synced (e.g. *"✓ Header & footer synced to 7 other pages"*).
