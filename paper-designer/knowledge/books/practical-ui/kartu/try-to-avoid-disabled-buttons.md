---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 8: Buttons"
  page: 262
slug: "try-to-avoid-disabled-buttons"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, accessibility, conflict-aurora]
apply_value: "high"
problem_domain: "button"
---

# Try to avoid disabled buttons (⚠️ konflik potensial)

## Problem Trigger
> Submit button di form lo di-disable sampe semua field valid — kebiasaan klasik. Atau follow button locked untuk user belum subscribe — di-disable.

## The Thinking
Disabled button problems:
1. **User stuck**: ga ada feedback "kenapa ga bisa klik?". Asumsi user tau form ga valid? NO.
2. **Low contrast**: disabled style biasanya grey-on-grey, hard untuk vision-impaired.
3. **Keyboard inaccessible**: focus skip disabled button → keyboard user confused.

## Alternatif (pilih sesuai context)
1. **Enable + validate on submit** (preferred): klik submit → highlight error field + message. Lihat [[validate-on-submit-not-inline]].
2. **Lock icon on button** (untuk premium/paywall): "Follow" + lock icon → user tau available tapi locked, klik trigger paywall modal.
3. **Remove unavailable action**: kalau action ga relevant ke state user, hapus aja + show reason ("Request follow this person to message them").
4. **Tooltip + keyboard-accessible**: kalau MUST disable, kasih tooltip "Fill all fields to register" + ensure focusable.

## Contoh Konkret
Form Login — JANGAN disable "Log in" sampe email+password keisi. Enable selalu, klik kosong → "Enter email" error inline.

## Anti-pattern (yang BUKAN ini)
Modal Edit dengan Save disabled sampe formDirty → user iseng pencet 3x ga merespond, abandon edit. Atau "Pay" button disabled saat 1 field salah → user stuck guessing.

## Aplikasi untuk Paper.id
⚠️ **Konflik vs current pattern** (banyak modal Aurora disable Save). Catat ke `IMPROVEMENT-OPPORTUNITIES.md`.

Compromise:
- Form simple (login, search, subscribe) → enable+validate.
- Form kompleks dengan inter-field dependency → safer disable + tooltip.
- Lock-feature pattern (paywall) → pakai lock icon, bukan disabled.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]`
- Kartu lain: `[[validate-on-submit-not-inline]]` (paired solution)
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 8 — Buttons
- Halaman: 262-266
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
