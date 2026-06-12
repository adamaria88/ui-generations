---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 261
slug: "tertiary-for-multiple-or-destructive"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, destructive]
apply_value: "high"
problem_domain: "button"
---

# Use tertiary buttons for multiple or destructive actions

## Problem Trigger
> A sharing list — 5 users each with a "Remove" button. Make 5 secondary "Remove" buttons? Or what?

## The Thinking
Multiple equal-weight actions in a list → tertiary buttons. Why:
- (a) Multiple secondary buttons = compete with the primary "Send invite" below.
- (b) The visual hierarchy is broken.

**Tertiary** (underlined text-link) is low-prominence — preserves the primary action's hierarchy so it stays dominant.

Plus: **Destructive actions** (Remove, Delete) → tertiary by default. Not a red filled button "as a warning". A destructive action that's too prominent = dangerous, the user clicks it accidentally.

## Concrete Example
Share with people — a 3-editor list, a [Remove] tertiary text-link on the right of each row. The primary "Send invite" at top right is still clearly dominant.

## Anti-pattern (what this is NOT)
- 3 secondary "Remove" buttons on the rows → 3 bordered buttons that clutter, the primary now competes.
- A super-prominent red filled "Delete" button for a destructive row → the user clicks it accidentally more often.

## Application for Paper.id
- Table actions (column ⋮ menu items "Delete") = tertiary by default.
- User/partner list action buttons = tertiary.
- Combine with [[friction-ladder-for-destructive]] — destructive tertiary for the initial friction.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0f Action menu items
- Other cards: `[[3-button-weight-system]]`, `[[friction-ladder-for-destructive]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 261
- Extraction date: 2026-05-22
- Reviewed by user: yes
