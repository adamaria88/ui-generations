# Registry: Paperverse ↔ Aurora (gap & drift)

Registry TIPIS. Cuma catat 2 hal: (a) komponen Paperverse yang belum masuk Aurora, (b) beda nilai (drift) yang ketemu saat live-pull. Update opportunistik pas nemu — bukan re-catalog penuh. Aturan sumber: [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

File Figma Paperverse: `KjmdMheQSYqqJoKyniNMnB` (library `⭐ Paperverse 1.0`).

## (a) Komponen Paperverse belum di Aurora (pending dev)

| Komponen | Status | Catatan |
|---|---|---|
| **Push Notification / Alt A** (Minimal toast) | ✅ Generated 2026-07-02, page `🔔 Push Notification` (set `8443:1971` + guideline `8445:995`) | Komponen BARU (via /component-explorer). Dirakit 100% dari piece DS: tombol **tertiary** (instance), icon severity (instance invoice/check/alert/shield + x-close), token warna/text/`Shadow Neutral-01`. 4 severity variant + 5 boolean prop. Overlap konsep sama Aurora **Toast** — perlu keputusan tim: jadiin varian Toast atau komponen sendiri. Belum di katalog Aurora → pending dev. |
| **Selection Block** + **Selection Group** (varian Radio Button / Alt A Outline) | ✅ Generated 2026-07-07 (v3), page `🔘 Radio Button`: **Selection Block** set `8525:276822` · **Selection Group** set `8526:1496` · guideline `8535:1228` | Komponen BARU (via /component-explorer). **Selection Block** (kartu): komposisi surface card + Radio-Box dot (`_Radio/Options/Radio-Box`) + teks generic. **4 State** (Default/**Hover**/Selected/Disabled) · **SLOT** `Leading`+`Trailing` (real `addComponentProperty('SLOT')`, konten bebas — survive combine) · **TEXT** `Title`+`Description` (default generic) · **BOOLEAN** `Show Badge`+`Show Description` · **INSTANCE_SWAP** `Badge` (default **Chip Status** `1226:130099` Outline/Blue). **Selection Group**: variant `Number of Cards` **2–8** (pola DS `Chips`), tiap kartu = **nested instance** Selection Block. Warna bind 100% `semantic` (audit tree-walk lolos). **Radio biasa** = komponen `Radio Button` (`8493:29916`) existing, di-instance. Belum di Aurora → pending dev. (v1/v2 lama sudah dihapus.) |

## (b) Drift / beda nilai yang ketemu

| Item | Paperverse (design) | Aurora / catatan | Ikut |
|---|---|---|---|
| Shadow card/dropdown/dialog | ✅ RESOLVED 2026-07-01 | Disimpan sbg **Effect Styles** (bukan variable): `Shadow Neutral-01` = kartu, `table/option` = dropdown. Lihat `aurora-tokens.md` Shadow. | — |

## Catatan penting (bukan drift, tapi gampang salah)

- **Warning = ORANGE `#f37d51`, Caution = YELLOW `#eab11c`.** Beda token. Detail: [`aurora-tokens.md`](aurora-tokens.md) State Colors.
- Semantic color (action/state/border/focus) udah resolved ke hex di `aurora-tokens.md` (verifikasi 2026-07-01 dari Figma Variables collection `semantic`).
