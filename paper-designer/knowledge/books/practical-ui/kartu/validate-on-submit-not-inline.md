---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons + Bab 7: Forms"
  page: 263
  quote_verbatim: "Instead of disabling the submit button, enable it and display error messages on submit."
slug: "validate-on-submit-not-inline"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, validation, button, conflict-aurora]
apply_value: "high"
problem_domain: "form"
---

# Validate on submit, not inline (⚠️ konflik potensial)

## Problem Trigger
> Submit button di form ke-disabled sampe semua field bener — user nyentuh submit, ga merespond, stuck tanpa feedback.

## The Thinking
Disable submit-until-valid = user stuck tanpa feedback "kenapa ga bisa". Solusi lebih baik: **enable submit selalu**, on click validate, kalau error → highlight field + error message. User langsung tau "oh, field X belum bener". Plus disabled button = low contrast, keyboard inaccessible.

## Contoh Konkret
Payment form — user lupa isi "Name on card", semua field lain bener. Pencet "Pay $99.00" → instead of disabled diam, button enable + show "Enter name on card" error message di field kosong. User langsung tau.

## Anti-pattern (yang BUKAN ini)
Disabled "Pay" button → user pencet 3x, ga ada feedback, frustration spike → abandon form. Atau worst: user assume "tombol ke-disable mean already submitted, success?" — confusion.

## Aplikasi untuk Paper.id
⚠️ **Konflik dengan current Aurora pattern** (banyak modal Paper.id disable Save sampe form valid). 

Catat ke `IMPROVEMENT-OPPORTUNITIES.md`. Pertimbangan:
- Form simple (2-5 field) → enable + validate-on-submit (preferred per buku).
- Form kompleks dengan inter-field dependency → mungkin disable safer (current Paper.id pattern).

Discussion needed dengan DS maintainer.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]` — handle konflik DS
- Kartu lain: `[[try-to-avoid-disabled-buttons]]` (paired insight)
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons (hal 263) + Bab 7 — Forms (hal 248)
- Quote verbatim:
  > "Instead of disabling the submit button, enable it and display error messages on submit."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
