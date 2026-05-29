---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 277
slug: "friction-ladder-for-destructive"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [destructive, confirmation, button, severity]
apply_value: "high"
problem_domain: "destructive-action"
---

# Friction ladder for destructive actions

## Problem Trigger
> User mau Hapus invoice — apakah cukup tombol Hapus langsung? Atau wajib confirm modal? Atau lebih?

## The Thinking
**4-tier friction ladder** sesuai severity data loss:

### Tier 1 — Initial Friction (pre-action)
- Action button less prominent (tertiary, bukan filled).
- Position less central / di sub-menu (3-dot ⋮).
- Progressive disclose (tucked behind menu).
- JANGAN colour red — red bikin lebih prominent, ironic.

### Tier 2 — Light Friction (small data loss)
- Confirm dialog: "Delete message? [Delete] [Cancel]".
- No red, no warning icon.

### Tier 3 — Medium Friction (significant loss)
- Confirm dialog + RED button + warning icon.
- Message: "You won't be able to recover it."

### Tier 4 — Heavy Friction (catastrophic loss)
- Confirm dialog + RED button + checkbox required ("I confirm I want to delete my account").
- User physically click extra checkbox sebelum bisa execute.

## Contoh Konkret
- Hapus draft message = Light. "Delete message? [Delete] [Cancel]".
- Hapus invoice tersimpan = Medium. Red button + "Kamu tidak bisa memulihkan ini lagi".
- Hapus account permanen = Heavy. Red + checkbox "Saya konfirmasi mau hapus akun".

## Anti-pattern (yang BUKAN ini)
- Hapus invoice langsung tanpa confirm → user accidental klik, data hilang.
- Hapus draft form yang belum keisi → Heavy modal dengan checkbox → annoying, harm UX.

## Aplikasi untuk Paper.id
Match dengan definisi [[paperverse-design-decisions]] — destructive = permanen & susah dibatalkan.

Match tier sesuai severity:
- Hapus draft (belum tersimpan) = no friction / toast saja.
- Hapus baris di form belum-submit = Initial (less prominent).
- Hapus invoice/mitra tersimpan = Medium (red + warning).
- Hapus account / bisnis = Heavy (checkbox required).

**Combine dengan [[allow-undo-better-than-friction]]** — undo via toast lebih bagus dari add friction.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (destructive definition), `[[aurora-sectioned-modal-rule]]`
- Kartu lain: `[[allow-undo-better-than-friction]]` (preferred alternative), `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 277-279
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
