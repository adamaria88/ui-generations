---
source_book: "Refactoring UI"
author: "Adam Wathan & Steve Schoger"
type: "thinking-framework"
created_at: "2026-05-22"
---

# Cara Berpikir — Refactoring UI

## Satu Lens

> **Visual weight harus proporsional sama importance-nya.**

Ini bukan checklist. Ini cara baca desain. Kalau lens ini sudah internalized, pertanyaan yang tepat muncul sendiri tanpa perlu lookup kartu satu-satu.

---

## Cara Lens Ini Bekerja

Setiap elemen di layar punya visual weight — seberapa keras dia "berteriak" minta perhatian. Weight itu datang dari: ukuran, ketebalan (bold/regular), warna (gelap/muted), dan kehadiran elemen dekoratif (border, shadow, background).

Desain yang baik = distribusi weight yang match distribusi importance.
Desain yang terasa ramai / flat / membingungkan = weight-nya salah distribusi.

**Kalau lihat desain apapun, tanya:** *"Apakah yang paling penting di sini paling berat secara visual? Apakah yang tidak penting sudah cukup ringan?"*

---

## Bagaimana Lens Ini Generate Keputusan

### Label vs Value
Label ada untuk clarity — bukan untuk tampil. Kalau value-nya sudah self-explanatory, label adalah weight yang tidak perlu ada. Chip, badge, format angka Rp, format tanggal — semua sudah carry context sendiri. Label di sebelahnya = noise.

**Lihat "Status: [chip Tercatat]" → langsung: chip sudah carry weight-nya. Label "Status" ngapain?**

### Bold dan Ukuran
Bold = emphasis. Tapi emphasis hanya bekerja karena langka. Kalau semua value bold, tidak ada yang benar-benar penting — bold kehilangan maknanya. Hierarchy lewat warna (dark vs muted) sudah cukup untuk label-value pair. Bold dihemat untuk data yang benar-benar perlu stand out (angka total, judul).

**Lihat semua value bold di satu section → langsung: ini over-emphasis, tidak ada hierarchy di antara value-nya sendiri.**

### Tombol dan Aksi
Primary action bekerja karena dia satu-satunya yang solid/filled. Begitu ada dua tombol filled, keduanya saling cancel — tidak ada yang dominant. Secondary action harus cukup jelas untuk ditemukan tapi tidak kompetitif secara visual. Tertiary / destructive yang jarang dipakai = sembunyikan, jangan beri visual weight besar.

**Lihat dua tombol filled di satu page → langsung: hierarchy rusak, salah satu harus turun weight-nya.**

### Border dan Pemisah
Border menambah visual weight ke struktur. Struktur tidak butuh perhatian — konten yang butuh. Alternatif yang tidak menambah weight: spacing (proximity), background color berbeda, shadow tipis. Pakai border hanya kalau tiga alternatif itu tidak cukup.

**Lihat banyak border di satu layout → langsung: bisa diganti spacing / bg color?**

### Whitespace
Whitespace bukan "ruang kosong" — dia adalah cara de-emphasize tanpa menghilangkan. Elemen yang berdekatan = related. Elemen yang jauh = distinct group. Default ke lebih banyak whitespace, baru kurangi — lebih mudah dari sebaliknya.

**Layout terasa cramped → tambah whitespace dulu, baru lihat mana yang bisa dikurangi.**

### Komponen
Setiap komponen punya default mental (dropdown = list putih, radio = lingkaran). Default itu starting point, bukan constraint. Tanya: *"Apa yang komponen ini sebenarnya coba capai untuk user?"* — jawabannya sering generate format yang lebih baik dari default.

---

## Cara Pakai Saat Desain

Sebelum selesai, lihat desain secara keseluruhan dan tanya satu pertanyaan:

> **"Apakah mata gue langsung ke yang paling penting — dan apakah semua yang lain sudah cukup quiet?"**

Kalau jawabannya belum — cari apa yang terlalu keras, bukan apa yang kurang keras. Solusinya hampir selalu de-emphasize, bukan tambah emphasis.

---

## Kartu Detail (kalau butuh spesifik)

| Topik | File | Page |
|-------|------|------|
| Hierarchy weight + color | `kartu/hierarchy-weight-color.md` | p.38 |
| Label secondary, value primary | `kartu/labels-secondary-value-primary.md` | p.48 |
| Action visual weight | `kartu/action-hierarchy-semantics.md` | p.60 |
| Spacing system | `kartu/spacing-system-scale.md` | p.66 |
| Color palette HSL | `kartu/color-palette-hsl-shades.md` | p.138 |
| Fewer borders | `kartu/fewer-borders-alternatives.md` | p.238 |
| Think outside component | `kartu/think-outside-box-component.md` | p.242 |
