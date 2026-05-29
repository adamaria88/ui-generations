---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 6: Copywriting"
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
> Empty state page invoice — wall of paragraph explanation tanpa hierarchy.

## The Thinking
**Inverted pyramid** structure (journalism technique):
- **Top — Most important info** (1 sentence, hard-hitting)
- **Middle — Supporting info** (1-2 sentence)
- **Bottom — Smaller background details** (optional, can be hidden behind "Learn more")

User yang skim 1 sentence still gets main point. User yang butuh detail, baca lanjut. Inverted pyramid = scalable to attention budget.

## Contoh Konkret
Onboarding screen "Find existing friends":
- **Heading**: "Find existing friends by syncing your contacts" (key benefit, large)
- **Subheading**: "To help you find your friends, we'll periodically import and store your contacts" (supporting context, smaller)
- **Field + button + Learn more** (CTA + detail escape)

## Anti-pattern (yang BUKAN ini)
4 paragraf rata-rata, ga ada heading hierarchy → user TL;DR + abandon.

Bury main point di bottom — user yang skim ga pernah dapet info utama.

## Aplikasi untuk Paper.id
- **Empty state list page** — heading punchy + 1-line subtext + CTA primary.
- **Modal Welcome / feature announcement** — bullet inverted pyramid.
- **Error message** — main reason di top, technical detail bawah/expandable.
- **Notification list** — title (main info) → subtitle (context) → "View detail" (escape).

## Cross-refs
- Kartu lain: `[[front-load-key-info]]` (sentence-level), `[[progressive-disclosure]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 6 — Copywriting
- Halaman: 198-199
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
