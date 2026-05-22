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

### Breadcrumb (`au-breadcrumb`)

**Source**: `aurora/projects/ui/breadcrumb/breadcrumb.component.scss`

| Property | Value |
|----------|-------|
| Container `display` | `flex` |
| Container `justify-content` | `flex-start` |
| Container `align-items` | `center` |
| Container `gap` | `var(--spacing-md)` |
| Item `font-family` | `var(--text-body-font-family)` |
| Item `font-size` | `var(--text-body-size-md)` (14px) |
| Item `font-weight` | `var(--text-body-weight-semibold)` (600) |
| Item `color` | `var(--color-text-secondary)` |
| Item `hover color` | `var(--color-action-primary-hover)` |
| Item `active color` | `var(--color-text-primary)` |
| Last item `pointer-events` | `none` (non-clickable, current page) |
| Separator `width` × `height` | `var(--spacing-xs)` × `var(--spacing-xs)` (4×4 dot) |
| Separator `background-color` | `var(--color-light-grey-55)` |
| Separator `border-radius` | `var(--radius-full)` (round dot, NOT chevron) |

**Back button variant** (`au-breadcrumb-back-button`):

| Property | Value |
|----------|-------|
| `background` | `transparent` |
| `display` | `flex` align-items center, gap `var(--spacing-sm)` |
| `padding` | `var(--spacing-sm)` |
| `color` | `var(--color-light-blue-50)` #4199d5 |
| `font-size` | `var(--text-body-size-md)` |
| `font-weight` | `var(--text-body-weight-semibold)` |
| `border` | `0` |
| `box-shadow` | `none` |
| `cursor` | `pointer` |
| Content | `‹ Kembali` (chevron-left 18px stroke 1.5 + teks) |

**WAJIB di child page**: Detail / Edit / sub-screen WAJIB ada back button kiri breadcrumb. Lihat `[[breadcrumb-back-button-rule]]`.

---

### Chip-Status (`au-chip-status`)

**Source**: `aurora/projects/ui/chip-status/chip-status.component.scss`

| Property | Default | Compact |
|----------|---------|---------|
| `border-radius` | `99px` (pill) | `99px` |
| `padding` | `var(--spacing-xs) var(--spacing-md)` | `var(--spacing-2xs) var(--spacing-sm)` |
| `border` | `solid 1px transparent` | same |
| `font-size` | `var(--text-body-size-md)` (14px) | `var(--text-body-size-sm)` (12px) |
| `line-height` | `var(--text-body-line-height-md)` | `var(--text-body-line-height-sm)` |
| `font-weight` | `600` | same |
| `text-transform` | `capitalize` | same |
| `display` | `inline-block` | same |

**Color variants** (color-named, follow Aurora token enum):

Format: `au-chip-status--<color-token>`

Default mode (border + text colored, transparent bg):
- `border-color: $color`
- `color: $color`

Inverse mode (`au-chip-status--inverse`):
- `border-color: $color`
- `background-color: $color`
- `color: var(--color-text-inverse)` (white)

**Available color tokens** (per Aurora SCSS):
- `light-blue-50`, `light-blue-30`
- `light-green-50`
- `dark-blue-45`
- `light-red-50`, `light-red-25`
- `light-yellow-25`, `light-yellow-50`
- `light-grey-50`
- `light-orange-50`

**Mapping use case → variant** (panduan, bukan locked):
- Sukses / Lunas / Aktif → `light-green-50` (inverse atau default)
- Pending / Draft / Diproses → `light-yellow-25` atau `light-blue-30`
- Gagal / Ditolak / Overdue → `light-red-50`
- Cancelled / Inactive → `light-grey-50`
- Info / Notice → `light-blue-50`

---

### Context-Menu (`au-context-menu`)

**Source**: `aurora/projects/ui/context-menu/context-menu.component.scss`

| Property | Value |
|----------|-------|
| `background-color` | `var(--color-neutral-white)` #fff |
| `border-radius` | `var(--spacing-xs)` (4px) |
| `box-shadow` | `0 3px 10px 0 #00000014` (var `--box-menu-shadow`) |
| `min-width` | `160px` (var `--width-card`) |
| `color` | `var(--color-text-primary)` |
| `animation` | `au-context-menu-fade-in var(--speed-fast) var(--ease-out-regular)` |
| Content `display` | `flex` column |
| Content `width` | `100%` |
| Submenu `animation` | `au-context-menu-sub-fade-in var(--speed-normal) var(--ease-out-strong)` |

**Animation keyframe** `au-context-menu-fade-in`: opacity 0 + scale(0.9) → opacity 1 + scale(1).

**Use case**: Floating action menu (e.g., 3-dot row menu, right-click context menu). Untuk dropdown trigger dengan text label, pakai `au-dropdown-menu` (beda pattern).

**Portal pattern WAJIB** kalau menu di dalam `overflow:hidden` container (table-wrap, scroll-container): pakai `position: fixed` + `document.body.appendChild(menu)` saat open. Lihat `[[prototyping-gap-lessons]]` 0g.

---

### Dropdown-Menu (`au-dropdown-menu`)

**Source**: `aurora/projects/ui/dropdown-menu/dropdown-menu.component.scss`

| Property | Value |
|----------|-------|
| `background` | `var(--color-neutral-white)` #fff |
| `border-radius` | `var(--radius-sm)` (4px) |
| `min-width` | `200px` (var `--width`) |
| `box-shadow` | `0 3px 10px 0 rgb(0 0 0 / 8%)` |
| `outline` | `none` |
| Content `padding` | `var(--spacing-xs) 0` (vertical only) |
| Content `display` | `flex` column align-items stretch |

**Menu item** (`au-dropdown-menu__item`):

| Property | Value |
|----------|-------|
| `display` | `flex` align-items flex-start |
| `gap` | `var(--spacing-sm)` |
| `width` | `100%` |
| `padding` | `var(--spacing-sm) var(--spacing-lg)` |
| `background` | `transparent` |
| `color` | `var(--color-action-neutral-fg)` |
| `border` | `none` |
| `cursor` | `pointer` |
| `text-align` | `left` |
| `transition` | `background 200ms var(--ease-out-relax)` |
| Hover `background` | `var(--color-light-brand-15)` |
| Focus-visible `background` | `var(--color-light-brand-15)` |
| Active `background` | `var(--color-light-brand-25)` |
| Disabled `color` | `var(--color-action-disabled-fg)` |

**Title item** (`au-dropdown-menu__item--title`) — group label, non-clickable:

| Property | Value |
|----------|-------|
| `cursor` | `default` |
| `padding-top` / `padding-bottom` | `var(--spacing-xs)` |
| Label `color` | `var(--color-text-secondary)` |
| Label `font-size` | `var(--text-body-size-sm)` (12px) |
| Label `font-weight` | `600` |
| Label `text-overflow` | `ellipsis` (single-line truncate) |

**Use case**: Trigger dropdown via text label/button (mis. "Tindakan ▾", filter selector). Untuk floating context menu pakai `au-context-menu`.

**Tindakan ▾ menu di Detail page** = derive dari table 3-dot menu MINUS aksi yang sudah jadi standalone button (biasanya Ubah). Lihat `[[action-menu-derivation-rule]]`.

---

### Pagination (`au-pagination`) — OVERRIDE LOCKED

**Source**: `aurora/projects/ui/pagination/pagination.component.scss`
**Override entry**: `paper-designer/ds/AURORA-OVERRIDES.md` → "Override: au-pagination (justify-end + borderless + active light-brand-15)"

⚠️ **Component ini OVERRIDE-locked. Aurora source DIBATALKAN per item. Pakai spec di bawah ini.**

**Container layout:**

| Property | Value |
|----------|-------|
| `display` | `flex` align-items center |
| `justify-content` | `flex-end` (PRODUCTION: right-aligned, BUKAN center) |
| `gap` | `var(--spacing-lg)` |
| `padding` | `var(--spacing-lg) var(--spacing-2xl)` |
| `font-size` | `var(--text-body-size-md)` |
| `color` | `var(--color-text-secondary)` |
| `flex-wrap` | `wrap` |
| **Position** | **INSIDE `.list-card`** (anak terakhir setelah toolbar + table-scroll) |

**"Jumlah Baris" dropdown** — BORDERLESS plain text + chevron:

| Property | Value |
|----------|-------|
| `border` | `0` (NO border box) |
| `background` | `transparent` |
| `padding` | `4px 20px 4px 4px` (chevron room right) |
| `border-radius` | `var(--radius-sm)` |
| `font-size` | `var(--text-body-size-md)` |
| `font-weight` | `var(--text-body-weight-semibold)` (bold value) |
| `color` | `var(--color-text-primary)` |
| `appearance` | `none` (custom chevron via background-image) |
| Background image | chevron-down dark blue inline SVG |
| Hover `background-color` | `var(--color-light-grey-15)` |

**Nav buttons** (prev/next chevron):

| Property | Value |
|----------|-------|
| `width` × `height` | `32px × 32px` |
| `border` | `0` |
| `background` | `transparent` |
| `color` | `var(--color-text-secondary)` |
| `border-radius` | `var(--radius-sm)` |
| Hover `background` | `var(--color-light-grey-15)` |
| Disabled `color` | `var(--color-text-muted)` |
| Icon size | `18px` stroke `1.5` round caps |

**Page number buttons:**

| Property | Default | Active |
|----------|---------|--------|
| `min-width` × `height` | `32px × 32px` | same |
| `padding` | `var(--spacing-xs) var(--spacing-sm)` | same |
| `border` | `0` | `0` |
| `background` | `transparent` | `var(--color-light-brand-15)` |
| `color` | `var(--color-text-primary)` | `var(--color-text-primary)` |
| `font-weight` | regular | `var(--text-body-weight-bold)` |
| Hover `background` | `var(--color-light-grey-15)` | none (cursor: default) |

**Ellipsis** (`.pg-ell`):
- `padding`: `0 6px`
- `color`: `var(--color-text-muted)`
- `user-select`: `none`

**Wording WAJIB (locked):**
- "Jumlah Baris" (BUKAN "Rows per page")
- "Menampilkan X hingga Y dari Z entri" (BUKAN "sampai")

Lihat `[[production-pagination-rule]]` untuk detail full HTML + CSS snippet.

---

### Skeleton (`au-skeleton`)

**Source**: `aurora/projects/ui/skeleton/skeleton.component.scss`

| Property | Value |
|----------|-------|
| `position` | `relative` |
| `overflow` | `hidden` |
| `background-color` | `#e2e8f0` (placeholder gray) |
| `::after` content | shimmer overlay |
| `::after` animation | `au-skeleton-animation 1.2s infinite` |
| `::after` transform | `translateX(-100%)` → `translateX(100%)` |
| `::after` background | linear-gradient white 0% → 40% → 0% (shimmer effect) |

**Disable shimmer**: tambah class `au-skeleton-none` → `::after { animation: none }`.

**Animation keyframe** `au-skeleton-animation`:
```css
from { transform: translateX(-100%); }
to   { transform: translateX(100%); }
```

**Use case**: Loading state placeholder yang **mimicking content shape** (text line, card, image, table row). JANGAN spinner generic — Skeleton lebih informatif karena user tau apa yang sedang loading.

**Common shapes** (sizing per kebutuhan, bukan locked):
- Text line: `width: 100%` × `height: 14px` × `border-radius: 4px`
- Card title: `width: 60%` × `height: 20px`
- Avatar circle: `width: 32px` × `height: 32px` × `border-radius: 50%`
- Table row: replicate row layout dengan skeleton blocks per cell

**Smooth transition pattern**: pakai skeleton bareng `[[smooth-transitions-rule]]` — 700ms skeleton brief setelah submit, sebelum render data baru.

---

### Datepicker (`au-datepicker` + `au-calendar`)

**Source**: `aurora/projects/ui/datepicker/calendar/calendar.component.scss`

**Calendar container** (`au-calendar`):

| Property | Value |
|----------|-------|
| `width` | `304px` (var `--calendar-width`) |
| `background` | `var(--color-surface-light-default)` |
| `border` | `1px solid var(--color-light-grey-30)` |
| `border-radius` | `var(--radius-md)` (8px) |
| `box-shadow` | `0 3px 10px 0 #00000014` |

**Header** (`au-calendar-header`):

| Property | Value |
|----------|-------|
| `display` | `flex` justify-content space-between |
| `padding` | `var(--spacing-sm) var(--spacing-md)` |
| `border-bottom` | `1px solid var(--color-light-grey-30)` |

**Nav button** (`au-calendar-nav-button`): bg none, padding sm, radius-sm, color text-primary, hover bg `var(--color-light-brand-20)`, disabled color text-muted.

**Title button** (`au-calendar-title-button`): bg none, padding xs sm, radius-sm, font heading-sm bold, hover bg `var(--color-light-brand-20)`.

**Weekdays grid** (`au-calendar-weekdays`): grid 7 cols equal, gap xs.

**Weekday** (`au-calendar-weekday`): height 62px, text-align center, font heading-xs bold. Sunday color = `var(--color-light-red-50)`.

**Dates grid** (`au-calendar-dates`): grid 7 cols equal, gap xs 2xs.

**Date button** (`au-calendar-date`):

| Property | Value |
|----------|-------|
| `width` × `height` | `36px × 36px` (var `--calendar-date-size`) |
| `aspect-ratio` | `1` |
| `border-radius` | `50%` (round) |
| `font-size` | `var(--text-body-size-md)` (14px) |
| `font-weight` | regular |
| Hover `background-color` | `var(--color-light-brand-25)` |
| Selected `border-color` | `var(--color-light-brand-50)` |
| Disabled `color` | `var(--color-text-muted)` |

**Years grid** (`au-calendar-years`): grid 2 cols, row-gap md, padding-top md. Year button: pill (radius-full), height 40px, hover bg `var(--color-light-grey-20)`, selected = brand-50 color + border.

**Use case**: form input tanggal yang butuh full calendar picker (BUKAN native `<input type=date>`). Native boleh dipake di filter row kompak (lihat override `au-table`).

**Placeholder copy**: `var(--color-text-secondary)` italic.

---

### Number Input (composition: `au-form-field` + separator helper)

> **No Aurora dedicated component.** Aurora ga punya `au-number-input` standalone. Pattern ini = **composition** dari `au-form-field` + `<input type="number">` + JavaScript separator helper. Ref `[[number-input-separator-rule]]`.

**Use case**: input nominal / jumlah uang / quantity besar yang butuh thousand separator (5,000,000).

**Anti-pattern (DILARANG):**
- ❌ `<input type="number">` raw tanpa format — angka panjang ga readable (5000000 vs 5,000,000)
- ❌ `<input type="text">` + format manual tanpa validasi — user bisa input non-digit
- ❌ Format separator hanya saat blur — user mau lihat format LIVE saat ngetik

**Composition pattern (locked):**

```html
<div class="form-field">
  <label for="f-jml">Jumlah</label>
  <input type="text" id="f-jml" inputmode="numeric"
    placeholder="0" oninput="formatNumberInput(this)">
</div>
```

**JS helper** (global utility):

```javascript
function formatNumberInput(input){
  var raw = input.value.replace(/[^\d]/g, '');
  if(!raw){ input.value = ''; return; }
  var num = parseInt(raw, 10);
  var formatted = num.toLocaleString('en-US'); // 5,000,000
  // preserve caret position
  var caretEnd = input.selectionEnd;
  var oldLen = input.value.length;
  input.value = formatted;
  var newLen = formatted.length;
  var caretShift = newLen - oldLen;
  input.setSelectionRange(caretEnd + caretShift, caretEnd + caretShift);
}

function addNumberSeparator(inputId){
  var el = document.getElementById(inputId);
  if(el) formatNumberInput(el);
}

function unformatNumberInput(input){
  return input.value.replace(/,/g, ''); // strip separator untuk submit
}
```

**Behavior wajib:**
- ✅ Format **LIVE** saat ngetik (oninput, bukan onblur)
- ✅ Caret position **preserved** setelah format (user ga lompat ke end)
- ✅ Strip separator saat submit (`unformatNumberInput`) — backend terima raw integer
- ✅ `inputmode="numeric"` untuk mobile keyboard numeric
- ✅ Edit mode pre-fill: call `addNumberSeparator(inputId)` setelah set value awal

**Pair dengan Currency**: kalau ada currency picker (Rp / USD), pakai `au-currency-select` (Aurora) atau composition `<input>` + select inline.

**Edge case:**
- Decimal: kalau perlu (mis. 5.000.000,50), pakai `inputmode="decimal"` + extend helper untuk allow 1 dot/koma
- Negative: kalau perlu (mis. credit adjustment), allow `-` prefix di regex
- Max length: validasi di submit, bukan di oninput (biar UX smooth)

**Reference hidup**: `_output/expense-management/02-ui-aurora.html` → search `formatNumberInput` + `addNumberSeparator('f-jml')`.

**Use case nyata:**
- Form input nominal expense / invoice
- Quantity besar di order/PO
- Filter range nominal di list page

**Threshold:** kalau angka <100 (mis. quantity 1-99), tidak perlu separator — pakai `<input type="number">` raw. Threshold ini judgment per kasus.

---

### Otp-input (`au-otp-input`)

**Source**: `aurora/projects/ui/otp-input/otp-input.component.scss`

**Container**: flex column align-items center gap-md.

**Cells container** (`au-otp-input__cells`): flex align-items center gap-sm.

**Cell** (`au-otp-input__cell`):

| Property | Value |
|----------|-------|
| `width` × `height` | `38px × 44px` (fixed, min/max same) |
| `border` | `1px solid var(--color-border-default)` |
| `border-radius` | `var(--radius-sm)` (4px) |
| `background` | `var(--color-surface-light-default)` |
| `display` | `flex` center |
| `cursor` | `text` |

**Cell variants:**

| Variant | Behavior |
|---------|----------|
| `--active` | border `var(--color-focus-ring)`, bg `var(--color-surface-light-platform)`, `::after` blinking cursor (1px × 20px, animation `au-otp-blink 1s step-end infinite`) |
| `--error` | border `var(--color-state-danger-border)` |
| `--active.--error` | bg `var(--color-state-danger-bg)` + border error |
| `--disabled` (host) | bg `var(--color-surface-light-muted)`, cursor default |

**Digit text** (`au-otp-input__digit`): font heading-bold 18px, line-height heading-sm, color text-primary, user-select none.

**Hidden input** (`__hidden`): absolute 1×1 (form integration).

**Use case**: input PIN / OTP code (4-6 digit verification). JANGAN ngarang `<input type=text maxlength=1>` × N.

---

### Autocomplete (`form-autocomplete`)

**Source**: `aurora/projects/ui/autocomplete/autocomplete.component.scss`

**Container**: position relative. Modifier `.has-selection` → placeholder color `var(--color-dark-brand-50)` (not muted) saat ada selection. Modifier `.disabled` → input bg light-grey-30, color dark-brand-25.

**Options dropdown** (`__options`):

| Property | Value |
|----------|-------|
| `background` | `white` |
| `border-radius` | `4px` |
| `box-shadow` | `0 3px 10px 0 rgb(0 0 0 / 8%)` |
| `width` | `100%` |
| `z-index` | `1000` |
| `max-height` | `278px` |
| `overflow-y` | `auto` |
| Scrollbar `width` | `4px` thin, thumb `var(--color-light-brand-50)` |

**Spinner** (`__options__spinner`): text-align center, padding 12, border-top divider.

**Selected text** (`__selected-text`): color dark-brand-50, font body-md regular, ellipsis truncate, padding sm 0 sm md.

**Suffix** (`__suffix`): flex gap 12, items center. `__suffix-clear`: bg none button, cursor pointer.

**Dropdown icon**: rotate -180° default, rotate 0° saat `.opened`.

**Use case**: pilih 1 dari banyak opsi (≥5) dengan **searchable**. Untuk static list tanpa search, pakai `au-dropdown-menu` (select variant).

---

### Country-code-select (`au-country-code-select`)

**Source**: `aurora/projects/ui/country-code-select/country-code-select.component.scss`

**Container**: position relative, inline-block. Modifier `--full-width` → display block + 100%. `.disabled` → opacity-50, cursor not-allowed.

**Trigger button** (`__trigger`):

| Property | Value |
|----------|-------|
| `display` | `flex` align-items center |
| `background` | `transparent` |
| `gap` | `var(--spacing-sm)` |
| `border` | `none` |
| `cursor` | `pointer` |
| `font-size` | `var(--text-body-size-md)` |
| `transition` | `opacity var(--speed-fast) var(--ease-out-regular)` |
| Disabled `background-color` | `var(--color-surface-light-raised)` |

**Separator** (`__separator`): width `var(--stroke-xs)` × height 20px, bg border-default. Visual divider antara flag/code dan input.

**Display** (`__display`): flex 1, text-align left, white-space nowrap.

**Use case**: input nomor telpon dengan picker kode negara (Indonesia +62, dll). Bundled dengan input phone — JANGAN bikin terpisah.

---

### Currency-select (`au-currency-select`)

**Source**: `aurora/projects/ui/currency-select/currency-select.component.scss`

**Container**: position relative, inline-block. Modifier `--full-width` → display block + 100%. `.disabled` → opacity-50.

**Trigger** (`__trigger`): sama spec dengan `au-country-code-select __trigger` (transparent bg, gap sm, no border, body-md).

**Symbol** (`__symbol`):

| Property | Value |
|----------|-------|
| `font-size` | `var(--text-body-size-md)` |
| `font-weight` | `var(--text-body-weight-semibold)` |
| `min-width` | `20px` |
| `text-align` | `center` |

**Separator** (`__separator`): width `var(--stroke-xs)` × height 20px, bg border-default.

**Display** (`__display`): flex 1, text-align left, white-space nowrap.

**Use case**: input nominal dengan currency picker (Rp / USD / SGD). Bundled dengan input amount — JANGAN bikin terpisah. Pair dengan `[[number-input-separator-rule]]` untuk format angka.

---

### Stepper (`au-stepper`)

**Source**: `aurora/projects/ui/stepper/stepper.component.scss`

**Container** (`au-stepper`): flex, width 100%, list-style none. Indicator size `--indicator-size: 24px` (`--indicator-size-dot: 20px` untuk dot variant).

**Orientation variants:**

| Variant | `flex-direction` |
|---------|-----------------|
| `--vertical` | `column` |
| `--horizontal` | `row` align-items flex-start |
| `--compact` | `column` (kompak vertical) |

**Compact variant** (`__compact-*`):

| Sub-element | Spec |
|-------------|------|
| `__compact-header` | flex justify space-between, margin-bottom sm |
| `__compact-label` | font body-md bold, color text-primary |
| `__compact-count` | font body-sm, color text-secondary |
| `__compact-bar` | flex gap sm width 100% |
| `__compact-segment` | height 4px, flex 1, bg `var(--color-surface-light-muted)`, radius-full, transition bg normal ease-out-regular |
| `__compact-segment--active` | bg `var(--color-action-primary-bg)` |
| `__compact-segment--interactive` | cursor pointer, focus-visible 2px+4px box-shadow ring |

**Step wrapper** (`au-step-wrapper`): flex position relative. Horizontal → flex 1, row, align-items flex-start.

**Use case**: step-by-step process (onboarding, multi-step form, checkout flow). Compact variant = progress bar segments untuk fit di kecil viewport.

---

### Progress-bar (`au-progress-bar`)

**Source**: `aurora/projects/ui/progress-bar/progress-bar.component.scss`

**Wrapper** (`au-progress-bar__wrapper`):

**Top container** (`__top-container`): flex row gap-md.
- `__title` (`au-title`): flex 1, font body-md bold, line-height heading-md, color dark-brand-50.
- `__progress` (`au-progress`): font body-md, color dark-brand-50.

**Helper text** (`__helper-text`): font body-md, color text-secondary, line-height heading-md.

**Line** (`__line`):

| Property | Value (default) | Compact |
|----------|----------------|---------|
| `height` | `var(--spacing-lg)` (16px) | `var(--spacing-sm)` (8px) |
| `background-color` | `var(--color-light-brand-25)` | same |
| `border-radius` | `var(--radius-xl)` | same |
| `margin` | `var(--spacing-xs) 0` | inline with row |

**Color bar** (`au-color-bar`): position absolute, gradient linear 90deg `var(--color-light-green-50)` → `var(--color-light-blue-50)` dengan `--gradient-stop` percentage property animated.

**Compact mode** (`--compact`): flex row gap-xs align-items center.

**Use case**: determinate progress (% known) — upload file, task progress, onboarding completion. Untuk indeterminate (no % known) pakai `au-skeleton` atau `au-infinite-loader`.

---

### Connection-icon (`au-connection-icon`)

**Source**: `aurora/projects/ui/connection-icon/connection-icon.component.scss`

**Container**: `:host` display inline-flex, align-items center, justify-content center.

Komponen ini = minimal wrapper untuk icon connection status (online/offline/connecting). Styling specific per variant ada di Aurora interface (varian per state).

**Use case**: indicator status koneksi (real-time connection, websocket state, sync indicator). Pakai bareng dengan `au-icon` catalog untuk visual icon.

---

### Carousel (`au-carousel`)

**Source**: `aurora/projects/ui/carousel/carousel.component.scss`

**Container** (`au-carousel`): position relative, width 100%, flex column gap-lg.

**Wrapper** (`__wrapper`): position relative, flex align-items center gap-lg.

**Container slider** (`__container`): position relative, flex 1, overflow hidden.

**Items track** (`__items`): position relative, width 100%.

**Nav button** (`__nav`):

| Property | Value |
|----------|-------|
| `z-index` | `10` |
| `display` | `flex` center |
| `padding` | `0` |
| `border` | `none` |
| `background` | `none` |
| `color` | `var(--color-action-primary-bg)` |
| `cursor` | `pointer` |
| `transition` | `all var(--speed-fast) var(--ease-out-regular)` |
| Hover | color `var(--color-action-primary-hover)`, transform `scale(1.1)` |
| Active | color `var(--color-action-primary-pressed)`, transform `scale(1)` |

**Use case**: hero showcase slides, multi-step product walkthrough, gallery preview. Pair dengan indicator dots / progress (custom atau pakai `au-stepper` compact untuk indicator).

---

### Text (`au-text`)

**Source**: `aurora/projects/ui/text/text.component.scss`

Typography component dengan token-based color + alignment + font-family variants. Pakai semantic-named modifier, BUKAN hardcode color.

**Color variants** (`au-text--<color>`):

| Modifier | Color token |
|----------|-------------|
| `--primary` | `var(--color-text-primary)` |
| `--secondary` | `var(--color-text-secondary)` |
| `--muted` | `var(--color-text-muted)` |
| `--inverse` | `var(--color-text-inverse)` |
| `--brand` | `var(--color-text-brand)` |
| `--success-dark` / `--success-light` | success state text |
| `--danger-dark` / `--danger-light` | danger state text |
| `--warning-dark` / `--warning-light` | warning state text |
| `--caution-dark` / `--caution-light` | caution state text |
| `--active-dark` / `--active-light` | active state text |

**Alignment variants** (`au-text-align--<dir>`):

| Modifier | Value |
|----------|-------|
| `--left` | `text-align: left` |
| `--center` | `text-align: center` |
| `--right` | `text-align: right` |

**Use case**: replacement untuk `<p>` / `<span>` plain dengan style token. Konsisten font-family + color + align across app.

**Catatan praktis**: kalau text di prototype sederhana (1-2 paragraph dengan token color via class), boleh pakai `<p style="color:var(--color-text-secondary)">` langsung. `au-text` component lebih cocok untuk Angular template dengan binding dinamis. Di static HTML prototype, kedua approach valid.

---

### Infinite-loader (`au-infinite-loader`)

**Source**: `aurora/projects/ui/infinite-loader/infinite-loader.component.scss`

**Host**: display inline-block.

**Container**: flex align-items center justify-content center.

**SVG**: animation `rotate var(--speed-relaxed) linear infinite` (continuous rotation).

**Circle background** (`__circle-bg`): stroke `var(--color-light-brand-15)`, stroke-linecap round.

**Circle main** (`__circle`): stroke gradient (`url('#gradient-default')`), stroke-dasharray 80,200, animation `dash var(--speed-relaxed) var(--ease-in-out-relax) infinite`.

**Variants:**

| Modifier | Circle stroke | Bg opacity |
|----------|--------------|-----------|
| `--dark` | `var(--color-neutral-white)` | bg opacity-25 |
| `--light` | bg stroke `var(--color-light-grey-40)` | — |

**Use case**: spinner indeterminate (no % known) untuk async ops yang tidak punya progress data. Untuk content placeholder loading, pakai `au-skeleton`. Untuk determinate progress, pakai `au-progress-bar`.

---

### Icons (`au-icon` catalog)

**Source**: `aurora/projects/ui/icons/icon.component.ts` + `aurora/projects/ui/icons/assets/` (846 SVG files)

**Component**: Angular component `au-icon` yang load SVG dari assets folder. Di prototype static HTML, inline SVG langsung lebih simpel.

**Size enum** (`IconSize`):

| Size | Pixel |
|------|-------|
| `s` | 18px |
| `m` | 24px |
| `l` | 32px |

**Default color**: `currentColor` (inherit dari parent text color).

**Standard stroke**: 1.5px, round caps + round joins (untuk outline icons).

**Catalog highlights** (846 icons, sample yang sering dipake):
- Navigation: `chevron-left/right/up/down`, `arrow-left/right/up/down`
- Action: `plus`, `minus`, `x`, `check`, `edit-01/02`, `trash-01/02`, `download`, `upload`
- File: `file`, `file-01/02`, `file-attachment`, `paperclip-01/02`
- Status: `check-circle`, `alert-triangle`, `info`, `info-filled`, `x-circle`
- Search/filter: `search-sm/md/lg`, `filter-lines`, `funnel`
- Form: `calendar`, `eye`, `eye-off`, `lock-01/02`
- Currency: `currency-dollar-circle`, `currency-rupee-circle`

**Lihat full catalog**: `ls /Users/working/aurora/projects/ui/icons/assets/`

**Use case**: SEMUA icon di prototype WAJIB dari katalog ini. JANGAN emoji 📎📅✓ (ref `[[prototyping-gap-lessons]]` point 3). Inline SVG dengan stroke 1.5 + currentColor untuk inherit color dari parent.

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
