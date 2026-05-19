# Figma Pipeline (HTML prototype → Figma)

Dipakai di Langkah 8 skill `senior-uiux-designer` — HANYA kalau user minta.

## Sekali setup
`npm install` di folder ini (butuh `puppeteer-core`, pakai Chrome sistem).

## Jalankan
```bash
node html-to-figma.mjs "<abs-path>/_output/<slug>/02-ui.figma.html" --width=1440 --height=900
```
- WAJIB file UI **bersih tanpa comment-overlay** (overlay → 0 layer).
- Output JSON: `../figma-export/<nama>.json` (= `senior-uiux/figma-export/`).
- Server lokal di `http://localhost:3333` (biarkan jalan saat import).

## Import ke Figma (sekali setup plugin)
Figma Desktop → Plugins → Development → Import plugin from manifest →
pilih `figma-plugin/manifest.json` → run "HTML to Figma (Aurora)" →
"Import from Server" (atau paste isi JSON di tab "Paste JSON"). Ctrl+C stop server.

Alternatif: Figma MCP (`/figma-*`) bikin file langsung tanpa plugin.
