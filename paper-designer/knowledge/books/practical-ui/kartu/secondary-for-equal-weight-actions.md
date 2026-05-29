---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 260
  quote_verbatim: "Don't make one button more prominent than the other as it creates bias."
slug: "secondary-for-equal-weight-actions"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, neutral-choice]
apply_value: "high"
problem_domain: "button"
---

# Use secondary buttons for equal-weight actions

## Problem Trigger
> Dialog confirm "Report email as junk?" — Report vs Don't Report sama-sama valid choice. Mana yang primary?

## The Thinking
Kalau 2 (atau lebih) action punya equal importance dan user-decision (bukan "recommended path"), JANGAN bias 1 jadi primary. **Both secondary** = neutral presentation. Mendukung user autonomy, ga manipulatif.

## Contoh Konkret
"Report this email as junk?" → [Report] + [Don't report], both secondary. User benar-benar bebas pilih sesuai context.

## Anti-pattern (yang BUKAN ini)
"Save changes? [Save] + [Discard]" — kalau save dipasang primary biru, discard tertiary, user terdorong save padahal kadang lebih bener discard. UX manipulatif.

## Aplikasi untuk Paper.id
- Dialog "Buang perubahan?" → [Buang perubahan] + [Lanjut edit] both secondary. User decide bebas.
- Dialog "Kirim ke approval atau Simpan draft?" → both secondary.

**Pengecualian** — destructive ada "recommend safer path":
- "Hapus invoice?" → [Hapus invoice] medium friction (red) + [Batal] secondary. Kasus ini ada bias toward safer path (cancel), intentional protect user dari accidental.

## Cross-refs
- Kartu lain: `[[3-button-weight-system]]`, `[[friction-ladder-for-destructive]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 260
- Quote verbatim:
  > "Don't make one button more prominent than the other as it creates bias."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
