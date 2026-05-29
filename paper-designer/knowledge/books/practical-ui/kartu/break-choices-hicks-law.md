---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 2: Less is more"
  page: 55
slug: "break-choices-hicks-law"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [cognitive-load, hicks-law, choice]
apply_value: "medium"
problem_domain: "content"
---

# Break up choices to speed up decision making (Hick's Law)

## Problem Trigger
> Lo punya 20 menu items di sidebar — user butuh waktu lama pilih.

## The Thinking
Hick's Law — decision time meningkat dengan jumlah & complexity pilihan. 4 taktik buat speed up:

1. **Remove** — Kalau opsi ga essential, cut.
2. **Group/Categorise** — Bundle opsi related (mis. "Sales" group → Invoice/Receipt/Customer).
3. **Multi-step** — Pecah jadi sequential choice (jenis dokumen dulu → setelah pilih invoice, baru muncul opsi terkait).
4. **Recommend** — Highlight 1 sebagai "Most popular" / "Recommended" → user fast-track pilih itu.

## Contoh Konkret
Form subscribe newsletter dengan 3 field (First name + Company + Email) → cut First name + Company (not essential) → tinggal Email. Submission rate naik.

## Anti-pattern (yang BUKAN ini)
Menu 20 item flat tanpa grouping → user scan 20 item tiap kali butuh action. Pricing comparison 5 plan tanpa "Most popular" badge → user paralysis.

## Aplikasi untuk Paper.id
- Sidemenu udah grouped (Sales / Purchase / Inventory / Settings).
- Form Buat Invoice — kalau ada banyak custom field optional, group dengan "Tambah detail" accordion.
- Pricing comparison — kasih badge "Most popular" di middle plan untuk fast-track decision.
- Onboarding step — recommend "Setup Bisnis dulu" sebagai first step.

## Cross-refs
- Kartu lain: `[[remove-unnecessary-information]]`, `[[progressive-disclosure]]`, `[[break-long-forms-into-steps]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 2 — Less is more
- Halaman: 55-58
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
