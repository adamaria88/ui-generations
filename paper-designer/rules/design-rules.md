# Aurora Design Rules — Immutable Styling Reference

> **PURPOSE**: This file contains absolute, non-negotiable styling rules extracted directly from Aurora SCSS source files. Every value here is the **single source of truth**. When generating any output (HTML prototype, design spec, wireframe), these values MUST be used exactly as documented. **NEVER improvise, approximate, or invent styling.**

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
| `width` | `450px` |
| `padding` | `12px` |
| `border-radius` | `var(--radius-lg)` (12px) |
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

**Source of truth**: `/Users/working/ui designer/components/sidemenu.html`

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
