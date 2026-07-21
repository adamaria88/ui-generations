# Aurora Overrides — Registry

> **Purpose:** Catatan eksplisit ketika kita override spec Aurora karena alasan tertentu (Aurora outdated, user prefer lain, kebutuhan UX spesifik). Override yang tidak ada di file ini = **pelanggaran HUKUM MATI** (custom diam-diam).
>
> **Mekanisme:** Lihat `paper-designer/rules/design-rules.md` section "⛔ HARGA MATI — Aurora Component Lookup Ritual" (4 Mekanisme). CSS class yang override pakai anotasi `OVERRIDE:` bukan `AURORA:`.

---

## Format Entry

```markdown
### Override: <component-name>--<variant>

- **Aurora spec:** `<class>` di `<scss-path>` — value/property X
- **Override jadi:** value Y
- **Alasan:** <kenapa override>
- **Approved by:** <user> on <YYYY-MM-DD>
- **Class CSS di output:** `<class-name-yang-dipakai>`
```

---

## Active Overrides

> **HARD RULE (lock 2026-05-20):** Override yang tercatat di file ini = **kebal Aurora bulk port**. Saat A+B mechanism (Aurora Intent Lookup + pipeline scan) atau bulk-port Aurora SCSS ke `design-rules.md`, **WAJIB cek file ini DULU**. Kalau komponen ada entry override di sini → pakai override spec, BUKAN Aurora source. Override yang sudah locked oleh user TIDAK akan di-revert ke Aurora "demi konsistensi spec". Konsistensi yang menang = production Paper.id (yang udah di-implement di `_output/expense-management/02-ui-aurora.html`).

---

### Override: `au-toast` (width + radius + icon + close X + 3-col layout)

- **Aurora spec:** `au-toast` di `aurora/projects/ui/toast/toast.component.scss` L1-80
  - `width: 450px`
  - `border-radius: var(--radius-lg)` (12px)
  - Layout: `&__content` flex row dengan `&__icon` (32×32) + `&__text` (column gap 4px) + `&__close` (button)
  - Variants: default (success), `&--danger` (red bg)
- **Override jadi:**
  - `width: 380px`
  - `border-radius: var(--radius-md)` (8px)
  - **Default icon (info variant)**: 32×32 round circle filled `#4199d5` (light-brand-50) with white "i" lowercase inside. BUKAN green checkmark outline. Match production Paper.id default toast.
  - **Close X button**: kanan, 24×24 hit area, 18px X stroke, color `var(--color-light-brand-50)` (sesuai Aurora source), hover bg `rgb(255 255 255 / 8%)`
  - **3-col layout**: `__content` flex row `align-items:center` gap-sm dengan `__icon` (32×32) + `__text` (column gap-2xs, flex:1) + `__close` (24×24 flex-shrink:0)
  - Title weight bold, line-height 20px; subtitle 13px white 85% opacity, line-height 18px
- **Alasan:**
  - Width 380 + radius 8: konsisten dengan card surface, lebih proporsional di dashboard padat
  - Icon info "i" light blue: production default = info acknowledgment, BUKAN success-only. Greencheck cuma cocok untuk success-specific (CRUD complete). Info "i" lebih neutral untuk variety (sukses, info, peringatan).
  - Close X button: production butuh user dismiss control (sebelumnya hanya auto-dismiss 3.6s — kalau user mau dismiss manual ga ada affordance)
  - 3-col layout: per Aurora source structure `__content` + `__icon` + `__text` + `__close` — sebelumnya cuma 2-col (icon + text) ga sesuai Aurora source
- **Approved by:** 
  - 2026-05-19 (width 380 + radius 8, sesi Paperverse 1.0 ingestion)
  - 2026-05-20 (icon info + close X + 3-col layout, sesi audit Aurora-vs-design-rules item #8)
- **Class CSS di output:** `.toast`, `.toast__content`, `.toast__icon`, `.toast__text`, `.toast__close`

---

### Override: Empty State Component (TIDAK ADA di Aurora)

- **Aurora spec:** **TIDAK ADA** di `aurora/projects/ui/` — tidak ada folder `empty` / `empty-state` / `placeholder`
- **Override jadi:** Custom component `.empty` dengan struktur:
  - Container: flex column, center align, padding 64px 24px
  - Icon: 72px Aurora SVG (au-icon catalog)
  - Heading: 16px bold text-primary
  - Body: 13px text-secondary, max-width 340px
  - CTA: `au-btn--primary` (Aurora — bukan custom)
- **Alasan:** Belum ada `au-empty-state` di Aurora DS. User butuh pattern empty state untuk "Belum ada pengeluaran" / "Belum ada invoice" / dll. Daripada skip fitur atau tunda development DS, custom dengan menggunakan **token Aurora & komponen Aurora di dalamnya** (icon dari au-icon, CTA dari au-btn).
- **Approved by:** user on 2026-05-20 (sesi audit Expense Management)
- **Class CSS di output:** `.empty`, `.empty h3`, `.empty p`
- **TODO follow-up:** Lapor ke maintainer Aurora DS — usulkan `au-empty-state` component. Setelah Aurora punya, migrate prototype.

---

### Override: File Upload Dropzone (TIDAK ADA di Aurora)

- **Aurora spec:** **TIDAK ADA** di `aurora/projects/ui/` — tidak ada folder `upload` / `dropzone` / `file-input`
- **Override jadi:** Custom component `.upload`:
  - Container: dashed border 1.5px light-grey-40, radius-md, padding spacing-xl, text center
  - Background: surface-light-platform
  - Color: text-secondary, font-size 13px
  - Hover: border action-primary-bg + color action-primary-bg
- **Alasan:** Upload bukti pengeluaran (gambar/PDF) butuh dropzone pattern. Aurora belum punya komponen ini. Fallback ke `<input type="file">` plain terlihat ga professional untuk B2B SaaS. Custom dropzone pakai token Aurora (radius, spacing, color, transition).
- **Approved by:** user on 2026-05-20 (sesi audit Expense Management)
- **Class CSS di output:** `.upload`, `.upload:hover`
- **TODO follow-up:** Lapor ke maintainer Aurora DS — usulkan `au-file-upload` / `au-dropzone` component.

---

### Override: `au-dialog` (sectioned spec + outer stroke + body text-primary 16px)

- **Aurora spec:** `aurora/projects/ui/dialog/dialog.component.scss` — Aurora source udah sectioned (header/content/actions), TAPI:
  - Container: hanya `box-shadow`, tanpa outer `border` 1px
  - Body text content: tidak define color/size eksplisit, sering interpreted sebagai `text-secondary` + 14px
  - Backdrop: berbagai variant (rgb 19 63 93/45% di doc lama)
- **Override jadi:**
  - Container: `border: 1px solid var(--color-border-default)` (outer stroke wajib) + `box-shadow: 0 8px 24px rgb(0 0 0 / 15%)` + `border-radius: var(--radius-lg)` (12px) + width 500px default
  - Body text (`.dialog__content p`): `font-size: 16px`, `color: var(--color-text-primary)`, `line-height: 24px`, `font-weight: regular`
  - `<b>` di body: `font-weight: var(--text-body-weight-semibold)`
  - Header & actions: border-bottom/top `var(--color-border-default)` (BUKAN light-grey-25 yang undefined)
  - Backdrop: `rgb(0 0 0 / 50%)` (standard, BUKAN variant lama)
- **Alasan:** Production Paper.id reference 2026-05-20: modal punya outer stroke jelas (bukan cuma shadow), body text dark blue primary 16px (bukan secondary gray 14px), padding generous. Aurora source = bare bone, butuh production overrides supaya kelihatan match. Paperverse 1.0 doc lama (centered+illustration pattern) DIBATALKAN — Aurora sectioned + override ini menang.
- **Approved by:** user on 2026-05-20 (sesi audit modal Buang Perubahan + screenshot production)
- **Class CSS di output:** `.dialog`, `.dialog__header`, `.dialog__content`, `.dialog__actions`, `.dialog__title`, `.dialog__close`, `.scrim`
- **Memory ref:** `[[aurora-sectioned-modal-rule]]`

---

### Override: `au-pagination` (justify-end + borderless dropdown + active light-brand-15)

- **Aurora spec:** `aurora/projects/ui/pagination/pagination.component.scss`
  - L33-39: active page = `color: var(--color-brand-50)` text + `background: var(--color-light-blue-20)` bg
  - Dropdown "Jumlah Baris": Aurora-style form-field box (border 1px)
  - Layout: tidak strict, sering interpreted center
- **Override jadi:**
  - Container: `justify-content: flex-end` (right-aligned 3 group: Jumlah Baris kiri-relatif + Nav tengah-relatif + Entries info kanan, semua group right-aligned dalam container)
  - Dropdown "Jumlah Baris": **borderless** (`border: 0`, `background: transparent`, chevron-down dark blue inline SVG), bold value
  - Active page (`.pg-page.active`): `background: var(--color-light-brand-15)` + `color: var(--color-text-primary)` + `font-weight: var(--text-body-weight-bold)` (BUKAN Aurora brand-50 + light-blue-20)
  - Chevron prev/next: plain icon transparent, hover `var(--color-light-grey-15)` (BUKAN border box)
  - Wording: "Jumlah Baris" + "Menampilkan X hingga Y dari Z entri" (BUKAN "rows per page" / "sampai")
  - Position: **INSIDE `.list-card`** (di akhir, setelah toolbar + table-scroll) — 1 white card wrap semuanya
- **Alasan:** Production Paper.id reference 2026-05-20 (screenshot Sales Invoice & Pengeluaran): pagination right-aligned, dropdown borderless, active page light-brand-15 (soft, tidak kontras tinggi seperti solid primary). Aurora active spec terlalu kontras untuk konteks list panjang. User instruksi eksplisit: "ubah kayak production dan lock ya".
- **Approved by:** user on 2026-05-20 (sesi audit pagination + screenshot production)
- **Class CSS di output:** `.pagination`, `.pg-rows`, `.pg-rows select`, `.pg-nav`, `.pg-btn`, `.pg-pages`, `.pg-page`, `.pg-page.active`, `.pg-ell`
- **Memory ref:** `[[production-pagination-rule]]`

---

### Override: `au-scroll-container` (gray thumb instead of blue)

- **Aurora spec:** `aurora/projects/ui/scroll-container/scroll-container.component.scss`
  - Thumb color: `--color-light-brand-50` / `#4199d5` (Paper.id blue brand)
  - Track: transparent
  - Width: 4px (thin)
- **Override jadi:**
  - Thumb color: gray (default scrollbar color, `var(--color-light-grey-40)` atau `var(--color-text-muted)`)
  - Width: 4px (thin, sama dengan Aurora)
  - Track: transparent (sama)
  - Hover thumb: gray darker (`var(--color-text-secondary)`)
- **Alasan:** User koreksi 2026-05-20: "warnanya skr biru kesannya kayak loading, d buat warna default dari scroll aja". Blue scrollbar di table list kesannya loading/active indicator → bingung user. Gray scrollbar = standard browser-like, intuitive sebagai scroll affordance.
- **Approved by:** user on 2026-05-20 (sesi fix scroll trap + visible scrollbar)
- **Class CSS di output:** `.table-scroll::-webkit-scrollbar`, `.table-scroll::-webkit-scrollbar-thumb`, `.table-scroll` (Firefox: `scrollbar-color: <gray> transparent`)
- **Memory ref:** belum ada — TODO save `[[scroll-container-gray-override-rule]]`

---

### Override: `au-sidemenu` (active subitem text color = light green production var)

- **Aurora spec:** Sidemenu = custom component (bukan native Aurora). Mock default sebelumnya menebak active subitem pakai brand blue (`--color-light-brand-50`).
- **Override jadi:**
  - Active subitem text color: `var(--sidebar-item-text-color-active, #b2ed7f)` (light green)
  - Active subitem font-weight: `var(--text-body-weight-semibold)`
  - Active subitem: NO background fill — color change saja signal "active"
  - Sidemenu font-weight: `400` di SEMUA item (termasuk yang active) — distinction via color, BUKAN weight
- **Alasan:** User extract dari production CSS Paper.id 2026-05-20: sidemenu dark navy bg, active subitem light green high-contrast against dark navy → instantly readable + distinctive. Brand blue di dark navy = contrast rendah / invisible.
- **Approved by:** user on 2026-05-20 (sesi extract production CSS sidemenu)
- **Class CSS di output:** `.sidemenu__subitem.active`
- **Memory ref:** `[[sidemenu-active-color-rule]]`

---

### Override: `au-table` (sticky action col only + filter search icon right + header bertint single block)

- **Aurora spec:** `aurora/projects/ui/table/table.component.scss` — base table styling, tidak define sticky behavior, filter row interpretasi bebas
- **Override jadi:**
  - **Sticky kolom:** HANYA kolom action (⋮) sticky kanan dengan shadow divider kiri. Kolom kiri (checkbox/expand) **TIDAK sticky** — ikut scroll.
  - **Filter row:** search icon di **kanan** (BUKAN kiri) di filter input — Aurora `icons/assets/search-sm.svg`. Calendar icon kanan untuk date filter.
  - **Header label + filter row:** SATU blok bertint `var(--color-surface-light-raised)`. Kontrol filter putih (Aurora form-field 32px compact) di atas blok bertint ini.
  - **Filter box height:** 32px compact (BUKAN Aurora form-field default 40px) — compact karena 1 row filter saja, tidak perlu spacious.
  - **Placeholder color:** semua filter consistent `var(--color-text-muted)` saat kosong, `var(--color-text-primary)` saat terisi (date: pakai `:valid` selector + hide `::-webkit-calendar-picker-indicator`).
  - **Scrollbar `.table-scroll`:** thin Aurora au-scroll-container (4px) — BUKAN hide scrollbar (anti-pattern `scrollbar-width: none` = scroll trap).
  - **Row click:** `cursor: pointer` + hover bg → trigger `viewDetail(rowId)`. Exclusion: checkbox col, expand col, action menu (event.target.closest check).
- **Alasan:** Production Paper.id reference 2026-05-20 (screenshot Sales Invoice list): sticky action col only (asumsi lama "checkbox sticky kiri" SALAH), filter search icon kanan, header label+filter dalam blok bertint single. Native checkbox styling inconsistent → custom 18px square. Native date placeholder lebih gelap dari ::placeholder → harus disamakan. Scroll trap dari hide scrollbar → harus thin visible.
- **Approved by:** user on 2026-05-20 (multiple sessions: audit table + scroll trap + placeholder + sticky col)
- **Class CSS di output:** `.tbl`, `.tbl thead`, `.col-act` (sticky right), `.col-chk`, `.col-exp`, `.col-date`, `.chk` (custom checkbox), `.table-scroll`, `.tbl-toolbar`, `.is-placeholder`
- **Memory ref:** `[[prototyping-gap-lessons]]` (0b, 0d, 0g, 0i, 0k, 0l), `[[list-page-default-pattern]]`

---

### Override: `.list-card` (wrapper layout shell — TIDAK ADA di Aurora)

- **Aurora spec:** **TIDAK ADA** di `aurora/projects/ui/` — tidak ada folder `card` / `list-card` / `panel-wrapper`
- **Override jadi:** Custom layout shell `.list-card`:
  - Background: `var(--color-surface-light-default)` (white)
  - Border: `1px solid var(--color-border-default)`
  - Border-radius: `var(--radius-lg)` (12px)
  - Padding: `var(--spacing-xl)` semua sisi
  - Gap antar child: `var(--spacing-xl)`
  - Children: in-card toolbar (search + Unduh) + `.table-wrap` (nested card border tetap) + pagination
  - Action-bar (Tindakan Lainnya + primary CTA): **DI LUAR** `.list-card` (di platform background)
- **Alasan:** Production Paper.id reference 2026-05-20: list page bungkus search + table + pagination dalam SATU white card. Action bar di luar card. Aurora belum punya komponen wrapper layout untuk list page. Custom dengan token Aurora (radius/spacing/border/color), bukan ngarang nilai.
- **Approved by:** user on 2026-05-20 (sesi audit layout list page)
- **Class CSS di output:** `.list-card`, `.list-card > .tbl-toolbar`, `.list-card > .table-wrap`, `.list-card > .pagination`, `.action-bar` (outside)
- **TODO follow-up:** Lapor ke maintainer Aurora DS — usulkan `au-list-card` atau `au-panel` wrapper component.
- **Memory ref:** belum ada — TODO save `[[list-card-wrapper-rule]]`

---

### Override: Button hijau "Tambah Baris" (varian hijau TIDAK ADA di Aurora)

- **Aurora spec:** `au-btn` di `aurora/projects/ui/button/button.component.scss` — `ButtonType` cuma `primary | secondary | tertiary | tertiary-plain` (+ `destructive` internal). **TIDAK ada varian hijau/success.**
- **Override jadi:** Button pill hijau (warna `--green`, brand success) untuk aksi "Tambah Baris" di form line-item. Struktur tetap ikut Aurora button base (radius-full, padding 8px 16px, font 14px/500, gap 8px, shadow stack) — cuma background yang custom hijau.
- **Alasan:** Figma SI Invoice (file `w3Tv03Zm8qMAcXAfDkxmff`) menampilkan tombol "Tambah Baris" warna hijau. Mirror method = setia ke Figma. Aurora button belum punya varian hijau → kandidat develop di DS (success button) ke depannya.
- **Approved by:** user (design.paper.id) on 2026-06-11
- **Class CSS di output:** `.btn-add.green` di `_output/sales-invoice/si-full.html`

---

### Override: `au-chip-status--light-yellow-50` (amber/yellow variant TIDAK ADA di Aurora)

- **Aurora spec:** `aurora/projects/ui/chip-status/chip-status.component.scss` — variant yang tersedia: `light-blue-50`, `light-blue-30`, `light-green-50`, `dark-blue-45`, `light-red-50`, `light-orange-50`. **Tidak ada yellow/amber variant.**
- **Override jadi:** Custom class `.au-chip-status--light-yellow-50` dengan:
  - `border-color: var(--color-light-yellow-50, #eab11c)` (amber)
  - `color: var(--color-light-yellow-50, #eab11c)` (amber)
  - Tetap outline (bukan inverse), base class `.au-chip-status--compact`
- **Alasan:** Figma Bulk Upload (`w3Tv03Zm8qMAcXAfDkxmff`, frame `82:37889`) status "Creating" pakai chip amber/golden — berbeda warna dari orange (`light-orange-50` = `#f37d51`) yang lebih salmon. Figma variable `New/Brand/Color/Orange: #f3a632` menunjukkan amber intentional. Aurora tidak punya yellow chip → custom dengan token Aurora primitif `--color-light-yellow-50` yang sudah ada di `design-tokens/color-primitive.css`.
- **Approved by:** user (design.paper.id) on 2026-06-17
- **Class CSS di output:** `.au-chip-status--light-yellow-50` di `_output/learning/bulk-upload/index.html`
- **TODO follow-up:** Usulkan `au-chip-status--light-yellow-50` variant ke maintainer Aurora DS.

---

### Override: Rich-text toolbar icons (formatting icons TIDAK ADA di Aurora)

- **Aurora spec:** `aurora/projects/ui/icons/assets/` (846 ikon) — **TIDAK ada** Bold / Italic / Underline / ordered-list / unordered-list / format-selector. Aurora icon set ga cover formatting/editor icons.
- **Override jadi:** Ikon toolbar rich-text (Quill editor) di-**copas dari aset Figma** node `1:22024` ("Editors"): `ic-fmt-bold.svg`, `ic-fmt-italic.svg`, `ic-fmt-underline.svg`, `ic-fmt-ol.svg`, `ic-fmt-ul.svg`, `ic-fmt-selector.svg`. Toolbar style: bg `#f6f6f6`, border `#d2d2d2` (dari Figma). Font label "Normal"/"Sans Serif" = Roboto 14px.
- **Alasan:** Komponen rich-text editor (Keterangan / Syarat & Ketentuan) butuh formatting icons yang ga ada di Aurora. Mirror method = copas aset Figma, bukan ngarang glyph teks. Kandidat: tambah formatting icon set ke Aurora kalau editor jadi komponen resmi.
- **Approved by:** user (design.paper.id) on 2026-06-11
- **Class CSS di output:** `.editor .tbar .fmt img` + `.editor .tbar .sel img` di `_output/sales-invoice/si-full.html`

---

### Override: Mobile app bar (`.appbar`) — TIDAK ADA di Aurora

- **Aurora spec:** tidak ada komponen app bar mobile. Yang ada `au-breadcrumb` (+ back button) untuk desktop.
- **Override jadi:** `.appbar` custom — bg white, px 20 py 4, `drop-shadow(0 -5px 10px rgba(65,153,213,.1))`, back button = `au-btn--tertiary au-btn--icon-only` 30×30 ikon `chevron-left` 18px, judul 16px bold center.
- **Alasan:** prototype mobile (360–430px) butuh header nav; nilai dibaca dari node Figma "Navigation Bar" (file `qNrWKLLBDi82z94Dv7nqC5`, node 2169:98630).
- **Approved by:** user on 2026-07-21 ("yang ga ada, ikutin figma persis")
- **Class CSS di output:** `.appbar`, `.appbar__row`, `.appbar__title`

### Override: Sticky bottom CTA (`.page-bottom-cta`) — TIDAK ADA di Aurora

- **Aurora spec:** tidak ada. Pola desktop = tombol di kanan bawah card form.
- **Override jadi:** container fixed bottom, white, px 16 py 12, `drop-shadow(0 -3px 5px rgba(0,0,0,.08))`, isi `au-btn--primary` full width + `env(safe-area-inset-bottom)`.
- **Alasan:** di mobile tombol utama wajib kejangkau jempol tanpa scroll; node Figma ".page-bottom-cta".
- **Approved by:** user on 2026-07-21
- **Class CSS di output:** `.page-bottom-cta`

### Override: Kartu saran mitra (`.ppc` / `.partner-ppc-suggestion`) — TIDAK ADA di Aurora

- **Aurora spec:** tidak ada `au-card`/`au-avatar`. Aurora punya `connection-icon` tapi bukan kartu kontak.
- **Override jadi:** wrapper bg `#f8f9fa` radius 12 + subtitle 12px `text-secondary` + contact card putih (border `--color-border-subtle`, radius 8, padding 12, gap 8) berisi avatar 48px (gambar 40px, zoom 168.42% ikut Figma), nama 14px semibold + `check-verified-solid` 12px biru, nomor 12px, tombol pill `au-btn--compact`.
- **Alasan:** komponen ini sudah ada di file Figma Paper (`.partner-ppc-suggestion`) tapi belum diport ke Aurora. Kandidat untuk diangkat jadi komponen Aurora.
- **Approved by:** user on 2026-07-21
- **Class CSS di output:** `.ppc`, `.ppc__subtitle`, `.ppc__contact`, `.ppc__info`, `.ppc__user`, `.ppc__avatar`, `.ppc__name`, `.ppc__verified`, `.ppc__phone`, `.ppc__action`

### Override: Spinner inline di dalam field (`.field-spinner`) — TIDAK ADA di Aurora

- **Aurora spec:** tidak ada spinner indeterminate (`aurora-intent-lookup.md` G: "pakai au-skeleton").
- **Override jadi:** lingkaran 20px border 2px `light-grey-40` + `border-top-color` brand, `animation 1000ms linear infinite`.
- **Alasan:** pencarian nomor jalan di dalam field; skeleton tidak cocok untuk suffix field. Bentuk ikut Figma frame "sedang mencari".
- **Approved by:** user on 2026-07-21
- **Class CSS di output:** `.field-spinner`

### Override: `au-form-field` tinggi kontrol 36px (mobile)

- **Aurora spec:** `form-field.component.scss` L34 — `.au-input { min-height: 40px; padding: 8px 12px }`
- **Override jadi:** `min-height: 36px; padding: 4px 12px` (border color tetap `--color-border-default`).
- **Alasan:** node Figma mobile "Input" tingginya 36px. Pakai 40px bikin drift ~4px per field (terbukti di diff heatmap: total ~16px meleset di 4 field).
- **Approved by:** user on 2026-07-21
- **Class CSS di output:** `.form-field__control`

### Override: `au-toast` lebar di mobile

- **Aurora spec:** `toast.component.scss` L3 — `width: 450px` (override Paper.id sebelumnya: 380px).
- **Override jadi:** `width: 100%` dalam host `max-width: 420px` + padding 16px kiri-kanan (efektif ≈ lebar layar − 32px).
- **Alasan:** layar HP 360–430px, 380/450px ga muat. Aurora sendiri sudah punya `@media (width <= 768px) { max-width: calc(100vw - 40px) }` — ini penerusannya untuk mobile-first.
- **Approved by:** user on 2026-07-21
- **Class CSS di output:** `.au-toast`, `.au-toast-host`

---

## Hubungan dengan Aurora Lookup Ritual

- Mekanisme 1 (Pre-coding lookup) → kalau hasilnya ❌ TIDAK ADA → STOP & lapor user → user pilih (a/b/c)
- Kalau user pilih (c) custom → tulis entry di file ini
- Mekanisme 2 (Anotasi) → CSS block pakai `OVERRIDE:` (bukan `AURORA:`) dengan reference ke entry di sini
- Mekanisme 3 (Audit) → class dengan `OVERRIDE:` lolos kalau ada entry di file ini

**Tidak ada entry = pelanggaran.** Override harus eksplisit, beralasan, dan punya tanggal/approver.

---

## Removed Overrides (history)

_(belum ada — section ini untuk kasus override yang nantinya di-revert karena Aurora sudah punya, atau user ubah pikiran)_
