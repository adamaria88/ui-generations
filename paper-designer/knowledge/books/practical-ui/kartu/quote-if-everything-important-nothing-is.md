---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 259
  quote_verbatim: "If everything is important, nothing is important."
slug: "quote-if-everything-important-nothing-is"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [quote, hierarchy, visual-design, signature]
apply_value: "high"
problem_domain: "mindset"
---

# Quote: "If everything is important, nothing is important."

## Problem Trigger
> PM minta "buat tombol Pay JUGA primary, kan penting" — page udah ada 2 primary lain.

## The Thinking
**"If everything is important, nothing is important."** — Adham Dannaway, Bab 8 hal 259.

Pernyataan ini = core principle visual hierarchy. Primary button kerja karena LANGKA (1 per screen). Multi-primary → user paralysis "mana yang paling penting?". Hierarchy depends on **RELATIVE PROMINENCE** — bukan kuantitas.

## Apply ke
- **Buttons**: 1 primary per screen.
- **Headings**: 1 H1 per page.
- **Colors**: brand color untuk action LANGKA (kalau semua merah, merah lose impact untuk error/destructive).
- **Animations**: 1-2 focal animation, sisanya subtle (kalau semua bouncing, ga ada yang attract).
- **Badges/labels**: sparingly (kalau tiap card ada 5 badge, badge ga ada artinya).

## Contoh Konkret
List people to follow — kalau tiap row "Follow" button primary, total 5 primary biru clutter. Refactor ke 5 secondary "Follow" + 1 primary "Follow all" → hierarchy restored.

## Anti-pattern (yang BUKAN ini)
Toolbar List Pengeluaran lama dengan [Filter] [Unduh] [Catat Pengeluaran] semua primary biru — diaudit user, fixed ke 1 primary "Catat Pengeluaran" + 2 text-link.

## Aplikasi untuk Paper.id
- Lock di [[prototyping-gap-lessons]] 0h Action Hierarchy.
- Saat ada PM/stakeholder push "ini juga penting, bikin primary dong", PUSHBACK dengan quote ini + rationale.
- Squint test = validate quote-in-action ([[squint-test-validation]]).

**Saat negotiate dengan stakeholder**: pakai quote ini sebagai elegant pushback. Single sentence yang langsung ke-grok.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Kartu lain: `[[one-primary-button-per-screen]]`, `[[visual-hierarchy-variables]]`, `[[squint-test-validation]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 259
- Quote verbatim:
  > "If everything is important, nothing is important."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
