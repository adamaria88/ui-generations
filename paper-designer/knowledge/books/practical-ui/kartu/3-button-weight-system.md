---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 251
slug: "3-button-weight-system"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, action-hierarchy]
apply_value: "high"
problem_domain: "button"
---

# Define 3 button weights (primary + secondary + tertiary)

## Problem Trigger
> Page punya banyak action — semua mau pakai button style yang sama atau beda-beda?

## The Thinking
3-tier system:
- **Primary** = filled rectangle dengan action color + white text. Untuk MOST IMPORTANT action. Visual anchor terkuat.
- **Secondary** = unfilled rectangle dengan border + colored text. Untuk less important atau equal-weight alternatives. HINDARI grey fill (di-mistaken disabled).
- **Tertiary** = clear button dengan colored underlined text (text-link). Untuk least important / destructive / multiple action. Underline WAJIB supaya color-blind tau interaktif.

Hierarchy harus jelas TANPA rely on colour alone — visual weight (filled vs outlined vs text-only) primary distinguisher.

## Contoh Konkret
Dialog "Save post for later?" — Primary "Save post" + Tertiary "Cancel". Bukan 2 primary biru semua.

## Anti-pattern (yang BUKAN ini)
- Semua action pakai pill primary → hierarchy hancur.
- Secondary pakai grey fill → di-mistaken disabled.
- Tertiary cuma text biru tanpa underline → color-blind ga tau interaktif.

## Aplikasi untuk Paper.id
Aurora `au-btn--primary` + `au-btn--secondary` + `au-btn-text` (tertiary). SUDAH lock di [[prototyping-gap-lessons]] 0h Action Hierarchy.

Buku konfirmasi pendekatan — apply consistently di seluruh prototype.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Kartu lain: `[[one-primary-button-per-screen]]`, `[[secondary-for-equal-weight-actions]]`, `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 251
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
