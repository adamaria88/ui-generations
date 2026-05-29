---
book: "Practical UI"
author: "Adham Dannaway"
edition: "2022 (1st edition)"
isbn: "978-0-6456766-0-0"
slug: "practical-ui"
type: "bacaan-naratif"
extracted_at: "2026-05-22"
extracted_by: "claude-opus-4-7"
review_status: "reviewed"
reviewer: "design.paper.id"
companion_to: "practical-ui-ringkasan.md"
target_audience: "Senior designer Paper.id, B2B finance SaaS, belum baca buku ini"
reading_time: "~18-20 menit"
word_count: "~2700"
---

# Practical UI — Bacaan Santai

> **[VISUAL: Hero / Cover Section]**
> Banner full-width di paling atas dokumen, height ~400-500px:
> - Background: gradient subtle (light cream → light blue) atau solid light tint
> - Kiri (60% width): heading utama "Practical UI" ukuran sangat besar (60-72px bold), sub-heading "Bacaan Santai 18 Menit" (24px medium), nama author "by Adham Dannaway · 2022 · 282 hal" (16px muted). Di bawah, 3 chip kecil: "📖 ~2700 kata", "⏱️ 18-20 menit", "🎯 B2B finance designer"
> - Kanan (40% width): ilustrasi/cover mock — bisa 3 UI component sederhana (form field, primary button, color swatch) di-arrange overlap dengan shadow halus, atau cover buku Practical UI kalau ada gambar-nya
> - Di bawah banner, callout horizontal "Outline bacaan" — 5 chips berderet dengan icon: (A) Thesis · (B) Top 10 Insight · (C) 5 Quote · (D) Per Chapter · (E) 3 Actionable

Bacaan naratif ringkasan buku **Practical UI** (Adham Dannaway, 2022, 282 hal). Format ini buat lo baca santai 15-20 menit; kalau mau reference cards detail untuk Mode 2 retrieval, lihat `practical-ui-ringkasan.md` + 45 kartu di folder ini.

---

## A. THESIS BUKU

Adham Dannaway pengen ngebongkar mitos bahwa UI design itu soal "bakat" atau "selera estetik magis". Menurut dia, hampir semua keputusan desain interface yang bagus itu sebenernya hasil dari sekumpulan aturan logika sederhana yang bisa dipelajari. Setiap detail — ukuran tombol, warna, jarak antar elemen, urutan field di form — harus punya alasan rasional yang bisa diucapkan, bukan sekadar "feel-nya enak". Dia ngerangkum 2 dekade pengalamannya jadi tiga prinsip pengukur: kurangin risiko bingung (**usability risk**), kurangin effort fisik+mental pengguna (**interaction cost**), dan kurangin beban otak buat ngerti (**cognitive load**). Kalau lo bisa jawab "kenapa begini" pake tiga ukuran itu — bukan "karena keren" — desain lo udah ngalahin 80% UI di luar sana.

> **[VISUAL: Diagram 3-Pillar Framework]**
> Bikin 3 lingkaran besar berderet horizontal (atau Venn-style sedikit overlap). Masing-masing label besar di tengah:
> - **Pillar 1: Usability Risk** — icon ⚠️/mata. Sub-text: "Ada yang bingung/ga jelas/ambigu?"
> - **Pillar 2: Interaction Cost** — icon klik/cursor. Sub-text: "Berapa klik, scroll, search, baca yang user harus lakuin?"
> - **Pillar 3: Cognitive Load** — icon otak. Sub-text: "Berapa banyak user harus mikir/inget/decide simultan?"
> Di atas tiga lingkaran: heading "Tiga pengukur pengganti 'selera'". Di bawah: kalimat kecil "Audit desain pake 3 tuas ini, bukan opini."
> Warna brand monochromatic (biru navy + variasi shade), bukan rainbow.

Kenapa thesis ini powerful: dia ngubah review meeting dari debat selera ("gue ngerasa tombolnya kurang gede") jadi debat objektif ("tombol Save itu primary action — di-squint masih dominant ga? kalau nggak, gedein"). Dan dia konsisten apply ke seluruh 282 halaman buku — dari color sampe copywriting, semua di-justify pake logika yang sama.

Catatan penting: buku ini **bukan textbook teoritik**. Adham cuma kasih panduan praktis yang "work well in most cases" — dia bilang sendiri di intro, design rarely black and white. Jadi treat semua rules sebagai default, bukan dogma.

---

## B. TOP 10 INSIGHT (urut by impact)

### 1. Setiap detail desain harus punya "logical reason" yang bisa diucapkan
Ini fondasi semua bab. Sebelum lo gedein tombol atau ganti warna border, tanyain ke diri sendiri: "kenapa". Kalau jawabannya "karena lebih cakep" atau "biar konsisten" tanpa lanjutan, itu bukan rationale — itu opini. Rationale yang sah selalu nyangkut ke salah satu dari: bantu user lihat (usability), kurangin effort (interaction cost), atau kurangin beban otak (cognitive load).
**Contoh konkret di buku:** Adham nolak feedback "I just feel like the button should be bigger" sebagai non-rationale, dan minta penanya jawab "lebih gede untuk apa — biar lebih ke-klik di mobile? biar lebih dominant dibanding secondary?". Begitu specific, baru bisa di-decide. (Bab 1, hal 17-18)

### 2. Tiga ukuran pengganti "selera": usability risk, interaction cost, cognitive load
Ini framework audit yang lo bisa pake ke semua: form, table, modal, sampe copy. **Usability risk** = ada yang bingung/ga jelas/ambigu ga? **Interaction cost** = jumlah klik, scroll, search, baca yang user harus lakuin. **Cognitive load** = berapa banyak user harus mikir, inget, atau decide simultan. Kalau salah satu naik tanpa ada gain di yang lain, desainnya rugi.
**Contoh konkret:** Text abu-abu muda "biar sleek" — kelihatannya minimalis tapi usability risk-nya tinggi banget (orang lansia atau silau di outdoor ga bisa baca). Form 2 kolom "save space" — bikin mata user zig-zag (interaction cost naik) dan harus inget posisi field mana yang udah diisi (cognitive load naik). (Bab 1, hal 15-23)

### 3. "If everything is important, nothing is important"
Visual hierarchy itu literally cara user tau mana yang harus dilihat duluan. Lo punya 6 tuas: ukuran, warna, kontras, jarak, posisi, kedalaman (shadow). Apply by urutan kepentingan, bukan rata. Untuk validasi, pake **Squint Test**: tutup mata sampe 50% atau blur Figma — kalau lo masih bisa nunjuk satu titik fokus utama, hierarchy lo bener. Kalau semua kelihatan sama berat, lo gagal.
**Contoh konkret:** Page punya 4 tombol pill biru sama berat ("Filter", "Sort", "Export", "Buat Invoice") — squint test kasih 4 titik dominant, user bingung mau klik yang mana duluan. Fix: cuma "Buat Invoice" yang primary pill, sisanya text link. (Bab 4 + Bab 8, hal 120 & 259)

> **[VISUAL: Squint Test Before/After]**
> Layout 2 kolom side-by-side, masing-masing nge-mock toolbar page List Invoice:
> - **Kolom kiri (label "Salah — semua sama berat"):** 4 pill primary biru penuh berderet: [Filter] [Sort] [Export] [Buat Invoice]. Di bawah-nya versi blur 8px — keliatan 4 blob biru sama gede, ga ada focal point.
> - **Kolom kanan (label "Bener — 1 anchor"):** 1 pill primary biru penuh [Buat Invoice] di paling kanan, plus 3 text link biru (Filter · Sort · Export) di kiri. Di bawah-nya versi blur 8px — keliatan cuma 1 blob biru dominant di kanan, sisanya samar.
> Caption di bawah: "Tutup mata 50% atau blur Figma — kalau focal point masih kelihatan tunggal, hierarchy lo menang."

### 4. Satu primary button per halaman. Maksimal.
Ini implementasi paling konkret dari insight #3. Primary button (filled, warna brand) itu **anchor visual** — dia jadi titik fokus karena LANGKA. Begitu lo pasang 2-3 primary di satu page, dominance-nya hilang, dan user balik bingung. Untuk action lain di page yang sama: secondary (border only) untuk equal-weight, tertiary (text link) untuk yang paling rendah atau destructive.
**Contoh konkret:** Form Tambah Mitra punya tombol "Simpan" + "Batal" + "Simpan & Tambah Lagi" — kalau ketiganya pill primary semua, user yang baru daftar pasti nge-klik "Simpan & Tambah Lagi" tanpa sadar. Fix: "Simpan" primary, "Simpan & Tambah Lagi" secondary (border), "Batal" tertiary (text link). (Bab 8, hal 258)

> **[VISUAL: 3-Tier Button System]**
> Tampilan baris horizontal 3 button side-by-side, dengan label tier di atasnya:
> - **Primary:** Pill biru penuh, text putih "Simpan invoice", 1 panah/icon dominan di atas (label "1 per page MAX")
> - **Secondary:** Pill background putih + border biru tipis 1px, text biru "Simpan & buat baru" (label "Untuk equal-weight actions")
> - **Tertiary:** Text only "Batal" warna biru dengan underline tipis (label "Untuk least important")
> Di bawah: visual penjelasan kenapa hierarchy ga boleh cuma andalan warna — tampilkan 3 button itu dalam mode grayscale, masih harus keliatan beda tier-nya (filled vs border vs text).
> Caption: "Beda tier = beda fill style, bukan cuma beda warna. Color-blind user tetep bisa baca hierarchy."

### 5. Form WAJIB single column, label di atas input
Mata orang baca ke bawah, bukan zigzag. Single column = momentum jelas dari atas ke bawah, user ga harus "nyari field selanjutnya di mana". Label di atas input juga critical — karena begitu user fokus ngetik, label di samping ke-cover keyboard mobile atau hilang dari peripheral vision. Field width juga **match expected input** (kode pos ga perlu selebar nama panjang) — itu kasih hint silent ke user soal panjang input yang diharapkan.
**Contoh konkret di Paper.id:** Form Catat Pengeluaran dengan field "Tanggal" + "Jumlah" + "Vendor" — jangan paksa 2 kolom. Stack vertical, label di atas, dan field Tanggal selebar 12 karakter (dd/mm/yyyy), Jumlah selebar 15 karakter, Vendor full-row. (Bab 7, hal 214-225)

> **[VISUAL: Form Layout Comparison — Single vs Multi Column + Field Width]**
> 2 panel side-by-side, mock-up Form Catat Pengeluaran:
> - **Panel kiri (label "❌ Multi-column + full-width semua"):** Layout 2 kolom — Tanggal sebelahan sama Jumlah, semua field bentuk dan width sama (full width container). Tambahkan red arrow zigzag dari Tanggal ke Jumlah ke Vendor menggambarkan path mata user.
> - **Panel kanan (label "✅ Single column + field width match input"):** Layout 1 kolom vertikal — Tanggal di atas (width pendek ~140px, looks like dd/mm/yyyy), Jumlah di bawah (width sedang ~200px), Vendor di bawah (full row). Tambahkan green arrow lurus ke bawah menggambarkan downward momentum.
> Caption: "Width field = hint silent buat user soal panjang input yang diharapkan. Mata baca ke bawah, bukan zigzag."

### 6. Untuk destructive action: kasih UNDO, jangan modal konfirmasi
Counter-intuitive tapi research-backed. Friction ladder (no-friction → light confirm → medium red-button → heavy checkbox) memang ada tempatnya — tapi untuk 80% kasus destructive sehari-hari, **allow undo via toast/snackbar lebih bagus daripada modal konfirmasi**. Alasannya: modal interupsi flow, user yang yakin jadi annoyed; sedangkan toast "Item dihapus — Urungkan?" yang muncul 5-10 detik kasih safety net tanpa block. Heavy friction (modal + ketik nama untuk confirm) cuma sah untuk benar-benar irreversible nuclear option: hapus akun, hapus organisasi.
**Contoh konkret:** Gmail nge-archive email langsung dengan toast "Pesan dihapus — Urungkan" — bandingin sama app yang munculin modal "Yakin hapus pesan ini?" tiap kali. (Bab 8, hal 277-279)

> **[VISUAL: Friction Ladder + Toast Undo Alternative]**
> Tampilan vertikal 4 baris (friction ladder) + 1 alternative di paling bawah:
> - **Level 1 (no friction):** Icon tempat sampah kecil. Caption "Action tersembunyi/jarang dipake."
> - **Level 2 (light confirm):** Modal simple "Hapus item?" + button [Batal] [Hapus]. Caption "Confirm tanpa visual heavy."
> - **Level 3 (medium):** Modal dengan icon ⚠️ + button [Batal] (secondary) + [Hapus] (filled merah). Caption "Visual emphasis ke konsekuensi."
> - **Level 4 (heavy):** Modal dengan checkbox "Saya paham aksi ini tidak bisa dibatalkan" + input "Ketik nama untuk konfirmasi" + button [Hapus selamanya] (disabled sampe checkbox + ketik). Caption "Nuclear option: hapus akun/organisasi."
> Garis pembatas horizontal.
> - **Better alternative:** Toast snackbar di bawah viewport "Pengeluaran dihapus" + button text putih "Urungkan" + timer bar tipis countdown 7 detik. Caption "Untuk 80% destructive sehari-hari — 1 klik selesai, safety net tetep ada."
> Caption keseluruhan: "Ladder ada tempatnya. Tapi untuk hapus row table / draft / item belum tersimpan — toast undo jauh lebih cepat dan ga ngegangu user yang yakin."

### 7. 4 cara grouping: container, proximity, similarity, continuity — combine 2-3
Lo punya sekelompok info terkait yang harus terlihat sebagai satu grup. Container (kotak/border) itu paling kuat tapi paling crowded — kalau dipakai berlebihan, design jadi "ramai border". **Proximity** (kasih jarak lebih dekat antar elemen related, jarak lebih jauh ke yang ga related) sering udah cukup. **Similarity** (warna/font/ukuran sama) bisa nambahin. **Continuity** (rata-line) juga bisa. Yang Adham tekankan: 2-3 method combined > 1 method kuat. Inner spacing dalam grup harus selalu < outer spacing antar grup.
**Contoh konkret:** Card "Total Pengeluaran" di dashboard — daripada bungkus pake border tebal, cukup pake background tint ringan + proximity rapat antar value & label. Lebih bersih. (Bab 4, hal 105-119)

> **[VISUAL: 4 Grouping Methods Side-by-Side]**
> Grid 2x2, masing-masing kotak demonstrasiin 1 grouping method ke data yang sama (mis. 3 baris "Label: Value" — Tanggal: 22 Mei 2026 / Jumlah: Rp 1.500.000 / Vendor: PT Kopi Nusantara):
> - **Top-left: Container** — 3 baris dibungkus border 1px abu-abu + padding. Caption "Paling kuat, tapi paling crowded."
> - **Top-right: Proximity** — 3 baris tanpa border, dengan jarak antar baris rapat (4px), tapi jarak ke konten lain di luar grup jauh (32px+). Caption "Cukup untuk grouping ringan."
> - **Bottom-left: Similarity** — 3 baris dengan visual treatment sama (warna label sama, weight sama, alignment sama). Caption "Visual treatment seragam = signal grouping."
> - **Bottom-right: Continuity** — 3 baris rata-line kiri pake invisible grid. Caption "Mata mengikuti garis lurus = signal grup."
> Di bawah grid, panel kelima dengan label "💡 Recommended: Combine 2-3" — tampilkan card dengan background tint ringan (mild container) + proximity rapat (4px gap) + similarity (label semua bold-small, value reguler-medium). Caption "2-3 method combined > 1 method paling kuat. Inner spacing < outer spacing."

### 8. Hindari disabled submit button (default-nya), enable + validate on submit
Salah satu insight paling counter-current di buku. Pattern populer "Submit disabled sampai form valid" itu ternyata punya beberapa masalah: (a) user ga tau kenapa disabled, (b) kontras text disabled biasanya rendah jadi accessibility jelek, (c) keyboard user bisa skip-over tombol disabled, (d) flow jadi stuck tanpa feedback. Lebih bagus: enable tombolnya, terus validate pas klik. Kalau ada error, scroll ke field error pertama + kasih error message inline yang jelas.
**Contoh konkret:** Form KYC dengan 8 field. Pattern lama: Submit disabled. User ngisi 7 field, mikir "kenapa ga bisa klik?" — ga ada feedback field mana yang missing. Pattern baru: Submit enabled. User klik, langsung tau "Field NPWP wajib diisi" + auto-scroll ke field itu. (Bab 7, hal 248)

> **[VISUAL: Disabled vs Enabled Submit — Flow Comparison]**
> 2 panel side-by-side, mock-up form KYC dengan 8 field (sebagian terisi, 1 field NPWP kosong):
> - **Panel kiri (label "❌ Disabled — user stuck"):** Tombol Submit di-mute (abu-abu muda, text abu-abu, no cursor). Tampilkan thought bubble di user icon: "Kenapa ga bisa di-klik? Field mana yang kurang?" Tambahkan annotation: "Kontras rendah = accessibility issue. Keyboard skip-over. No feedback."
> - **Panel kanan (label "✅ Enabled + validate on submit"):** Tombol Submit aktif penuh (biru, text putih). Setelah di-klik, error inline merah muncul di field NPWP: "NPWP wajib diisi" + auto-scroll ke field itu + outline merah. Tambahkan annotation: "User langsung tau field mana yang kurang. Clear feedback."
> Caption: "Counter-intuitive: enable lebih baik dari disable. User dapet clarity, accessibility menang."

### 9. Untuk warna brand: bikin monochromatic palette, hindari hitam pekat
Daripada milih puluhan shade grey buat border, background, text — bikin **monochromatic palette** dari satu warna brand. Variasi-nya cuma di brightness/saturation. Hasilnya lebih neat, lebih cohesive, dan keputusan lebih cepat (lo ga akan dilemma "pake grey #888 atau #999"). Plus: hindari pure black (#000) di atas pure white — kontras 21:1 bikin mata cape baca lama. Pakai dark navy atau dark grey, atau kasih "tinge" warna brand ke hitam.
**Contoh konkret:** Aurora pakai `#133f5d` (dark navy) sebagai text-primary, bukan pure black. Otomatis lebih nyaman dibaca lama, dan punya "brand feel" karena warnanya nyambung ke brand blue. (Bab 3, hal 79 & 158)

> **[VISUAL: Monochromatic Palette + Pure Black vs Tinged Black]**
> Bagian 1 — Palette swatch: tampilkan 1 baris horizontal 5 kotak besar (~120×120px), monochromatic dari brand blue Paper.id:
> - Darkest (paling gelap, untuk text) → Dark → Medium → Light → Lightest (untuk background/tint)
> Di bawah masing-masing swatch: HSL value contoh + use case ("text-primary", "primary action", "hover bg", "selected row", "page background").
> Bagian 2 — Side-by-side text contrast comparison, 2 kotak putih:
> - **Kiri:** Heading + body paragraph 4 baris pake pure black #000. Tag "❌ Pure black — kontras 21:1, mata cape baca lama."
> - **Kanan:** Heading + body paragraph 4 baris pake dark navy tinged #133f5d. Tag "✅ Tinged dark — lebih lembut, masih kontras tinggi, brand feel nyambung."
> Caption: "Predefined palette > pilih warna random tiap kali. Konsistensi otomatis, decision faster."

### 10. Tipografi: single sans-serif, regular + bold doang, line length 40-80 karakter
Default yang aman buat 95% interface: satu typeface sans-serif. Konsistensi tanpa effort. Dua weight aja: **regular dan bold** — jangan eksplor light/medium/black, makin banyak weight makin clutter. Untuk body text panjang, jaga line length antara 40-80 karakter per baris (termasuk spasi). Terlalu panjang = mata lelah balik ke awal baris; terlalu pendek = zigzag terus.
**Contoh konkret:** Halaman Detail Invoice di Paper.id, kolom keterangan/notes. Kalau lo biarin full-width 1200px, user susah baca paragraf panjang. Limit max-width ke ~600-700px (= ~70 karakter di 16px font). (Bab 5, hal 167 & 182)

> **[VISUAL: Line Length Comparison 40-80 Sweet Spot]**
> 3 paragraf body text yang sama (dummy text ~3 baris) ditampilkan stacked vertical:
> - **Paragraf 1 (label "Terlalu pendek — ~30 char"):** Width sempit (mis. 200px), tampilkan ruler di atas dengan tanda 30 char. Tambahkan arrow zigzag di samping menggambarkan mata yang harus balik terlalu sering.
> - **Paragraf 2 (label "✅ Ideal — 60-70 char"):** Width sedang (mis. 600px), tampilkan ruler di atas dengan tanda 60-70 char (highlighted hijau sweet spot 40-80). Arrow lurus pelan di samping.
> - **Paragraf 3 (label "Terlalu panjang — ~110 char"):** Width lebar (mis. 1100px), tampilkan ruler dengan tanda 110 char. Arrow panjang di samping menggambarkan mata yang lelah balik ke awal baris.
> Di bawah: callout text "Sweet spot: 40-80 karakter per baris. Body text 16px = ~600-700px max-width."
> Tambah mini-tip box: "Single sans-serif + Regular + Bold = default 95% interface. Jangan eksplor 5 weight."

---

## C. MONEY QUOTES — 5 quote signature

> **[VISUAL: Quote Treatment Style — Global untuk semua 5 quote]**
> Tiap quote di section ini di-render kayak "poster card" — bukan cuma blockquote biasa:
> - Background card: light tinted (mis. light blue-50 atau cream), padding besar (40-60px)
> - Quote text: serif atau sans-serif weight bold, ukuran besar (24-32px), warna dark navy
> - Tanda kutip besar di pojok kiri atas card (typographic mark `"` ukuran 80px+ low opacity 20%)
> - Author/source di bawah, weight regular, ukuran kecil (14px), warna muted
> - Antar quote: jarak vertical lega (~64px)
> - Paraphrase Indonesia + 1-2 kalimat penjelasan di bawah card, plain text reguler
> Tujuan: quote-quote ini kelihatan "stand out" — kalau orang scan-cepat halaman, mata harus naik nangkep quote-nya duluan.

### 1.
> *"If everything is important, nothing is important."*
> — Bab 8 (Buttons), hal 259

**Paraphrase:** Kalau semua hal lo tandai sebagai penting, justru jadi ga ada yang penting.

Quote ini ringkas banget tapi nyangkut ke seluruh konsep hierarchy — dari button system, color, typography, sampe placement. Tiap kali lo tergoda nambahin "satu lagi pill primary", inget kalimat ini.

### 2.
> *"Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."*
> — Bab 1 (Fundamentals), hal 17

**Paraphrase:** Desain pake logika objektif, bukan opini subjektif — keputusan jadi lebih cepat dan gampang.

Ini thesis statement Adham. Implikasinya buat lo: kalau review meeting macet karena debat selera, balik ke logika. "Argumen lo opini atau rationale? Kalau opini, mari kita test."

### 3.
> *"The higher the interaction cost, the harder it is for someone to achieve their task."*
> — Bab 1 (Fundamentals), hal 19

**Paraphrase:** Semakin tinggi biaya interaksi, semakin susah user nyelesain tugasnya.

Reminder bahwa "satu klik lagi" itu beneran cost. Setiap extra step, scroll, search, modal — beneran ngurangin completion rate, bukan cuma annoying.

### 4.
> *"Minimal doesn't mean simple."*
> — Bab 2 (Less is more), hal 52

**Paraphrase:** Minimalis ga sama dengan sederhana.

Quote ini perlawanan ke trend "white space lots + tiny text + ghost buttons everywhere". Adham bilang: minimalis itu STYLE; sederhana itu OUTCOME. Bisa minimalis tapi confusing (hidden affordances). Bisa kaya visual tapi simple buat dipake (Microsoft Word lama). Aim for simple, not minimal-as-aesthetic.

### 5.
> *"Buttons should have a clear visual hierarchy that isn't reliant on colour."*
> — Bab 8 (Buttons), hal 254

**Paraphrase:** Tombol harus punya hierarchy visual yang jelas, dan ga boleh cuma andalan warna.

Penting banget buat accessibility. Sekitar 8% pria color-blind. Kalau primary cuma dibedain dari secondary lewat warna biru vs abu-abu, color-blind user ga bisa tau mana yang primary. Solusi: kombinasiin warna + weight (filled vs border) + ukuran. Hierarchy jadi readable bahkan kalau lo print hitam-putih.

---

## D. PER CHAPTER HIGHLIGHTS

> **[VISUAL: Per-Chapter Treatment — Global pattern untuk 8 bab]**
> Tiap bab di section ini di-render sebagai "chapter card" dengan struktur konsisten:
> - **Chapter header bar:** Nomor bab besar (mis. "01" sirkular, 64×64px badge biru penuh, text putih bold ukuran 32px) sejajar horizontal dengan judul bab (24px bold) dan range halaman muted di kanan ("hal 14-44").
> - **Body:** Paragraf naratif normal text 16-18px, line-length max 700px.
> - **Side accent:** Bar vertikal tipis 4px warna brand di kiri body, sebagai signal "chapter content".
> - **Quick takeaway pill:** Di bawah paragraf, 1 baris highlight kuning soft "💡 Sekali baca: <1 kalimat ringkas inti bab>" — bikin masing-masing bab punya TL;DR visible.
>
> Khusus bab dengan konsep visual berat — Bab 3 (Colour), Bab 4 (Layout), Bab 5 (Typography), Bab 7 (Forms), Bab 8 (Buttons) — kasih 1 inline mini-visual (mis. swatch row untuk Colour, 6-lever icon row untuk Layout hierarchy, type-scale sample untuk Typography). Detail per bab di bawah.

### Bab 1 — Fundamentals (hal 14-44)
Bab paling padat dan paling penting. Adham bilang **most design decisions are governed by a system of logical rules** — bukan bakat. Dia kenalin 3 pillar pengukur (usability risk, interaction cost, cognitive load) yang dipake konsisten di seluruh buku. Konsep "**predefined sets**" juga dia perkenalin di sini: daripada milih warna/spacing/font-size dari unlimited options tiap kali, bikin set terbatas dengan purpose jelas. Itu yang kemudian jadi design system. Insight tambahan yang sering ke-skip: dia bedain antara *patterns* (Jakob's Law — pake convention yang user udah hafal) versus *novel solutions* (lebih beresiko, harus di-validate via testing). Untuk Paper.id, ini langsung mendukung kenapa Aurora Lookup Ritual mati-matian: convention > kreativitas. Bab ini wajib dibaca dua kali.

### Bab 2 — Less is more (hal 45-59)
Bab paling pendek tapi punya quote paling berbahaya: "**minimal doesn't mean simple**". Adham nuduh trend minimalisme jadi misleading — banyak desainer ngurangin visual jadi terlalu minim, sampe **affordance** (petunjuk visual "ini bisa di-klik") hilang. Tombol jadi ghost (border doang tanpa fill), input field tanpa border keliatan kayak text label biasa, link tanpa underline keliatan kayak headline. Dia juga jelasin **progressive disclosure**: sembunyiin info yang ga critical dulu, expose pas user butuh. Misal: di Detail Invoice, jangan tampilin 30 field sekaligus — section "Info Tambahan" bisa collapsed by default. Tapi Adham warning: progressive disclosure ≠ hide critical action. Tombol "Hapus" yang ke-hide di kebab menu (⋮) OK karena destructive jarang dipake; tapi tombol "Simpan" disembunyiin di sub-menu = sin.

### Bab 3 — Colour (hal 60-103)
Bab paling teknis di buku. Adham mulai dari **contrast ratio WCAG 2.1 AA**: 4.5:1 untuk text kecil (≤18px), 3:1 untuk text besar dan UI element (form field border, icon). Dia juga introduce APCA (WCAG 3 draft) yang menurutnya lebih akurat untuk dark interface — tapi industry masih pake WCAG 2 karena standar resmi. Yang practical buat lo: **hindari pure black (#000)** di atas pure white — kontras 21:1 bikin mata cape baca lama (gunakan dark grey atau dark navy dengan "tinge" warna brand). Buat brand palette, dia recommend **monochromatic** dari satu warna utama: 5 shade (darkest, dark, medium, light, lightest) plus neutral greys terpisah. Itu kasih design system warna yang gampang di-maintain. Tips lain yang sering ke-skip: warna brand jangan dipake terlalu banyak — reserve buat **interactive element** (button, link, focus state), bukan dekorasi.

> **[VISUAL Bab 3 — Contrast Ratio Cheat Sheet]**
> Inline mini-visual di bawah paragraf Bab 3:
> Tampilkan 2 baris contoh kontras side-by-side, masing-masing dengan label rasio:
> - Baris 1 "Untuk text kecil ≤18px → minimum 4.5:1": kotak putih dengan text "Lorem ipsum dolor sit amet" warna gelap (✅ 7:1 pass) di kiri, vs sama-sama tapi pake light grey #999 (❌ 2.8:1 fail) di kanan.
> - Baris 2 "Untuk text besar / UI element → minimum 3:1": kotak putih dengan heading "Heading 24px" + form field border solid di kiri (✅ 4:1 pass), vs versi dengan border pucat (❌ 2:1 fail) di kanan.
> Caption: "Hindari pure black (21:1) — terlalu kontras = mata cape. Sweet spot dark navy/dark grey."

### Bab 4 — Layout & spacing (hal 104-162)
Bab paling reusable. Adham kenalin **4 grouping methods**: container (border/background), proximity (jarak), similarity (visual treatment sama), continuity (alignment). Tipsnya: pake 2-3 method combined, bukan satu method paling kuat. Container dipake hemat — itu tools paling crowded. Aturan emas spacing: **inner spacing always smaller than outer spacing**. Kalau dalam card padding 16px, antar card harus 24-32px — biar mata user otomatis nangkep mana group, mana pemisah. Dia juga jabarin **6 lever visual hierarchy**: ukuran, warna, kontras, jarak, posisi, kedalaman (shadow). Pake by importance order — jangan apply semua lever ke semua element. Untuk validasi: **Squint Test** (tutup mata 50% atau blur 8px) — kalau focal point masih kelihatan = bener. Tambahan yang useful: keep related actions close. Tombol "Edit" untuk card harus deket card-nya, bukan di toolbar global jauh di atas.

> **[VISUAL Bab 4 — 6 Lever Visual Hierarchy Row]**
> Baris horizontal 6 icon ber-label, masing-masing demonstrasiin 1 lever:
> 1. **Size** — text "Hello" kecil vs "Hello" besar
> 2. **Colour** — text abu-abu muted vs text brand blue
> 3. **Contrast** — text low-contrast vs high-contrast
> 4. **Spacing** — 2 element rapat vs 2 element jauh
> 5. **Position** — element di pinggir vs di tengah/top
> 6. **Depth** — element flat vs element dengan shadow halus
> Caption: "6 tuas yang bisa lo putar untuk bikin hierarchy. Pake by importance order — JANGAN apply semua lever ke semua element."
>
> **[VISUAL Bab 4 — Inner vs Outer Spacing]**
> 2 card horizontal di-tampilkan sama gede:
> - Versi A (label "✅ Inner < Outer"): padding dalam card 16px, jarak antar card 32px. Annotation arrows menunjukkan kedua jarak.
> - Versi B (label "❌ Inner = Outer"): padding dalam card 24px, jarak antar card 24px. Tampak nempel/ambigu.
> Caption: "Inner spacing harus selalu lebih kecil dari outer — itu cara mata nangkep mana grup mana pemisah."

### Bab 5 — Typography (hal 163-191)
Bab paling minimalis dalam saran. Default rekomendasinya: **single sans-serif, regular + bold only**. Jangan ekplor 5 weight (light, regular, medium, semibold, bold) — itu makin clutter. Untuk hierarchy heading: pake size scale (mis. 14/16/20/24/32/40), bukan weight scale. **Line length 40-80 karakter per baris** untuk body text — di atas 80 mata lelah balik ke awal, di bawah 40 zigzag terus. Body text minimum 16px (di mobile 18px lebih baik). **Line height** 1.5× untuk body, lebih rapat untuk heading besar (1.2×). **Left align untuk body text panjang** — center align cuma boleh untuk headline atau text pendek (≤2 baris). Justified text dilarang untuk web/app: bikin "rivers of white space" yang distracting + bikin dyslexic reader lebih susah. Buat Paper.id: cek halaman Detail Invoice / Detail Mitra — kalau notes/keterangan-nya full-width 1200px, mata user lelah. Cap max-width body ke ~600-700px.

> **[VISUAL Bab 5 — Type Scale Sample]**
> Stack vertical 6 baris text, masing-masing demonstrasiin level di type scale (semua pake 1 sans-serif Inter/SF):
> - "Heading 1 — 40px Bold" (Bold weight)
> - "Heading 2 — 32px Bold" (Bold weight)
> - "Heading 3 — 24px Bold" (Bold weight)
> - "Heading 4 — 20px Bold" (Bold weight)
> - "Body — 16px Regular" (Regular weight)
> - "Small — 14px Regular" (Regular weight)
> Annotation di kanan: "✅ Cuma 2 weight: Regular + Bold. Size scale yang ngebawa hierarchy, bukan weight."
> Tambahan kecil di bawah: contoh ❌ scale buruk → 7 weight (Thin/Light/Regular/Medium/Semibold/Bold/Black) ditampilkan semua, looks chaotic.

### Bab 6 — Copywriting (hal 192-211)
Bab pendek tapi sering ke-skip designer karena dianggap "kerjaan copywriter". Adham nge-push: **UI copy itu UI element**. Aturan utamanya: **be concise, cut filler words**. "Please click here to download your invoice" → "Unduh invoice". **Use sentence case** ("Hapus invoice?") bukan Title Case ("Hapus Invoice?") — sentence case lebih natural buat baca cepat. **Front-load key info** — kata paling penting di awal kalimat/heading, jangan tengah atau akhir (orang scan, bukan baca lengkap). Pake **inverted pyramid** untuk content panjang: kesimpulan/headline duluan, detail belakangan — jadi kalo user berhenti baca di tengah, dia tetep dapet inti. Untuk error message: hindari "Error 4023: Invalid input" — ganti jadi spesifik + actionable ("NPWP harus 15 angka"). Tip yang sering ke-skip: **avoid jargon kecuali audience-nya expert**. Untuk Paper.id, "akun receivable" mending ditulis "tagihan yang belum dibayar" — kecuali user-nya beneran accountant.

### Bab 7 — Forms (hal 213-249)
Bab paling actionable buat designer B2B SaaS — Paper.id punya banyak form (Tambah Mitra, Buat Invoice, Catat Pengeluaran, KYC). Aturan-aturan kunci: **single column** (vertical stack, downward momentum), **label di atas input** (bukan samping), **field width match expected input** (kode pos 5 char ≠ nama 40 char), **hint text di atas field** bukan di bawah (biar ga ke-cover autofill atau ke-truncate), **stack checkbox/radio vertically** untuk easy scanning, **mark both required and optional** (asterisk \* + kata "opsional" di field optional — biar ga ambigu). **Break long forms into steps** kalau >10 field — dengan progress indicator. Insight controversial: **validate on submit, jangan inline real-time** — inline yang muncul tiap user ngetik ngerasa intrusive ("ya, gue belum selesai ngetik, kalem!"). Sebaiknya validate pas user blur field atau klik Submit. Konflik dengan Aurora — Paper.id banyak pake inline real-time validation, perlu didiskusikan. **Don't use placeholder as label** — begitu user mulai ngetik, label hilang, user lupa lagi field ini buat apa.

> **[VISUAL Bab 7 — Anatomi Form Field Ideal]**
> Tampilkan 1 form field besar (di-zoom) dengan annotation panah ke setiap part:
> ```
> Email Bisnis *                ← Label di ATAS (bold-small, asterisk untuk required)
> Email aktif untuk login       ← Hint text di ATAS field (muted-small)
> ┌──────────────────────────┐
> │ kontak@perusahaan.com    │ ← Input field, width match expected
> └──────────────────────────┘
> ```
> Annotation di kanan dengan arrows:
> - "✅ Label di atas — ga ke-cover keyboard mobile"
> - "✅ Hint di atas — ga ke-truncate autofill"
> - "✅ Width match input — silent hint ke user"
> - "✅ Asterisk * untuk required; field optional kasih kata 'opsional'"
> Di bawah: row 3 mini-example field — Kode Pos (5 char width), Email (panjang sedang), Catatan (full width textarea). Caption: "Width = ekspektasi panjang input."

### Bab 8 — Buttons (hal 250-279)
Bab paling padat keputusan. **3 weight system**: primary (filled, brand color, untuk most important action — MAX 1 per page), secondary (border only, untuk less important atau multiple equal-weight actions), tertiary (text link, untuk least important atau destructive). Hierarchy ga boleh cuma andalan warna — kombinasiin dengan weight/fill. **Button text harus deskriptif verb+noun**: "Simpan invoice" > "OK", "Hapus pengeluaran" > "Lanjut". Avoid generic "Submit", "Continue" — user harus konfirmasi mental lagi ("ini submit apa ya?"). **Target size minimum 44×44px** untuk touch (mobile). **Friction ladder for destructive**: no-friction (less prominent UI) → light (simple confirm) → medium (red button + warning icon) → heavy (confirm checkbox). Tapi **better alternative: allow undo**. Toast "Pesan dihapus — Urungkan" 5-10 detik > modal "Yakin hapus?" tiap kali. **Try to avoid disabled buttons** — enable + validate on submit lebih baik. Disabled bikin user stuck tanpa tau kenapa, plus accessibility issue (contrast rendah, keyboard skipped).

---

## E. KALAU CUMA BACA 3 HAL, BACA INI

> **[VISUAL: Section opener — Action Checklist Banner]**
> Section ini jadi callout besar visual. Bikin banner header:
> - Background: bold color (mis. solid brand blue atau gold accent), full-width
> - Heading: "Kalau lo cuma punya 1 jam, lakuin 3 hal ini" — text putih, ukuran besar (32-40px)
> - Sub-text: "3 perubahan dengan dampak paling besar untuk daily work designer B2B finance" — text putih semi-transparent
> - Icon decorative di pojok kanan: checklist ✅ atau bullseye 🎯 (sebagai SVG, bukan emoji)
> Setelah banner, tiga action di-tampilkan sebagai 3 cards vertikal dengan nomor besar 1, 2, 3 di kiri (sirkular badge biru 60×60px dengan angka putih bold).

### 1. Pasang 1 Primary Button per page. Audit hari ini.
Buka 3 page Paper.id favorit lo — Dashboard, List Invoice, Detail Mitra. Hitung berapa pill primary biru di tiap page. Kalau ada >1, lo udah ngacuin hierarchy. **Fix-nya gampang:** tentukan "1 most important action" per page. Sisanya turunin ke secondary (border only) atau tertiary (text link). Validate pake Squint Test (blur 8px di Figma) — kalau primary masih kelihatan dominant tunggal, lo menang. Ini insight #3 dan #4 dari buku, dampaknya langsung kelihatan di completion rate user buat action utama.

### 2. Ganti pattern "Submit disabled" jadi "Submit enabled + validate on submit"
Ini perubahan kecil tapi efek-nya besar. Default Aurora form button "Simpan" kemungkinan disabled sampe form valid — Adham bilang itu bermasalah: (a) user ga tau kenapa disabled, (b) accessibility jelek karena kontras text disabled biasanya rendah, (c) keyboard user bisa ke-skip, (d) no feedback. **Pattern baru:** button selalu enabled; pas user klik, validate; kalau ada error, scroll ke field error pertama + tampilin error message inline yang jelas. Lo dapet UX yang lebih clear + accessibility lebih baik. Catatan: ini konflik dengan Aurora current — perlu konsultasi maintainer DS, tapi worth pushing.

### 3. Ganti modal konfirmasi destructive jadi toast undo (untuk action non-nuclear)
Mapping yang Adham rekomendasiin: hapus draft / hapus row table / hapus item belum tersimpan = **TOAST UNDO** (5-10 detik), bukan modal. Modal konfirmasi cuma untuk genuinely destructive irreversible: hapus akun, hapus organisasi, hapus invoice yang udah dikirim ke customer. Reasoning-nya: modal interupsi user yang yakin (dan 95% user yang nge-klik Delete itu yakin), sedangkan toast kasih safety net tanpa block. Plus lebih cepat: 1 klik delete + auto-dismiss > 1 klik delete + 1 klik confirm + auto-dismiss. Definisi destructive Paper.id udah lock (lihat memory [[paperverse-design-decisions]]) — sekarang tinggal pasangin **mekanisme undo** untuk non-nuclear destructive. Apply pertama: list page delete row → snackbar "Item dihapus — Urungkan?" dengan timer 7 detik.

---

## Cross-refs

- **Reference cards detail (45 kartu)** → `practical-ui-ringkasan.md` + `practical-ui/kartu/`
- **Konflik dengan Paper.id rules** → `IMPROVEMENT-OPPORTUNITIES.md` (5 konflik teridentifikasi)
- **Companion book** → `refactoring-ui-ringkasan.md` (Wathan & Schoger, similar philosophy)

---

*Total: ~2700 kata. Estimated reading time: 18-20 menit.*
