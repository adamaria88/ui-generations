---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 235
slug: "radio-vs-dropdown-threshold"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, radio, dropdown, conflict-aurora]
apply_value: "medium"
problem_domain: "form"
---

# Radio vs dropdown — threshold opsi (⚠️ konflik vs Paper.id)

## Problem Trigger
> Field "Jenis pembayaran" ada 6 opsi — pakai radio button atau dropdown?

## The Thinking
Buku rekomen **≤10 opsi = radio**, more = dropdown.

**Radio advantages:**
- 1-click select (vs 2-click dropdown: open + select)
- Always visible — easy compare
- Lower interaction cost untuk motor-impaired user
- Less prone "ke-mistaken filled & skipped"

**Dropdown advantages:**
- Compact (save vertical space)
- Better untuk long list

## Konflik vs Paper.id Rule
**Paper.id lock**: ≤4 = radio, ≥5 = dropdown (lebih konservatif dari buku — per [[paperverse-design-decisions]]). 

Buku jadi rationale supporting tapi **NOT override** Paper.id rule.

## Contoh Konkret
- Phone capacity 64/128/256GB → 3 opsi → radio (Paper.id rule + buku rule).
- Status invoice (Draft/Sent/Paid/Overdue/Cancelled) → 5 opsi → dropdown (Paper.id rule). Buku akan recommend radio karena 5 ≤ 10.

## Anti-pattern (yang BUKAN ini)
Capacity 2 opsi pakai dropdown → 2-click vs 1-click radio = friction extra ga perlu.

## Aplikasi untuk Paper.id
**Stick dengan Paper.id rule ≤4**. Catat buku threshold ≤10 di `IMPROVEMENT-OPPORTUNITIES.md` sebagai data point — kalau next iteration mau evaluate looser threshold (5-8), ada source.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (radio threshold), `[[knowledge-vs-ds-priority-flow]]`
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Radio threshold evaluation"

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 235
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
