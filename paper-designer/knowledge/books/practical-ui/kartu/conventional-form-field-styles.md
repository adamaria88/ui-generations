---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 229
slug: "conventional-form-field-styles"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, convention, jakob-law]
apply_value: "high"
problem_domain: "form"
---

# Stick with conventional form field styles

## Problem Trigger
> Tergoda eksperimen styling form unik — radio bulet diganti kotak, input borderless, custom emoji untuk multi-choice.

## The Thinking
Jakob's Law — user mental model dibentuk dari produk lain yang sering mereka pakai. Stick dengan: input = kotak border, radio = bulet + selected fill, checkbox = kotak + checkmark, dropdown = field + chevron down. Inovasi styling form = high risk usability — gain aesthetic, lose comprehension.

## Contoh Konkret
Custom radio button rectangular dengan emoji "😊 Happy / ☹️ Sad" → user bingung "ini button? checkbox? bisa pilih multiple?". Pakai radio standar dengan bulet di kiri label → langsung clear "pilih 1 dari 2".

## Anti-pattern (yang BUKAN ini)
- Radio button tanpa lingkaran khas — usability risk tinggi.
- Input field tanpa border ("clean look") — user ga tau bisa di-klik atau cuma teks.
- Custom dropdown tanpa chevron — ambigu.

## Aplikasi untuk Paper.id
STOP eksperimen styling form. Pakai Aurora `au-form-field`, `au-radio`, `au-checkbox`, `au-dropdown` apa adanya. Custom styling hanya untuk decorative wrapper, BUKAN core component shape.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — strict use Aurora components
- Kartu lain: `[[conventional-patterns-jakob-law]]` (parent principle)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 229-230
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
