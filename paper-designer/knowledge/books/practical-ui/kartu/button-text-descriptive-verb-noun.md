---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 272
slug: "button-text-descriptive-verb-noun"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, copywriting, accessibility]
apply_value: "high"
problem_domain: "button"
---

# Ensure button text describes the action (verb + noun)

## Problem Trigger
> Dialog dengan tombol "OK" / "Cancel" / "Submit" — generic, low-info text. User tebak-tebak.

## The Thinking
Button text = verb (action) + noun (object). Bukan generic "OK / Submit / Send". Why:
- (a) User yang scan-first (cuma baca buttons) langsung tau impact.
- (b) Screen reader user jump button-to-button — context-out-of-screen still meaningful. "Submit" → submit what? "Save invoice" → clear.
- (c) Confirms user intent, reduce error.

## Contoh Konkret
- Dialog "Save post for later?" → button **"Save post"** (✓) bukan "OK" (✗).
- Dialog "Delete invoice?" → **"Delete invoice"** (✓) bukan "Yes" (✗).
- Form action → **"Submit application"** (✓) bukan "Submit" (✗).

## Anti-pattern (yang BUKAN ini)
Dialog "Are you sure?" + [OK / Cancel]. User ga tau apa yang OK. Out-of-context = useless untuk screen reader user.

## Aplikasi untuk Paper.id
Semua dialog button text WAJIB descriptive verb+noun:
- "Hapus invoice" / "Buang perubahan" / "Kirim ke approver" / "Simpan draft"
- BUKAN "Ya / Tidak / OK / Submit"

**Pengecualian**: "Batal" / "Cancel" — universally understood as "close dialog without action", OK keep.

## Cross-refs
- Kartu lain: `[[be-concise-cut-filler-words]]`, `[[use-sentence-case]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 272
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
