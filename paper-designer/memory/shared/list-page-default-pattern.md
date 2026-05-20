---
name: list-page-default-pattern
description: "Default template untuk SEMUA list page (Table List, List Document, List Invoice, dll) — locked 2026-05-20. Pakai ini at-source kecuali user explicit minta variasi per-page."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 841d9c99-3d7d-4112-a0d1-ab1486d3f927
---

User mengunci pattern ini sebagai DEFAULT untuk semua list page (table list, list document, list invoice, list sales, list customer, dll) per 2026-05-20 — setelah iterasi panjang di Expense Management prototype. Variasi hanya berlaku kalo user explicit minta per kasus spesifik. Default tetap ini.

**Rule keputusan:** Sebelum bikin list page baru, mulai dari template ini. Jangan re-invent struktur. Pertanyaan ke user cuma di level isi (kolom apa, label apa, badge mana), BUKAN di level struktur layout/komponen.

**Reference hidup:** [`_output/expense-management/02-ui-aurora.html`](../../_output/expense-management/02-ui-aurora.html) — pattern ini sudah live di sana.

---

## Struktur Layout (urut atas-bawah)

### 1. Page-head — title + subtitle ONLY (no buttons)
- Title: `font 22px / line 28px / weight bold / color text-primary`
- Subtitle (opsional): `font 12px / color text-secondary`
- **TIDAK ADA tombol di page-head.** Primary action pindah ke Action-bar (lihat #3).

### 2. Banner (opsional) — `au-banner`
- Aurora `au-banner` spec, struktur `__content > __icon + __text + __close`
- Default state: `informative` (border `state-active-border`)
- Konten: pesan + link "Pelajari Sekarang" + close button

### 3. Action-bar (di LUAR table card)
- Container: `.action-bar` flex space-between, ga ada border/bg
- **LEFT**: Bulk action trigger `Tindakan Lainnya` → `au-btn--tertiary-plain` (text-link + chevron). Disabled state default — enabled saat user select ≥1 row.
- **RIGHT**: Primary action (must-do per page purpose) → `au-btn--primary` (pill filled biru). Verb-based ("Catat Pengeluaran", "Buat Invoice", "Tambah Customer", dll). Hanya **1 primary per page**.

### 4. Table Card (white wrapper, 1 card untuk SEMUA isi table)
- Container: `.table-wrap` — bg `surface-light-default`, border `1px solid border-default`, radius-md (8px), overflow hidden (untuk sticky col)

#### 4a. In-card Toolbar (di dalam card, atas table)
- Container: `.tbl-toolbar` padding `spacing-md spacing-lg`, border-bottom `1px solid border-default`
- **LEFT**: Search bar `.search` — `au-form-field` rectangle (radius-sm), suffix icon Aurora `search-sm.svg` (16px text-muted), placeholder `"Cari <entity>"` (penerima/invoice/pelanggan/dll)
- **RIGHT**: Utility action yang langsung impact table → `au-btn--tertiary` (Unduh text-link + icon). Bisa beberapa: Unduh, Refresh, Export, Sync — semua tertiary

#### 4b. Table Header (label row + filter row = 1 blok tinted cohesive)
- Background: `--color-surface-light-raised` (tinted block, kedua baris satu warna, no divider antar baris)
- **Label row** (`thead th`):
  - Padding `10px 16px 6px`
  - Font 13px bold, color text-primary, text-align LEFT untuk semua kolom (termasuk numeric column header)
  - **Sort icon** `.sort-ic`: 16px filled triangle stack ▴▾, color text-secondary, **SELALU kanan label** (gap 6px), apapun alignment kolom
- **Filter row** (`thead tr.filter-row th`):
  - Padding `0 16px 10px` (rapat ke label row)
  - Filter inline per kolom — **SEMUA kolom WAJIB punya filter** (termasuk numeric/bukti)
  - Border-bottom `1px solid border-default` (cuma di filter row, paling bawah header)
- **Filter input `.col-f`**:
  - **Tinggi 32px** (compact, locked user 2026-05-20)
  - Padding `xs md`, border `1px light-grey-40`, radius-sm, bg white, font 12px, color text-primary
  - **Placeholder color konsisten = `--color-text-muted`** across input/select/date
  - Date input: native picker icon `::-webkit-calendar-picker-indicator` di-hide, ganti overlay Aurora `calendar.svg` via `.col-date` wrapper
  - Search input: suffix Aurora `search-sm.svg` via `.col-search` wrapper, placeholder `"Cari <kolom>"`
  - Select: appearance:none + filled triangle chevron 10×6 (dark blue), placeholder `"Pilih <kolom>"`

#### 4c. Table Body
- Cell padding `14px 16px`, border-bottom `1px border-default`
- Body bg `surface-light-default`, hover bg `surface-light-platform`
- Last row: no border-bottom
- Numeric column: `td.num { text-align:right; font-variant-numeric:tabular-nums }`

#### 4c-bis. Row Click Behavior — WAJIB: klik row = navigate ke View Detail
- **Affordance**: `<tr>` body row → `cursor:pointer` + hover bg `surface-light-platform`
- **Aksi default**: klik di mana saja di row → navigate ke detail document/item (mis. List Invoice → klik row → Detail Invoice)
- **EXCLUSION (klik di area ini TIDAK trigger row navigation):**
  - Checkbox column (`.col-chk`) — user lagi select untuk bulk action
  - Expand chevron (`.col-exp`) — user lagi toggle row expand
  - Action menu button (`.row-act__btn`) — user lagi buka 3-dot menu
  - Action menu items (`.row-act__item`) — user lagi pilih action specific
- **Implementasi**: row-level `onclick="viewDetail(rowId)"` + handler check `event.target.closest('.col-chk,.col-exp,.row-act')` → kalo match, `return` (skip navigation). Atau pakai `event.stopPropagation()` di element-element exclusion.

**Why:** Setiap list document/item di Paper.id punya detail page. Klik row = entry point paling natural ke detail (Stripe/Linear/Xero pattern). Tanpa ini, user harus buka 3-dot menu → "Lihat Detail" tiap kali — friction tinggi.

**Rule scope:** Berlaku untuk **SEMUA project & SEMUA list page**:
- List Invoice → klik row → Detail Invoice
- List Pengeluaran → klik row → Detail Pengeluaran
- List Customer → klik row → Detail Customer
- List Sales Receipt → klik row → Detail Sales Receipt
- dll

Default ini = locked, tidak perlu nanya tiap kali bikin list baru.

#### 4d. Sticky columns — HANYA action column (kanan)
- Kolom kiri (checkbox, expand) **NON-sticky** — ikut scroll
- Kolom kanan (action ⋮) **sticky right**, z-index 2 di body / 5 di header
- Shadow divider kiri kolom action: `linear-gradient(270deg, rgba(19,63,93,.10), transparent)`

#### 4e. Action menu (3-dot per row)
- Trigger button `.row-act__btn`: transparent, hover bg light-grey-15
- Menu `.row-act__menu`:
  - **PORTAL ke `<body>` saat open** (lepas dari containing-block leak via `position:fixed`)
  - Aurora `au-context-menu` spec: bg white, radius-sm, shadow `0 3px 10px rgb(0 0 0 / 8%)`, min-width 200px
  - Anchor pakai `left = btn.getBoundingClientRect().right - menu.offsetWidth`, clamp via `documentElement.clientWidth`
  - Auto-flip ke atas kalo kepotong di bottom
- Menu items `.row-act__item`:
  - Padding `sm lg`, font 14px regular (BUKAN bold), color text-primary
  - **WAJIB ada icon Aurora** leading (`au-icon` SVG 18×18, stroke 1.5, round caps)
  - Item destructive: color + icon `action-destructive-bg` (merah), divider sebelum item destructive
  - Hover bg `light-brand-15`

### 5. Pagination (`au-pagination`) — 3 grup CENTER sebagai 1 blok
- Container `.pagination` flex justify-center, gap 2xl, padding lg
- **LEFT grup** `.pg-rows`: `Jumlah Baris: [10 ▾]` (select with chevron, opsi 5/10/25/50/100)
- **MIDDLE grup** `.pg-nav`: `‹ 1 2 3 4 5 … N ›`
  - Chevron prev/next: transparent, no border, hover light-grey-15
  - Page number: transparent, hover light-grey-15
  - **Active**: bg `light-brand-15`, text-primary, weight bold (BUKAN solid biru + putih)
  - Ellipsis `…` color text-muted
- **RIGHT grup**: `Menampilkan X hingga Y dari Z entri` (wording wajib: "hingga" bukan "sampai", "entri" generic bukan nama modul)

### 6. State coverage (data-states overlay)
- `default` — UI dengan data normal
- `empty` — belum ada data → custom .empty (OVERRIDE: TIDAK ada di Aurora — lihat AURORA-OVERRIDES.md)
- `loading` — skeleton `au-skeleton` shimmer
- State demos diakses via overlay-level FAB, **BUKAN** in-page button (per [[prototyping-gap-lessons]] point 0e)

---

## Component dependency (Aurora + Override)

| Element | Aurora | Override? |
|---------|--------|-----------|
| Primary CTA, bulk trigger | `au-btn` (primary, tertiary-plain, tertiary) | — |
| Banner | `au-banner` | — |
| Search & filter input | `au-form-field` + auFieldSuffix | — |
| Search icon | `au-icon` `search-sm.svg` | — |
| Calendar icon | `au-icon` `calendar.svg` | — |
| Status badge | `au-chip-status` | — |
| Row checkbox | `au-checkbox` | — |
| Action menu | `au-context-menu` | — |
| Pagination | `au-pagination` | — |
| Table | `au-table` | — |
| Loading | `au-skeleton` | — |
| Toast | `au-toast` | **width 380, radius md** (per user 2026-05-19) |
| Empty state | — | **TIDAK ADA di Aurora** (custom, lihat AURORA-OVERRIDES.md) |

---

## Kapan boleh menyimpang dari default

Cuma kalo user **explicit** minta variasi untuk kasus spesifik. Contoh:
- "Untuk list ini, hilangin Tindakan Lainnya" → OK skip element-nya
- "List ini perlu 2 primary action" → STOP & klarifikasi (anti-pattern, paling sering hierarchy salah identifikasi)
- "Filter row jangan 32, buat 40 untuk page ini" → catat sebagai override page-specific, tapi default file lain tetap 32

**Anti-pattern:** Asumsi sendiri "page ini beda, mungkin user mau X" tanpa nanya. Default = locked, deviasi = explicit ask.

---

## Why default ini dikunci

User dan gue iterate 30+ kali di Expense Management prototype sampai semua detail pas (dari sticky column, action menu portal, header tinted block, filter row 32px, ikon Aurora). Sayang kalo tiap list page baru harus iterate ulang dari nol. Default ini = state akhir hasil iterasi, ground truth untuk semua list page kedepannya.

**How to apply:** Saat bikin list page baru:
1. Copy struktur dari [`_output/expense-management/02-ui-aurora.html`](../../_output/expense-management/02-ui-aurora.html) sebagai starting point
2. Adjust isi (kolom, badge, label, modul name) — bukan struktur
3. Mapping Aurora component table tetap berlaku (M4 Aurora Lookup Ritual)
4. M3 audit sebelum setor

Hubungan ke [[aurora-lookup-ritual]] (HARGA MATI 4 mekanisme), [[prototyping-gap-lessons]] (lessons 0a-0j yang sekarang sudah baked ke default ini), [[paperverse-design-decisions]].
