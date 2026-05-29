---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 215
  quote_verbatim: "Your eyes can see both the label and input in a single focus."
slug: "label-on-top-of-input"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, label, layout]
apply_value: "high"
problem_domain: "form"
---

# Label on top of input

## Problem Trigger
> Mau pasang label form — di atas atau di kiri input?

## The Thinking
Label di atas = eye focus 1x (label + input dalam 1 vertical glance). Label di kiri = zig-zag eye, jarak label-input variabel (label panjang break layout), right-align label bikin jagged-left edge sulit di-scan. Label kiri juga break di mobile (sempit).

## Contoh Konkret
Label "Street address *" di atas input field, user langsung baca + isi tanpa eye-jump. Vs label "Suburb, town or city" di kiri field — text panjang break layout, atau right-aligned tapi jagged.

## Anti-pattern (yang BUKAN ini)
Label di kiri input "biar compact horizontal" — gap label-input variabel sesuai panjang label, eye susah focus, mobile break ke wrap. Right-align label "perbaiki jagged edge" tapi ironis bikin jagged-left.

## Aplikasi untuk Paper.id
Semua form Paper.id pakai label-top (Aurora form-field default udah benar). Lock — jangan eksperimen label-left "biar compact" walaupun form panjang.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — form patterns
- Kartu lain: `[[single-column-form-layout]]` (paired rule), `[[dont-use-placeholder-as-label]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 215-216
- Quote verbatim:
  > "Your eyes can see both the label and input in a single focus."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
