#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
APP_DIR="$ROOT_DIR/build/LifeOps.app"
CONTENTS_DIR="$APP_DIR/Contents"
MACOS_DIR="$CONTENTS_DIR/MacOS"
RESOURCES_DIR="$CONTENTS_DIR/Resources"

mkdir -p "$MACOS_DIR" "$RESOURCES_DIR"

swiftc \
  "$ROOT_DIR/macos/LifeOpsApp/main.swift" \
  -o "$MACOS_DIR/LifeOps" \
  -framework Cocoa \
  -framework WebKit

cp "$ROOT_DIR/macos/LifeOpsApp/Info.plist" "$CONTENTS_DIR/Info.plist"
cp "$ROOT_DIR/index.html" "$RESOURCES_DIR/index.html"
cp "$ROOT_DIR/styles.css" "$RESOURCES_DIR/styles.css"
cp "$ROOT_DIR/app.js" "$RESOURCES_DIR/app.js"

echo "Built $APP_DIR"
