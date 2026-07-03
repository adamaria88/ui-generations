# Registry: Paperverse ↔ Aurora (gap & drift)

Registry TIPIS. Cuma catat 2 hal: (a) komponen Paperverse yang belum masuk Aurora, (b) beda nilai (drift) yang ketemu saat live-pull. Update opportunistik pas nemu — bukan re-catalog penuh. Aturan sumber: [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

File Figma Paperverse: `KjmdMheQSYqqJoKyniNMnB` (library `⭐ Paperverse 1.0`).

## (a) Komponen Paperverse belum di Aurora (pending dev)

| Komponen | Status | Catatan |
|---|---|---|
| **Push Notification / Alt A** (Minimal toast) | ✅ Generated 2026-07-02, page `🔔 Push Notification` (set `8443:1971` + guideline `8445:995`) | Komponen BARU (via /component-explorer). Dirakit 100% dari piece DS: tombol **tertiary** (instance), icon severity (instance invoice/check/alert/shield + x-close), token warna/text/`Shadow Neutral-01`. 4 severity variant + 5 boolean prop. Overlap konsep sama Aurora **Toast** — perlu keputusan tim: jadiin varian Toast atau komponen sendiri. Belum di katalog Aurora → pending dev. |

## (b) Drift / beda nilai yang ketemu

| Item | Paperverse (design) | Aurora / catatan | Ikut |
|---|---|---|---|
| Shadow card/dropdown/dialog | ✅ RESOLVED 2026-07-01 | Disimpan sbg **Effect Styles** (bukan variable): `Shadow Neutral-01` = kartu, `table/option` = dropdown. Lihat `aurora-tokens.md` Shadow. | — |

## Catatan penting (bukan drift, tapi gampang salah)

- **Warning = ORANGE `#f37d51`, Caution = YELLOW `#eab11c`.** Beda token. Detail: [`aurora-tokens.md`](aurora-tokens.md) State Colors.
- Semantic color (action/state/border/focus) udah resolved ke hex di `aurora-tokens.md` (verifikasi 2026-07-01 dari Figma Variables collection `semantic`).
