---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 217
slug: "stacked-related-fields-side-by-side"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, layout, exception]
apply_value: "high"
problem_domain: "form"
---

# Stack related fields side by side (pengecualian single column)

## Problem Trigger
> Single column rule, tapi 2 field super related (Expiry date + CVC) — apa harus full-width stack juga?

## The Thinking
Single column = aturan default, tapi short related fields boleh side-by-side ASAL:
- (a) related (date + time, expiry + CVC, kota + kode pos)
- (b) short (≤6 karakter expected each)
- (c) contained dalam bounds parent column (tidak break ke side panel kosong)

Reduce form height tanpa korbankan scanability.

## Contoh Konkret
Payment form — "Expiry date" (MM/YY) + "CVC" (3 digit) side-by-side dalam 1 row. Vs full-column stack yang bikin form tambah panjang.

## Anti-pattern (yang BUKAN ini)
Side-by-side untuk unrelated long fields (Street + Email) → user bingung urutan, accidental skip. Side-by-side untuk field full-width yang panjang → bikin form lebar over halaman.

## Aplikasi untuk Paper.id
- Form Buat Invoice — "Tanggal Invoice" + "Tanggal Jatuh Tempo" side-by-side OK (related dates).
- "Nomor PO" + "Nomor Referensi" side-by-side OK (short related).
- Tapi "Nama Customer" + "Alamat" → tetep stack (long unrelated).

## Cross-refs
- Kartu lain: `[[single-column-form-layout]]` (parent rule), `[[field-width-matches-input]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 217-218
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
