---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 258
  quote_verbatim: "If everything is important, nothing is important."
slug: "one-primary-button-per-screen"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, action-hierarchy]
apply_value: "high"
problem_domain: "button"
---

# Use a single primary button for the most important action

## Problem Trigger
> Page punya banyak action penting — semua di-pasang pill primary biru?

## The Thinking
Primary button kerja karena LANGKA. Begitu ada 2-3 primary di page yang sama, dominance hilang, user bingung "mana yang paling penting?". MAX 1 primary per visible screen (atau per content-region). Action lain → secondary/tertiary.

> "If everything is important, nothing is important."

## Contoh Konkret
List people to follow dengan 5 row × tombol "Follow" — kalau 5 primary biru semua, hierarchy hancur. Ganti ke 5 secondary "Follow" + 1 primary "Follow All" di top.

## Anti-pattern (yang BUKAN ini)
List Pengeluaran toolbar punya 3 primary: [Filter] [Unduh] [Catat Pengeluaran] — user lost mana paling penting. Fix: cuma "Catat Pengeluaran" primary, sisanya text-link.

## Aplikasi untuk Paper.id
SUDAH lock di [[prototyping-gap-lessons]] 0h Action Hierarchy. Buku konfirmasi.

Apply ke:
- Action bar (luar card): 1 primary max kanan.
- In-card toolbar: 1 primary max (kalau ada).
- Detail page: 1 primary action ("Kirim Invoice" / "Bayar Sekarang") + rest secondary/tertiary.
- Modal: 1 primary + rest secondary/tertiary.

Squint test validate (lihat [[squint-test-validation]]).

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Kartu lain: `[[3-button-weight-system]]`, `[[squint-test-validation]]`, `[[quote-if-everything-important-nothing-is]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 258-259
- Quote verbatim:
  > "If everything is important, nothing is important."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
