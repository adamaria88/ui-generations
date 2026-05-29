---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 1: Fundamentals"
  page: 29
slug: "modular-design-build-from-small"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, design-system, modular, composition]
apply_value: "medium"
problem_domain: "design-system"
---

# Modular design — build from smallest reusable components

## Problem Trigger
> Lo design Page Profile Perusahaan dari awal — gambar dari scratch.

## The Thinking
**Modular design** — build from SMALLEST reusable components → combine to larger → arrange ke template. 3 tier:

1. **Smallest components** (foundation): button, avatar, form-field, badge, icon, checkbox, radio.
2. **Larger components**: card (combines avatar + heading + text + button), modal (combines header + form + button-row), table-row.
3. **Templates** (assembled): page layout (combines cards in grid, sidebar, nav).

**Manfaat:**
- Faster design (re-use existing pieces).
- Consistency (same button across pages).
- Easier maintenance (update button once → propagates everywhere).
- Better handoff dev (engineer pakai existing component).

## Contoh Konkret
Avatar component → pair with text → card with avatar+text → list of cards = landing page. Same avatar component reused di profile, comment, notification, user list.

## Anti-pattern (yang BUKAN ini)
Designer A bikin button "Save" di page Edit Profile dari scratch. Designer B bikin button "Save" di page Edit Invoice from scratch. Slightly different style → DS broken.

## Aplikasi untuk Paper.id
- **Aurora `projects/ui/`** = component library.
- WAJIB pakai existing components (per [[aurora-lookup-ritual]] M1).
- Saat butuh composite (mis. "metadata + inline actions"), KOMPOSE Aurora pieces — JANGAN bikin baru (per [[composition-thinking-rule]]).

Saat ada feature baru, FIRST check Aurora library. If missing, lapor maintainer (per Aurora Lookup Ritual).

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]`, `[[composition-thinking-rule]]`
- Kartu lain: `[[conventional-form-field-styles]]`, `[[predefined-spacing-scale]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 1 — Fundamentals
- Halaman: 29-31
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
