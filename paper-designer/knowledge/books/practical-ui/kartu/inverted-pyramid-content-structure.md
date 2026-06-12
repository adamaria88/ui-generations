---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 6: Copywriting"
  page: 198
slug: "inverted-pyramid-content-structure"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [copywriting, content-structure, scannability]
apply_value: "medium"
problem_domain: "copywriting"
---

# Inverted pyramid content structure

## Problem Trigger
> Invoice empty state page — a wall of explanatory paragraphs with no hierarchy.

## The Thinking
**Inverted pyramid** structure (journalism technique):
- **Top — Most important info** (1 sentence, hard-hitting)
- **Middle — Supporting info** (1-2 sentences)
- **Bottom — Smaller background details** (optional, can be hidden behind "Learn more")

Users who skim 1 sentence still get the main point. Users who need details, read on. Inverted pyramid = scalable to attention budget.

## Concrete Example
Onboarding screen "Find existing friends":
- **Heading**: "Find existing friends by syncing your contacts" (key benefit, large)
- **Subheading**: "To help you find your friends, we'll periodically import and store your contacts" (supporting context, smaller)
- **Field + button + Learn more** (CTA + detail escape)

## Anti-pattern (what this is NOT)
4 average-length paragraphs, no heading hierarchy → users TL;DR + abandon.

Bury main point at the bottom — users who skim never get the key information.

## Application for Paper.id
- **Empty state list page** — punchy heading + 1-line subtext + primary CTA.
- **Welcome Modal / feature announcement** — inverted pyramid bullets.
- **Error message** — main reason at top, technical detail below/expandable.
- **Notification list** — title (main info) → subtitle (context) → "View detail" (escape).

## Cross-refs
- Other cards: `[[front-load-key-info]]` (sentence-level), `[[progressive-disclosure]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 6 — Copywriting
- Page: 198-199
- Extraction date: 2026-05-22
- Reviewed by user: yes
