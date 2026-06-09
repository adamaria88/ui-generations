---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: 38
  quote_verbatim: "Instead of leaving all of the heavy lifting to font size alone, try using font weight or color to do the same job."
slug: "hierarchy-weight-color"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, typography, color]
apply_value: "high"
problem_domain: "hierarchy"
---

# Hierarchy via Weight + Color (De-emphasize Pattern)

## Problem Trigger
> Page feels "busy" or the primary element doesn't feel dominant even after making it larger.

---

## The Thinking
> Hierarchy has three levers: size, weight (bold/regular), and color (primary vs muted). The instinct is always to "make the important thing bigger" — but it's more effective to de-emphasize secondary elements. Labels can be grey, supporting text can be lighter weight, meta-info can be smaller. The primary element "wins" not because it's louder, but because its competitors are quieter. Visual hierarchy is also separate from semantic hierarchy (h1/h2 can be used because the style fits, not because of HTML structure).

---

## Concrete Example (1 real example)
> Invoice list in Stripe: amount (bold, large, dark) + invoice number (regular, muted) + date (small, grey). The amount is dominant not because of a border or color — but because all other elements are muted.

---

## Anti-pattern (what this is NOT)
> All text on the page uses the same color (`color: #333`) and similar sizes. The primary action has the same visual weight as the secondary action. Users need extra effort to figure out what's important.

---

## Application for Paper.id
> In the Expense List: `Total` (bold, dark blue primary) vs `Ref Number` (regular, grey-muted) vs `Date` (small, muted). In the Invoice Detail card: large bold amount at the top, notes/labels can be muted. Applies to all list pages and detail cards. See `[[labels-secondary-value-primary]]` for the specific label pattern.

---

## Cross-refs
- Other card: `[[labels-secondary-value-primary]]` (specific application to label/value pairs)
- Memory rule: `[[label-disambiguation-rule]]` — labels should be secondary unless ambiguous
- DS / rules: `paper-designer/rules/design-rules.md` — Action Hierarchy section

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch2 — Hierarchy is Everything
- Page: 38
- Quote verbatim: "Instead of leaving all of the heavy lifting to font size alone, try using font weight or color to do the same job."
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
