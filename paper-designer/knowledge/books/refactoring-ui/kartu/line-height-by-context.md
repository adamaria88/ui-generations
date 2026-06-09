---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 4: Designing Text"
  page: 122
  quote_verbatim: ""
slug: "line-height-by-context"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, readability]
apply_value: "high"
problem_domain: "typography"
---

# Line Height by Context

## Problem Trigger
> Headlines feel too spaced-out / loose, or body paragraphs feel cramped / hard to read.

---

## The Thinking
> Line height is not a one-size-fits-all value — it must be adjusted by context. The formula: the longer the line of text and the smaller the font, the larger the line-height needed. Headline (large, few words): 1.0-1.2 (tight). Body text (medium size, many words): 1.5-1.8 (loose for readability). Small UI labels (≤12px): 1.2-1.4. A universal default of 1.5 is not appropriate — a headline with `line-height: 1.5` looks "airy" and strange.

---

## Concrete Example (1 real example)
> H1 "Create Invoice" in the page header: `font-size: 24px; line-height: 1.2` — tight, authoritative. Descriptive paragraph below it: `font-size: 14px; line-height: 1.6` — loose, readable. Table cell text: `font-size: 14px; line-height: 1.4` — adequate, UI reading context not long-form.

---

## Anti-pattern (what this is NOT)
> All text on the page uses `line-height: 1.5` without consideration — headings feel oddly spaced, or compact field labels become too tall.

---

## Application for Paper.id
> - Page title / section heading: `line-height: 1.2-1.3`
> - Table cell content: `line-height: 1.4`
> - Form helper text / description: `line-height: 1.6`
> - Toast message: `line-height: 1.4` (2-line max)
> Aurora usually already sets these values in components — follow Aurora defaults unless there is an explicit override in AURORA-OVERRIDES.md.

---

## Cross-refs
- DS / rules: `paper-designer/rules/design-rules.md` — section Typography
- Other card: `[[hierarchy-weight-color]]` — line-height as part of the hierarchy system

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch4 — Designing Text
- Page: 122 (section "Line-height is proportional", from TOC)
- Quote verbatim: —
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
