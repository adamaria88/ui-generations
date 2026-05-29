---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 1: Fundamentals"
  page: 17
  quote_verbatim: "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
slug: "logical-reason-rationale"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, foundation, design-thinking]
apply_value: "high"
problem_domain: "mindset"
---

# Have a logical reason for every design detail

## Problem Trigger
> Reviewer designer tanya "kenapa button warnanya biru?" — lo jawab "looks nice" atau "ngerasa pas". Subjective.

## The Thinking
**Every design detail must have a logical reason** behind it that improves usability. Ini foundational mindset buku. "That looks nice" / "I don't like it" = subjective opinion, BUKAN rationale. Rationale = objective + articulable + tied to usability/accessibility/conventions.

**Manfaat:**
- Faster decision (rule guide, ga ribet feeling).
- Defensible — bisa argue di review meeting.
- Improvement-able — rule bisa di-iterate kalau ada data baru.
- Onboarding-able — designer baru bisa follow rule, ga harus tebak.

## Contoh Konkret
Card design dengan 8 logical rationales:
1. Icons + text left-aligned → neat edge + readability.
2. Heading descriptive → screen-reader scannable.
3. Secondary text smaller + lower contrast → visual hierarchy.
4. Line height 1.5+ for body → readability.
5. Text link blue + underlined → colour-blind accessible.
6. Inner spacing < outer spacing → grouping clear.
7. Info chunked → speed decision.
8. Color palette accessible monochromatic → consistency.

## Anti-pattern (yang BUKAN ini)
Design review "I just feel like the button should be bigger" — no rationale. Replace dengan "Fitts's Law — primary action target ≥48pt, currently 32pt, increase ke 48pt".

## Aplikasi untuk Paper.id
- Setiap rule di `design-rules.md` + memory file WAJIB punya **Why:** dan **How to apply:** lines (sudah lock di memory pattern).
- Saat usul design alternatif ke user, ALWAYS cite rationale + source (rule / book / production pattern).
- Audit prototype: tiap design choice bisa di-articulate kenapa.

Saat user request "ganti warna ini jadi biru", tanya rationale atau confirm pakai brand color token. JANGAN langsung custom value.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]`, `[[knowledge-vs-ds-priority-flow]]`
- Kartu lain: `[[3-pillar-minimization]]`, `[[conventional-patterns-jakob-law]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 1 — Fundamentals
- Halaman: 17-18
- Quote verbatim:
  > "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
