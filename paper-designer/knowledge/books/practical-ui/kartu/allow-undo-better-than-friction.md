---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 279
slug: "allow-undo-better-than-friction"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [destructive, undo, toast, recovery]
apply_value: "high"
problem_domain: "destructive-action"
---

# Allow undo — better alternative than friction

## Problem Trigger
> Lo kasih friction berat untuk Hapus, user tetep accidental klik kadang. Solusi gimana?

## The Thinking
Friction PREVENT error, tapi tidak FIX error. Better alternative untuk MOST destructive: **allow undo**. User accidental delete? Snackbar "Message deleted [Restore]". Recovery > Prevention. Hemat user time + reduce anxiety. Boleh kombinasi (light friction + undo) untuk extra-safe.

## Contoh Konkret
- Gmail delete email → toast "Message moved to Trash [Undo]" 10 detik.
- iOS Notes delete → "Recently Deleted" folder 30 hari.
- Linear archive task → toast "Task archived [Undo]".

## Anti-pattern (yang BUKAN ini)
Hapus → instant gone, no undo, no trash → user accidental misklik = data loss permanen. Bahkan heavy friction modal ga 100% prevent accidental click.

## Aplikasi untuk Paper.id
Audit current destructive actions:
- **Hapus invoice/expense draft** → wajib ada Undo toast 10 detik.
- **Hapus invoice tersimpan/published** → friction medium + undo recovery 24h (kalau possible secara backend).
- **Hapus akun** → friction heavy + email confirmation (24h cooling period).

Toast Aurora 380x8 udah ada — pakai untuk implement undo pattern. Lihat [[smooth-transitions-rule]].

## Cross-refs
- Memory rule: `[[smooth-transitions-rule]]` (toast pattern), `[[paperverse-design-decisions]]`
- Kartu lain: `[[friction-ladder-for-destructive]]` (alternative + complement)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 279
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
