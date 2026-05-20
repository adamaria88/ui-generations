# Aurora Design Rules — Immutable Styling Reference

> **PURPOSE**: This file contains absolute, non-negotiable styling rules extracted directly from Aurora SCSS source files. Every value here is the **single source of truth**. When generating any output (HTML prototype, design spec, wireframe), these values MUST be used exactly as documented. **NEVER improvise, approximate, or invent styling.**

---

## ⛔ HARGA MATI — Aurora Component Lookup Ritual (4 Mekanisme, Non-Skippable)

> **Konteks**: HUKUM MATI #1 ("Semua komponen dari DS Aurora") dan #2 ("Komponen tidak ada → STOP & lapor") SUDAH ada di skill, tapi terus dilanggar karena ga punya mekanisme prosedural. 4 mekanisme di bawah = **enforcement layer** yang bikin pelanggaran tidak mungkin "kelolosan".
>
> Dikunci user 2026-05-20 setelah audit Expense Management nemu 15 dari 17 komponen di prototype ternyata custom/ngarang.

### Mekanisme 1 — Aurora Lookup Ritual (WAJIB pre-coding, 3 step urut)

Sebelum nulis CSS class baru untuk UI element apapun:

```
[STEP A] Tentukan UI need: button? input? badge? dropdown? table? toast? dst.
[STEP B] Map ke Aurora component name. SUMBER yang dipakai (urut prioritas):
         1) ls /Users/working/aurora/projects/ui/   → folder yang exist
         2) cat .../<component>/<component>.component.scss   → VALUE persis (warna, padding, radius, transition)
         3) cat .../<component>/<component>.interface.ts     → variant/types available
         4) cat .../<component>/<component>.component.ts     → behavior/props (kalau perlu)
         
         CATATAN: `paper-designer/ds/ds-core.md` cuma OVERVIEW catalog.
         DETAIL spec WAJIB dari Aurora SCSS — bukan tebakan dari catalog.

[STEP C] Putuskan:
         ✅ Ada di Aurora      → pakai class `au-<name>--<variant>` (atau adaptasi naming ke prototype),
                                 copy VALUE persis dari SCSS, JANGAN approximate.
         ❌ TIDAK ada di Aurora → STOP. Lapor ke user dengan format:
                                  "Komponen `<X>` dibutuhkan untuk `<UI need>`,
                                   TIDAK ada di Aurora. Pilihan:
                                   (a) develop di DS dulu (tunda prototype),
                                   (b) skip fitur (alternatif UX apa),
                                   (c) custom dengan alasan + masuk AURORA-OVERRIDES.md.
                                   User pilih?"
                                  JANGAN main bikin sendiri.
```

### Mekanisme 2 — Anotasi Wajib di Tiap CSS Block

Setiap CSS class untuk UI component (bukan layout helper) WAJIB punya comment header link ke Aurora source:

```css
/* AURORA: au-btn--tertiary
   Source: aurora/projects/ui/button/button.component.scss L56-63
   Variants: ButtonType (button.interface.ts) */
.btn--tertiary{...}
```

Format wajib mencakup:
- `AURORA: <component-name>--<variant>` (atau `OVERRIDE: <name>` kalau ada di AURORA-OVERRIDES.md)
- `Source: <relative-path-to-scss-file> L<start>-<end>` (line range)
- `Variants:` daftar variant yang tersedia (kalau ada)

**Class TANPA anotasi `AURORA:` atau `OVERRIDE:`** otomatis dianggap melanggar — kecuali masuk approved-custom whitelist berikut:

**Approved-custom whitelist (boleh tanpa anotasi):**
- Layout helper: `.app-layout`, `.main-area`, `.page-head`, `.action-bar`, `.tbl-toolbar`, `.form-grid`, `.field` (wrapper saja), `.screen`
- Project-internal naming: `.sidemenu*`, `.nav-header*` (dari `paper-designer/components/`)
- Overlay/review tools: `.suxc-*` (SUXC overlay system, bukan production UI)
- Page-specific decorative: `.dialog__ill`, `.empty` (decorative wrappers around Aurora components)

### Mekanisme 3 — Audit Pre-Delivery (Penjaga Konsistensi extension)

Sebelum bilang "udah jadi" ke user, **WAJIB** jalankan audit eksplisit. Skrip pseudocode:

```
1. Extract semua class: grep -oE 'class="[^"]+"' <output-file> | sort -u
2. Untuk tiap class:
   a) Cek apakah ada di approved-custom whitelist  → OK skip
   b) Cek apakah CSS block-nya punya anotasi AURORA: atau OVERRIDE: → OK
   c) Cek apakah class itu match pattern au-<name>--<variant> yang Aurora punya → OK
   d) Selain itu = FAIL
3. Kalau ada FAIL → STOP, ga boleh setor. Report ke user dengan list class bermasalah.
```

**Format report ke user kalau audit FAIL:**

```
⚠️ Audit Aurora Lookup gagal. Class yang bermasalah:
- .foo  → tidak punya counterpart Aurora, tidak punya anotasi. (Custom ngarang?)
- .bar  → punya anotasi tapi value berbeda dari SCSS source. (Approximation?)

Pilihan: (a) replace pakai Aurora component <X>, (b) masukin ke AURORA-OVERRIDES.md dengan alasan.
```

### Mekanisme 4 — Phase 1.5 Aurora Component Mapping (sebelum coding)

Sebelum mulai coding prototype apapun, build **mapping table** dan share ke user untuk approval. Phase ini sekarang masuk pipeline skill `senior-uiux-designer` sebagai **Phase 1.5 — Aurora Component Mapping**, antara understanding brief (Phase 1) dan coding (Phase 2).

**Format mapping table:**

| UI Need | Aurora Component | Variant | Aurora source file | Notes |
|---------|------------------|---------|---------------------|-------|
| Primary action btn | au-btn | primary | `button/button.component.scss` | — |
| Bulk action trigger | au-btn | tertiary-plain | `button/button.component.scss` | text-link with chevron |
| Table data display | au-table | default | `table/table.component.scss` | sticky action col |
| Status indicator | au-chip-status | success/danger/warning | `chip-status/chip-status.component.scss` | — |
| Empty state | ❌ TIDAK ADA | — | — | **STOP & lapor — pilih (a/b/c)** |

Mapping table di-attach ke prototype output sebagai header comment atau companion file. User approve mapping → baru coding boleh jalan.

### Mekanisme Override — `AURORA-OVERRIDES.md`

Kalau user prefer custom diatas spec Aurora (misal Aurora-nya jelek/outdated), catat eksplisit di `paper-designer/ds/AURORA-OVERRIDES.md`:

```markdown
## Override: <component-name>

**Aurora spec:** `au-<name>` di `<scss-path>` — value X
**Override jadi:** value Y
**Alasan:** <user decision date + reason>
**Approved by:** <user> on <date>
```

Class yang override → anotasi pakai `OVERRIDE:` bukan `AURORA:`. Override hanya valid kalau ada entry di AURORA-OVERRIDES.md. **Custom diam-diam tanpa entry = pelanggaran.**

---

## Global Rules

1. **Font family is ALWAYS `'Lato', sans-serif`** — no other font, ever.
2. **Colors MUST use CSS custom properties** (`var(--token-name)`) — never hardcode hex values directly in component styles.
3. **Spacing MUST follow the 4px grid** — only use values from the spacing scale (2px–40px).
4. **Border-radius MUST use Aurora tokens** — never use arbitrary radius values.
5. **Transitions MUST use Aurora speed + easing tokens** — never use generic `ease` or arbitrary durations.
6. **All interactive elements MUST have `:hover`, `:active`, `:focus-visible`, and `:disabled` states.**
7. **Focus ring**: `outline: 2px solid var(--color-focus-ring); outline-offset: 2px` (unless component specifies otherwise).

---

## Component Rules

### Button (`au-btn`)

| Property | Default | Compact |
|----------|---------|---------|
| `border-radius` | `var(--radius-full)` (9999px) | `var(--radius-full)` (9999px) |
| `padding` | `8px 16px` | `4px 12px` |
| `gap` | `8px` | `4px` |
| `font-size` | `14px` (body-md) | `14px` (body-md) |
| `font-weight` | `500` (medium) | `500` (medium) |
| `line-height` | `22px` | `22px` |
| `icon size` | `18px × 18px` | `18px × 18px` |
| `icon-only size` | `38px × 38px` | `30px × 30px` |
| `icon-only radius` | `var(--radius-lg)` (12px) | `var(--radius-lg)` (12px) |
| `transition` | `background var(--speed-slow) var(--ease-out-relax), color var(--speed-extra-slow) var(--ease-out-relax)` | same |

**Button variants:**

| Variant | Background | Color | Hover BG | Active BG |
|---------|-----------|-------|----------|-----------|
| `primary` | `var(--color-action-primary-bg)` #4199d5 | `var(--color-action-primary-fg)` #fff | `var(--color-action-primary-hover)` #89bde5 | `var(--color-action-primary-pressed)` #3385b5 |
| `secondary` | `var(--color-surface-light-default)` #fff | `var(--color-dark-grey-50)` #3c5467 | `var(--color-light-grey-15)` | `var(--color-light-grey-20)` |
| `destructive` | `var(--color-light-red-50)` #e35273 | `var(--color-neutral-white)` #fff | `var(--color-light-red-40)` #ee94a8 | `var(--color-light-red-60)` #b52b55 |
| `tertiary` | transparent | `var(--color-light-brand-50)` #4199d5 | `var(--color-light-brand-15)` | `var(--color-light-brand-25)` |
| `tertiary-plain` | transparent, padding: 0, border-radius: 0, box-shadow: none | `var(--color-light-brand-50)` | — | — |
| `disabled` (all) | `var(--color-action-disabled-bg)` | `var(--color-action-disabled-fg)` | — | — |

**Primary/Secondary button box-shadow (4-layer):**
```css
box-shadow:
  0 0 0 1px rgb(10 13 18 / 18%) inset,
  0 1px 0 1px rgb(255 255 255 / 10%) inset,
  0 -2px 0 0 rgb(10 13 18 / 5%) inset,
  0 1px 2px 0 rgb(10 13 18 / 5%);
```

---

### Form Field (`au-form-field`)

| Property | Default | Compact |
|----------|---------|---------|
| Wrapper `gap` | `8px` | `8px` |
| Control `border` | `1px solid var(--color-light-grey-40)` | same |
| Control `border-radius` | `var(--radius-sm)` (4px) | `var(--radius-sm)` (4px) |
| Control `background` | `var(--color-neutral-white)` | same |
| Input `padding` | `8px 12px` | `4px 8px` |
| Input `min-height` | `40px` | `30px` |
| Input `font-size` | `14px` | `14px` |
| Input `color` | `var(--color-dark-brand-50)` | same |
| Placeholder `color` | `var(--color-dark-brand-25)` | same |
| Transition | `border-color var(--speed-normal) var(--ease-out-powerful)` (300ms) | same |

**Form field states:**

| State | Border Color | Background |
|-------|-------------|------------|
| Default | `var(--color-light-grey-40)` | `var(--color-neutral-white)` |
| Active/Focus | `var(--color-light-brand-40)` | `var(--color-light-blue-10)` |
| Error | `var(--color-light-red-30)` | — |
| Disabled | — | `var(--color-light-grey-30)`, cursor: not-allowed |

---

### Dialog (`au-dialog`)

| Property | Value |
|----------|-------|
| `border-radius` | `var(--radius-lg)` (12px) |
| `background` | `var(--color-surface-light-default)` |
| `box-shadow` | `0 8px 24px rgb(0 0 0 / 15%)` |
| `font-family` | `var(--text-body-font-family)` |
| Header `padding` | `16px 20px` |
| Header `min-height` | `56px` |
| Header `border-bottom` | `1px solid var(--color-border-subtle)` |
| Title `font-size` | `16px` (heading-sm) |
| Title `font-weight` | `700` (bold) |
| Content `padding` | `16px 20px` |
| Content `max-height` | `65vh` |
| Close button size | `32px × 32px` |
| Close button `border-radius` | `var(--radius-sm)` (4px) |
| Bottom sheet `border-radius` | `12px 12px 0 0` |
| Drag handle | `40px × 4px`, centered, `var(--color-border-default)`, `border-radius: var(--radius-full)` |

---

### Table (`au-table`)

| Property | Value |
|----------|-------|
| Wrapper `border` | `1px solid var(--color-border-default)` |
| Wrapper `border-radius` | `8px` |
| Wrapper `background` | `var(--color-surface-light-default)` |
| Header `background` | `var(--color-surface-light-raised)` |
| Header cell `padding` | `12px 16px` |
| Header cell `font-weight` | `700` |
| Header cell `font-size` | `14px` |
| Body cell `padding` | `14px 16px` |
| Body cell `font-size` | `14px` |
| Body cell `font-weight` | `400` |
| Row `border-bottom` | `1px solid var(--color-border-default)` |
| Row hover | `background: var(--color-light-brand-20)` |
| Selected row | `background: var(--color-state-active-bg)` |
| Footer `background` | `var(--color-surface-light-raised)` |
| Footer `font-weight` | `600` |
| Action button size | `32px × 32px`, `border-radius: var(--radius-md)` (8px) |
| Mobile cell padding | `12px` |
| Mobile font-size | `12px` |

---

### Banner (`au-banner`)

| Property | Value |
|----------|-------|
| `padding` | `var(--spacing-md)` (12px) |
| `border-radius` | `var(--radius-md)` (8px) |
| `background` | `var(--color-surface-light-default)` |
| Icon size | `24px × 24px` |
| Content `gap` | `8px` |
| Text `gap` | `4px` |

**Banner state borders (subtle type):**

| State | Border Color |
|-------|-------------|
| informative | `var(--color-interactive-blue-50)` #4199d5 |
| success | `var(--color-state-success-border)` #d6eabe |
| danger | `var(--color-state-danger-border)` #f6c7d2 |
| warning | `var(--color-state-caution-border)` #f8e6b6 |
| help | `var(--color-light-grey-45)` #d6dbe0 |

**Banner attention type (filled background):**

| State | Background | Border |
|-------|-----------|--------|
| informative | `var(--color-light-blue-15)` | `var(--color-interactive-blue-50)` |
| success | `var(--color-light-green-20)` | `var(--color-interactive-green-50)` |
| danger | `var(--color-light-red-20)` | `var(--color-interactive-red-50)` |
| warning | `var(--color-light-yellow-20)` | `var(--color-interactive-yellow-50)` |

---

### Chip (`au-chip`)

| Property | Value |
|----------|-------|
| `padding` | `4px 8px` |
| `border` | `1px solid var(--color-border-default)` |
| `border-radius` | `var(--radius-full)` (9999px) |
| `background` | `var(--color-surface-light-default)` |
| `color` | `var(--color-text-secondary)` |
| `gap` | `4px` |
| `font-size` | `14px` |
| Active `background` | `var(--color-light-blue-15)` #f2f7fc |
| Active `border-color` | `var(--color-light-blue-50)` #4199d5 |
| Active `color` | `var(--color-light-blue-50)` #4199d5 |
| Counter `background` | `var(--color-action-primary-bg)` #4199d5 |
| Counter `color` | `#ffffff` |
| Counter `border-radius` | `var(--radius-full)` |
| Counter `font-size` | `12px` |
| Counter `min-width` / `height` | `16px` |

---

### Tab Group (`au-tabs-group`)

| Property | Value |
|----------|-------|
| Header `border-bottom` | `2px solid var(--color-dark-grey-20)` #d7dfe4 |
| Slider indicator `height` | `2px` |
| Slider indicator `color` | `var(--color-light-blue-50)` #4199d5 |
| Slider `transition` | `transform var(--speed-normal) var(--ease-out-regular), width var(--speed-normal) var(--ease-out-regular)` (300ms) |
| Content slide `transition` | `transform var(--speed-extra-slow) var(--ease-out-regular)` (500ms) |
| Content fade `transition` | `opacity var(--speed-normal) var(--ease-out-regular)` (300ms) |
| Inactive tab `opacity` | `0.3` |

---

### Accordion (`au-accordion`)

| Property | Default | Transparent |
|----------|---------|-------------|
| `background` | `var(--color-neutral-white)` | `transparent` |
| `border-radius` | `var(--radius-md)` (8px) | `0` |
| `border` | `1px solid var(--color-border-subtle)` | `none` (bottom only: `1px solid var(--color-border-subtle)`) |
| Header `padding` | `16px` | `16px` |
| Header `gap` | `12px` | `12px` |
| Content `padding` | `0 16px 16px 16px` | same |
| Height `transition` | `height var(--speed-extra-slow) var(--ease-out-strong)` (500ms) | same |
| Opacity `transition` | `opacity var(--speed-normal) var(--ease-out-relax)` (300ms) | same |
| Icon rotation `transition` | `transform var(--speed-normal) var(--ease-out-relax)` (300ms) | same |

---

### Toggle (`au-toggle`)

| Property | Value |
|----------|-------|
| Track `width` | `28px` |
| Track `height` | `18px` |
| Track `padding` | `2px` |
| Track `border-radius` | `var(--radius-full)` |
| Track default `background` | `var(--color-border-default)` |
| Track checked `background` | `var(--color-action-primary-bg)` #4199d5 |
| Thumb `width` / `height` | `14px` |
| Thumb `border-radius` | `50%` |
| Thumb `background` | `var(--color-neutral-white)` |
| Thumb checked `transform` | `translate(10px, -50%)` |
| Label `font-size` | `14px` |
| Container `gap` | `4px` |
| Transition | `all var(--speed-fast) var(--ease-out-regular)` (200ms) |
| Disabled track | `var(--color-action-disabled-bg)` |
| Focus | `outline: 2px solid var(--color-focus-ring); outline-offset: 4px` |

---

### Checkbox (`au-checkbox`)

| Property | Value |
|----------|-------|
| Box `width` / `height` | `18px` |
| Box `border-radius` | `var(--radius-sm)` (4px) |
| Box `border` | `1.5px solid var(--color-border-default)` |
| Box `background` | `var(--color-neutral-white)` |
| Checked `background` | `var(--color-action-primary-bg)` #4199d5 |
| Checked `border-color` | `var(--color-action-primary-bg)` #4199d5 |
| Checked `color` (icon) | `var(--color-neutral-white)` |
| Hover `border-color` | `var(--color-action-primary-hover)` |
| Disabled `opacity` | `0.75` |
| Label `font-size` | `14px` |
| Label `font-weight` | `400` |
| Container `gap` | `8px` |
| Transition | `all var(--speed-fast) var(--ease-out-regular)` (200ms) |
| Focus | `outline: 2px solid var(--color-focus-ring); outline-offset: 2px` |

---

### Radio (`au-radio`)

| Property | Value |
|----------|-------|
| Outer `width` / `height` | `15px` |
| Outer `border-radius` | `var(--radius-full)` (9999px) |
| Outer `border` | `1.5px solid var(--color-border-default)` |
| Outer `background` | `var(--color-neutral-white)` |
| Active `border-color` | `var(--color-action-primary-bg)` #4199d5 |
| Inner circle `width` / `height` | `9px` |
| Inner circle `background` | `var(--color-action-primary-bg)` #4199d5 |
| Wrapper `width` / `height` | `24px` |
| Container `gap` | `4px` |
| Label `font-size` | `14px` |
| Disabled `border-color` | `var(--color-action-disabled-bg)` |

---

### Toast (`au-toast`)

| Property | Value |
|----------|-------|
| `width` | `380px` |
| `padding` | `12px` |
| `border-radius` | `var(--radius-md)` (8px) |
| `background` | `linear-gradient(90deg, #133f5d 0%, #0a1d28 100%)` |
| `color` | `var(--color-text-inverse)` #fff |
| `box-shadow` | `0 3px 10px 0 rgb(0 0 0 / 8%)` |
| Content `gap` | `8px` |
| Text `gap` | `4px` |
| Icon size | `32px × 32px` |
| Danger `background` | `var(--color-light-red-60)` #b52b55 |
| Slide-in animation | `translateY(-100px) → translateY(0)`, `var(--speed-slow)` (400ms) `var(--ease-out-strong)` |
| Slide-out animation | `translateY(0) → translateY(-100px)`, `200ms` |
| Mobile `max-width` | `calc(100vw - 40px)` |

> **Catatan (keputusan user 2026-05-19):** `width` & `border-radius` di-override manual ke `380px` / `8px`. Mengesampingkan Aurora SCSS (450px/12px) dan Paperverse Toast doc 2023 (300px/4px). Nilai ini yang dipakai.

---

### Tooltip (`au-tooltip`)

| Property | Value |
|----------|-------|
| `max-width` | `192px` |
| `padding` | `8px` |
| `border-radius` | `var(--radius-sm)` (4px) |
| `background` | `var(--color-surface-dark-raised)` #133f5d |
| `color` | `var(--color-text-inverse)` #fff |
| `z-index` | `1000` |
| Title `font-size` | `14px` |
| Title `font-weight` | `700` |
| Description `font-size` | `12px` |
| Description `font-weight` | `400` |
| Position offset | `12px` |
| Tip arrow size | `20px × 20px` |
| Tip arrow `background` | `var(--color-surface-dark-raised)` #133f5d |

---

### Sidemenu (Custom Component)

**Source of truth**: `/Users/working/ui-generations/paper-designer/components/sidemenu.html`

| Property | Value |
|----------|-------|
| `width` | `240px` |
| `background` | `linear-gradient(to bottom, #0b2835, #206a9c 76.563%, #257ab4)` |
| `height` | `100vh` |
| `position` | Fixed left column in `.app-layout` flex container |

**Menu Item (`.sidemenu__item`):**

| Property | Value |
|----------|-------|
| `height` | `44px` |
| `padding` | `0 var(--spacing-lg)` (16px) |
| `gap` | `var(--spacing-md)` (12px) |
| `font-size` | `var(--text-body-size-md)` (14px) |
| `font-weight` | `var(--text-body-weight-regular)` (400) |
| `color` | `rgba(255, 255, 255, 0.85)` |
| Icon size | `20px × 20px` (`.sidemenu__item-icon`) |
| Arrow size | `16px × 16px` (`.sidemenu__item-arrow`) |
| Hover | `background: rgba(255, 255, 255, 0.1); color: white` |
| Active | `background: rgba(255, 255, 255, 0.1); font-weight: 600` |
| Expanded arrow | `transform: rotate(90deg)` |
| `transition` | `background var(--speed-fast) var(--ease-out-regular), color var(--speed-fast) var(--ease-out-regular)` |

**Submenu (`.sidemenu__submenu`):**

| Property | Value |
|----------|-------|
| Default | `display: none` |
| Open (`.open`) | `display: flex; flex-direction: column` |

**Submenu Item — Default (`.sidemenu__subitem`):**

| Property | Value |
|----------|-------|
| `height` | `40px` |
| `padding` | `0 var(--spacing-xl)` (20px) right, `padding-left: 52px` |
| `gap` | `var(--spacing-sm)` (8px) |
| `color` | `rgba(255, 255, 255, 0.6)` |
| `font-size` | `var(--text-body-size-md)` (14px) |
| Hover | `background: rgba(255, 255, 255, 0.1); color: white` |
| Active | `color: var(--color-light-brand-50); font-weight: 600` |

> Default submenu items (Penjualan, Pembelian, dll) are **indented** with `padding-left: 52px` and have **no icons**.

**Submenu Item — Lainnya (`#submenu-lainnya .sidemenu__subitem`):**

| Property | Value |
|----------|-------|
| `padding` | `0 var(--spacing-lg)` (16px) — **sejajar dengan parent** |
| `gap` | `var(--spacing-md)` (12px) |
| Icon size | `20px × 20px` (`.sidemenu__subitem-icon`) — **sama dengan parent icon** |

> Lainnya submenu items are **aligned with parent** (no indent) and each has its own **20×20 icon**.

**Icons:**

| Menu Item | Icon Source |
|-----------|------------|
| Dashboard | Custom compass SVG (viewBox `0 0 21 20`) |
| Mitra | Aurora `user-client` |
| Penjualan | Aurora `document-si` |
| Pembelian | Aurora `cart` |
| Pembayaran Digital | Aurora `credit-card-01` |
| Solusi Pendanaan | Aurora `bank` |
| Produk & Stok | Aurora `cube-01` |
| Lainnya | Aurora `chevron-down-double` |
| → Biaya | Aurora `file-minus-03` |
| → Billing | Aurora `billing` |
| → Keuangan | Custom briefcase/wallet SVG (viewBox `0 0 20 20`) |
| → Akunting | Aurora `accounting` |
| → Laporan | Aurora `report` |

**Icon rules for dark sidemenu:**
- All icons use `stroke="currentColor"` (inherits white/semi-white from text color)
- Remove any `opacity` decorative `fill` paths from Aurora icons (invisible on dark bg)
- Custom SVGs: replace `stroke="white"` / `fill="white"` with `currentColor`

**Separator (`.sidemenu__separator`):**

| Property | Value |
|----------|-------|
| `height` | `1px` |
| `background` | `rgba(255, 255, 255, 0.1)` |
| `margin` | `var(--spacing-sm) var(--spacing-lg)` |

> Separator is placed **before Lainnya** to visually separate it from the main navigation.

**PaperPlus Promo Widget (`.sidemenu__promo`) — per Figma node 7112:4050:**

| Property | Value |
|----------|-------|
| `margin` | `0 var(--spacing-lg)`, `margin-bottom: var(--spacing-lg)` |
| `border` | `1px solid #eaedef` |
| `border-radius` | `var(--radius-sm)` (4px) |
| `overflow` | `hidden` |
| `background` | `linear-gradient(165deg, rgba(255, 255, 255, 0.5) 0%, rgba(153, 153, 153, 0) 48%)` |

**Promo Header (`.sidemenu__promo-header`):**

| Property | Value |
|----------|-------|
| `display` | `flex`, `justify-content: space-between` |
| `padding` | `var(--spacing-sm)` (8px) |
| `font-size` | `var(--text-body-size-sm)` (12px) |
| `line-height` | `18px` |
| `color` | `var(--color-neutral-white)` |

- `.sidemenu__promo-free`: `font-weight: var(--text-body-weight-semibold)` (600)
- `.sidemenu__promo-upgrade`: flex row with `gap: var(--spacing-xs)` (4px)
- `.sidemenu__promo-logo`: `<img>` tag, `height: 8px`, src: `../assets/paperplus-logo.png`
- `.sidemenu__promo-info-icon`: `14px × 14px`, `opacity: 0.7`, circle (i) icon

**Promo Divider (`.sidemenu__promo-divider`):**

| Property | Value |
|----------|-------|
| `height` | `1px` |
| `background` | `rgba(255, 255, 255, 0.15)` |

**Promo E-Meterai (`.sidemenu__promo-meterai`):**

| Property | Value |
|----------|-------|
| `display` | `flex`, `justify-content: space-between` |
| `padding` | `var(--spacing-sm)` (8px) |
| `font-size` | `var(--text-body-size-sm)` (12px) |
| Label | `font-weight: semibold` |
| Value | `font-weight: regular`, `text-align: right` |

**Promo Footer (`.sidemenu__promo-footer`):**

| Property | Value |
|----------|-------|
| `padding` | `6px var(--spacing-sm)` |
| `background` | `rgba(255, 255, 255, 0.3)` |
| Hover `background` | `rgba(255, 255, 255, 0.4)` |
| `font-size` | `var(--text-body-size-sm)` (12px) |
| `font-weight` | `var(--text-body-weight-semibold)` (600) |
| E-Shop icon | `16×16`, `fill="currentColor"` (filled shopping bag) |
| Chevron right | `10×10`, `stroke="currentColor"` |

> Promo widget has 3 rows: Header (Free | tingkatkan ke [logo] (i)), E-Meterai (label | Sisa Kuota: 0), Footer (e-shop icon + Buka Paper e-Shop + chevron).

---

## Behavioral & Pattern Rules (sumber: Paperverse 1.0)

> Bagian di atas = **nilai CSS** dari Aurora SCSS (single source of truth styling).
> Bagian ini = **aturan behavior/pattern** dari Paperverse 1.0 (cara pakai komponen, bukan nilai CSS). Dua hal beda — jangan dicampur.

### ⭐ Action Hierarchy by Page Purpose (analytical framework — WAJIB step DULU sebelum pilih komponen button)

**Anti-pattern yang sering meleset:** langsung pasang `btn--secondary` atau `btn--primary` ke setiap action tanpa nanya "ini priority-nya gimana untuk user". Hasilnya page jadi "**ramai aksi**" — semua tombol terlihat sama berat → primary action kehilangan dominance → user bingung mana yang harus dilakukan.

**Cara benar — purpose-down thinking (4 step, urutan ini wajib):**

**STEP 1 — Page ini untuk APA?** Tentukan purpose-nya satu kalimat. Contoh:
- List Pengeluaran → "lihat & kelola daftar pengeluaran"
- Detail Invoice → "lihat data invoice + ambil aksi terkait dokumen ini"
- Create Invoice → "input data invoice baru sampe tersimpan"

**STEP 2 — Klasifikasi setiap action di page by USER PRIORITY:**

| Tier | Definisi | Contoh di List Pengeluaran |
|------|----------|---------------------------|
| **Must-do (primary)** | Aksi inti — kenapa user buka page ini | Catat Pengeluaran |
| **Penting-ga-penting** | User mungkin perlu, tapi BUKAN sekarang. Sering = utilitas/sekunder | Tindakan Lainnya (bulk), Unduh, Filter |
| **Destructive / jarang** | Berisiko atau langka — wajib disembunyiin | Hapus, Arsipkan |

> **Test:** Tanya diri sendiri "kalo user buka page ini pertama kali, dia bakal langsung butuh action ini?" → Ya = primary. Tidak = penting-ga-penting. Berisiko/langka = sembunyiin.

**STEP 3 — Pilih komponen by tier:**

| Tier | Komponen | Visual |
|------|----------|--------|
| Must-do | **Pill filled (primary)** | Dominan, biru penuh. **MAX 1 per page** |
| Penting-ga-penting (aksi langsung) | **Text-link with icon** (`.btn-text`) | Teks biru primary + icon kiri, no border, no fill |
| Penting-ga-penting (menu trigger) | **Text-link with chevron** (`.btn-link`) | Teks dark blue (text-primary) + chevron, no border |
| Destructive/jarang | **3-dot menu / sub-menu** | Sembunyiin di action menu per row atau di overflow menu |

**STEP 4 — Squint test:** Tutup mata 50%, lihat page. Lo mestinya lihat **satu titik primary dominan**. Kalo lo lihat 2-3 tombol "berat" sama-sama → hierarchy rusak, balik ke step 2.

**Contoh konkret (List Pengeluaran):**

```
✅ BENAR
┌─────────────────────────────────────────────────────────┐
│ Tindakan Lainnya ▼          [ + Catat Pengeluaran ]     │  ← text-link kiri, pill primary kanan
│ (text-link, low weight)     (pill filled, dominan)      │
└─────────────────────────────────────────────────────────┘

❌ SALAH
┌─────────────────────────────────────────────────────────┐
│ [ Tindakan Lainnya ▼ ]      [ + Catat Pengeluaran ]     │  ← 2 pill = visual competition
│ (pill outline)               (pill filled)              │
└─────────────────────────────────────────────────────────┘
```

**Why this matters:** Pill filled primary itu **anchor visual** — dia bekerja karena LANGKA. Begitu lo kasih 2-3 pill di page yang sama, dominance hilang. Hierarchy by purpose memastikan tiap page punya 1 anchor & semua secondary action tetap accessible tapi ga ribut.

---

### Button — 5 Tipe Komponen

1. **Primary (pill filled)** — must-do per page (lihat framework di atas). **Hanya 1 primary per page**. Verb-based ("Simpan", "Kirim", "Bayar"). Jangan ulang object kalau konteks sudah jelas.
2. **Secondary (pill outline/neutral)** — alternatif/pendukung yang TETAP berat visual. Pakai HANYA kalau page beneran punya 2 must-do (langka — mis. "Simpan Draft" + "Kirim"). Jangan pakai untuk penting-ga-penting.
3. **Text Button (`.btn-text` / `.btn-link`)** — aksi penting-ga-penting (Unduh, Tindakan Lainnya, Filter, Learn More). No border, low weight. **Default pilihan untuk semua action non-primary.**
4. **Dropdown Button** — grup beberapa aksi terkait (lihat hierarchy di bawah).
5. **Icon-Only Button** — aksi sering & universally recognizable. **WAJIB tooltip + aria-label selalu**. Hanya untuk table/compact toolbar, BUKAN primary action halaman. Jangan pakai icon ambigu.

**Dropdown Button — Hierarchy of Actions (urutan WAJIB konsisten di semua halaman):**
1. **Page-Specific Actions** (atas) — unik per flow/entity (mis. Buat Kuitansi Penjualan, Catat Pembayaran, Duplikat Invoice, Lihat Riwayat Dokumen)
2. **Supporting Actions** (tengah) — lintas halaman (mis. Unduh PDF, Unduh Dot Matrix)
3. **Core Actions** (selalu paling bawah, **dipisah divider**) — urutan tetap: **View → Edit → Delete**. Delete **SELALU paling akhir**, merah/destructive, wajib confirmation modal.

**Destructive Button:**
- Definisi destructive: **permanen & susah dibatalkan** (keputusan user 2026-05-19)
- Warna: Aurora red. Di dropdown → **selalu paling bawah, dipisah divider**
- **WAJIB trigger Confirmation Modal** — tidak boleh langsung execute tanpa konfirmasi
- Selalu sediakan exit aman (Cancel/Go Back)
- Wording: spesifik + sebut jumlah → "Hapus 3 Invoice" (bukan cuma "Hapus"); selalu sebut object yang terpengaruh
- ⚠️ **Delete baris tabel form yang belum tersimpan = BUKAN destructive** (gampang re-add) → no confirmation modal

**Button behavior:** State model `Enabled → Hover → Pressed → Loading`. Disabled: non-interactive, contrast min 3:1, tooltip wajib jelasin kenapa disabled. Forms: set `type` eksplisit, guard double-submit (disable on submit / debounce). Motion: 120-200ms hover/press, 300-500ms loading, ease-out masuk / ease-in keluar, no bouncing.

---

### Autocomplete / Multi-Select (behavior)

> Pakai kalau: opsi banyak (**≥ 5**) DAN butuh search. Kalau **< 5 opsi → pakai Dropdown/Select**, jangan Autocomplete. Data statis lebih cocok ke Select; Autocomplete untuk list besar / dari API.

- **Trigger**: suggestion muncul setelah user ketik **2-3 karakter** (configurable)
- **Max visible suggestions**: ~10 items
- **Option text**: ≤ 35 karakter, scannable, single-line (jangan nested/multi-line kecuali perlu)
- **Filtering**: dinamis per input, **highlight** substring yang match
- **Keyboard**: `↑↓` navigasi, `Enter` confirm, `Esc` tutup list
- **Selection**: pilih opsi → isi field + tutup list
- **States wajib**: Default, Focused/Active, Hover, Selected, Error, Disabled, **No Result Found** ("No results found" — jangan dropdown kosong tanpa feedback), **Loading** (shimmer kalau fetch dari API/BE)
- Focus & blur: dropdown nutup saat field kehilangan fokus / setelah selection

---

### Confirmation Modal & Information Modal (behavior)

Detail lengkap kapan-pakai + anatomy + copy → lihat `page-templates.md` Template 3b & 3c. Ringkas pembeda kritis:

| | Confirmation Modal | Information Modal |
|---|---|---|
| Risk | High | Low |
| **Default focus** | **Cancel** (aksi aman) | **Primary** action |
| Action | Destructive / Permanent | Safe / Reversible |
| Async sukses | auto-close → success toast | auto-close → success toast |
| Async gagal | modal tetap buka + Try Again | — |
| Copy pattern | What happened → What can do → next step | What happened → Why it matters → next step |
| Illustration | warning/destructive | soft (jangan harsh warning icon) |

Jangan: modal chain (modal nyambung modal), Information Modal untuk destructive, Confirmation Modal untuk success state.

---

### Error Message (sistem lengkap)

**Component level (3):**
| Tipe | Kapan | Copy pattern |
|------|-------|-------------|
| **Inline Error** | error spesifik di 1 field, user bisa langsung perbaiki | what happened + suggestion |
| **Banner Error** | blocking / multiple field error / contextual failure di section/modal/page | what happened + what next to do |
| **Toast Error** | async/background task (upload file dsb), tidak butuh aksi user | what happened + what to do |

**Container level (2):**
- **Modal Error** — error mid-flow tapi user tetap di halaman (network/connection, gagal submit karena sistem). JANGAN untuk error validasi konten.
- **Page Error** — sistem nggak bisa render konten utama (404, server error). JANGAN untuk error validasi.

**Decision pattern:**
- Validation Form → Field = Inline | Modal/Side sheet = Banner + Inline | Page = Banner + Inline, lalu Toast
- System/Network/Permission → Modal level = Modal Error | Page level = Banner → Page Error

**Copy guideline universal:** `What happened → What can do → Action or next step`. Natural & informatif ("No partner selected yet"), bukan teknis/menyalahkan ("Partner cannot be empty"). Preserve input yang sudah diisi saat error.

---

### Tab — Principles

- **Pakai untuk**: aspek berbeda dari **entity yang SAMA** dalam 1 konteks (mis. tab di section/card detail)
- **JANGAN pakai untuk**: navigasi antar konten/kategori beda, atau step sequential (→ pakai navigasi utama / stepper)
- Varian: Tab Segmented (indicator), Tab Subtitle, Tab Single Line
- Scrollable: web = horizontal scroll, mobile = swipe
- Anatomy: container → tab item → tab label → counter (opsional)
- CSS values: lihat section `Tab Group (au-tabs-group)` di atas

---

### Table List — Behavior & Layout

- **Pakai untuk**: data terstruktur, banding antar baris/kolom, detail action. **JANGAN** untuk dataset kecil/simpel (→ list/cards), step sequential (→ stepper), konten visual (→ gallery)
- **Kolom**: min-width **120px**, max-width **250px**. Header title singkat (≤ 2 kata)
- **Angka WAJIB right-aligned** (scanning finansial). Empty field = tampilkan dash `-`, jangan kosong total
- **Row height**: maks 2-3 baris teks, jangan terlalu tinggi
- **Sticky (KOREKSI dari production 2026-05-20)**: HANYA **kolom action (⋮) yang sticky kanan** saat horizontal scroll (dengan shadow divider di kiri kolom action). Kolom kiri (checkbox/expand/No.) **TIDAK sticky** — ikut scroll. (Asumsi lama "checkbox sticky kiri" SALAH, sudah dibetulkan.)
- **Header label + filter row (dari production 2026-05-20)**: baris label dan baris filter = **satu blok header bertint** (`--color-surface-light-raised`), kontrol filter putih di atasnya. Kontrol filter = ukuran **Aurora form-field** (height 40px, padding 8px 12px, radius 4px, border light-grey-40). **Ikon search di filter input = SEBELAH KANAN** di dalam input (bukan kiri). Dropdown chevron juga kanan.
- **Footer pagination (dari production 2026-05-20)**: 3 grup (`Jumlah Baris: [N ▾]` · `‹ 1 2 3 4 5 … N ›` · `Menampilkan X hingga Y dari Z entri`) **disusun center sebagai 1 blok** (BUKAN `justify-content:space-between` full-width). Gap antar grup ~24px. Wording: gunakan **"hingga"** (bukan "sampai") dan **"entri"** generic (bukan "invoice"/"pengeluaran"/dll). **Active page** = highlight ringan biru muda (`--color-light-brand-15`) dengan teks primary — **BUKAN** solid primary + teks putih. **Chevron prev/next** = plain icon tanpa border box (transparan, hover light-grey-15).
- **Type**: Fixed (default, kolom muat di viewport) vs Horizontal Scrolling (kolom banyak)
- **Behaviors**: row hover, column hover, sticky action menu (3-dot), multi-row selection (checkbox → bulk action menu muncul), Search No Result state, Empty state
- Dataset besar → sediakan sorting + filtering per kolom
- JANGAN: overload kolom (prioritaskan info kunci), teks terlalu kecil, hover row buat expand

#### Bentukan Tabel Standar (referensi hidup: `_output/expense-management/02-ui.html`, dikunci user 2026-05-20)

Urutan kolom kiri→kanan:
1. **Checkbox** (master di header → toggle semua; per-row → bulk-select). Width ~46px. **TIDAK sticky.**
2. **Expand chevron** (klik → buka detail row di bawahnya). Width ~40px. **TIDAK sticky.**
3. **Kolom data** (N kolom, sortable pakai ikon sort dua-panah, numeric right-aligned, badge compact, paperclip SVG untuk bukti).
4. **Action ⋮** (3-dot dropdown). Width ~56px. **Sticky kanan** dengan shadow divider di kiri.
   - **Item dropdown WAJIB pakai ikon leading** (Aurora SVG, 18×18, stroke 1.5, round caps). Warna ikon = `--color-text-primary` (dark blue `#133f5d`); item destructive (Hapus) ikon + teks merah `--color-action-destructive-bg`. Tanpa ikon = nggak ikut produksi.
   - Min-width menu ~200px, padding 6px, item padding 10×14, font 14px **regular (400)** — bukan semibold/bold.
   - z-index tinggi (≥ 9999) supaya menu nutup di atas shadow kolom sticky.
   - **Positioning (penting)**: portal menu ke `<body>` saat open (`document.body.appendChild(menu)`), `position:fixed`, anchor pakai `left = btn.getBoundingClientRect().right - menu.offsetWidth`. JANGAN naive `position:absolute` (ke-clip oleh `.table-wrap{overflow:hidden}`) atau naive `position:fixed` di tempat (rawan containing-block leak kalau ada ancestor pakai `transform/will-change/filter`). Pakai `documentElement.clientWidth` untuk clamp (BUKAN `window.innerWidth` yang include scrollbar). Auto-flip ke atas kalau kepotong, restore parent saat close.
   - Hierarchy item: Page-Specific → Supporting → divider → Core (View/Lihat → Edit/Ubah → Hapus paling akhir, merah).

Header (2 baris, **1 blok bertint**):
- Baris 1: label kolom (bold, sortable + sort icon) di bg raised.
- Baris 2: filter inline per kolom — date / select / search (icon kanan). Input style = Aurora form-field (40px, radius 4px, white di atas bg raised).

Body:
- `border-collapse:separate; border-spacing:0`; cell padding `14px 16px`; row hover bg `--color-surface-light-platform`; cell bg default white (wajib opaque biar sticky-r nggak transparan saat scroll).
- Wrapper: border 1px + radius 8px + `overflow:hidden`. Container scroll: child `.table-scroll{overflow-x:auto}` dengan `scrollbar-width:none` + `::-webkit-scrollbar{display:none}` — scrollbar horizontal **disembunyikan** (tetap bisa scroll via drag/trackpad/shift+wheel).

Footer:
- Pagination 3 grup center 1 blok (lihat bullet "Footer pagination" di atas).

Toolbar list (di luar tabel):
- **TIDAK** ada global search bar terpisah & **TIDAK** ada tombol "Filter" global — gunakan filter inline per kolom. Toolbar hanya untuk action sekunder (mis. "Unduh").

---

### Toast — Copywriting & Variants

> CSS values (width 380px, radius 8px — keputusan user) lihat section `Toast (au-toast)` di atas.

- **Kapan**: feedback aksi yang TIDAK block journey user, aksi di toast opsional
- Muncul di halaman yang sama dengan trigger, auto-hilang. Jangan redirect setelah toast. Kasih delay kalau toast punya action
- **Variants & copy**:
  | Variant | Copy guideline |
  |---------|---------------|
  | Neutral | simple & direct, low-priority done ("Perubahan disimpan") |
  | Success | konfirmasi aksi sukses ("Data berhasil disimpan") — pakai "Berhasil" bukan "Selesai" |
  | Warning | clear & concise potensi isu ("Yakin mau hapus item ini?") |
  | Error | informatif + guidance recovery ("Input tidak valid, cek lagi") |
  | Loading | indikasikan proses jalan ("Memuat...", "Menyimpan...") |
- Multi-toast: loading toast → diganti result toast (success/error) → auto-dismiss ~5s

---

## Absolute Prohibitions

1. **NEVER** use `border-radius` other than: `0`, `4px`, `8px`, `12px`, `16px`, or `9999px`
2. **NEVER** use font other than `Lato`
3. **NEVER** use font-weight other than: `400`, `500`, `600`, `700`
4. **NEVER** use font-size other than the Aurora type scale (12, 14, 16, 20, 22, 24, 28, 34, 42, 52, 64, 72, 80px)
5. **NEVER** use spacing not in the Aurora scale (2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40px)
6. **NEVER** use colors outside the Aurora palette
7. **NEVER** use `box-shadow` values other than those defined per component
8. **NEVER** use transition durations other than: `100ms`, `200ms`, `300ms`, `400ms`, `500ms`, `1000ms`
9. **NEVER** invent hover/active colors — use the exact token for each variant
10. **NEVER** omit focus-visible styles on interactive elements
11. **NEVER** use `border-width` other than: `0`, `1px`, `1.5px`, `2px`
12. **NEVER** use opacity values other than: `0`, `0.1`, `0.25`, `0.5`, `0.75`, `1`

---

## Pre-Generation Checklist

Before outputting any HTML prototype or design spec, verify:

- [ ] Every color references an Aurora token or resolved palette value
- [ ] Every spacing value is from the Aurora spacing scale
- [ ] Every border-radius is from the Aurora radius tokens
- [ ] Every font-size is from the Aurora type scale
- [ ] Every font-weight is 400, 500, 600, or 700
- [ ] Every transition uses Aurora speed + easing tokens
- [ ] Every interactive element has hover, active, focus-visible, and disabled states
- [ ] Every box-shadow matches the component's documented shadow exactly
- [ ] Button is pill-shaped (9999px) unless icon-only (12px)
- [ ] Form field control has 4px radius, NOT pill
- [ ] Dialog has 12px radius, NOT 4px or 8px
- [ ] Table wrapper has 8px radius with 1px border
- [ ] Toast has gradient background, NOT solid color (except danger)
- [ ] Tooltip background is dark (#133f5d), NOT light
- [ ] Sidemenu icons use `currentColor` stroke, NOT hardcoded colors
- [ ] Default submenu items (Penjualan, etc.) use `padding-left: 52px` indent, NO icons
- [ ] Lainnya submenu items use `padding: 0 16px` (sejajar parent), WITH 20×20 icons
- [ ] Sidemenu component source is `components/sidemenu.html` — propagate changes to all prototypes

### Pelajaran Prototyping (dari sesi 2026-05-20 — JANGAN diulang)

- [ ] **Tabel data**: kolom sortable WAJIB punya ikon sort + ada **baris filter inline per kolom** (Tanggal=date, kategori/status=dropdown, teks=search). Jangan tabel header polos. (Table List rules)
- [ ] **Pagination**: pakai pola `au-pagination` — dropdown "Jumlah Baris" + tombol chevron first/prev/next/last (18px, `vector-effect:non-scaling-stroke`, disabled = warna muted bukan opacity). Jangan cuma teks "Menampilkan X dari Y".
- [ ] **Ikon**: TIDAK PERNAH emoji (📎📅✓ dll) — selalu Aurora SVG / `au-icon`. Emoji = langsung gagal Penjaga Konsistensi.
- [ ] **Sidemenu active state**: tiap halaman WAJIB set 1 item sidemenu aktif (highlight) sesuai modul — `layout-rules.md` (sidemenu konsisten, hanya active yang berubah). Fitur baru tanpa posisi menu → tanya/komen user, jangan biarkan kosong tanpa catatan.
- [ ] **Aset shell**: komponen di `components/` TIDAK boleh pakai path relatif aset (`../assets/...`) yang putus saat di-inject ke `_output/<slug>/`. Pakai inline SVG / self-contained. (Bug logo PaperPlus — sudah difix di `sidemenu.html`.)
- [ ] **Sinkron baked component**: kalau file `_output/` sudah ke-inject (SUXC tag hilang), fix di shell source TIDAK auto-propagate — wajib fix juga blok baked di file itu (atau regenerate).
