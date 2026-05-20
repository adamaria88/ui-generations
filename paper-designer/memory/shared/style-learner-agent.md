---
name: style-learner-agent
description: Agent yang fetch Figma production → ekstrak pola UI → simpan ke paper-designer/patterns/ supaya Paper Designer generate prototype yang konsisten
metadata: 
  node_type: memory
  type: project
  originSessionId: f456c60c-5cf2-4ebc-88b6-5121fd69c661
---

## Style Learner Agent

**Tujuan:** belajar pola UI production Paper.id dari Figma → dokumentasi terstruktur → Paper Designer baca patterns sebelum generate modifikasi screen lama → output lebih konsisten dengan production.

**Workflow file:** `paper-designer/style-learner/workflow.md`  
**Output dir:** `paper-designer/patterns/<module>-<screen-slug>.md`  
**Registry sumber:** `paper-designer/rules/page-registry.md`

### Cara Pakai

**Di chat baru (on-demand):**
Ketik ke Paper Designer: *"sebelum generate, scan dulu [nama screen] dari Figma"*
→ Paper Designer spawn sub-agent baca `paper-designer/style-learner/workflow.md`
→ sub-agent fetch Figma → buat file di `patterns/`
→ Paper Designer lanjut generate pakai data itu.

**Atau manual:** spawn Agent baru, kasih prompt:
> "Baca `paper-designer/style-learner/workflow.md` di `/Users/working/ui-generations`, lalu fetch screen [nama] dari Figma (fileKey + nodeId ada di `paper-designer/rules/page-registry.md`). Simpan hasilnya ke `paper-designer/patterns/`."

### Integrasi Pipeline
`pipeline.md` Langkah 2 sudah diupdate:
- Modifikasi screen lama → cek `paper-designer/patterns/<slug>.md`
- Kalau ada → baca langsung
- Kalau belum ada → spawn style-learner → tunggu → lanjut generate

### Pattern Files Yang Sudah Ada
- `paper-designer/patterns/sales-invoice-list.md` — List Invoice Penjualan (fetch 2026-05-19)

### Gap yang Perlu Diperhatikan
Figma di `page-registry.md` bisa stale vs production. Pattern file mencatat gap ini eksplisit.
Selalu percayai catatan "Production saat ini" di pattern file > Figma node lama.

**Why:** Gap prototype vs production terjadi karena Paper Designer tidak punya referensi pola yang cukup detail. Style learner isi gap itu.
**How to apply:** Sebelum generate modifikasi screen yang sudah ada, pastikan pattern file tersedia. Kalau belum ada, minta user konfirmasi atau jalankan style-learner dulu.
