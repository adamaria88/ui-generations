---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 233
slug: "dont-use-placeholder-as-label"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, label, placeholder, accessibility]
apply_value: "high"
problem_domain: "form"
---

# Don't use placeholder text instead of a label

## Problem Trigger
> Tergoda pakai placeholder text "biar hemat ruang" — input cuma 1 baris, label "Email" jadi placeholder.

## The Thinking
3 problem placeholder-as-label:
1. **Placeholder hilang saat user ngetik** → user lupa context "ini field apa ya?".
2. **Contrast placeholder biasanya inaccessible** (default light grey, gagal WCAG).
3. **Field dengan placeholder bisa di-mistaken "udah keisi"** → user skip field.

## Contoh Konkret
Input dengan placeholder "Email" (no label) — user mulai ngetik, "Email" hilang, scroll up scroll down, lupa ini field email atau username. Vs label "Email *" di atas + placeholder kosong / format hint "you@example.com".

## Anti-pattern (yang BUKAN ini)
Login form dengan input placeholder "Email" + input placeholder "Password", tanpa label di atas. Hemat 16px vertical space tapi UX disability.

## Aplikasi untuk Paper.id
Semua input WAJIB punya label di atas. Placeholder OK untuk:
- Format hint: "+62 8xx xxxx xxxx" di phone field
- Format hint: "dd/mm/yyyy" di date field
- Search field tunggal (cari invoice) — ASAL contrast ≥4.5:1 + `aria-label` ada untuk screen reader

JANGAN ganti label dengan placeholder.

## Cross-refs
- Kartu lain: `[[label-on-top-of-input]]` (paired rule)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 233-234
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
