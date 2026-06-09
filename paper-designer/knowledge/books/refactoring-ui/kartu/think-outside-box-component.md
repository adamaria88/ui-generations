---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 242
  quote_verbatim: "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
slug: "think-outside-box-component"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [component, visual-polish, table, navigation]
apply_value: "medium"
problem_domain: "component"
---

# Question Component Defaults

## Problem Trigger
> A component feels "generic" or boring — dropdowns, tables, forms look like templates without character, but you don't know what to change.

---

## The Thinking
> Every component has a conditioned mental default: dropdown = white box + plain text list, table = independent column per data field, radio = circle + label. Those defaults are a starting point, not a constraint. The question to ask: "What is this component actually trying to achieve for the user?" Navigation dropdown with 6 features? Could be a 2-column mega-menu with icons + short descriptions. Table with Name + Role columns that don't need to be sorted independently? Could be stacked into one column "Name (Role below it, muted)". Plan selection radio that's important? Upgrade to selectable cards.

---

## Concrete Example (1 real example)
> Table before (p.244): 6 separate columns (Name | Role | Policy | Policy Type | Location | Status). After (p.244): 4 columns — "Name + Role" stacked into 1 column (Name bold, Role muted below), "Policy + Policy Type" stacked into 1, Location, Status. More readable, more compact, richer information per row.

---

## Anti-pattern (what this is NOT)
> Designing every component exactly like the browser default or Bootstrap default — "because that's how a dropdown looks" — without asking whether that's the best way for this specific use case.

---

## Application for Paper.id
> - **Table in List Page**: related columns that don't need to be sorted independently can be stacked (e.g., "Partner Name" + "Email" in one cell). Already considered in the expense-management table.
> - **Actions Dropdown**: already upgraded with icons (per `prototyping-gap-lessons.md` point 0f).
> - **Navigation/mega menu**: if Paper.id has many sub-features, consider a grouped menu with categories + icons instead of a flat list.

---

## Cross-refs
- Other card: `[[selectable-cards-vs-radio]]` — concrete example of upgrading radio
- Memory rule: `[[prototyping-gap-lessons]]` — point 0f icons required in action menu
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch8 — Finishing Touches, "Think outside the box"
- Page: 242-246
- Quote verbatim:
  > "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
- Extraction date: 2026-05-22
- Reviewed by user: no
