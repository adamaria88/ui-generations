---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 2: Less is more"
  page: 46
slug: "remove-unnecessary-information"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, declutter, cognitive-load]
apply_value: "medium"
problem_domain: "content"
---

# Remove unnecessary information

## Problem Trigger
> Card list invoice tiap row ada 12 kolom — semua kelihatan "penting". Bingung mau cut yang mana.

## The Thinking
Tiap element compete for attention. Element tanpa logical reason = distraction = increase cognitive load. Cek tiap element: "kalau dihilang, apakah user kehilangan info kritikal?". Kalau NO → cut. Repeated/redundant info paling gampang cut.

## Contoh Konkret
Contents list:
- ❌ "UI Design Fundamentals Course - Chapter 1 - Colours" / "Chapter 2 - Typography" / dst. Repeated "UI Design Fundamentals Course" di tiap baris.
- ✅ Cut: jadi subheading di top "UI Design Fundamentals Course", list cuma "Chapter 1 - Colours" / "Chapter 2 - Typography".

## Anti-pattern (yang BUKAN ini)
Field "Nama Customer: PT XYZ Tbk" di tiap row table 50 invoice, padahal udah jelas filtered by customer XYZ di top filter. Repeated = noise.

## Aplikasi untuk Paper.id
- Audit list/table apakah ada kolom yang redundant dengan filter/context atas.
- Audit form apakah ada field optional yang earn place atau hapus aja.
- "Catat alasan kalau hapus" — kalau jarang dipakai, jangan default visible.

## Cross-refs
- Kartu lain: `[[progressive-disclosure]]` (alternatif: bukan hapus, tapi hide-by-default), `[[logical-reason-rationale]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 2 — Less is more
- Halaman: 46
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
