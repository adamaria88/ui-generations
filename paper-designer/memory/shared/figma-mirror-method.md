---
name: figma-mirror-method
description: "SOP reproduksi screen Figma jadi HTML dengan fidelity maksimal — baca dari node tree + copas aset, jangan rekonstruksi dari pixel. Prinsip kedua: tiap nilai/isi dari node screen INI, bukan dari reuse/preseden. Tervalidasi SI Invoice (2026-06-09) + Invoice List (2026-06-12)."
metadata:
  node_type: memory
  type: project
---

# Figma → HTML Mirror Method (SOP)

> **Kapan dipakai (LAZY trigger):** user share link Figma + minta direproduksi jadi HTML ("implement screen ini", "bikin mirip Figma ini", "ubah file existing yang ada di Figma"). Bukan untuk brief baru tanpa Figma acuan.

## Prinsip inti (1 kalimat)

> **Baca dari node tree + copas aset. JANGAN rekonstruksi dari pixel.**
> Pixel = *tampilan* (bisa ditebak mata). Tree = *struktur* (HARUS dibaca, mustahil ditebak benar).

> **Prinsip kedua (lock 2026-06-12): tiap NILAI & ISI dari node screen INI — bukan dari yang udah lo punya.**
> Sumber error paling licik = **REUSE & preseden bawa asumsi basi.** Komponen canonical, CSS screen sebelumnya, scaffolding sendiri — semua "yang udah ada" itu **titik MULAI, bukan kebenaran.** Tiap reuse/carry-over WAJIB di-diff balik ke node ini. (Bedah Invoice List 2026-06-12: SEMUA error = nilai diwarisi, bukan dibaca.)

## Kenapa — model leak deterministik

Leak (hasil nggak mirip) itu **BUKAN acak**. Bisa diprediksi tepat: muncul **persis di mana struktur ditebak dari gambar, bukan dibaca dari tree.**

Screenshot itu gambar pipih (raster) — dia rekam tampilan tapi **buang 5 hal** yang cuma ada di node tree:

| Yang ilang di screenshot | Akibat kalau ditebak | Jenis leak |
|---|---|---|
| 1. Hierarki frame / grup baris | salah baris/grouping | **posisi** |
| 2. Koordinat persis (x/y) | spacing meleset | **nilai** |
| 3. Identitas komponen + variant | ikon/komponen ngarang | **ikon** |
| 4. Layer hidden/kondisional | render yang harusnya disembunyiin | **konten** |
| 5. Mana nilai yang token | warna/ukuran kira-kira | **nilai** |

**Bukti empiris (SI Invoice, 2026-06-09):** blok yang ditarik datanya (header/meta/tabel) = NOL leak. Blok yang di-eyeball (sub-header/totals/ttd/shell) = salah posisi + ikon ngarang. Leak ngumpul 100% di blok yang skip metode.

**Bukti empiris #2 (Invoice List, 2026-06-12):** SEMUA error = nilai/isi **diwarisi dari reuse/preseden**, bukan dibaca dari node ini → bg `#EEF1F4` vs `#F8FBFE` (S12), sidemenu+nav-header isi default canonical beda dari node (S11), menu off-canvas + note debug nangkring di layar (S13). Pola tunggal: reuse & preseden bawa asumsi basi. Semua ketangkep **cuma via banding mekanis + sampling pixel**, bukan mata.

## Alur — PER BLOK, bukan per screen

**0. Decompose (chunking).** Baca frame tree → pecah screen jadi blok logis. Kerja **per-blok**, jangan sekaligus se-screen.
- Alasan teknis (bukan cuma rapi): node se-screen bikin `get_metadata` / `get_design_context` **truncate** (SI = ~106k char → ke-save ke file). Per-blok kecil = data muat utuh = nol konten ilang (nutup leak L1).

**0.5. Inventory DS DULU — WAJIB sebelum build apapun (cara kerja front-end).** Sebelum nulis 1 baris HTML, **cek dulu apa yang udah ADA** — di DUA level:
  - **Komponen utuh** → `ls paper-designer/components/` (sidemenu, nav-header, dst) + cek Aurora. Kalau komponennya **udah ada → REUSE, jangan rebuild.** (sesuaikan cuma datanya ke node yang di-share).
  - **⚠️ REUSE ≠ pakai mentah. REUSE = pakai SHELL/CSS-nya, TAPI ISI WAJIB di-diff ke node ini.** Komponen canonical bawa konten DEFAULT (menu items, urutan, teks, ikon, active, badge, promo widget) dari screen LAIN. Tiap reuse: tarik isi node Figma yang di-share (`get_design_context`) → diff **item-per-item** → samain. Bukti (2026-06-12): sidemenu canonical ada widget promo + tinggi item 44px + active `#b2ed7f` + kurang "Invoice Uang Muka" — semua beda dari node (yg: no promo, 56px, `#97cc56`, +chip "New"); nav-header bawa "PT Bambang Jaya Abadi" padahal node "Bambang Jaya Store" + kurang avatar 25% + ikon beda + ada "Bantuan" yg ga ada di node. Semua lolos karena reuse di-pakai-mentah tanpa diff isi (S11).
  - **Ikon** → petain dulu ikon apa aja yang dibutuhin → cek `/Users/working/aurora/projects/ui/icons/assets/` + URL aset Figma. Ambil dari yang ada.
  - **Kenapa wajib (alasan user):** kalau nggak cek dulu → gue **rebuild komponen yang udah ada** = (a) kerja dobel, (b) **inkonsisten** sama prototype lain (versi gue beda dari versi canonical). Ini leak S3/S10 di **level makro** (bukan cuma ikon — komponen utuh). Bukti: sidemenu SI gue rebuild placeholder padahal `components/sidemenu.html` udah ada & lebih bener.
  - **Mindset:** "komponen ini udah ada belum?" ditanya SEBELUM build, bukan sesudah.
  - **DEFAULT: instansiasi komponen Aurora TER-TOKEN > rebuild dari node (lock 2026-06-17).** Kalau Aurora punya komponennya, JANGAN bangun ulang — pakai snippet ter-token (`paper-designer/components/aurora-tokenized.html`): **struktur + BEHAVIOR (hover/active/dropdown/focus/collapse) dari Aurora** (color-agnostic, port CSS-nya — Aurora itu Angular, JANGAN ubah prototype ke Angular cuma demi ini; port CSS+JS cukup), **WARNA via CSS variable di-override ikut Figma.** Efek: behavior dateng GRATIS → nutup gap S15 **di sumber**, bukan ditambal; behavior-audit (step 6) tinggal jaring pengaman. Rebuild murni cuma kalau Aurora beneran ga punya. Bukti: button hijau Figma = button Aurora + token `--au-btn-bg:#93c854` → hover-hijau (`light-green-40`) otomatis, 0 baris hover ditulis tangan (Kirim Pembayaran 2026-06-17).

  - **🔒 GERBANG COMPOSITE — WAJIB, MEKANIS, BERLAKU SEMUA MODEL (Opus/Sonnet/dst). Lock 2026-06-18.** Komponen **composite** = `table`, `pagination`, `chip-status`, `checkbox`, `radio`, `toggle`, `stepper`, `dropdown-menu`, `context-menu`, `tab`, `dialog`, `datepicker`, `autocomplete`, `toast`, `tooltip`, `accordion`, `form-field`. Untuk komponen jenis ini **DILARANG rebuild dari koordinat/pixel** — WAJIB **PORT dari Aurora source**. Prosedur 6 langkah (jangan skip, jangan "kira-kira", urut):
    1. **Identifikasi** — UI yang mau dibikin masuk daftar composite di atas? Ya → wajib lewat gerbang ini.
    2. **Cek ada** — `ls /Users/working/aurora/projects/ui/<comp>/` (mis. `table`, `chip-status`, `pagination`, `checkbox`, `stepper`).
    3. **Baca source** — `<comp>.component.scss` (styling) + `.component.html` (struktur kelas) + `.interface.ts`/`.component.ts` (varian + behavior). **+ Ikon yang dipakai komponen = dari spec komponennya, BUKAN nebak ikon mirip dari folder `icons/assets`.** Cek `.component.ts`/sub-komponen buat ikon mana yang bener (bukti 2026-06-18: table **sort icon = `show-up-down`/`show-up`/`show-down`** per `table/components/sort-icon.component.ts`; gue sempat nebak `switch-vertical-01` dari folder → SALAH, ketauan pas user nyuruh cek).
    4. **Port** — salin **nama kelas + struktur HTML + CSS** Aurora apa adanya ke vanilla HTML/CSS (Aurora = Angular → cuma port CSS+JS, JANGAN bikin prototype jadi Angular). Pakai nama kelas Aurora asli (`.au-table*`, `.au-chip-status`, `.au-pagination`, dst) biar ke-trace & konsisten produksi.
    5. **Adjust ke Figma** — override **CUMA** warna/token/lebar-kolom/teks-data ikut node Figma (lewat CSS variable / nilai). Struktur + spacing + behavior **IKUT Aurora**, jangan diubah.
    6. **Kalau Aurora ga punya** (step 2 kosong) → **STOP + lapor user** (format: "komponen `X` ga ada di Aurora — (a) build custom + alasan (b) skip"). JANGAN diam-diam rebuild.
    - **Kenapa eksplisit + mekanis (alasan user 2026-06-18):** model gampang **motong jalan** rebuild dari pixel pas kepepet → tiap nilai tangan (lebar kolom, tinggi chip, tint header) = **titik drift baru** + hasilnya **tiruan**, bukan komponen produksi → inkonsisten antar prototype. Rule mekanis = bisa dieksekusi model manapun (Sonnet) tanpa harus "ngerti sendiri". Bukti pelanggaran: **table Screen Digital Bulk Payment (2026-06-18) gue REBUILD dari koordinat metadata** (lebar kolom, chip, pagination hand-code) padahal Aurora punya `table/` (461 baris scss) + `chip-status/` (mixin semua varian) + `pagination/` (full) — lulus gerbang lain tapi tetep tiruan hand-tuned, bukan komponen asli (S17).
    - **🔧 ENFORCEMENT 2 lapis (lock 2026-06-18) — JANGAN ngandelin ingatan model (Opus/Sonnet sama2 refleks nulis CSS dari nol pas momentum, skip cek komponen walau tau aturannya):**
      - **(a) PETA DULU** — sebelum nulis 1 baris HTML, tulis tabel `| elemen | komponen Aurora | ada? | pakai/modif/ga-ada |` buat **SEMUA elemen blok** (bukan cuma komponen gede — termasuk input, checkbox, menu, chip, sort icon). Ini maksa "lihat component available dulu". Build tangan = baris yg ketulis "Aurora ga ada".
      - **(b) `tools/component-coverage-audit.py` WAJIB LULUS pre-delivery** — scan HTML, FAIL kalau ada elemen composite hand-build padahal Aurora punya (input→form-field, checkbox→checkbox, table→table, menu→dropdown-menu, chip→chip-status, radio→radio, button→btn, stepper/dialog/dst). Nangkep yg statis MAUPUN yg di-inject lewat JS. Ini gerbang yg bikin component-first **mustahil di-skip diam-diam** — sodara `behavior-audit.py`/`icon-size-audit.py`.
      - Bukti perlunya: 3 bolong Screen DBP (filter input, action menu, checkbox) **lolos SEMUA gerbang lain** (behavior/icon/diff LULUS) — ketauan cuma pas user nunjuk manual. Ilmu/niat ga nahan; tool yg nahan.

**0.8. Figma-first scan — baca Figma DULU sebelum apply rules apapun (lock 2026-06-17).** Setelah inventory DS, sebelum nulis 1 baris HTML: `get_screenshot` per-blok → **list komponen + variant yang TERLIHAT di Figma**. Baru sesudah itu apply rules — tapi **hanya untuk GAP** (hal yang tidak di-specify Figma). Kalau Figma sudah specify → ikut Figma, bukan rule.
- **Rules = default untuk hal yang Figma tidak specify. BUKAN override Figma.**
- Contoh salah: rule bilang "search bar wajib di toolbar" → ditambahkan tanpa cek → Figma tidak punya search bar → **phantom element**. Ini S16.
- Contoh salah: rule bilang "chip status solid fill" → dipakai tanpa cek → Figma pakai outline → **variant salah**. Ini S16.
- Cara praktis: tulis list pendek per-blok ("yang ada di Figma: chip outline, filter row, no search bar") lalu scan vs rules → rules cuma isi kolom "gap".

**0.7. Kanvas/surface DULU — baca fill frame, JANGAN warisi.** Sebelum nempel komponen, baca **warna background + padding frame utama** (main area / content area). Bg itu **BUKAN komponen** → ga ada di decompose per-blok → paling gampang lolos diam-diam. Ambil dari `get_variable_defs` / fill node, atau **sampling pixel** screenshot region (`PIL getpixel` sudut yg kosong) kalau ragu. **JANGAN warisi bg dari screen sebelumnya / dari shell yang di-reuse.** Bukti (2026-06-12): bg ke-set `#EEF1F4` (abu, ikut CSS si-full) padahal node ini `#F8FBFE` (light-blue-10) — ketauan cuma pas sampling pixel `(248,251,254)` (S12).

**1. Tree — baca posisi & nesting.** `get_metadata` blok → rekonstruksi layout dari **koordinat frame**, bukan dari kesan visual.
- Contoh telak: di SI, "Panduan" di frame y=0, "Pengaturan Lanjutan" di frame y=54 → **2 baris terpisah**. Mata bilang "1 baris horizontal" → SALAH. Tree jujur.
- Totals (y=953) vs Notes (y=1269) → beda baris 316px, walau di screenshot keliatan sejajar.

**2. Aset — copas, jangan ngarang.** `get_design_context` ngasih **URL aset tiap SVG/gambar**. Download + simpen ke `assets/`.
- **HARAM**: emoji, karakter teks (⌄ ⚙), gambar tangan. Ikon = copas dari URL Figma ATAU ambil dari Aurora DS (`/Users/working/aurora/projects/ui/icons/assets/`).
- Copas-dari-Figma = pixel-perfect & tercepat. DS-lookup = kalau mau versi canonical / cek komponen ada di DS (training period).
- ⚠️ URL aset Figma **expire 7 hari** → "copas" = download+simpen, BUKAN nge-link URL.
- ⚠️ **Aset ikon = tight-crop (cuma bentuknya), BUKAN full-bleed.** Di Figma ikon duduk dalam kotak (24/36px) tapi grafiknya di-**inset** (punya padding). Baca ukuran/inset graphic **per-ikon** dari design_context — jangan ngeret ke penuh kotak (kegedean) & **jangan generalisasi** (sebagian ikon full-bleed, sebagian inset 10–25%). Scale pakai `width/height %` + `object-fit:contain`, BUKAN 4-side `inset` di `<img>` (replaced element ga ke-constrain → malah meledak). (S14, bukti: Kirim Pembayaran 2026-06-13 — nav-icon medal/user/gear kegedean, diff 2.5→1.6 abis pakai ukuran inset asli.)
  - 🔒 **ENFORCEMENT (lock 2026-06-17): `tools/icon-size-audit.py` WAJIB jalan pre-delivery.** S14 kambuh 3×: financing → nav-icon → **Lainnya** (sidemenu paling bawah, tight-crop `13.87×16.44` dipaksa fill kotak 22px → render 22px = 34% kegedean). Pola gagalnya: rule generik `img{width:100%;height:100%;object-fit:contain}` itu **bug-generator diam-diam** — ga error, pede ngasih hasil salah buat tiap tight-crop yang belum di-override khusus. Selama ini dibenerin **reaktif satu-satu pas user nunjuk** → ikon yang ga kebetulan dilihat = lolos. Dua verifier lain BUTA: heatmap full-page (beda ~6px di ikon kecil di bawah noise-floor, ketelen anti-alias teks) + behavior-audit (cek interaksi, bukan ukuran). Ini **blind-spot UKURAN** — sodara S15. Tool ngukur `getBoundingClientRect` tiap `<img svg>` lawan viewBox aset; scale (min ratio, object-fit:contain) > 1.15 = ke-scale-up → BLOK. Catat ilmu doang ga cukup — yang ngehentiin bug diam-diam = gerbang mekanis.

**3. Token — nilai persis.** `get_variable_defs` → warna/spacing/font dari token. Teks = **copas verbatim** (jangan ketik ulang → typo).

**4. Build HTML** dari data yang udah ditarik.

**5. Verifikasi MEKANIS per-region (BUKAN eyeball).** Render region (Chrome headless) → side-by-side vs `get_screenshot` node sama (crop identik) → **+ sampling pixel** warna bg/elemen.
- WAJIB per-region, BUKAN sekilas full page. Full-page glance **nutupin error level-region** (kejadian: posisi sub-header + bg salah lolos sampe user nunjuk).
- **Mesin, bukan mata.** Model (gue) **ga punya rasa visual** — beda halus (bg `#EEF1F4` vs `#F8FBFE`, chevron tipis vs segitiga isi, help icon biru vs abu) cuma ketangkep sampling/diff, BUKAN dipandang. Banding mekanis = WAJIB tiap region, bukan opsional. (ref [[visual-judgment-limit-rule]])
- **Cek ambient + scaffolding, bukan cuma elemen:** warna kanvas, sisa note/demo/placeholder debug. **Node off-canvas** (x/y di luar lebar/tinggi frame) = dokumentasi *detached* → JANGAN ditaruh nangkring di layar; render dormant/hidden. **Bersihin semua scaffolding sebelum bilang "kelar"** (S13).
- ⚠️ **Verifikasi pakai Lato LOKAL, JANGAN Google Fonts.** Di headless, Google Fonts gagal load → fallback Arial lebih lebar → teks wrap salah → tombol/baris ke-dorong → **diff palsu yang keliatan kayak bug struktural**. Bundle `@font-face` dari Aurora `design-tokens/fonts/lato/`. (Bukti: Kirim Pembayaran 2026-06-17 — baris "Unduh Bukti Transaksi" wrap 2 baris, tombol drift.)
- **Diff heatmap > side-by-side.** Render selisih per-pixel (PIL `ImageChops.difference` → threshold → highlight merah) sandingin Figma|gue|diff. Heatmap misahin **L5 teks** (merah berbentuk huruf = align, cuma anti-alias) dari **bug struktural** (blok merah solid = drift/posisi). Side-by-side + angka rata-rata **ga nangkep drift**; heatmap nangkep.

**6. Behavior pass — WAJIB, type-driven (BUKAN Figma-driven).** Figma = snapshot statis → behavior (hover/active/dropdown/focus/expand) **GA ADA di node** DAN **ga ke-catch pixel-diff** (render statis identik walau behavior ilang) → behavior **lolos tiap gate** kalau ga dipaksa (S15). Diturunin dari **TIPE komponen**, bukan Figma:

| Affordance (cue) | Behavior wajib | Sumber |
|---|---|---|
| Button (filled/outline) | hover + active + cursor | [[behavior-recipes]] Button |
| Text-link | hover (warna/underline) | recipe |
| Chevron/caret ▾ di item | dropdown/expand toggle + chevron rotate | recipe Sidemenu/Accordion |
| Header collapsible ("Tutup"/accordion) | expand/collapse | recipe Accordion |
| Input field | focus ring | recipe |
| Row tabel | hover + klik→detail | [[prototyping-gap-lessons]] 0k |
| Tab | switch active | recipe |

Tiap affordance: **wire dari `behavior-recipes.md`, ATAU tandai `static-with-reason`.** Behavior = default, BUKAN "bonus kalau user minta". Di-tag pas Inventory (0.5): tandai mana komponen interaktif → behavior-nya udah ke-plan sebelum build, bukan ditambal pas user nunjuk.

## Gerbang per-region (wajib sebelum region disebut "jadi")

```
☐ Kanvas dibaca      → bg + padding frame dari fill/sampling, BUKAN warisan screen lain (S12)
☐ Inventory DS       → komponen/ikon udah ada? ADA → reuse SHELL-nya, jangan rebuild
☐ Composite di-PORT  → table/pagination/chip/checkbox/stepper/dropdown/tab/dialog WAJIB port Aurora source (ls→baca scss→port kelas .au-*→override token), BUKAN rebuild dari pixel/koordinat (S17)
☐ Reuse di-diff      → isi (teks/item/ikon/active/badge) disamain ke node INI, bukan default canonical (S11)
☐ Figma-first scan   → komponen + variant di-list dari screenshot SEBELUM apply rules; rules cuma isi GAP, BUKAN override Figma (S16)
☐ Tree dibaca        → posisi & nesting dari frame, bukan tebakan
☐ Aset di-copas      → semua ikon/gambar dari URL Figma/DS, nol emoji-teks/inline-ngarang
☐ Token ditarik      → warna/spacing dari variable_defs
☐ Verifikasi mekanis → render (Lato LOKAL) vs screenshot region + diff heatmap + sampling pixel; cek ambient(bg) & scaffolding (S13) — WAJIB, bukan opsional
☐ Ukuran ikon        → tools/icon-size-audit.py LULUS (scale render/viewBox ≤ ~1.15, tight-crop ga dipaksa fill) (S14)
☐ Behavior pass      → tiap affordance interaktif (button/chevron/input/row/tab) di-wire dari behavior-recipes, ATAU static-with-reason (S15)
☐ Behavior audit     → tools/behavior-audit.py LULUS (0 naked affordance)
☐ Composite coverage → tools/component-coverage-audit.py LULUS (0 elemen composite hand-build padahal Aurora punya — input/checkbox/menu/table/chip/dst) (S18)
```
Ada 1 kosong → blok **belum selesai**, nggak boleh lanjut. Ini yang bikin "skip biar cepet" ketauan — karena akar masalahnya bukan "nggak tau caranya", tapi **motong jalan pas kepepet.**

## Tooling

- **`get_metadata`** — struktur (id/nama/posisi/ukuran). Truncate kalau node gede → hasil ke-save ke file, baca pakai `jq -r '.[].text'` + `grep`/`sed`.
- **`get_design_context`** — reference code (React/Tailwind, JANGAN dipakai mentah) + **URL aset** + nilai token + deskripsi komponen. Truncate → balik "sparse metadata", pecah ke sub-node.
- **`get_variable_defs`** — token (hex, font, spacing).
- **`get_screenshot`** — ground-truth buat verifikasi (BUKAN buat ngukur nilai).
- **Render**: Chrome headless — `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=3000 --window-size=W,H --screenshot=out.png "file://..."`
- Pakai pohon node bersih (bukan node yang udah dicoret/anotasi warna).
- **3 verifier mekanis pre-delivery (WAJIB LULUS semua, semua model):**
  - `tools/icon-size-audit.py <file>` — ukuran ikon (S14): tight-crop ga dipaksa fill (scale ≤ ~1.15).
  - `tools/behavior-audit.py <file>` — affordance interaktif (S15): 0 naked (button/input/row/dropdown ke-wire).
  - `tools/component-coverage-audit.py <file>` — reuse komponen (S18): 0 composite hand-build padahal Aurora punya (input→form-field, checkbox→checkbox, menu→dropdown-menu, table→table, chip→chip-status, dst; nangkep statis + JS-injected).

## Batas jujur (yang TIDAK bisa dikunci)

- **L5 sub-pixel** — render engine browser ≠ Figma (font hinting, sub-pixel). Maks ~98% literal, bukan 100% pixel-identik. Ini batas fisika, bukan kesalahan nilai.
- **L6 kelalaian** — leak prosedur (buru-buru, skip). Ditutup gerbang 4-centang.

## State (S5) — keputusan Paper.id (lock 2026-06-09)

Reproduksi **cuma yang ADA di node Figma yang di-share**. State lain (empty/error/loading/disabled) **TIDAK ada di node itu** → jangan ngarang. Lapor "state X belum ada di Figma" kalau perlu. (Setia 100% = cuma yang di-share.)

## Leak taxonomy (referensi cepat)

**Sabotase (S):** S1 warna-dari-screenshot · S2 spacing-dikira · S3 komponen-ngarang · S4 skip-aset · S5 lupa-state · S6 teks-ketik-ulang · S7 buta-posisi · S8 salah-node · S9 viewport-only · S10 komponen-nggak-setia (sub-item disunat) · **S11 reuse-bawa-nilai-basi** (reuse komponen/CSS screen lain tanpa diff isi) · **S12 kanvas-diwarisi** (bg/surface dari asumsi/screen lain, bukan dibaca) · **S13 scaffolding-bocor** (note/demo/off-canvas-node nangkring di layar produksi) · **S14 ikon-full-bleed** (aset ikon = tight-crop diretto ke penuh kotak tanpa baca inset per-ikon → kegedean; sebagian ikon full-bleed sebagian inset, JANGAN generalisasi).

**Sabotase lanjutan:** **S15 behavior-kelewat** (hover/dropdown/focus/expand ga ada di Figma static & ga ke-catch pixel-diff → default ke-skip; lawan = behavior pass type-driven + gate item). **S16 rule-override-figma** (rule diapply tanpa scan Figma dulu → 2 bentuk: (a) **phantom element** = elemen ditambah dari rule padahal Figma tidak punya, contoh: search bar ditambah karena "wajib di toolbar" padahal design tidak ada; (b) **variant salah** = Figma specify outline chip, rule bilang solid → diambil rule. Lawan = Figma-first scan pre-build, lock 2026-06-17). **S17 composite-rebuild** (komponen composite — table/pagination/chip/checkbox/stepper/dropdown/tab/dialog — di-rebuild dari koordinat/pixel padahal Aurora punya komponennya → hasilnya **tiruan hand-tuned**, tiap nilai tangan = drift baru + inkonsisten produksi; bisa lulus gerbang lain tapi tetep bukan komponen asli. Lawan = **gerbang composite** step 0.5: `ls aurora/ui/<comp>` → baca scss → port kelas `.au-*` → override CUMA token/data ke Figma. Lock 2026-06-18, bukti: table Digital Bulk Payment). **S18 composite-bolong** (sub-elemen composite di-rebuild tangan walau komponen gedenya udah port — mis. tabel pakai `au-table` TAPI filter-nya hand-build `.flt` bukan `au-form-field`, action menu `.row-menu` bukan `au-dropdown-menu`, checkbox `.chk` bukan `au-checkbox`. Akar: model cuma cek komponen "gede" yg obvious, ga peta per-elemen. Lawan = **peta elemen→komponen DULU** + **`component-coverage-audit.py`** gerbang. Lock 2026-06-18, bukti: 3 bolong Screen DBP lolos semua gerbang lain).

**Leak teknis (L):** L1 node-truncate · L2 lapisan-terjemahan · L3 Aurora≠Figma · L4 nilai-hardcode · L5 sub-pixel (batas fisika) · L6 kelalaian.

## Tervalidasi (artifact sesi — regenerate dari Figma, TIDAK di-commit)

Diuji di 2 screen: **SI Invoice** (blok header & tabel pixel-faithful + full page) dan **Invoice List** (10 region, full-page match + interaktif). Prototype HTML-nya = **output disposable** (on-the-fly, lihat [[strategy-figma-sync]]) — BUKAN baseline tersimpan. Bukti side-by-side dihasilkan ulang tiap run. Yang di-commit = SOP ini + recipe + komponen shell, BUKAN hasil render-nya.

## Hubungan ke rule lain

Pelengkap [[aurora-lookup-ritual]] (langkah "cek DS" = step 2 di sini). Konsisten dengan [[prototyping-gap-lessons]] (posisi/ikon/state). Override "eyeball biar cepet" yang jadi sumber semua leak.

**Training:** SOP ini di-keras-in lewat [[figma-mirror-training-plan]] — 6 archetype screen, tiap satu nguji gap baru → SOP nambah → mateng.
