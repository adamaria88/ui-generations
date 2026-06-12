---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 1: Fundamentals"
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
> You're auditing a page, you know "something is off" but don't know how to assess it systematically.

## The Thinking
**3-pillar audit framework** for all design decisions:

### 1. Minimise usability risks
Could this cause users to struggle? Anything vague/confusing/unclear = risk. Cater to: low vision, low computer literacy, motor impairment, cognitive impairment. Aim for WCAG 2.1 AA.

### 2. Minimise interaction cost
Does this make users work extra? Sum of: looking, scrolling, searching, reading, clicking, waiting, typing, thinking, remembering. Reduce every step that can be reduced.

### 3. Minimise cognitive load
Does this make users think hard? Reduce: simultaneous choices, novel patterns, memorization burden. Conventional patterns + predefined options + clear labels.

Every design choice MUST be checked against the 3 pillars. Trade-offs are OK if there is a compelling reason — but you MUST be aware of the trade-off.

## Concrete Example
- **Light grey text "for a sleek look"** → fails usability risk (vision-impaired).
- **Multi-column form** → fails interaction cost (zig-zag) + cognitive load (which field is next).
- **Custom radio button styling** → fails cognitive load (deviates from mental model).
- **Hide CTA "Continue" until user scrolls** → fails interaction cost.

## Anti-pattern (what this is NOT)
Auditing a prototype by "feel" — "seems okay". Without a framework, you miss subtle issues.

## Application for Paper.id
- **Pre-Generation Checklist** in `design-rules.md` — ALWAYS run 3-pillar audit before delivering.
- **Critique session** — review using the 3 pillars as a lens.
- When there are design alternatives, evaluate both against the 3 pillars — pick the one that minimizes total cost across all 3.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` (audit M3), `[[prototyping-gap-lessons]]`
- Other card: `[[logical-reason-rationale]]` (paired mindset)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 1 — Fundamentals
- Page: 15-23
- Quote verbatim:
  > "The higher the interaction cost, the harder it is for someone to achieve their task."
- Extraction date: 2026-05-22
- Reviewed by user: yes
