---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 243
slug: "break-long-forms-into-steps"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, multi-step, cognitive-load, goal-gradient]
apply_value: "high"
problem_domain: "form"
---

# Break up long forms into multiple steps

## Problem Trigger
> Form Setup Bisnis Paper.id butuh 30 field info (legal, bank, kontak, dll) — 1 page panjang scroll vertikal overwhelming.

## The Thinking
Long form (>10 field) = overwhelming, drop completion rate. Solusi: pecah jadi multi-step. Decrease cognitive load, reduce mistakes, improve completion. Goal-Gradient Effect — user lebih motivated saat lihat progress bar mendekati 100%.

**Best practices:**
- Beri tahu total step di awal ("3 steps") + waktu estimate
- Order easiest-to-hardest (early wins, build momentum)
- Progress indicator visible
- Allow review-before-confirm di step terakhir
- Confirmation screen + clear "what's next"

## Contoh Konkret
Registrasi:
1. **Step 1/3**: Personal details (3 field) — easiest
2. **Step 2/3**: Contact details (2 field) — medium
3. **Step 3/3**: Confirmation review — user check semua sebelum submit
4. **Success screen**: "Thanks for registering. You'll receive an email shortly with next steps."

## Anti-pattern (yang BUKAN ini)
30-field form 1 page → user scroll 5 minutes, panicked, abandon di field 15. Atau worse: user submit half-filled, kena error semua field, frustration.

## Aplikasi untuk Paper.id
- **Setup Awal Bisnis**: multi-step (Identitas → Legal → Bank → Verifikasi).
- **KYC**: multi-step (Data → Dokumen → Konfirmasi).
- **Pengajuan Pinjaman**: multi-step (Eligibility → Detail → Lampiran → Submit).

**Side Sheet form**: ≤6 field OK 1 page; ≥7 field pertimbangkan multi-step atau Form Page proper.

## Cross-refs
- Kartu lain: `[[group-form-fields-under-headings]]` (alternatif kalau ga bisa multi-step)
- Memory rule: `[[page-templates-summary]]` — Form Page vs Side Sheet decision

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 243
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
