---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 5: Typography"
  page: 173
slug: "regular-bold-only-no-weight-explosion"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, font-weight, design-system]
apply_value: "medium"
problem_domain: "typography"
---

# Use regular and bold font weights only

## Problem Trigger
> You download the Inter font with 9 weights (thin, light, regular, medium, semibold, bold, black) — use them all for variation.

## The Thinking
Multiple font weights = clutter + harder consistency + slower decisions. **2 weights are enough**: regular + bold. Bold for emphasis (heading + label), regular for body. Some typefaces can use semibold as the "bold" (if true bold is too heavy).

Avoid thin & light weights in body text — hard to read for vision-impaired users, fails WCAG.

## Concrete Example
An ecommerce product card uses thin + light + regular + medium + bold + extra-bold (6 weights). Refactor → just regular + bold. Cleaner, faster decisions, more consistent.

## Anti-pattern (what this is NOT)
6 weights = every designer picks what "feels right" → page A uses medium, page B uses semibold → inconsistent.

Light/thin in 14px body text → fails WCAG, hard for vision-impaired users.

## Application for Paper.id
The Aurora type scale uses only 2 weights (regular + bold). Stick to this. Audit prototypes for any element using light/thin/medium/semibold outside the token — refactor to regular/bold.

## Cross-refs
- Other cards: `[[predefined-spacing-scale]]` (same principle: limited tokens)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 5 — Typography
- Page: 173-174
- Extraction date: 2026-05-22
- Reviewed by user: yes
