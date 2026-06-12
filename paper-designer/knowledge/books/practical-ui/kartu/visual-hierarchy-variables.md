---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 4: Layout and spacing"
  page: 120
slug: "visual-hierarchy-variables"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, visual-design, layout]
apply_value: "high"
problem_domain: "layout"
---

# Visual hierarchy — 6 variables (size, colour, contrast, spacing, position, depth)

## Problem Trigger
> A page has 10 elements, and you want the user to notice element X first. How?

## The Thinking
6 levers for visual hierarchy:

1. **Size** — Bigger = more important.
2. **Colour** — Saturated / warm / brighter = stands out.
3. **Contrast** — Higher contrast vs background = prominent.
4. **Spacing** — More white space around an element = breathing room = important.
5. **Position** — Top first (F-pattern), or first in a row (Serial Position Effect).
6. **Depth** — Higher elevation (shadow) = closer/important.

Apply by order of importance. Important elements get many levers (large size + saturated color + top position + elevated). Less important ones get 1-2 light levers.

## Concrete Example
Property card:
- "Beach Getaway" (name) heading bold large + dark color.
- "Blissful Beach, NSW" (subheading) smaller regular medium color.
- "$299/night" uses size + right position + bold = the eye drops to the price.
- "Book now" uses primary color + bottom-stick + elevated shadow = always visible + clear CTA.

## Anti-pattern (what this is NOT)
A property card in flat table format — Name, Type, Price all the same size, same font, same color → hard to scan, no anchor.

## Application for Paper.id
- **Invoice Detail page** — Total Amount = biggest + bold + top-position.
- **Due Date** = secondary text color + smaller.
- **Action "Send"** = primary button + bottom-right.

Combine the 6 levers by importance. Validate with [[squint-test-validation]].

## Cross-refs
- Other cards: `[[squint-test-validation]]`, `[[one-primary-button-per-screen]]`
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 4 — Layout and spacing
- Page: 120-127
- Extraction date: 2026-05-22
- Reviewed by user: yes
