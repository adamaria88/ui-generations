---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 236
slug: "autocomplete-for-long-lists"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, autocomplete, search]
apply_value: "high"
problem_domain: "form"
---

# Use autocomplete instead of long dropdown

## Problem Trigger
> Field "Select Customer" — Paper.id businesses have 500+ customers. Dropdown? Search?

## The Thinking
List >10 + user knows what they're looking for → **autocomplete** (predictive search). User types → suggestions appear inline. Faster + lower interaction cost than scrolling through a long dropdown.

**Autocomplete tips:**
- Max 10 suggestions (avoid choice paralysis).
- Highlight **differences** between suggestions (e.g., "United States" vs "United Kingdom" bold "St" vs "K"), not the characters the user typed.
- Suitable for fields where the user KNOWS what they're looking for (country, customer, known product).
- NOT suitable for exploring/browsing — use a filter+list page instead.

## Concrete Example
Country picker (200+ countries) → autocomplete "Unite" → suggests "United States / United Kingdom / Tanzania / Arab Emirates". User picks quickly.

## Anti-pattern (what this is NOT)
Dropdown with 200 countries → scroll for 5 seconds to find United States. High interaction cost. Or search-as-modal (open a new modal just to search 1 field) — too heavy.

## Application for Paper.id
- "Customer" field in Create Invoice Form → autocomplete (Aurora `au-autocomplete` likely exists).
- "Product/Item" field in line items → autocomplete (if the product catalog is large).
- "Approval PIC" field → autocomplete if there are many users.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (autocomplete usage ≥5 with search need)
- Other card: `[[radio-vs-dropdown-threshold]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 236-237
- Extraction date: 2026-05-22
- Reviewed by user: yes
