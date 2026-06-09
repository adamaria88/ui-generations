---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 1: Fundamentals + Chapter 4: Layout"
  page: 27
slug: "predefined-spacing-scale"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [spacing, design-system, consistency]
apply_value: "medium"
problem_domain: "design-system"
---

# Predefined spacing scale (XS/S/M/L/XL/XXL)

## Problem Trigger
> Every component you place has custom spacing — 12px here, 14px there, 18px somewhere else. Inconsistent.

## The Thinking
A limited set of predefined spacing options. The book recommends a 6-tier system: **XS/S/M/L/XL/XXL = 8/16/24/32/48/80pt**. Limiting choices = faster decisions + improved consistency + neater interface + easier dev handoff.

**Rule of thumb:**
- **XS (8pt)** = intra-element (badge inside card, label-input gap)
- **S (16pt)** = related elements close (field-to-field, button-to-button)
- **M (24pt)** = section padding (card padding)
- **L (32pt)** = between groups (section to section)
- **XL (48pt)** = page section divider
- **XXL (80pt)** = major hero break

## Concrete Example
Form field:
- Spacing label-to-input = XS (8pt)
- Spacing field-to-next-field = M (24pt)
- Spacing section heading = L (32pt)
- Spacing form-to-button = XL (48pt)

## Anti-pattern (what this is NOT)
Push pixels "until it feels right" — 13px, 17px, 23px random. Hardcoded magic numbers. Every designer picks differently → DS inconsistent.

## Application for Paper.id
Aurora likely already has a spacing scale (check `aurora/projects/ui/` for tokens). Audit prototypes to see if they use a consistent scale or magic numbers. Standardize to Aurora tokens.

**Note**: Cross-ref [[refactoring-ui]] (`spacing-system-scale`) — both books align on the principle. Practical UI spacing scale 8/16/24/32/48/80, Refactoring UI t-shirt scale. Convergent.

## Cross-refs
- Other cards: `[[inner-spacing-smaller-than-outer]]`, cross-ref `[[refactoring-ui:spacing-system-scale]]`
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` — entry for Aurora spacing tokens

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 1 — Fundamentals (p. 27) + Chapter 4 — Layout (spacing section)
- Extraction date: 2026-05-22
- Reviewed by user: yes
