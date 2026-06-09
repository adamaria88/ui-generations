---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 2: Less is more"
  page: 46
slug: "remove-unnecessary-information"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, declutter, cognitive-load]
apply_value: "medium"
problem_domain: "content"
---

# Remove unnecessary information

## Problem Trigger
> An invoice list card has 12 columns per row — they all look "important". Confused about which to cut.

## The Thinking
Every element competes for attention. An element without a logical reason = distraction = increased cognitive load. Check each element: "if removed, does the user lose critical info?". If NO → cut. Repeated/redundant info is the easiest to cut.

## Concrete Example
Contents list:
- ❌ "UI Design Fundamentals Course - Chapter 1 - Colours" / "Chapter 2 - Typography" / etc. Repeated "UI Design Fundamentals Course" on every line.
- ✅ Cut: turn it into a subheading at the top "UI Design Fundamentals Course", the list shows only "Chapter 1 - Colours" / "Chapter 2 - Typography".

## Anti-pattern (what this is NOT)
A "Customer Name: PT XYZ Tbk" field on every row of a 50-invoice table, even though it's already clearly filtered by customer XYZ in the top filter. Repeated = noise.

## Application for Paper.id
- Audit lists/tables for columns that are redundant with the filter/context above.
- Audit forms for optional fields that either earn their place or get removed.
- "Note the reason if removing" — if rarely used, don't make it visible by default.

## Cross-refs
- Other cards: `[[progressive-disclosure]]` (alternative: don't remove, just hide-by-default), `[[logical-reason-rationale]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 2 — Less is more
- Page: 46
- Extraction date: 2026-05-22
- Reviewed by user: yes
