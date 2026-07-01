# Registry: Paperverse ↔ Aurora (gap & drift)

Registry TIPIS. Cuma catat 2 hal: (a) komponen Paperverse yang belum masuk Aurora, (b) beda nilai (drift) yang ketemu saat live-pull. Update opportunistik pas nemu — bukan re-catalog penuh. Aturan sumber: [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

File Figma Paperverse: `KjmdMheQSYqqJoKyniNMnB` (library `⭐ Paperverse 1.0`).

## (a) Komponen Paperverse belum di Aurora (pending dev)

| Komponen | Status | Catatan |
|---|---|---|
| Push Notification (Alt B) | Dibuat sesi 2026-07-01 di page `🔔 Push Notification` | Overlap sama Aurora **Toast** (yg udah punya title/subtitle/icon/closeButton/progressBar/action). Perlu keputusan: jadiin varian Toast atau komponen baru. Belum ada di katalog Aurora. |
| Notification / Severity Icon | Sub-component, 4 varian | Nested di Push Notification. Belum di Aurora. |

## (b) Drift / beda nilai yang ketemu

| Item | Paperverse (design) | Aurora / catatan | Ikut |
|---|---|---|---|
| Shadow card/dropdown/dialog | belum keresolve sbg variable | Kemungkinan Effect Style, bukan variable. Button shadow ADA (`shade/button/color`). | Perlu cek Effect Styles sebelum dipakai — jangan ngarang |

## Catatan penting (bukan drift, tapi gampang salah)

- **Warning = ORANGE `#f37d51`, Caution = YELLOW `#eab11c`.** Beda token. Detail: [`aurora-tokens.md`](aurora-tokens.md) State Colors.
- Semantic color (action/state/border/focus) udah resolved ke hex di `aurora-tokens.md` (verifikasi 2026-07-01 dari Figma Variables collection `semantic`).
