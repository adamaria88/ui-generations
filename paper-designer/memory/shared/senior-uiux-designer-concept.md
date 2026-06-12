---
name: senior-uiux-designer-concept
description: "Tujuan project ui-generations — membangun 1 agent Paper Designer (sebelumnya Senior UIUX Designer)"
metadata: 
  node_type: memory
  type: project
  originSessionId: f456c60c-5cf2-4ebc-88b6-5121fd69c661
---

Project `ui-generations` bertujuan membangun **1 skill/agent "Paper Designer"**: user paste brief → output UI/UX proper dari Design System Aurora (Paper.id), tanpa form/interogasi brief.

> ⚠️ Nama lama: "Senior UIUX Designer". Diganti jadi **Paper Designer** per 2026-05-19.

Desain lengkap (14 dasar, pipeline 8 langkah) ada di `_bmad-output/brainstorming/brainstorming-session-2026-05-18-1605.md`.

**STATUS (per 2026-05-19): skill SUDAH dibangun & berfungsi, semua tooling lengkap.**
- Skill: `.claude/skills/senior-uiux-designer/` (`SKILL.md`, `pipeline.md`). Folder skill fisik tidak berubah, nama skill = `paper-designer`.
- Data & rules di `paper-designer/` (sebelumnya `senior-uiux/`): rules, ds, components, assets, figma-pipeline, **patterns/**, **style-learner/**.
- Sumber Aurora asli: `/Users/working/aurora/projects/ui/`.
- Flow doc: dark + grid kotak + diamond decision + fork kiri-kanan + kanvas pan/zoom; `<body data-suxc="flow">`.
- `comment-overlay.html` — 2 mode via `data-suxc`:
  - `flow`: kanvas pan/zoom + full nav bar bawah + komen aktif.
  - `prototype` (default): web natural — scroll biasa, 1 FAB draggable → 💬 Komen, ☰ List, ↑ Submit, ⬙ Generate Figma.
- Generate Figma (in-browser): klik ⬙ di FAB → skip `suxc-*` → download `.figma.json`.
- Figma plugin: `paper-designer/figma-pipeline/figma-plugin/manifest.json`.
- Node script backup: `paper-designer/figma-pipeline/html-to-figma.mjs`.
- **ATURAN: JANGAN hand-edit file output — overlay auto-menyesuaikan dari `data-suxc`.**
- BELUM dilakukan: tes end-to-end pakai brief produk nyata.

Inti:
- Sosok tunggal; party mode + agent BMAD = mesin internal tak terlihat.
- DS = hukum mati; sumber asli = repo Aurora. Butuh komponen baru → STOP.
- Alur: brief → "Cepet/Mateng" → benchmark → HTML flow → sepakat → HTML UI prototype → sepakat → selesai. Figma = opsional.
- Ukuran sukses: "HTML sesuai yang user bayangkan?".

**Why:** Konteks arah produk. **How to apply:** Jangan reintroduksi form pertanyaan brief. Lihat [[user-prefers-plain-indonesian]] dan [[style-learner-agent]].
