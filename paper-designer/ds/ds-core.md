# DS Core — Aurora Quick Reference (Senior UIUX Designer)

> Merged + trimmed dari 5 file sumber. Selalu baca ini di awal brief.
> Untuk detail styling per-komponen → baca section terkait di `rules/design-rules.md`.
> Source files: `aurora-tokens.md`, `layout-rules.md`, `page-templates.md` (trimmed),
>   `design-rules.md` (Global Rules + Prohibitions + Checklist), `aurora-components.md` (catalog only).

---

## HUKUM MATI — Global Rules

1. Font family ALWAYS `'Lato', sans-serif` — no other font.
2. Colors MUST use CSS custom properties (`var(--token)`) — never hardcode hex.
3. Spacing MUST follow 4px grid — only Aurora scale values (2–40px).
4. Border-radius MUST use Aurora tokens — no arbitrary values.
5. Transitions MUST use Aurora speed + easing tokens — no generic `ease`.
6. All interactive elements MUST have `:hover`, `:active`, `:focus-visible`, `:disabled`.
7. Focus ring: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px`.

## Absolute Prohibitions

1. NEVER use `border-radius` other than: `0`, `4px`, `8px`, `12px`, `16px`, `9999px`
2. NEVER use font other than `Lato`
3. NEVER use font-weight other than: `400`, `500`, `600`, `700`
4. NEVER use font-size outside Aurora scale (12, 14, 16, 20, 22, 24, 28, 34, 42, 52, 64, 72, 80px)
5. NEVER use spacing outside Aurora scale (2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40px)
6. NEVER use colors outside the Aurora palette
7. NEVER use `box-shadow` other than component-defined values
8. NEVER use transition durations other than: `100ms`, `200ms`, `300ms`, `400ms`, `500ms`, `1000ms`
9. NEVER invent hover/active colors — use exact token for each variant
10. NEVER omit focus-visible styles on interactive elements
11. NEVER use `border-width` other than: `0`, `1px`, `1.5px`, `2px`
12. NEVER use opacity other than: `0`, `0.1`, `0.25`, `0.5`, `0.75`, `1`

## Pre-Generation Checklist

Before outputting any HTML prototype, verify:
- [ ] Every color → Aurora token or resolved palette value
- [ ] Every spacing → Aurora spacing scale
- [ ] Every border-radius → Aurora radius tokens
- [ ] Every font-size → Aurora type scale
- [ ] Every font-weight → 400, 500, 600, or 700
- [ ] Every transition → Aurora speed + easing tokens
- [ ] Every interactive element → hover, active, focus-visible, disabled states
- [ ] Every box-shadow → component-documented shadow exactly
- [ ] Button → pill-shaped (9999px) unless icon-only (12px)
- [ ] Form field control → 4px radius, NOT pill
- [ ] Dialog → 12px radius
- [ ] Table wrapper → 8px radius with 1px border
- [ ] Toast → gradient background (except danger)
- [ ] Tooltip background → dark (#133f5d)
- [ ] Sidemenu icons → `currentColor` stroke, NOT hardcoded
- [ ] Default submenu items → `padding-left: 52px`, NO icons
- [ ] Lainnya submenu items → `padding: 0 16px`, WITH 20×20 icons
- [ ] Sidemenu source → `components/sidemenu.html`

---

## Color Tokens

### Text
| Token | Usage | Hex |
|-------|-------|-----|
| `--color-text-primary` | Main text, headings | `#133f5d` |
| `--color-text-secondary` | Supporting text | `#718c9e` |
| `--color-text-muted` | Disabled/subtle | `#a5b6c1` |
| `--color-text-inverse` | On dark backgrounds | `#ffffff` |
| `--color-text-brand` | Brand text | `#133f5d` |

### Surface
| Token | Usage | Hex |
|-------|-------|-----|
| `--color-surface-light-default` | Default page bg | `#ffffff` |
| `--color-surface-light-raised` | Cards, elevated | `#f3f6f9` |
| `--color-surface-light-muted` | Subtle bg | `#e7eaec` |
| `--color-surface-light-platform` | App background | `#f8fbfe` |

### Action (Buttons)
| Token | Usage |
|-------|-------|
| `--color-action-primary-bg` | Primary button bg (#4199d5) |
| `--color-action-primary-hover` | Primary hover (#89bde5) |
| `--color-action-primary-pressed` | Primary pressed (#3385b5) |
| `--color-action-primary-fg` | Primary text (white) |
| `--color-action-destructive-bg` | Destructive bg (#e35273) |
| `--color-action-destructive-hover` | Destructive hover |
| `--color-action-destructive-pressed` | Destructive pressed |
| `--color-action-destructive-fg` | Destructive text (white) |
| `--color-action-neutral-bg` | Secondary button bg |
| `--color-action-disabled-bg` | Disabled bg |
| `--color-action-disabled-fg` | Disabled text |

### State Colors
| State | Tokens |
|-------|--------|
| Success | `--color-state-success-{text-dark|text-light|icon|bg|border}` |
| Danger | `--color-state-danger-{text-dark|text-light|icon|bg|border}` |
| Warning | `--color-state-warning-{text-dark|text-light|icon|bg|border}` |
| Caution | `--color-state-caution-{text-dark|text-light|icon|bg|border}` |
| Active | `--color-state-active-{text-dark|text-light|icon|border}` |
| Focus | `--color-focus-ring` |

### Primitive Palette (key values)
- Brand blue primary: `#4199d5` (light-50), dark: `#133f5d` (dark-50)
- Green primary: `#97cc56` (light-50), dark: `#356021` (dark-50)
- Red primary: `#e35273` (light-50), dark: `#5c122d` (dark-50)
- Yellow primary: `#eab11c`, Orange primary: `#f37d51`
- Black: `#161616`, White: `#ffffff`

---

## Typography

**Font:** `'Lato', sans-serif`

### Heading Scale
| Size | Font Size | Line Height |
|------|-----------|-------------|
| xs | 14px | 20px |
| sm | 16px | 20px |
| md | 22px | 28px |
| lg | 28px | 36px |
| xl | 34px | 44px |

### Body Scale
| Size | Font Size | Line Height |
|------|-----------|-------------|
| sm | 12px | 18px |
| md | 14px | 22px (default) |
| lg | 20px | 30px |

### Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `--spacing-2xs` | 2px |
| `--spacing-xs` | 4px |
| `--spacing-sm` | 8px |
| `--spacing-md` | 12px |
| `--spacing-lg` | 16px |
| `--spacing-xl` | 20px |
| `--spacing-2xl` | 24px |
| `--spacing-3xl` | 28px |
| `--spacing-4xl` | 32px |
| `--spacing-5xl` | 36px |
| `--spacing-6xl` | 40px |

---

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-none` | 0px |
| `--radius-sm` | 4px (inputs, buttons) |
| `--radius-md` | 8px (cards, dialogs) |
| `--radius-lg` | 12px (large cards, modals) |
| `--radius-xl` | 16px |
| `--radius-full` | 9999px (pills, avatars) |

## Stroke: `--stroke-xs` 1px | `--stroke-md` 1.5px | `--stroke-lg` 2px

## Animation

### Speed: `--speed-extra-fast` 100ms | `--speed-fast` 200ms | `--speed-normal` 300ms | `--speed-slow` 400ms | `--speed-extra-slow` 500ms
### Easing: `--ease-{in|out|in-out}-{relax|regular|strong|powerful}`

---

## Responsive Breakpoints

| Name | Condition |
|------|-----------|
| Desktop (base) | >= 1280px |
| Laptop | <= 1279px |
| Tablet | <= 1023px |
| Mobile | <= 767px |

Design desktop-first. Frames: 1440px (desktop), 1024px (tablet), 375px (mobile).

---

## 3-Zone Layout (WAJIB semua halaman)

```
+----------+----------------------------------+
|          |       Navigation Header          |
|          +----------------------------------+
| Sidemenu |                                  |
| (fixed)  |          Main Area               |
| 240px    |         (scrollable)             |
+----------+----------------------------------+
```

- **Zone 1 — Sidemenu** (240px fixed): Logo → Info bisnis/promo → Menu nav. TIDAK berubah antar halaman; hanya highlight aktif yang berubah.
- **Zone 2 — Navigation Header** (~88px): kiri = avatar + nama perusahaan + badge; kanan = notif + bantuan + profil. Konsisten di semua halaman.
- **Zone 3 — Main Area**: semua konten (list, form create/edit/view, dashboard). Konten REPLACE isi Main Area, bukan tab/modal/halaman baru (kecuali konfirmasi singkat = modal).

### Navigasi CRUD di Main Area
- list → create: klik "Tambah" → Main Area jadi form create
- list → detail: klik row → Main Area jadi detail view
- list → edit: klik edit → Main Area jadi form edit
- create/edit/view → list: save/cancel/back → Main Area kembali ke list

### Anti-Patterns
| ❌ Salah | ✅ Benar |
|----------|----------|
| Form create di modal/dialog | Form create di Main Area |
| Layout tanpa sidemenu | Sidemenu SELALU ada |
| Navigasi CRUD via tab | Konten replace di Main Area |
| Scroll seluruh halaman | Hanya Main Area yang scroll |

---

## Page Templates

### Decision Flow

```
Flow utama / kompleks?
  YA → FORM PAGE (Full Page)
  TIDAK →
    Perlu lihat konteks halaman utama?
      YA → SIDE SHEET FORM
      TIDAK → MODAL FORM
```

### Perbandingan

| Tipe | Kapan | Kompleksitas | Best For |
|------|-------|--------------|----------|
| Form Page | Core process, multi-step | Tinggi | Create Invoice, Create Partner |
| Side Sheet | Kontekstual / form pendek dalam cross-process | Sedang | Buat Mitra dari halaman Invoice |
| Modal Form | Task cepat, maks 3 fields | Rendah | Edit nama, Tambah note |

> Modal ada **3 tipe beda** (Modal Form / Confirmation Modal / Information Modal) — default focus Confirmation = Cancel, Information = Primary. Detail: `page-templates.md` Template 3. Behavior Button/Autocomplete/Error/Tab/Table/Toast: section "Behavioral & Pattern Rules" di `design-rules.md`.

### Form Page Rules
- Form dibungkus card putih dengan border (`1px solid`, `var(--radius-md)` 8px, padding 24-32px)
- Background di belakang card: `var(--color-surface-light-raised)` / light grey
- Breadcrumb (`au-breadcrumb`) WAJIB di halaman child (Create/View/Edit), TIDAK di root/list
- Header: judul + breadcrumb di kiri, panduan + pengaturan lanjutan di kanan
- Footer: primary CTA di kiri, secondary/cancel di kanan bawah card
- Save & cancel SELALU di kanan bawah
- Label 14px dark blue bold, input 14px, min font 12px, angka tabel right-aligned, qty default 1
- Side Sheet: width default 40% (→ 50% kalau kompleks banget), TIDAK bisa close klik di luar
- Toast: width **380px**, radius **8px** (keputusan user 2026-05-19, override Aurora SCSS)

### Input Behavior
| Kondisi | Gunakan |
|---------|---------|
| Opsi ≤ 4 | Radio Group (tampilkan langsung) |
| Opsi ≥ 5 | Select/Dropdown |
| Opsi banyak (≥ 5) + search | Autocomplete (kalau < 5 → tetap Dropdown) |
| Teks panjang | Rich Text / Textarea |
| Tanggal | Date Picker |

> Threshold (keputusan user 2026-05-19): Radio ≤ 4, Dropdown ≥ 5.

### Error & Validation
- Pesan natural ("No partner selected yet"), bukan teknikal ("cannot be empty")
- Preserve input yang sudah diisi
- Feedback spesifik per field

---

## Aurora Component Catalog (31 komponen)

> Untuk detail props/styling → baca section terkait di `rules/design-rules.md`

### Navigation & Structure
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Breadcrumb | Multi-level nav, lokasi di hierarki | `au-breadcrumb` + `au-breadcrumb-item` |
| Tab | Switch konten terkait pada halaman yang sama | `au-tab` |
| Stepper | Multi-step process (checkout, onboarding) | `au-stepper` + `au-step` |
| Pagination | Navigasi data terpaginasi | `au-pagination` |

### Actions
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Button | Primary actions, form submit, nav trigger | `button[auBtn]` / `a[auBtn]` — types: primary/secondary/destructive/tertiary/tertiary-plain |

### Data Input
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Form Field | Wrap semua form input | `au-form-field` (variants: default/compact) |
| Label | Label form | `au-label` |
| Hint | Helper text / error text | `au-hint` |
| Checkbox | Multiple selection, boolean, terms | `au-checkbox` |
| Radio | Single selection dari list | `au-radio` dalam `au-radio-group` |
| Toggle | On/off setting, feature switch | `au-toggle` |
| Autocomplete | Search + select dari dataset besar | `au-autocomplete` |
| Datepicker | Date selection | `au-datepicker` |

### Data Display
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Text | Semua teks Aurora typography | `[auText]` — variants: heading-l/m/s, body-l/m/s, body-semibold-l/m/s |
| Table | Data terstruktur, list dengan sort/filter | `au-table` |
| Icons | Visual indicator, button icon, status | `au-icon` (800+ SVG) |
| Skeleton | Loading placeholder | `au-skeleton` |
| Progress Bar | Task progress, upload progress | `au-progress-bar` |
| Infinite Loader | Loading untuk infinite scroll | `au-infinite-loader` |

### Containers & Layout
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Accordion | Collapsible section, FAQ, settings | `au-accordion` |
| Dialog | 3 tipe modal beda: Modal Form / Confirmation Modal / Information Modal — lihat `page-templates.md` Template 3 | `au-dialog` |
| Carousel | Image gallery, onboarding slides | `au-carousel` |
| Scroll Container | Custom scrollable area | `au-scroll-container` |

### Feedback & Overlays
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Banner | Page-level alert, announcement, status | `au-banner` — states: informative/danger/warning/success/help |
| Toast | Temporary notification, action confirm | via service injection — types: default/danger/success/warning |
| Tooltip | Context tambahan on hover/focus | `*[auTooltip]` |
| Dropdown Menu | Action menu dari button click | `au-dropdown-menu` |
| Context Menu | Right-click contextual actions | `au-context-menu` |

### Tags & Chips
| Komponen | When to use | Selector |
|----------|-------------|----------|
| Chip | Filter, tag, selection, compact info | `au-chip` |

### Quick Selection Guide
| Need | Component |
|------|-----------|
| User confirms action | Confirmation Modal (lihat page-templates.md 3b) |
| Select ≤ 4 options | Radio |
| Select multiple | Checkbox |
| Toggle setting | Toggle |
| Choose date | Datepicker |
| Search + select large list | Autocomplete |
| Show structured data | Table |
| Multi-step process | Stepper |
| Collapsible info | Accordion |
| Page-level message | Banner |
| Temporary notification | Toast |
| Extra info on hover | Tooltip |
| Action from menu | Dropdown Menu |
| Multi-level navigation | Breadcrumb |
| Switch content views | Tab |
| Loading placeholder | Skeleton |
| Primary action | Button (primary) |
| Dangerous action | Button (destructive) |
| Show images/slides | Carousel |
| Task progress | Progress Bar |
| Paginate data | Pagination |
