#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo " Starting ICE Group Editor Server..."
echo " Open Chrome and go to: http://localhost:8000/editor.html"
echo ""
python3 server.py
