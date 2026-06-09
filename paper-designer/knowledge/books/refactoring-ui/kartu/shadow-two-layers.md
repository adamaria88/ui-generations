---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 6: Depth"
  page: 186
  quote_verbatim: ""
slug: "shadow-two-layers"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [depth, shadow, visual-polish]
apply_value: "medium"
problem_domain: "depth"
---

# Two-Layer Box Shadow for Realistic Depth

## Problem Trigger
> A card or floating element feels "flat" or the shadow looks artificial / unnatural.

---

## The Thinking
> Shadows in the real world consist of two components: (1) **direct shadow** — small, sharp, close to the light source (small offset, small blur, high opacity), and (2) **ambient shadow** — large, soft, spreading in all directions (larger offset, large blur, low opacity). Combining both = shadow that looks natural. A single shadow alone feels artificial. Example pattern: `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)` (close shadow + ambient). For higher floating elements: `box-shadow: 0 4px 6px rgba(0,0,0,0.07), 0 10px 15px rgba(0,0,0,0.1)`.

---

## Concrete Example (1 real example)
> From the book p.239: dialog/modal with `box-shadow: 0 5px 15px 0 hsla(0,0%,0%,.15)` — one layer for a "floating" dialog. For a subtler card: two thin layers. For a dropdown menu (high elevation): two layers with a larger spread.

---

## Anti-pattern (what this is NOT)
> `box-shadow: 0px 4px 4px rgba(0,0,0,0.25)` — a single symmetric shadow that looks flat and like a "Figma default copy-paste". Or a shadow with too high opacity (0.5+) that looks harsh.

---

## Application for Paper.id
> - Summary card on a page: single soft shadow (`0 2px 8px hsla(0,0%,0%,.08)`)
> - Dropdown menu (portal): `0 4px 6px hsla(0,0%,0%,.07), 0 10px 20px hsla(0,0%,0%,.1)`
> - Modal dialog: `0 5px 15px hsla(0,0%,0%,.15)` (already in Aurora Dialog component)
> Check `au-dialog.component.scss` for the official Aurora values before going custom.

---

## Cross-refs
- Other card: `[[fewer-borders-alternatives]]` — shadow as an alternative to borders
- Memory rule: `[[aurora-lookup-ritual]]` — check Aurora shadow tokens first
- DS / rules: `paper-designer/ds/ds-core.md` — shadow tokens

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch6 — Depth / Ch8 screenshot p.239
- Page: 186 (section "Shadows can have two parts", from TOC) + 239 (Ch8 shadow example)
- Quote verbatim: —
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
