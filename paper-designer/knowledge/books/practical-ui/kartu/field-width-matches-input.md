---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 227
slug: "field-width-matches-input"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, field, width, cognitive-load]
apply_value: "high"
problem_domain: "form"
---

# Field width matches expected input

## Problem Trigger
> Semua input lo full-width "biar rapi" — tapi field postcode 4 digit lebar 600px aneh & misleading.

## The Thinking
Width set expectation user — wide field = "tulis banyak", narrow field = "1-2 karakter aja". Field full-width untuk postcode bikin user bingung "kok lebar banget, harus tulis apa". Match width to longest expected input — atau most common case kalau variable.

## Contoh Konkret
- Postcode AU = 4 digit → width 4-digit (~80px).
- CVC = 3 digit → narrow (~60px).
- Card number = 16 digit → wider (~280px).
- Nama lengkap = full-width.
- Email = full-width.

## Anti-pattern (yang BUKAN ini)
Semua input lebar 100% "uniform & neat" — ngorbanin cognitive cue untuk visual uniformity. User butuh extra thinking "ini field minta input apa & berapa karakter".

## Aplikasi untuk Paper.id
- Input "Jumlah" / "Nomor PO" / "Kode" — match width ke expected length.
- Jangan semua full-width.
- Combine dengan [[stacked-related-fields-side-by-side]] — short fields related boleh inline.

## Cross-refs
- Kartu lain: `[[stacked-related-fields-side-by-side]]`, `[[single-column-form-layout]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 227-228
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
