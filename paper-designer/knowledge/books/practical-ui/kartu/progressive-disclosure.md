---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 2: Less is more"
  page: 50
slug: "progressive-disclosure"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, disclosure, cognitive-load]
apply_value: "high"
problem_domain: "content"
---

# Use progressive disclosure

## Problem Trigger
> Card "Strengthen your brand with custom domain" has a heading + 4 benefit paragraphs + bullet list + CTA. Overload.

## The Thinking
Reveal information gradually as needed. Show only what's required for the current task. Advanced/secondary content is tucked behind a disclosure trigger. Slight ↑ interaction cost (1 click) for ↓↓ cognitive load (overwhelm disappears).

**Patterns:**
- Accordion (expandable section)
- "Learn more" link → modal/page
- "Show more" / collapsible bullets
- Optional field opt-in (checkbox "Receive updates via text" → if checked, mobile field appears)

## Concrete Example
Custom domain card:
- ✅ Heading + 1 paragraph + CTA. "Benefits of a custom domain" as an expandable accordion → curious users click to expand. Default state is clean.
- ❌ Show all 4 benefit paragraphs upfront → wall of text, users skip everything, abandon.

## Anti-pattern (what this is NOT)
Show all info upfront "to be transparent" → wall of text → users scan & skip → important info actually goes unread.

## Application for Paper.id
- **Table filter** — basic filter visible, advanced filter in "Advanced filter" panel.
- **Create Invoice Form** — required fields visible, optional fields in "Add notes" / "Add attachment" opt-in.
- **Detail page** — key info in hero, supporting info in tabs / accordion.
- **Create new invoice type Modal** — basic fields by default, "Advanced settings" collapsed.

## Cross-refs
- Other cards: `[[remove-unnecessary-information]]` (alternative: full cut), `[[break-choices-hicks-law]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 2 — Less is more
- Page: 50-51
- Extraction date: 2026-05-22
- Reviewed by user: yes
