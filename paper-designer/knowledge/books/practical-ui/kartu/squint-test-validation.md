---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 4: Layout and spacing"
  page: 128
slug: "squint-test-validation"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, audit, validation]
apply_value: "high"
problem_domain: "audit"
---

# Squint test — validate visual hierarchy

## Problem Trigger
> Udah pasang visual hierarchy, tapi ga yakin "bener ga sih" — gimana cara validate objective?

## The Thinking
Squint Test = quick validate. 3 cara:
1. **Tutup mata 50%** (squint).
2. **Step back** dari monitor / zoom out.
3. **Blur design** dengan filter.

Kalau masih bisa identify:
- (a) what page is for
- (b) most important element

→ hierarchy benar.

Kalau blur tampak semua elemen sama "rame" → hierarchy hancur.

## Contoh Konkret
**Detail Invoice** — squint, masih jelas tampak: header company logo + nama, total amount (big), action button (filled). ✓ hierarchy OK.

**List Pengeluaran** — squint, kalau toolbar pill primary semua, squint = semua biru ramai, hierarchy hancur. ✗

## Anti-pattern (yang BUKAN ini)
Verify hierarchy by "feeling" — subjective, bias. Designer udah liat design 10x, brain bias "ini bagus" tapi user ga punya konteks. Squint = objective check, lepas bias familiarity.

## Aplikasi untuk Paper.id
WAJIB squint test sebelum setor prototype. Bagian dari Pre-Generation Checklist `design-rules.md`. SUDAH lock di [[prototyping-gap-lessons]] 0h Action Hierarchy.

Apply ke:
- Tiap page baru sebelum commit.
- Audit page yang user complain "ramai".
- Saat pilih primary action di page baru.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Kartu lain: `[[visual-hierarchy-variables]]` (paired), `[[one-primary-button-per-screen]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 4 — Layout and spacing
- Halaman: 128
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
