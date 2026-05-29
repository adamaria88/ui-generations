---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 4: Layout + Bab 8: Buttons"
  page: 156
slug: "keep-related-actions-close"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [layout, button, fitts-law, target-size]
apply_value: "high"
problem_domain: "interaction"
---

# Keep related actions close (Fitts's Law)

## Problem Trigger
> Action button "Remove" di list item — apa lebih bagus di toolbar global atau di tiap row?

## The Thinking
Fitts's Law — closer + larger target = faster click. Place action close to element it relates to. Action di element row = clear context "ini operate at element ini". Action di toolbar global = ambiguous "operate at apa?".

**Plus**: Min target size 48pt × 48pt (mobile-safe). Aurora bisa lebih ringan di desktop.

## Contoh Konkret
- **List editor** (Share with people) — tombol "Remove" di tiap row editor. Bukan tombol "Remove" di toolbar dengan checkbox row pilih.
- **Table list invoice** — action ⋮ di tiap row (last column sticky). Bukan tombol global "Aksi" yang harus pilih row dulu.

## Anti-pattern (yang BUKAN ini)
Toolbar "Delete selected" + checkbox table row → 2-step (select + click toolbar). Slower interaction cost. Ambigu "operate at row mana".

## Aplikasi untuk Paper.id
SUDAH lock di [[prototyping-gap-lessons]] 0d (table action ⋮ kanan tiap row, sticky kanan). Buku konfirmasi pattern.

**Bulk action exception**: Kalau action perlu operate at multiple rows sekaligus (mis. "Hapus semua draft yang lewat 30 hari"), bulk action di toolbar OK — tapi pakai checkbox kolom + bulk action visible kalau ada selection.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0d Table standard pattern
- Kartu lain: `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 4 — Layout (hal 156) + Bab 8 — Buttons (hal 273-274)
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
