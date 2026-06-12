---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 258
  quote_verbatim: "If everything is important, nothing is important."
slug: "one-primary-button-per-screen"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, action-hierarchy]
apply_value: "high"
problem_domain: "button"
---

# Use a single primary button for the most important action

## Problem Trigger
> A page has many important actions — should they all use primary pill blue?

## The Thinking
A primary button works because it's RARE. Once there are 2-3 primaries on the same page, dominance is gone and users are confused "which one is most important?". MAX 1 primary per visible screen (or per content-region). Other actions → secondary/tertiary.

> "If everything is important, nothing is important."

## Concrete Example
A list of people to follow with 5 rows × "Follow" button — if all 5 are primary blue, hierarchy is broken. Refactor to 5 secondary "Follow" + 1 primary "Follow All" at the top.

## Anti-pattern (what this is NOT)
Expense List toolbar with 3 primaries: [Filter] [Download] [Record Expense] — users are lost on which is most important. Fix: only "Record Expense" is primary, the rest are text-links.

## Application for Paper.id
Already locked in [[prototyping-gap-lessons]] 0h Action Hierarchy. Book confirms.

Apply to:
- Action bar (outside card): 1 primary max on the right.
- In-card toolbar: 1 primary max (if any).
- Detail page: 1 primary action ("Send Invoice" / "Pay Now") + rest secondary/tertiary.
- Modal: 1 primary + rest secondary/tertiary.

Squint test to validate (see [[squint-test-validation]]).

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Other cards: `[[3-button-weight-system]]`, `[[squint-test-validation]]`, `[[quote-if-everything-important-nothing-is]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 258-259
- Quote verbatim:
  > "If everything is important, nothing is important."
- Extraction date: 2026-05-22
- Reviewed by user: yes
