---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 2: Less is more"
  page: 55
slug: "break-choices-hicks-law"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [cognitive-load, hicks-law, choice]
apply_value: "medium"
problem_domain: "content"
---

# Break up choices to speed up decision making (Hick's Law)

## Problem Trigger
> You have 20 menu items in a sidebar — users take a long time to choose.

## The Thinking
Hick's Law — decision time increases with the number and complexity of choices. 4 tactics to speed things up:

1. **Remove** — If an option isn't essential, cut it.
2. **Group/Categorise** — Bundle related options (e.g., "Sales" group → Invoice/Receipt/Customer).
3. **Multi-step** — Break into sequential choices (document type first → after selecting invoice, related options appear).
4. **Recommend** — Highlight 1 as "Most popular" / "Recommended" → users fast-track to that option.

## Concrete Example
Newsletter subscribe form with 3 fields (First name + Company + Email) → cut First name + Company (not essential) → just Email. Submission rate increases.

## Anti-pattern (what this is NOT)
20-item flat menu without grouping → users scan all 20 items every time they need an action. Pricing comparison with 5 plans and no "Most popular" badge → user paralysis.

## Application for Paper.id
- Sidemenu is already grouped (Sales / Purchase / Inventory / Settings).
- Create Invoice Form — if there are many optional custom fields, group them in an "Add details" accordion.
- Pricing comparison — add a "Most popular" badge to the middle plan for fast-track decision.
- Onboarding steps — recommend "Set up Business first" as the first step.

## Cross-refs
- Other cards: `[[remove-unnecessary-information]]`, `[[progressive-disclosure]]`, `[[break-long-forms-into-steps]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 2 — Less is more
- Page: 55-58
- Extraction date: 2026-05-22
- Reviewed by user: yes
