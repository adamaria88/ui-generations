---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 1: Fundamentals + Bab 4: Layout"
  page: 27
slug: "predefined-spacing-scale"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [spacing, design-system, consistency]
apply_value: "medium"
problem_domain: "design-system"
---

# Predefined spacing scale (XS/S/M/L/XL/XXL)

## Problem Trigger
> Tiap component lo pasang spacing custom — 12px sini, 14px sana, 18px disitu. Inconsistent.

## The Thinking
Limited set of predefined spacing options. Buku rekomen 6-tier: **XS/S/M/L/XL/XXL = 8/16/24/32/48/80pt**. Limit pilihan = faster decisions + improve consistency + neater interface + easier handoff dev.

**Rule of thumb:**
- **XS (8pt)** = intra-element (badge inside card, label-input gap)
- **S (16pt)** = related elements close (field-to-field, button-to-button)
- **M (24pt)** = section padding (card padding)
- **L (32pt)** = between groups (section to section)
- **XL (48pt)** = page section divider
- **XXL (80pt)** = major hero break

## Contoh Konkret
Form field:
- Spacing label-to-input = XS (8pt)
- Spacing field-to-next-field = M (24pt)
- Spacing section heading = L (32pt)
- Spacing form-to-button = XL (48pt)

## Anti-pattern (yang BUKAN ini)
Push pixel sambil "feel right" — 13px, 17px, 23px random. Hardcoded magic numbers. Tiap designer pilih beda → DS inconsistent.

## Aplikasi untuk Paper.id
Aurora kemungkinan udah punya spacing scale (cek `aurora/projects/ui/` untuk token). Audit prototype apakah pakai consistent scale atau magic numbers. Standardize ke Aurora tokens.

**Note**: Cross-ref [[refactoring-ui]] (`spacing-system-scale`) — both books align on principle. Practical UI spacing scale 8/16/24/32/48/80, Refactoring UI t-shirt scale. Konvergen.

## Cross-refs
- Kartu lain: `[[inner-spacing-smaller-than-outer]]`, cross-ref `[[refactoring-ui:spacing-system-scale]]`
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` — entry spacing tokens Aurora

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 1 — Fundamentals (hal 27) + Bab 4 — Layout (spacing section)
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
