---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: 48
  quote_verbatim: "The data itself is what matters, the label is just there for clarity."
slug: "labels-secondary-value-primary"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, typography, form, detail-page]
apply_value: "high"
problem_domain: "hierarchy"
---

# Labels Secondary, Values Primary

## Problem Trigger
> A detail card or info section feels "flat" — all text has the same weight, labels and values compete visually.

---

## The Thinking
> In a label-value pair ("Date: May 12, 2026"), what matters to the user is the VALUE. The label is just context. Therefore: value = bold / dark / larger, label = muted / grey / smaller. Labels can even be removed if the value is self-explanatory. If all labels and values use the same weight/color, users have to "parse" harder to find the data they're looking for.

---

## Concrete Example (1 real example)
> Invoice detail in Linear: "Due date" (label, 11px grey) above "March 15, 2026" (value, 14px dark bold). Users scan directly to the value; the label only helps when there's ambiguity.

---

## Anti-pattern (what this is NOT)
> A detail section with 8 rows of `Label: Value` all at 14px #333 regular — users have to read everything to orient themselves. Or the label is bolded when the data the user is looking for is in the value.

---

## Application for Paper.id
> In View Invoice / View Expense: all fields in the detail card (Date, Due Date, Invoice Number, Partner) — label = muted small, value = dark regular/medium. For monetary data (Total, Subtotal): value bold + larger. Per `[[label-disambiguation-rule]]`: labels ONLY appear when there is ambiguity (2 dates, 2 amounts, etc.).

---

## Cross-refs
- Memory rule: `[[label-disambiguation-rule]]` — when labels are needed or not
- Other card: `[[hierarchy-weight-color]]` — broader hierarchy framework
- DS / rules: `paper-designer/rules/design-rules.md` — section View Document

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch2 — Hierarchy is Everything
- Page: 48 (section "Labels are a last resort"), quote from p.51
- Quote verbatim: "The data itself is what matters, the label is just there for clarity."
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
