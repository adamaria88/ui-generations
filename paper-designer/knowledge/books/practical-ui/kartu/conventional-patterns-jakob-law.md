---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 229
slug: "conventional-patterns-jakob-law"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, jakob-law, convention]
apply_value: "high"
problem_domain: "mindset"
---

# Stick with conventional patterns (Jakob's Law)

## Problem Trigger
> You're tempted to experiment with new UI patterns — sliding gesture for delete, swipe down for refresh, etc.

## The Thinking
**Jakob's Law** — users spend most of their time on OTHER sites/apps. They form mental models from those. Your site is easier to use if it follows familiar patterns. Stick with conventions UNLESS innovation has a compelling reason (huge usability gain).

## Conventional patterns to follow:
- Left sidebar (Outlook, Slack, Stripe, Notion)
- Logo top-left + user avatar top-right
- Save/Cancel button at the bottom of a form
- Breadcrumb under the header
- Action menu icon ⋮ (3-dot vertical)
- Tabs above content
- Hamburger menu on mobile
- Cart icon top-right in e-commerce

## Concrete Example
Rectangular radio buttons with emoji "😊 / ☹️" — innovative but unclear (can multiple be selected? is it a link?). Standard radio circle = instant clarity.

## Anti-pattern (what this is NOT)
- Logo top-RIGHT — user confused.
- Action menu uses ✱ symbol instead of ⋮ — non-standard, users don't know it's a menu.
- Save button uses icon-only ☑ — guessing game.

## Application for Paper.id
Aurora DS is built on conventional patterns. Already locked in rules:
- 3-Zone Layout (sidemenu + nav-header + main-area).
- Sticky bottom-right action button.
- Action menu ⋮ on the right of each row.
- Breadcrumb back-button on the left.

**DON'T reinvent**. Innovate only in areas with a clear unmet user need + validate via usability testing.

## Cross-refs
- Memory rule: `[[layout-rules-summary]]`, `[[breadcrumb-back-button-rule]]`, `[[aurora-lookup-ritual]]`
- Other card: `[[conventional-form-field-styles]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms (p. 229) — Jakob's Law cited multiple times throughout the book
- Extraction date: 2026-05-22
- Reviewed by user: yes
