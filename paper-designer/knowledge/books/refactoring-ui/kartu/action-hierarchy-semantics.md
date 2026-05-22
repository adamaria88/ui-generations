---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: 60
  quote_verbatim: "Every action on a page sits somewhere in a pyramid of importance. Most pages only have one true primary action, a couple of less important secondary actions, and a few seldom used tertiary actions."
slug: "action-hierarchy-semantics"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, button, action, destructive]
apply_value: "high"
problem_domain: "hierarchy"
---

# Action Visual Weight = Semantic Importance

## Problem Trigger
> Page terasa "ramai aksi" — beberapa tombol terlihat sama pentingnya, atau destructive action (Hapus) secara visual sama dengan primary action (Simpan).

---

## The Thinking
> Visual weight sebuah action harus match kepentingannya: primary action = filled/solid pill (satu per page, dominan), secondary action = outline atau ghost, tertiary/jarang dipakai = text-link only, destructive = hanya visual berbahaya (merah) tapi weight sesuai frekuensi (kalau jarang dipakai = text-link merah, bukan filled merah). Destructive action yang jarang tapi berpotensi bahaya = sembunyikan di sub-menu/kebab. Kalau dua tombol punya visual weight sama, user tidak bisa tau mana yang lebih penting.

---

## Contoh Konkret (1 contoh nyata)
> GitHub: "Merge pull request" = filled green (primary), "Close pull request" = outline grey (secondary, tidak di-emphasize), "Delete branch" = hanya muncul setelah merge, text-link merah kecil. Hierarchy sangat jelas meski tiga action ada di satu area.

---

## Anti-pattern (yang BUKAN ini)
> Form dengan tiga tombol: "Simpan" (filled blue), "Batalkan" (filled grey), "Hapus" (filled red) — semua filled, semua besar, semua sama weight. User bingung mana yang paling penting. Atau destructive action di-highlight dengan warna merah solid besar — justru menarik perhatian ke aksi berbahaya.

---

## Aplikasi untuk Paper.id
> Sudah documented di `prototyping-gap-lessons.md` poin 0h: 4-step action hierarchy. Referensi implementasi: `_output/expense-management/02-ui-aurora.html` — "Tindakan Lainnya" (text-link kiri) + "Catat Pengeluaran" (pill primary kanan). Di Detail page: "Ubah" jadi standalone button, destructive "Hapus" masuk sub-menu Tindakan ▾ (text-link, merah di dalam menu). Ref: `[[action-menu-derivation-rule]]`.

---

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — poin 0h action hierarchy 4-step
- Memory rule: `[[action-menu-derivation-rule]]` — derivasi menu dari table 3-dot
- Kartu lain: `[[hierarchy-weight-color]]` — broader hierarchy framework
- DS / rules: `paper-designer/rules/design-rules.md` — "Action Hierarchy by Page Purpose"

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch2 — Hierarchy is Everything
- Halaman: 60
- Quote verbatim: "Every action on a page sits somewhere in a pyramid of importance. Most pages only have one true primary action, a couple of less important secondary actions, and a few seldom used tertiary actions."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
