---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 229
slug: "conventional-patterns-jakob-law"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, jakob-law, convention]
apply_value: "high"
problem_domain: "mindset"
---

# Stick with conventional patterns (Jakob's Law)

## Problem Trigger
> Lo tergoda eksperimen UI pattern baru — sliding gesture untuk delete, swipe down untuk refresh, dll.

## The Thinking
**Jakob's Law** — users spend most of their time on OTHER sites/apps. They form mental models from those. Your site easier to use if it follows familiar patterns. Stick conventional KECUALI inovasi punya compelling reason (huge usability gain).

## Conventional patterns to follow:
- Sidemenu kiri (Outlook, Slack, Stripe, Notion)
- Logo top-left + user avatar top-right
- Save/Cancel button at bottom of form
- Breadcrumb under header
- Action menu icon ⋮ (3-dot vertical)
- Tabs above content
- Hamburger menu on mobile
- Cart icon top-right e-commerce

## Contoh Konkret
Radio button rectangular dengan emoji "😊 / ☹️" — innovative but unclear (can multiple be selected? is it a link?). Standard radio circle = instant clarity.

## Anti-pattern (yang BUKAN ini)
- Logo top-RIGHT — user confused.
- Action menu pakai ✱ symbol bukan ⋮ — non-standard, user ga tau itu menu.
- Save button pakai icon-only ☑ — guessing game.

## Aplikasi untuk Paper.id
Aurora DS dibangun on conventional patterns. SUDAH lock di rules:
- 3-Zone Layout (sidemenu + nav-header + main-area).
- Sticky bottom-right action button.
- Action menu ⋮ kanan tiap row.
- Breadcrumb back-button di kiri.

**JANGAN reinvent**. Innovate hanya di area dengan clear unmet user need + validate via usability testing.

## Cross-refs
- Memory rule: `[[layout-rules-summary]]`, `[[breadcrumb-back-button-rule]]`, `[[aurora-lookup-ritual]]`
- Kartu lain: `[[conventional-form-field-styles]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms (hal 229) — Jakob's Law cited multiple times throughout book
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
