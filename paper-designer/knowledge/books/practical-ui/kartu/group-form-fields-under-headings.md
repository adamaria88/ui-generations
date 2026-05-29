---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 244
slug: "group-form-fields-under-headings"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, grouping, hierarchy, cognitive-load]
apply_value: "high"
problem_domain: "form"
---

# Group related fields under headings

## Problem Trigger
> Form panjang ga bisa multi-step (constraint product), tapi 20 field 1 page bikin overwhelming.

## The Thinking
Kalau ga bisa multi-step, **group related fields under section headings**. User mental break ke chunk yang manageable. "Personal info / Contact info / Payment info" — 3 chunk × 7 field lebih digestible dari 21 field flat list.

## Contoh Konkret
Form Profile Perusahaan:
- **Section "Data Legal"** (heading H3 + spacing-L atas): NPWP, akta, SIUP, dll
- **Section "Data Kontak"**: alamat, telepon, email
- **Section "Data Bank"**: rekening, nama bank, swift code

Heading style: H3 atau H4 + spacing M (24pt) di atas + border bottom optional.

## Anti-pattern (yang BUKAN ini)
20 field flat list tanpa heading → user lost, ga tau progress, ga tau "udah seberapa jauh, masih berapa lagi", abandon mid-form.

## Aplikasi untuk Paper.id
Form panjang yang harus 1 page (constraint product / SEO) → wajib pakai section heading.

Heading style:
- Aurora heading-3 (28px bold) atau heading-4 (22px bold)
- Spacing M (24pt) di atas heading
- Spacing S (16pt) heading → first field
- Border bottom optional untuk visual divider

## Cross-refs
- Kartu lain: `[[break-long-forms-into-steps]]` (alternatif preferred kalau bisa)
- Kartu lain: `[[4-grouping-methods]]` (grouping principles)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 244
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
