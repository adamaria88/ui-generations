---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 234
  quote_verbatim: "Use them as an opportunity to be interesting and exciting — don't settle for plain and boring."
slug: "empty-state-priority"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [empty-state, onboarding, visual-polish]
apply_value: "high"
problem_domain: "empty-state"
---

# Empty State as First Impression

## Problem Trigger
> A user opens a new feature for the first time and immediately sees "No data yet" or an empty table with no next steps.

---

## The Thinking
> The empty state is the FIRST thing users see when trying a new feature — it's not an afterthought, it's a design priority. An empty state should: (1) have an illustration / compelling visual (not just an icon), (2) have a clear CTA button (the first action the user should take), (3) HIDE UI controls that serve no purpose when empty (tabs, filters, sort columns — with no data, these controls are misleading and meaningless). A good empty state = excites users to start. A bad empty state = confused users who don't know what to do.

---

## Concrete Example (1 real example)
> Notion empty database page: small illustration + "Add a row to get started" + large primary "+ New" button. Tabs and filters are hidden. Users immediately know their first action.

---

## Anti-pattern (what this is NOT)
> Empty table with all column headers, active filter tabs, pagination showing "Displaying 0 of 0 entries" — all irrelevant controls still visible. Users are confused, no direction.

---

## Application for Paper.id
> For all List Pages (Expenses, Invoices, Customers, etc.): when there is zero data, hide the in-card toolbar + filter row, display an illustration + motivational text + "Record First Expense" / "Create Invoice" button. Empty state uses Aurora's empty state component if available, or custom with AURORA-OVERRIDES.md approval. Implementation priority: new features the user has never used > existing features that already have data.

---

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — check Aurora empty state component first before going custom
- Other card: `[[supercharge-defaults]]` — other visual enhancements for polish

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch8 — Finishing Touches
- Page: 234-237
- Quote verbatim:
  > "Use them as an opportunity to be interesting and exciting — don't settle for plain and boring."
- Extraction date: 2026-05-22
- Reviewed by user: no
