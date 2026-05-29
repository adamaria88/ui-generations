---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 231
  quote_verbatim: "If a password needs to be at least 6 characters long, tell people before they fill out the password field, not after."
slug: "hint-text-above-field"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, hint, helper-text, conflict-aurora]
apply_value: "high"
problem_domain: "form"
---

# Hint text above field (⚠️ konflik potensial)

## Problem Trigger
> Mau pasang helper text "Password min 8 karakter" — di atas atau di bawah field?

## The Thinking
Hint di ATAS field = (1) user baca dulu sebelum isi, prevent error; (2) maintain downward momentum saat scrolling form; (3) hint di bawah bisa ke-cover autofill dropdown / mobile keyboard. Tell people upfront, bukan setelah dia salah isi.

## Contoh Konkret
"Gas meter reading" label → hint "Enter all numbers left to right including leading zeros" di ATAS input field. User baca hint dulu → isi benar. Vs hint di bawah → Chrome autofill menu cover hint → user submit error.

## Anti-pattern (yang BUKAN ini)
Hint di bawah field — ke-cover autofill menu / mobile keyboard / browser suggestion. User submit error baru tau aturan field.

## Aplikasi untuk Paper.id
⚠️ **Konflik vs current Aurora pattern** (kalau Aurora form-field punya `aurora-form-hint` di bawah default). 

**Kompromi:**
- Critical hint (mengubah cara user isi field) → pindah ke atas.
- Decorative hint (deskripsi tambahan optional) → OK di bawah.

Catat ke `IMPROVEMENT-OPPORTUNITIES.md` untuk maintainer Aurora review.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]` — flow handle konflik DS
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Hint text position"

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 231-232
- Quote verbatim:
  > "If a password needs to be at least 6 characters long, tell people before they fill out the password field, not after."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
