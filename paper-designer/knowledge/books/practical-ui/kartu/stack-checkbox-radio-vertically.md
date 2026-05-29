---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 217
slug: "stack-checkbox-radio-vertically"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, checkbox, radio, layout]
apply_value: "high"
problem_domain: "form"
---

# Stack checkboxes and radio buttons vertically

## Problem Trigger
> Punya 3 opsi notifikasi (Email/SMS/Post) — mau pasang horizontal inline atau stack vertikal?

## The Thinking
Vertical stack = clear separation antar opsi, ga ada risiko user salah klik opsi sebelah. Inline horizontal = harder to scan + screen-magnifier might miss opsi paling kanan. Consistent dengan rule single-column form.

## Contoh Konkret
"How would you like to be notified?":
- ✅ Vertikal: Email \n SMS \n Post
- ❌ Inline: [Email] [SMS] [Post]

## Anti-pattern (yang BUKAN ini)
Radio button horizontal "biar compact" — opsi tertimpa di mobile, accidental tap opsi sebelah, hard scan saat opsi banyak.

## Aplikasi untuk Paper.id
- Form metode pembayaran, jenis dokumen, status filter — semua radio/checkbox vertikal.
- Aurora `au-radio` + `au-checkbox` kemungkinan udah default vertikal.

## Cross-refs
- Kartu lain: `[[single-column-form-layout]]` (consistent principle)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 217
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
