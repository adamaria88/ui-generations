---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 5: Working with Color"
  page: 138
  quote_verbatim: "HSB is more common than HSL in design software, but browsers only understand HSL, so if you're designing for the web, HSL should be your weapon of choice."
slug: "color-palette-hsl-shades"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [color, accessibility, design-system]
apply_value: "high"
problem_domain: "color"
---

# Color Palette via HSL — 8-10 Shades per Hue

## Problem Trigger
> Colors in the design feel inconsistent, the palette feels random, or greys look "lifeless" and disconnected.

---

## The Thinking
> Use the HSL (Hue/Saturation/Lightness) model instead of hex or RGB — because it's intuitive to adjust: increase lightness = lighter shade, decrease saturation = more muted. Every hue used needs 8-10 shades (e.g., 100 = very light / 900 = very dark). Pure grey with no hue hint (`#777`, `#ccc`) looks lifeless on screen — add a little hue tint (blue-grey, warm grey). Never use color as the only signal for a state — always pair it with an icon, weight, or text (accessibility + color blindness).

---

## Concrete Example (1 real example)
> Aurora DS palette: `--color-light-brand-*` series (100-900) with a consistent hue. Grey in Aurora (`--color-text-muted`, `--color-surface-light-raised`) has a subtle blue hint — not pure `#aaa`. That's why Aurora grey feels "clean" rather than "flat".

---

## Anti-pattern (what this is NOT)
> Using arbitrary hex values (`#f5f5f5`, `#e0e0e0`, `#bdbdbd`) that have no relationship to each other. Or using blue for "approved" without a checkmark icon — color blind users can't tell the difference.

---

## Application for Paper.id
> When extending the Aurora palette for custom needs (e.g., a new state color not yet in Aurora): use an HSL-based approach — take the same hue as the Aurora brand blue, adjust lightness. Don't invent new hex values that don't connect to the system. For status badges: icon + color (not color only). Already implemented in expense-management (status badge uses icon + color).

---

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — check Aurora color tokens first before going custom
- DS / rules: `paper-designer/ds/ds-core.md` — color token list
- Other card: `[[accent-borders-visual-polish]]` — using color as an accent

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch5 — Working with Color
- Page: 138 (section "Ditch hex for HSL"), quote from p.141
- Quote verbatim: "HSB is more common than HSL in design software, but browsers only understand HSL, so if you're designing for the web, HSL should be your weapon of choice."
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
