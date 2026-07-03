# Aurora Design Tokens Reference

Source: `/Users/working/aurora/projects/ui/design-tokens/`

## Color - Semantic (Use These First)

### Text Colors
| Token | Usage | Resolves To |
|-------|-------|-------------|
| `--color-text-primary` | Main text, headings | dark-brand-50 `#133f5d` |
| `--color-text-secondary` | Supporting text | dark-brand-40 `#718c9e` |
| `--color-text-muted` | Disabled/subtle text | dark-brand-30 `#a5b6c1` |
| `--color-text-inverse` | Text on dark backgrounds | white `#ffffff` |
| `--color-text-brand` | Brand-colored text | dark-brand-50 `#133f5d` |

### Surface Colors
| Token | Usage | Resolves To |
|-------|-------|-------------|
| `--color-surface-light-default` | Default page background | white `#ffffff` |
| `--color-surface-light-raised` | Cards, elevated surfaces | dark-grey-10 `#f3f6f9` |
| `--color-surface-light-muted` | Subtle backgrounds | dark-grey-20 `#e7eaec` |
| `--color-surface-light-platform` | Platform/app background | light-brand-10 `#f8fbfe` |
| `--color-surface-dark-default` | Dark mode default | dark-brand-55 `#263640` |
| `--color-surface-dark-raised` | Dark mode elevated | dark-brand-50 `#133f5d` |
| `--color-surface-dark-muted` | Dark mode subtle | dark-brand-45 `#4e6f86` |
| `--color-surface-dark-platform` | Dark mode platform | dark-brand-60 `#1f2b33` |

### Border Colors
| Token | Usage | Resolves To |
|-------|-------|-------------|
| `--color-border-subtle` | Light dividers, subtle separation | `#f2f4f5` |
| `--color-border-default` | Default borders, input borders | `#dde1e5` |

### Action Colors (Buttons, Links, Interactive)
> Resolved dari Figma Variables (collection `semantic`), diverifikasi 2026-07-01.

| Token | Usage | Resolves To |
|-------|-------|-------------|
| `--color-action-primary-bg` | Primary button background | `#4199d5` |
| `--color-action-primary-hover` | Primary button hover | `#89bde5` |
| `--color-action-primary-pressed` | Primary button pressed | `#3385b5` |
| `--color-action-primary-fg` | Primary button text (white) | `#ffffff` |
| `--color-action-destructive-bg` | Destructive button background | `#e35273` |
| `--color-action-destructive-hover` | Destructive button hover | `#ee94a8` |
| `--color-action-destructive-pressed` | Destructive button pressed | `#b52b55` |
| `--color-action-destructive-fg` | Destructive button text (white) | `#ffffff` |
| `--color-action-neutral-bg` | Neutral/secondary button background | `#fdfdfe` |
| `--color-action-neutral-hover` | Neutral button hover | `#f2f4f5` |
| `--color-action-neutral-pressed` | Neutral button pressed | `#dde1e5` |
| `--color-action-neutral-fg` | Neutral button text | `#133f5d` |
| `--color-action-disabled-bg` | Disabled button background | `#e7eaec` |
| `--color-action-disabled-fg` | Disabled button text | `#7f97a7` |

### State Colors
> Resolved dari Figma Variables (collection `semantic`), diverifikasi 2026-07-01.
> ⚠️ **PENTING: Warning = ORANGE, Caution = YELLOW.** Jangan ketuker.

| State | Text Dark | Text Light / Icon | Background | Border |
|-------|-----------|-------------------|------------|--------|
| Success (hijau) | `#356021` | `#97cc56` | `#f7fbf3` | `#d6eabe` |
| Danger (merah) | `#5c122d` | `#e35273` | `#fdf3f5` | `#f6c7d2` |
| Warning (oranye) | `#8c2f0c` | `#f37d51` | `#fef6f3` | `#fbd5c7` |
| Caution (kuning) | `#6e4e00` | `#eab11c` | `#fdf9ef` | `#f8e6b6` |
| Active/Info (biru) | `#133f5d` | `#4199d5` | `#f2f7fc` | `#c2def2` |

### Focus
| Token | Usage | Resolves To |
|-------|-------|-------------|
| `--color-focus-ring` | Focus ring for interactive elements | `#89bde5` |

### Button — spec ASLI (dari komponen, extract 2026-07-01)
> ⚠️ **Radius button = `radius/full` (PILL, 9999)**, BUKAN radius-sm 4px. Tabel radius di atas nyesatin buat button.

| Prop | Compact |
|------|---------|
| Height | `30px` |
| Padding | `4px 12px` (spacing/xs · spacing/md) |
| Radius | `9999px` (pill) |
| Font | Lato SemiBold `14/22` |
| Gap icon-text | `4px` (spacings/xs) |
| **Secondary**: fill / border / text | `#ffffff` / `#eaedef` / `#133f5d` |
| **Primary**: fill / text | `#4199d5` / `#ffffff` |

### Shadow / Elevation (Effect Styles)
> Resolved dari Figma **Effect Styles** (library Paperverse), diverifikasi 2026-07-01.

| Style | Value CSS | Pakai buat |
|---|---|---|
| `Shadow Neutral-01` | `0 3px 10px #00000014` | **Kartu / card umum (notif, dll)** |
| `table/option` | `0 1px 5px #133f5d26` | Dropdown / menu / popover |
| `shade/button/color` | `0 1px 2px #0a0d120d` + inner (`#0a0d120d`, `#ffffff1a`, `#0a0d122e`) | Button (brand) |
| `shade/button/white` | `0 1px 2px #0a0d120d` + inner (`#0a0d120d`, `#0a0d120d`, `#0a0d122e`) | Button (white) |
| `Shadow Blue-01` | `0 -5px 20px #4199d51a` | Glow atas (brand) |
| `Shadow Blue-02` | `0 5px 20px #4199d51a` | Glow bawah (brand) |
| `header` | `0 4px 20px #4195d51a` | Nav header |

---

## Color - Primitive Palette

### Brand (Blue)
Light: 10 `#f8fbfe` → 60 `#3385b5` (primary: 50 `#4199d5`)
Dark: 10 `#f6f8f9` → 60 `#1f2b33` (primary: 50 `#133f5d`)

### Green
Light: 10 `#fbfdf8` → 60 `#6faf35` (primary: 50 `#97cc56`)
Dark: 10 `#e2f2e1` → 60 `#213815` (primary: 50 `#356021`)

### Red
Light: 10 `#fef8fa` → 60 `#b52b55` (primary: 50 `#e35273`)
Dark: 10 `#f9d1dc` → 60 `#330b18` (primary: 50 `#5c122d`)

### Yellow
Light: 10 `#fefcf6` → 60 `#c89d24` (primary: 50 `#eab11c`)
Dark: 10 `#faedbdff` → 60 `#382800` (primary: 50 `#6e4e00`)

### Orange
Light: 10 `#fffaf8` → 60 `#cc5a2e` (primary: 50 `#f37d51`)
Dark: 10 `#fdeae4` → 60 `#3d170d` (primary: 50 `#8c2f0c`)

### Grey
Light: 10 `#fdfdfe` → 60 `#ced3d7` (primary: 50 `#c8cfd5`)
Dark: 10 `#f3f6f9` → 60 `#2a3339` (primary: 50 `#3c5467`)

### Neutral
- Black: `#161616`
- White: `#ffffff`

---

## Typography

Font Family: **Lato** (`'Lato', sans-serif`)

### Heading Scale
| Size | Font Size | Line Height | Usage |
|------|-----------|-------------|-------|
| xs | 14px | 20px | Small labels, captions |
| sm | 16px | 20px | Sub-headings, card titles |
| md | 22px | 28px | Section headings |
| lg | 28px | 36px | Page headings |
| xl | 34px | 44px | Hero sub-headings |
| 2xl | 42px | 52px | Hero headings |
| 3xl | 52px | 60px | Display text |
| 4xl | 64px | 72px | Large display |
| 5xl | 72px | 82px | Extra large display |
| 6xl | 80px | 92px | Maximum display |

### Body Scale
| Size | Font Size | Line Height | Usage |
|------|-----------|-------------|-------|
| sm | 12px | 18px | Captions, fine print, helper text |
| md | 14px | 22px | Default body text, form labels |
| lg | 20px | 30px | Large body, intro text |
| xl | 24px | 36px | Extra large body |

### Font Weights
| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Default body text |
| Medium | 500 | Emphasized body text |
| Semibold | 600 | Headings, bold UI elements |
| Bold | 700 | Strong emphasis |

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-2xs` | 2px | Micro spacing, icon gaps |
| `--spacing-xs` | 4px | Tight spacing, tag padding |
| `--spacing-sm` | 8px | Default component padding, small gaps |
| `--spacing-md` | 12px | Medium gaps, form field spacing |
| `--spacing-lg` | 16px | Default section padding, card padding |
| `--spacing-xl` | 20px | Large padding |
| `--spacing-2xl` | 24px | Section spacing |
| `--spacing-3xl` | 28px | Large section gaps |
| `--spacing-4xl` | 32px | Container padding |
| `--spacing-5xl` | 36px | Large container padding |
| `--spacing-6xl` | 40px | Maximum spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | No rounding |
| `--radius-sm` | 4px | Subtle rounding (buttons, inputs) |
| `--radius-md` | 8px | Default cards, dialogs |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Hero sections |
| `--radius-full` | 9999px | Pills, avatars, circles |

## Border Width (Stroke)

| Token | Value | Usage |
|-------|-------|-------|
| `--stroke-none` | 0px | No border |
| `--stroke-xs` | 1px | Default borders |
| `--stroke-md` | 1.5px | Medium emphasis |
| `--stroke-lg` | 2px | Strong emphasis, focus rings |

## Opacity

| Token | Value |
|-------|-------|
| `--opacity-0` | 0 (transparent) |
| `--opacity-10` | 0.1 |
| `--opacity-25` | 0.25 |
| `--opacity-50` | 0.5 |
| `--opacity-75` | 0.75 |
| `--opacity-100` | 1 (opaque) |

---

## Animation

### Easing Functions
| Category | Relax | Regular | Strong | Powerful |
|----------|-------|---------|--------|----------|
| Ease In | `--ease-in-relax` | `--ease-in-regular` | `--ease-in-strong` | `--ease-in-powerful` |
| Ease Out | `--ease-out-relax` | `--ease-out-regular` | `--ease-out-strong` | `--ease-out-powerful` |
| Ease In-Out | `--ease-in-out-relax` | `--ease-in-out-regular` | `--ease-in-out-strong` | `--ease-in-out-powerful` |

### Duration
| Token | Value | Usage |
|-------|-------|-------|
| `--speed-extra-fast` | 100ms | Micro-interactions (hover) |
| `--speed-fast` | 200ms | Button feedback, tooltips |
| `--speed-normal` | 300ms | Default transitions |
| `--speed-slow` | 400ms | Panel slides, dialogs |
| `--speed-extra-slow` | 500ms | Complex animations |
| `--speed-relaxed` | 1000ms | Page transitions |

---

## Responsive Breakpoints

| Name | Condition | Usage |
|------|-----------|-------|
| Desktop | >= 1280px | Base/default (no media query) |
| Laptop | <= 1279px | `@media (max-width: 1279px)` |
| Tablet | <= 1023px | `@media (max-width: 1023px)` |
| Mobile | <= 767px | `@media (max-width: 767px)` |
| Mobile XS | <= 480px | `@media (max-width: 480px)` (exception) |

### Design Approach
- Desktop is the **base** - design desktop first in Figma
- Use frames: 1440px (desktop), 1024px (tablet), 375px (mobile)
