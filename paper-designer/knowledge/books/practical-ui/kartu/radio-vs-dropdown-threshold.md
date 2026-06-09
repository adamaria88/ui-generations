---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 235
slug: "radio-vs-dropdown-threshold"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, radio, dropdown, conflict-aurora]
apply_value: "medium"
problem_domain: "form"
---

# Radio vs dropdown — option threshold (⚠️ conflicts vs Paper.id)

## Problem Trigger
> A "Payment type" field has 6 options — use radio buttons or a dropdown?

## The Thinking
The book recommends **≤10 options = radio**, more = dropdown.

**Radio advantages:**
- 1-click select (vs 2-click dropdown: open + select)
- Always visible — easy to compare
- Lower interaction cost for motor-impaired users
- Less prone to being "mistakenly filled & skipped"

**Dropdown advantages:**
- Compact (saves vertical space)
- Better for long lists

## Conflict vs Paper.id Rule
**Paper.id lock**: ≤4 = radio, ≥5 = dropdown (more conservative than the book — per [[paperverse-design-decisions]]).

The book serves as supporting rationale but does **NOT override** the Paper.id rule.

## Concrete Example
- Phone capacity 64/128/256GB → 3 options → radio (Paper.id rule + book rule).
- Invoice status (Draft/Sent/Paid/Overdue/Cancelled) → 5 options → dropdown (Paper.id rule). The book would recommend radio since 5 ≤ 10.

## Anti-pattern (what this is NOT)
Capacity with 2 options using a dropdown → 2-click vs 1-click radio = unnecessary extra friction.

## Application for Paper.id
**Stick with the Paper.id rule of ≤4**. Log the book's ≤10 threshold in `IMPROVEMENT-OPPORTUNITIES.md` as a data point — if a future iteration wants to evaluate a looser threshold (5-8), the source is on record.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (radio threshold), `[[knowledge-vs-ds-priority-flow]]`
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Radio threshold evaluation"

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 235
- Extraction date: 2026-05-22
- Reviewed by user: yes
