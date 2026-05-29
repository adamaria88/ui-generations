---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 236
slug: "autocomplete-for-long-lists"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, autocomplete, search]
apply_value: "high"
problem_domain: "form"
---

# Use autocomplete instead of long dropdown

## Problem Trigger
> Field "Pilih Customer" — Paper.id punya 500+ customer per bisnis. Dropdown? Search?

## The Thinking
List >10 + user tau apa yang dicari → **autocomplete** (predictive search). User ngetik → suggestion appear inline. Faster + lebih low interaction cost dari scroll dropdown panjang.

**Tips autocomplete:**
- Max 10 suggestion (avoid choice paralysis).
- Highlight **differences** antar suggestion (mis. "United States" vs "United Kingdom" bold "St" vs "K"), bukan highlight karakter yang user ketik.
- Suitable untuk field where user KNOWS what they're looking for (country, customer, product known).
- NOT suitable untuk explore/browse — pakai filter+list page instead.

## Contoh Konkret
Country picker (200+ country) → autocomplete "Unite" → suggest "United States / United Kingdom / Tanzania / Arab Emirates". User pilih cepat.

## Anti-pattern (yang BUKAN ini)
Dropdown 200 country → scroll 5 detik nyari United States. High interaction cost. Atau search-as-modal (open new modal cuma untuk search 1 field) — too heavy.

## Aplikasi untuk Paper.id
- Field "Customer" di Form Buat Invoice → autocomplete (Aurora `au-autocomplete` kemungkinan exist).
- Field "Produk/Item" di line items → autocomplete (kalau katalog produk besar).
- Field "PIC Approval" → autocomplete kalau user banyak.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (autocomplete usage ≥5 dengan search need)
- Kartu lain: `[[radio-vs-dropdown-threshold]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 236-237
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
