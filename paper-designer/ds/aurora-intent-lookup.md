# Aurora Intent Lookup — Reverse Index

> **Purpose:** Mapping dari **brief intent / user phrase** → **komponen Aurora yang dipertimbangkan**. Lo baca tabel ini DULU per brief sebelum nulis CSS apapun. Default reach behavior: bukan "yang familiar", tapi "yang Aurora".
>
> **Pakai bareng:** [`AURORA-OVERRIDES.md`](AURORA-OVERRIDES.md) (cek override DULU sebelum pakai Aurora source) + [`pipeline.md`](../.claude/skills/senior-uiux-designer/pipeline.md) Langkah 2.5a Aurora Intent Scan.
>
> **Lock 2026-05-20.** Tambahan/koreksi tabel ini = approve user dulu.

---

## Cara pakai (3 step)

1. **Identifikasi intent dari brief.** Pecah brief jadi list "interaction need" (mis. "user pilih tanggal", "input PIN", "konfirmasi hapus", dst).
2. **Lookup per intent → komponen Aurora.** Cek kolom kanan tabel. Bisa lebih dari satu kandidat → pilih berdasarkan konteks.
3. **Cek override status.** Sebelum tulis CSS:
   - Komponen ada di **AURORA-OVERRIDES.md**? → pakai spec override (anotasi `OVERRIDE:`)
   - Tidak ada override? → pakai Aurora source persis (anotasi `AURORA:`)

**Anti-pattern:** kalau lo udah mulai nulis CSS class baru padahal belum lookup intent → STOP. Balik ke step 1.

---

## A. Input & Forms

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Input teks 1 baris (nama, email, deskripsi pendek) | `au-form-field` + `au-input` | — | Standard form field, 40px height |
| Input teks panjang (catatan, deskripsi) | `au-form-field` + `<textarea>` | — | Textarea variant of form-field |
| Input angka / nominal | `au-form-field` + `au-input[type=number]` | Number separator override (5,000,000) | Lihat `[[number-input-separator-rule]]` |
| Input PIN / OTP 4-6 digit | `au-otp-input` | — | Dedicated component, jangan ngarang `<input>` × N |
| Input nomor telpon + kode negara | `au-country-code-select` | — | Country picker + input combined |
| Input nominal + currency picker | `au-currency-select` | — | Currency picker + nominal combined |
| Input tanggal | `au-datepicker` | — | JANGAN native `<input type=date>` di production form. Boleh native di filter row (compact, lihat override `au-table`) |
| Input password | `au-form-field` + `au-input[type=password]` | — | Tambah toggle show/hide eye icon dari `au-icons` |
| Input search / cari | `au-form-field` variant search | — | Search icon kiri (untuk in-card toolbar) ATAU kanan (untuk filter row per override `au-table`) |
| Toggle on/off (boolean) | `au-toggle` | — | Untuk setting yang langsung apply, BUKAN form submit |
| Yes/No exclusive ≤4 opsi | `au-radio` | — | Ref `[[paperverse-design-decisions]]` |
| Yes/No multi-select | `au-checkbox` | Custom 18px square (override `au-table`) | Custom styling override; jangan native |
| Pilih 1 dari banyak (≥5 opsi static) | `au-dropdown-menu` (select variant) | — | Dropdown picker |
| Pilih 1 dari banyak + search (≥5 + searchable) | `au-autocomplete` | — | Autocomplete dengan search filter |

---

## B. Selection & Choice (interaction)

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Action menu floating (3-dot di table row, ⋮) | `au-context-menu` (atau `au-dropdown-menu`) | — | Portal+fixed pattern wajib (lihat `[[prototyping-gap-lessons]]` 0g) |
| Action dropdown text trigger (Tindakan ▾) | `au-dropdown-menu` | — | Detail page Tindakan menu — derive dari table 3-dot menu MINUS Ubah (lihat `[[action-menu-derivation-rule]]`) |
| Pick warna / icon / asset | (tidak ada di Aurora) | TODO | Boleh custom; lapor maintainer Aurora |
| Submenu / nested menu | `au-context-menu` (recursive) | — | Hindari nested terlalu dalam (max 2 level) |

---

## C. Display & Status

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Status label (Aktif/Nonaktif/Pending/Lunas/Belum Lunas) | `au-chip-status` | — | Color-named variants + inverse mode |
| Tag / kategori / label generic | `au-chip` | — | Untuk non-status (mis. tag "Promo", "VIP") |
| Static icon | `au-icons` (catalog `aurora/projects/ui/icons/assets/`) | — | JANGAN emoji 📎📅✓. Ref `[[prototyping-gap-lessons]]` 3 |
| Avatar perusahaan / user | (tidak ada `au-avatar`) | TODO | Custom dengan token Aurora. Lapor maintainer |
| Connection status (online/offline) | `au-connection-icon` | — | Dedicated indicator |
| Body text / heading dengan styling DS | `au-text` | — | Typography component (sekarang sering pake `<p>`/`<h2>` plain dengan token) |
| Highlight angka besar (Total Pengeluaran, Saldo) | (composite — custom dengan token) | — | Pakai `au-text` + token; lihat `.hero-total` pattern di `02-ui-aurora.html` |

---

## D. Navigation

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Breadcrumb (path lokasi) | `au-breadcrumb` + `au-breadcrumb-back-button` + separator | — | Back button kiri WAJIB di child page (lihat `[[breadcrumb-back-button-rule]]`) |
| Tab horizontal (≤6 section dalam 1 page) | `au-tab` | — | Untuk page dengan multi-view; ≥7 section pertimbang sub-page |
| Step-by-step process (onboarding, multi-step form) | `au-stepper` | — | Linear progress through steps |
| Sidemenu kiri | Custom (`paper-designer/components/sidemenu.html`) | au-sidemenu override (active light green) | Reference hidup; jangan modif tanpa user explicit |
| Nav header atas | Custom (`paper-designer/components/nav-header.html`) | — | Reference hidup |
| Pagination (table list bawah) | `au-pagination` | Override (justify-end + borderless + active light-brand-15 + inside list-card) | Lihat `[[production-pagination-rule]]` |
| Infinite scroll loader | `au-infinite-loader` | — | Untuk list panjang yang load incremental |
| Carousel slides (showcase, hero) | `au-carousel` | — | Slides indicator + auto/manual |

---

## E. Feedback & Notification

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Toast (action success/error/info, 3-5 detik auto-dismiss) | `au-toast` | Override (width 380 + radius 8 + pending icon i + close X) | Lihat `[[paperverse-design-decisions]]` + pending fix |
| Banner persistent (in-page warning, "Receive Payment Sudah Dibaca") | `au-banner` | — | Dismissable variant tersedia |
| Confirmation modal (destructive: hapus, buang perubahan) | `au-dialog` (sectioned) | Override (sectioned + outer stroke + body text-primary 16px) | Lihat `[[aurora-sectioned-modal-rule]]`; primary button = `btn--destructive` |
| Information modal (info acknowledgment) | `au-dialog` (sectioned) | Same override | Primary = `btn--primary` |
| Form modal (≤3 fields quick input) | `au-dialog` (sectioned) | Same override | Body = form fields |
| Tooltip (help text hover) | `au-tooltip` | — | Untuk explain non-obvious affordance |
| Error message inline (form validation) | (composite via `au-form-field` + helper text) | — | Lihat `design-rules.md` "Error Message" section |
| Empty state (belum ada data) | Custom `.empty` | Override (no Aurora — custom dengan token) | Lihat `AURORA-OVERRIDES.md` entry |

---

## F. Layout & Structure

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| List page (table dengan toolbar + pagination dalam 1 card) | Custom `.list-card` wrapper | Override (no Aurora — custom layout shell) | Lihat `[[list-page-default-pattern]]` |
| Table list (data rows dengan sortable header + filter inline) | `au-table` | Override (sticky action col + filter search right + header bertint) | Lihat `[[prototyping-gap-lessons]]` 0a-0l |
| Side sheet (panel kanan, form context, 40-50% width) | (tidak ada `au-side-sheet`) | TODO | Custom dengan token. Lihat `[[page-templates-summary]]` |
| Accordion (collapsible section list) | `au-accordion` | — | Untuk multi-section info read-only |
| Scrollable container | `au-scroll-container` | Override (gray thumb 4px thin) | Lihat override entry |
| Card wrapper generic (panel surface) | (tidak ada `au-card`) | TODO | Custom dengan token (radius lg, border, padding). Sering pake `.list-card` atau `.table-wrap` di project |
| File upload dropzone | Custom `.upload` | Override (no Aurora — custom dropzone) | Lihat override entry |

---

## G. Content Loading & Progress

| Intent / brief phrase | Aurora component | Override? | Notes |
|---|---|---|---|
| Loading state (page transition, content load) | `au-skeleton` | — | Mimicking content shape, JANGAN spinner generic |
| Submit button loading | `au-btn` dengan `:disabled` + skeleton inline | — | Lihat `[[smooth-transitions-rule]]` 800ms duration |
| Progress bar (upload, task progress dengan % known) | `au-progress-bar` | — | Determinate progress |
| Spinner generic indeterminate | (tidak ada `au-spinner` dedicated) | — | Pakai `au-skeleton` atau button loading state |

---

## H. Aurora Custom / TODO Maintainer

Komponen yang BELUM ada di Aurora tapi sering dibutuhin — daftar follow-up untuk lapor maintainer Aurora DS:

| Need | Status | Workaround |
|---|---|---|
| Empty state | ❌ no Aurora | Custom `.empty` (lihat override) |
| File upload dropzone | ❌ no Aurora | Custom `.upload` (lihat override) |
| List-card wrapper | ❌ no Aurora | Custom `.list-card` (lihat override) |
| Avatar | ❌ no Aurora | Custom dengan token |
| Side sheet | ❌ no Aurora | Custom dengan token (40-50% width) |
| Generic card / panel | ❌ no Aurora | Custom dengan token |
| Color/asset picker | ❌ no Aurora | Custom |
| Spinner indeterminate dedicated | ❌ no Aurora | Pakai au-skeleton |

---

## Decision Tree — kapan pakai apa

### "Pilih 1 dari N opsi"

```
N ≤ 4?
├── YES → au-radio
└── NO (≥5) →
    ├── Searchable? (user mungkin scroll panjang) → au-autocomplete
    └── Tidak searchable (list pendek static) → au-dropdown-menu
```

### "Multi-section content"

```
Section ≤6 + di-switch oleh user → au-tab
Section ≥7 ATAU section sangat berbeda secara konteks → sub-page
Section read-only collapsible (FAQ, info detail) → au-accordion
```

### "Konfirmasi / acknowledge"

```
Destructive (hapus, buang perubahan)? → au-dialog sectioned + btn--destructive
Info acknowledgment? → au-dialog sectioned + btn--primary
Inline form ≤3 fields quick input? → au-dialog sectioned (form variant)
Inline form >3 fields atau complex? → Form Page (replace main area) ATAU Side Sheet
```

### "Feedback action result"

```
Quick + auto-dismiss (3-5s)? → au-toast
Persistent in-page warning? → au-banner
Form-level validation? → au-form-field helper text inline
```

### "Loading"

```
Page transition / content load? → au-skeleton mimic shape
Button submit progress? → au-btn :disabled + inline skeleton
Determinate progress % known? → au-progress-bar
Indeterminate (no % known)? → au-skeleton (jangan spinner generic)
```

---

## I. Composition Patterns (compose Aurora pieces — JANGAN bikin component baru)

> **HARD RULE:** kalau intent di bawah ini muncul → **KOMPOSE Aurora pieces** existing, BUKAN bikin `.<feature>-inline*` class chain. Lihat `[[composition-thinking-rule]]`.

| Intent / brief phrase | Compose pieces | Wrapper class (semantic-neutral) | Recipe |
|---|---|---|---|
| Metadata text + inline actions (mis. "2 file · Unduh · + Tambah") | `.btn--tertiary-plain` + `.sep` dot + flex gap-md | `.meta-inline` | text/icon + sep + buttons di 1 row |
| Status text + sebelahnya action button | `au-chip-status` + `.btn--tertiary-plain` + flex gap-sm | `.status-row` | chip + space + action |
| Tag count + clear all link (filter active) | text + counter + `.btn--tertiary-plain` "Hapus semua" | `.filter-active-row` | label + count + link |
| Hero number + secondary metadata | `.hero-total` + `.sep` + sub-info | `.hero-row` | Composition lihat `02-ui-aurora.html` `.hero-total` |
| Breadcrumb-like nav (label · label · current) | `au-breadcrumb` pakai langsung (jangan compose) | — | itu komponen, bukan composition |

**Recipe: `.meta-inline` (canonical reference)**

```html
<span class="meta-inline">
  <span class="meta-inline__text">[icon-16] 2 file</span>
  <span class="sep"></span>
  <button class="btn btn--tertiary-plain" onclick="actionA()">Action A</button>
  <span class="sep"></span>
  <button class="btn btn--tertiary-plain" onclick="actionB()">Action B</button>
</span>
```

```css
.meta-inline{display:flex;align-items:center;gap:var(--spacing-md);flex-wrap:wrap;
  font-size:var(--text-body-size-md);color:var(--color-text-primary)}
.meta-inline__text{display:inline-flex;align-items:center;gap:var(--spacing-xs);
  color:var(--color-text-primary);font-weight:var(--text-body-weight-semibold)}
.meta-inline__text svg{width:16px;height:16px;color:var(--color-text-secondary)}
.meta-inline .sep{background-color:var(--color-light-grey-40);border-radius:var(--radius-full);
  width:var(--spacing-xs);height:var(--spacing-xs);display:inline-block;flex-shrink:0}
.meta-inline__empty{color:var(--color-text-muted);font-weight:var(--text-body-weight-regular)}
```

**Anti-pattern:** `.<feature>-inline*` class chain (`.lampiran-inline__count`, `.attachment-inline__sep`, dst) — gunakan `.meta-inline` wrapper semantic-neutral untuk reusability.

**Reference hidup:** `_output/expense-management/02-ui-aurora.html` → search `meta-inline` (Lampiran inline).

---

## Workflow integration

**Per brief baru:**

1. Pipeline Langkah 2.5a (Aurora Intent Scan) baca tabel ini
2. List semua "interaction need" dari brief → cocokin ke tabel
3. Catat kandidat komponen per intent
4. Cross-check dengan AURORA-OVERRIDES.md → kalau ada entry, pakai override spec
5. Lanjut ke 2.5b (Component Mapping Table) → share approval user

**Per komponen yang sering dipake:** consider tambahin pattern recipe di `paper-designer/recipes/<intent>.md` (mis. `pick-date.md`, `confirm-destructive.md`, `list-page.md`).

---

## Hubungan ke memory

- `[[aurora-lookup-ritual]]` — M1 pre-coding lookup ritual (mekanisme enforcement)
- `[[frozen-baseline-overrides-rule]]` — HARD RULE: override menang vs Aurora source
- `[[paperverse-design-decisions]]` — keputusan user override (Toast 380/8, Radio ≤4, dll)
- `[[prototyping-gap-lessons]]` — gap yang muncul dari prototype empiris (0a-0l)
- `[[list-page-default-pattern]]` — default pattern list page

**Reference hidup:** `_output/expense-management/02-ui-aurora.html` — implementasi 15 komponen baseline yang menjadi anchor.
