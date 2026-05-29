---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 2: Less is more"
  page: 50
slug: "progressive-disclosure"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, disclosure, cognitive-load]
apply_value: "high"
problem_domain: "content"
---

# Use progressive disclosure

## Problem Trigger
> Card "Strengthen your brand with custom domain" ada heading + 4 paragraf benefits + bullet list + CTA. Overload.

## The Thinking
Reveal info gradually as needed. Show only what's required for current task. Advanced/secondary tucked behind disclosure trigger. Slight ↑ interaction cost (1 click) untuk ↓↓ cognitive load (overwhelm hilang).

**Patterns:**
- Accordion (expandable section)
- "Learn more" link → modal/page
- "Show more" / collapsible bullet
- Optional field opt-in (checkbox "Receive updates via text" → kalau checked, baru tampil field mobile)

## Contoh Konkret
Custom domain card:
- ✅ Heading + 1 paragraph + CTA. "Benefits of a custom domain" sebagai expandable accordion → user yang penasaran baru klik buka. Default state clean.
- ❌ Show all 4 paragraf benefits sekaligus → wall of text, user skip semua, abandon.

## Anti-pattern (yang BUKAN ini)
Show all info upfront "biar transparent" → wall of text → user scan & skip → important info malah ga ke-baca.

## Aplikasi untuk Paper.id
- **Filter table** — basic filter visible, advanced filter di "Filter lanjutan" panel.
- **Form Buat Invoice** — required fields visible, optional fields di "Tambah catatan" / "Tambah lampiran" opt-in.
- **Detail page** — info utama di hero, info pendukung di tabs / accordion.
- **Modal Buat Invoice tipe baru** — basic fields default, "Pengaturan lanjutan" collapsed.

## Cross-refs
- Kartu lain: `[[remove-unnecessary-information]]` (alternatif: full cut), `[[break-choices-hicks-law]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 2 — Less is more
- Halaman: 50-51
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
