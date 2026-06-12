---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 3: Layout and Spacing"
  page: 66
  quote_verbatim: "A better approach is to start by giving something way too much space, then remove it until you're happy with the result."
slug: "spacing-system-scale"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [spacing, layout]
apply_value: "high"
problem_domain: "spacing"
---

# Spacing System — Start Big, Then Tighten

## Problem Trigger
> Layout feels cramped, or spacing between elements feels inconsistent / arbitrary ("why is this 13px and that 17px?").

---

## The Thinking
> Default to more whitespace than you think you need — it's easier to reduce than to add once the structure is formed. Use a spacing scale based on multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px) rather than arbitrary numbers. Proximity = relationship: elements that are related should be closer to each other than elements that are not. Content groups should have larger gaps between them than within them.

---

## Concrete Example (1 real example)
> Form with label above input: label→input gap = 4px (very close, clearly related), gap between fields = 16px (related but distinct), gap between sections = 32px (clearly separate groups). Clear spacing hierarchy without needing border dividers.

---

## Anti-pattern (what this is NOT)
> Spacing of 15px in one place, 13px in another, 20px in yet another — arbitrary values with no system. Or all gaps the same 8px so group boundaries don't feel distinct.

---

## Application for Paper.id
> For in-card toolbar and table: gap between action buttons in toolbar = 8px, gap from toolbar to table = 16px, gap between form sections = 24-32px. Already partially implemented in `_output/expense-management/02-ui-aurora.html` — the living reference. When building a new page, start with generous spacing, then tighten during review.

---

## Cross-refs
- DS / rules: `paper-designer/rules/design-rules.md` — section spacing/layout
- Other card: `[[fewer-borders-alternatives]]` — spacing as an alternative to borders

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch3 — Layout and Spacing
- Page: 66 (section "Start with too much white space"), quote from p.68
- Quote verbatim: "A better approach is to start by giving something way too much space, then remove it until you're happy with the result."
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
