---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 5: Typography"
  page: 182
slug: "line-length-40-80-chars"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, readability, layout]
apply_value: "medium"
problem_domain: "typography"
---

# Line length 40-80 characters per line

## Problem Trigger
> Long body text on a landing page at 100% browser width → 120+ characters per line.

## The Thinking
Ideal line length for readability = **40-80 characters per line** (including spaces).

- **Too long (>80)**: hard to track end-of-line → start-of-next-line. Eye fatigue.
- **Too short (<40)**: eye travels too often, feels strained.

Sweet spot: 60-75 characters (academic research consensus). Constrain using max-width container or column layout.

## Concrete Example
Article body width 720px (≈ 75 chars with 18px font) — comfortable to read.

Vs full-width 1440px (≈ 150 chars) — eye gets lost mid-line, needs to re-read.

## Anti-pattern (what this is NOT)
Landing page hero text at full-width "for impact" → ironically harder to read than constrained-width.

## Application for Paper.id
- **Description in detail card** → constrain with `max-width: 65ch` (native CSS unit).
- **Modal body text** → max-width 480px.
- **Empty state subtext** → compact max-width.
- **Long-form help/docs** → 720px column.

CSS `ch` unit is native for constraining based on character count.

## Cross-refs
- Other cards: `[[regular-bold-only-no-weight-explosion]]`, cross-ref `[[refactoring-ui:line-height-by-context]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 5 — Typography
- Page: 182-183
- Extraction date: 2026-05-22
- Reviewed by user: yes
