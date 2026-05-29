---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 214
  quote_verbatim: "It's more efficient to complete, as it decreases interaction cost by maintaining a consistent downward momentum."
slug: "single-column-form-layout"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, layout, interaction-cost]
apply_value: "high"
problem_domain: "form"
---

# Single column form layout

## Problem Trigger
> Form dengan banyak field — bingung pilih 2-column layout "save space" atau 1-column.

## The Thinking
Single column = downward momentum konsisten, user ga perlu mikir "next field di kanan atau bawah". Multi-column = zig-zag eye movement → increase interaction cost + cognitive load. Screen-magnifier user gampang miss field di kolom 2 karena limited view.

## Contoh Konkret
Postal address form — 2-column (Street | Suburb | State | Postcode dalam 2 baris) vs 1-column (semua stack vertikal). 1-column lebih jelas urutan, lebih low-error.

## Anti-pattern (yang BUKAN ini)
Multi-column form "biar muat 1 layar" tanpa scroll — kompromi efisiensi untuk space. Ironis: user butuh lebih lama complete form karena zig-zag, jadi total time lebih lama walau visually compact.

## Aplikasi untuk Paper.id
- Form Tambah Mitra, Form Buat Invoice, Form Catat Pengeluaran — semua stack 1-column.
- Side-by-side OK kalau related & short (lihat [[stacked-related-fields-side-by-side]]).
- Aurora `.form-grid` pakai single column default.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — form patterns
- Kartu lain: `[[stacked-related-fields-side-by-side]]` (pengecualian), `[[label-on-top-of-input]]` (paired rule)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 214
- Quote verbatim:
  > "It's more efficient to complete, as it decreases interaction cost by maintaining a consistent downward momentum."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
