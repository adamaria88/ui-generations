# Paperverse = Sumber Kebenaran Desain (live-pull, bukan cache)

Dikunci user 2026-07-01 (designer tim Design System). Ini **mempertegas** [[aurora-lookup-ritual]] dengan model sumber yang benar.

## Beda Aurora vs Paperverse (JANGAN dicampur)

| | Paperverse 1.0 (Figma) | Aurora (code) |
|---|---|---|
| Punya siapa | **Designer** (worksheet) | Tim **tech** |
| Fungsi | Sumber komponen saat MENDESAIN | Implementasi yang beneran ke-ship |
| Isi | Ada komponen yang belum masuk Aurora | Subset yang udah di-develop |
| File Figma | `KjmdMheQSYqqJoKyniNMnB` (library `⭐ Paperverse 1.0`) | — (repo tech) |

**Sumber kebenaran DESAIN = Paperverse.** Aurora = reality check (yang ke-ship).

## Aturan inti (lock)

1. **Tiap bikin komponen baru → AMBIL LIVE dari Paperverse via Figma MCP.** Import komponen aslinya + resolve variable-nya. **JANGAN rakit dari ingatan atau dari file `.md` cache.**
2. **File `aurora-tokens.md` / `aurora-components.md` = cache/fallback, BUKAN truth.** Boleh buat quick-reference, tapi nilai kritis (warna, ukuran, shadow) WAJIB diverifikasi ke Paperverse live. Cache bisa basi.
3. **Jangan bikin salinan statik penuh Paperverse.** Salinan = sumber ketiga yang pasti drift. Live-pull menang.
4. **Kalau Paperverse beda dari Aurora (drift) → ikut Paperverse (design intent), FLAG "shipped beda: X".** (Keputusan user 2026-07-01.)
5. **Komponen ada di Paperverse tapi belum di Aurora → pakai, catat ke registry** `paper-designer/ds/paperverse-vs-aurora.md` sebagai "pending dev". Bukan alasan STOP.
6. **Komponen nggak ada di Paperverse DAN nggak ada di Aurora → STOP + pembelaan** (HUKUM MATI #2 tetap berlaku).

## Cara live-pull (terbukti works, sesi 2026-07-01)

- Cari komponen: `search_design_system(fileKey, query)` → dapat `componentKey` + `filePath`.
- Import + baca struktur: plugin `figma.importComponentByKeyAsync(componentKey)` → node asli.
- Resolve variable ke hex: `get_variable_defs(nodeId)` **ATAU** dalam plugin `figma.variables.getVariableByIdAsync(id)` + `valuesByMode` (follow `VARIABLE_ALIAS`). Cara plugin bisa enumerate SEMUA variable lokal (`getLocalVariablesAsync('COLOR')`) — paling lengkap.
- ⚠️ `search_design_system` cuma kasih NAMA token, bukan hex. Buat hex WAJIB resolve via variable API.

## GENERATE KOMPONEN — mekanisme keras (lock 2026-07-01, khusus komponen)

Ini KHUSUS saat generate/registrasi komponen (bukan full-page prototype). Tujuan: 100% match DS, "ngarang nilai" mustahil lolos.

**1. Komponen yang UDAH ADA → WAJIB instance/extract, DILARANG rebuild manual.**
- **Figma**: pakai `createInstance()` dari komponen Paperverse asli. **DILARANG** bikin frame/lookalike pakai tangan. Instance = 100% match by construction.
- **HTML/code**: extract nilai via MCP (`get_variable_defs`/`get_design_context`), pakai **verbatim**. DILARANG ngetik hex/ukuran dari ingatan.

**2. Komponen BARU (belum ada) → susun cuma dari potongan existing** (tiap potongan = instance/extract). Yang bener-bener nggak ada → STOP + approval user. 0 elemen invented.

**3. Sebelum setor komponen HTML → WAJIB lolos diff-audit:**
```
node paper-designer/tools/component-audit.mjs <file.html>
```
Exit 1 (ada hex di luar Aurora / font non-Lato) = **DILARANG setor**, perbaiki dulu. Allowlist warna auto dari `aurora-tokens.md`. Ini gerbang mesin, bukan "inget ngecek".

**4. Batas yang tetap butuh user:** mesin jamin *nilai* 100% match; mesin nggak bisa jamin *pilihan komponen* & *copy* bener. Itu ketutup approval user di gerbang mapping (bawah). Rumus: **instance/extract + diff-audit + 1 approval mapping = 100%.**

## Gerbang wajib sebelum ngoding (Aurora/Paperverse Component Mapping)

Sebelum nulis kode/build komponen, bikin tabel ini dulu, share ke user, approve BARU eksekusi:

| UI Need | Komponen Paperverse | Variable/token + nilai asli | Ada di Aurora? | Drift? |
|---|---|---|---|---|

Efek: salah ketauan di tabel (murah) sebelum jadi hasil (mahal). Ini yang mencegah "diam-diam approksimasi".

**Why:** Sesi 2026-07-01 — user (designer DS) klarifikasi Aurora ≠ Paperverse. Inkonsistensi selama ini karena AI ngerakit dari ingatan + nyampur dua sumber. Prioritas user: (1) nggak ada komponen ketinggalan, (2) nggak ada hasil inkonsisten. Live-pull dari Paperverse memenuhi dua-duanya; salinan statik justru melanggar dua-duanya.

**How to apply:** Setiap komponen baru → gerbang mapping → live-pull Paperverse → build → flag drift. Lihat [[aurora-lookup-ritual]] (4 mekanisme M1-M4) dan [[prototyping-gap-lessons]].
