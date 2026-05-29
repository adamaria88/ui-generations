---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 261
slug: "tertiary-for-multiple-or-destructive"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, destructive]
apply_value: "high"
problem_domain: "button"
---

# Use tertiary buttons for multiple or destructive actions

## Problem Trigger
> List sharing — 5 user dengan tombol "Remove" each. Bikin 5 secondary buttons "Remove"? Atau gimana?

## The Thinking
Multiple action equal-weight di list → tertiary buttons. Kenapa:
- (a) Multiple secondary = compete dengan primary "Send invite" di bawah.
- (b) Visual hierarchy hancur.

**Tertiary** (text-link underlined) low-prominence — preserve hierarchy primary action tetep dominant.

Plus: **Destructive action** (Remove, Delete, Hapus) → tertiary by default. Bukan red filled button "biar warning". Destructive yang too prominent = bahaya user accidental klik.

## Contoh Konkret
Share with people — 3 editor list, tombol [Remove] tertiary text-link kanan tiap row. Primary "Send invite" di top kanan masih jelas dominant.

## Anti-pattern (yang BUKAN ini)
- 3 secondary "Remove" buttons di rows → 3 bordered buttons yang clutter, primary jadi compete.
- Red filled "Delete" button super prominent untuk row destructive → user lebih sering accidental click.

## Aplikasi untuk Paper.id
- Table actions (column ⋮ menu items "Hapus") = tertiary by default.
- List user/mitra action button = tertiary.
- Combine dengan [[friction-ladder-for-destructive]] — destructive tertiary untuk initial friction.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0f Action menu items
- Kartu lain: `[[3-button-weight-system]]`, `[[friction-ladder-for-destructive]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 261
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
