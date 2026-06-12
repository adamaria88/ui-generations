---
name: strategy-figma-sync
description: "Strategi bridging gap antara HTML prototype Senior vs production Figma — diputuskan, belum diimplementasi"
metadata: 
  node_type: memory
  type: project
  originSessionId: f456c60c-5cf2-4ebc-88b6-5121fd69c661
---

Concern: UI yang Senior generate tidak selalu match dengan production Figma karena local DS (`senior-uiux/ds/`) bisa drift dari Figma yang sebenarnya.

**Keputusan strategi (A scoped + B sekali):**

1. **Sync `aurora-tokens.md` dari Figma variables** — jalankan sekali pakai Figma MCP `get_variable_defs`, update file lokal. Ini yang paling impactful karena nilai token yang drift paling sering bikin beda.

2. **Pertegas pipeline.md Langkah 2** — fetch Figma screenshot **wajib** (bukan opsional) kalau Senior mengerjakan modifikasi layar yang sudah ada. Ini sudah ada di pipeline tapi belum cukup tegas.

3. **C (post-generate diff) = skip dulu** — overhead tinggi, pending sampai pipeline mature.

**Next action:**
- Minta user kasih file Figma / library Aurora yang mana untuk `get_variable_defs`
- Update local `aurora-tokens.md` dari hasil itu
- Update wording pipeline.md Langkah 2 step 3 jadi wajib

**Why:** Local copy DS bisa stale; production Figma adalah source of truth sesungguhnya.
**How to apply:** Sebelum lanjut ke tes brief beneran, selesaikan sync token ini dulu agar Senior punya base yang benar.
