---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 2: Less is more"
  page: 52
  quote_verbatim: "Minimal doesn't mean simple."
slug: "minimalism-not-simplicity"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, anti-pattern, mindset]
apply_value: "high"
problem_domain: "mindset"
---

# Don't confuse minimalism with simplicity

## Problem Trigger
> Lo tergoda design "minimal modern" — strip semua label, hide affordance, semua icon-only. Looks clean tapi user bingung.

## The Thinking
Minimal ≠ Simple.

- **Minimal** = less elements & styles.
- **Simple** = easy to understand & use.

Minimal interface bisa **harm usability** kalau ngilangin:
- Critical labels (icon-only = guessing game)
- Selected state (user ga tau mana yang aktif)
- Contrast (icon low-contrast = miss)
- Affordance (button looks ga interactive)

Trend minimal/glassmorphic/neumorphic = aesthetic, tapi prone usability + accessibility issue. Don't sacrifice clarity untuk "clean look".

## Contoh Konkret
Bottom nav 4 icon tanpa label "modern":
- ❌ User tebak ini apa, ini apa.
- ✅ Icon + label "Beranda / Cari / Notif / Profil" — extra visual element, tapi crystal-clear navigation.

## Anti-pattern (yang BUKAN ini)
Camera app dengan icon-only filter buttons tanpa label + active state subtle 1px line → user ga yakin pilih filter mana. Looks great in Dribbble shot, fails in usability test.

## Aplikasi untuk Paper.id
- Aurora `au-icon-button` ALWAYS pair with tooltip atau adjacent label.
- Action menu items (3-dot) selalu icon + text (SUDAH lock [[prototyping-gap-lessons]] 0f).
- Active state sidemenu high-contrast (SUDAH lock [[sidemenu-active-color-rule]]).
- Empty state heading + 1-line subtext + CTA primary (jangan "minimal" tanpa explanation).

**Saat ada PM/stakeholder push "make it cleaner"**, PUSHBACK dengan quote + rationale "minimal ≠ simple". Show alt yang simple AND visually clean.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0f Action menu items, `[[sidemenu-active-color-rule]]`
- Kartu lain: `[[quote-minimal-doesnt-mean-simple]]`, `[[3-pillar-minimization]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 2 — Less is more
- Halaman: 52-53
- Quote verbatim:
  > "Minimal doesn't mean simple."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
