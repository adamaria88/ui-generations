---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 243
slug: "break-long-forms-into-steps"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, multi-step, cognitive-load, goal-gradient]
apply_value: "high"
problem_domain: "form"
---

# Break up long forms into multiple steps

## Problem Trigger
> Paper.id's Business Setup form needs 30 fields of info (legal, bank, contact, etc.) — a single long scrolling page is overwhelming.

## The Thinking
Long forms (>10 fields) = overwhelming, drops completion rates. Solution: break into multi-step. Decreases cognitive load, reduces mistakes, improves completion. Goal-Gradient Effect — users are more motivated when they see a progress bar approaching 100%.

**Best practices:**
- Tell the user the total steps upfront ("3 steps") + time estimate
- Order easiest-to-hardest (early wins, build momentum)
- Visible progress indicator
- Allow review-before-confirm at the last step
- Confirmation screen + clear "what's next"

## Concrete Example
Registration:
1. **Step 1/3**: Personal details (3 fields) — easiest
2. **Step 2/3**: Contact details (2 fields) — medium
3. **Step 3/3**: Confirmation review — user checks everything before submitting
4. **Success screen**: "Thanks for registering. You'll receive an email shortly with next steps."

## Anti-pattern (what this is NOT)
30-field form on 1 page → user scrolls for 5 minutes, panics, abandons at field 15. Or worse: user submits half-filled, gets errors on all fields, frustration.

## Application for Paper.id
- **Initial Business Setup**: multi-step (Identity → Legal → Bank → Verification).
- **KYC**: multi-step (Data → Documents → Confirmation).
- **Loan Application**: multi-step (Eligibility → Details → Attachments → Submit).

**Side Sheet form**: ≤6 fields OK on 1 page; ≥7 fields consider multi-step or a proper Form Page.

## Cross-refs
- Other card: `[[group-form-fields-under-headings]]` (alternative if multi-step isn't possible)
- Memory rule: `[[page-templates-summary]]` — Form Page vs Side Sheet decision

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 243
- Extraction date: 2026-05-22
- Reviewed by user: yes
