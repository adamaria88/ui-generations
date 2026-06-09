---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 238
  quote_verbatim: "Borders are a great way to distinguish two elements, but they aren't the only way, and using too many can make your design feel busy and cluttered."
slug: "fewer-borders-alternatives"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [visual-polish, spacing, depth, border]
apply_value: "high"
problem_domain: "visual-polish"
---

# Fewer Borders — 3 Alternatives

## Problem Trigger
> Layout feels "busy" or "cluttered" because there are too many border lines as separators, or the design looks overly boxy.

---

## The Thinking
> Borders are the most obvious way to separate two elements — but not the only way, and too many borders make a design feel noisy. Three subtler alternatives: (1) **Box shadow** — outlines an element like a border but softer and less "cutting"; works best when the element color differs from the background. (2) **Two different background colors** — adjacent elements use slightly different backgrounds (e.g., `hsl(200, 10%, 94%)` vs white) — enough to create a boundary without a physical line. (3) **Extra spacing** — add more margin/padding between groups — spacing alone is enough to create separation without additional UI.

---

## Concrete Example (1 real example)
> Contacts list dialog: the search field is separated from the list not with a border — but using `background: hsl(200,10%,94%)` in the search area vs white in the list. Or using `box-shadow: 0 5px 15px 0 hsla(0,0%,0%,.15)` on a card vs a flat page background. Both create clear separation without a single border line.

---

## Anti-pattern (what this is NOT)
> Every table row has a border-bottom, every section has borders top and bottom, cards have borders on all sides + internal dividers too. The design looks like a spreadsheet.

---

## Application for Paper.id
> For table lists: row separators can use spacing (more airy) or subtle alternating backgrounds, not thick border-bottoms. For card sections on Detail pages: use background color difference (`--color-surface-light-raised` vs white) to separate info blocks — reduce borders. For form section dividers: 32px extra spacing between section groups is enough without a `<hr>` line.

---

## Cross-refs
- Other card: `[[spacing-system-scale]]` — spacing as a separation tool
- Other card: `[[shadow-two-layers]]` — box shadow implementation
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch8 — Finishing Touches, "Use fewer borders"
- Page: 238-241
- Quote verbatim:
  > "Borders are a great way to distinguish two elements, but they aren't the only way, and using too many can make your design feel busy and cluttered."
- Extraction date: 2026-05-22
- Reviewed by user: no
