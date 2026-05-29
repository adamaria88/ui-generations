---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 1: Fundamentals"
  page: 15
  quote_verbatim: "The higher the interaction cost, the harder it is for someone to achieve their task."
slug: "3-pillar-minimization"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, audit, foundation]
apply_value: "high"
problem_domain: "mindset"
---

# 3-pillar minimization (usability risk + interaction cost + cognitive load)

## Problem Trigger
> Lo audit page, tau "ada yang aneh" tapi ga tau gimana cara assess systematically.

## The Thinking
**3-pillar audit framework** untuk semua design decision:

### 1. Minimise usability risks
Apakah ini bisa bikin user struggle? Anything vague/confusing/unclear = risk. Cater to: low vision, low computer literacy, motor impairment, cognitive impairment. Aim WCAG 2.1 AA.

### 2. Minimise interaction cost
Apakah ini bikin user kerja extra? Sum of: looking, scrolling, searching, reading, clicking, waiting, typing, thinking, remembering. Reduce setiap step yang bisa.

### 3. Minimise cognitive load
Apakah ini bikin user mikir keras? Reduce: simultaneous choices, novel patterns, memorization burden. Conventional patterns + predefined options + clear labels.

Setiap design choice WAJIB cek vs 3 pillar. Trade-off OK kalau ada compelling reason — tapi WAJIB sadar trade-off-nya.

## Contoh Konkret
- **Light grey text "biar sleek"** → fail usability risk (vision-impaired).
- **Multi-column form** → fail interaction cost (zig-zag) + cognitive load (which field next).
- **Custom radio button styling** → fail cognitive load (deviate from mental model).
- **Hide CTA "Continue" sampai user scroll** → fail interaction cost.

## Anti-pattern (yang BUKAN ini)
Audit prototype dengan "feel" — "kayanya ok lah". Tanpa framework, miss subtle issue.

## Aplikasi untuk Paper.id
- **Pre-Generation Checklist** di `design-rules.md` — ALWAYS run 3-pillar audit sebelum setor.
- **Critique session** — review pakai 3 pillar sebagai lens.
- Saat ada alternatif design, evaluate kedua against 3 pillar — pilih yang minimize total cost across 3.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` (audit M3), `[[prototyping-gap-lessons]]`
- Kartu lain: `[[logical-reason-rationale]]` (paired mindset)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 1 — Fundamentals
- Halaman: 15-23
- Quote verbatim:
  > "The higher the interaction cost, the harder it is for someone to achieve their task."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
