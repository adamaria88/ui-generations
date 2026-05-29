---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 222
slug: "mark-both-required-and-optional"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, required, optional, accessibility]
apply_value: "high"
problem_domain: "form"
---

# Mark both required and optional fields

## Problem Trigger
> Bingung gimana cara mark required vs optional di form panjang — pakai asterisk aja? atau text "optional"? atau "all required unless marked"?

## The Thinking
2 anti-pattern populer:
- (a) "All required unless marked optional" instruction di top — sering ke-skip user saat scan.
- (b) Cuma asterisk merah `*` — beberapa user ga tau artinya.

**Safe**: Mark BOTH — `*` (atau "(required)") untuk required + "(optional)" untuk optional. Cleanest UX, ga ambigu, accessible untuk screen reader user.

## Contoh Konkret
```
First name *
Email *
Mobile number (optional) — To receive updates via text message
```

User scan langsung tau mana wajib, mana boleh skip.

## Anti-pattern (yang BUKAN ini)
"All fields are required unless marked optional" di top form → user scan langsung ke field, miss instruksi, bingung apa wajib semua atau ga.

Cuma asterisk merah `*` tanpa "(optional)" marker — ambigu untuk optional fields.

## Aplikasi untuk Paper.id
- Form Buat Invoice, Form Tambah Mitra, Form Catat Pengeluaran: required `*`, optional eksplisit "(opsional)".
- Pengecualian (ga perlu marking): form pendek 1-2 field — Search, Login, Newsletter subscribe.
- Form panjang kompleks: ALL marked.

## Cross-refs
- Kartu lain: `[[label-on-top-of-input]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 222-225
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
