# Referensi — Coachmark Mobile

Riset Fase 1 (mobile), diambil **2026-07-20** via **Mobbin MCP** (`search_screens`, platform `ios`). Tiap screen di bawah **dilihat gambarnya**, bukan cuma dibaca metadata-nya.

> Kenapa Mobbin, bukan dokumentasi DS: dokumentasi (MUI/Ant/Atlassian) mayoritas **web-first**. Buat pola mobile, dokumentasi doang bikin salah tebak. Aturan ini udah dikunci di `component-explorer/pipeline.md` Fase 1 — buat platform mobile, Mobbin **wajib**.

---

## Pola A — Kartu anchored, near-full-width ✅ DIPILIH

Kartu nempel ke target pakai arrow, lebarnya hampir selebar layar (margin kiri-kanan tipis). Footer = indikator step + tombol lanjut.

| App | Screen | Yang keliatan |
|---|---|---|
| **MD Vinyl** | [1/3](https://mobbin.com/screens/499c9722-98a4-42ac-9c3a-eb365a53f289) · [2/3](https://mobbin.com/screens/df87f8e0-d810-4593-bb39-8b0a01a3c493) · [3/3](https://mobbin.com/screens/d1977253-b2c4-4c9c-a70c-d01daa10012f) | Kartu di atas tab bar, **arrow nunjuk ke bawah** ke item tab yang disorot. Footer: counter `1/3` kiri + `Next` kanan. Step terakhir tombolnya ganti jadi **"Start to Explore"** |
| **monday.com** | [step 1](https://mobbin.com/screens/c89625c2-0e64-4cfb-b019-7e2e1ddcfdac) · [step 3](https://mobbin.com/screens/8e52a60c-69ba-41b3-9828-3c9d44328ef6) | Kartu near-full-width, **close X kanan atas**, counter `1 of 3` kiri bawah, `Next` kanan bawah. Step akhir → **`Finish`**. Struktur paling mirip Coachmark web kita |
| **Tabby** | [screen](https://mobbin.com/screens/5f9444a2-a55d-4358-98ce-f3f9f2635768) | Kartu **di bawah** target (pill "Earn cashback"), **arrow nunjuk ke atas**. Judul + deskripsi + `Next` |

**Kesimpulan:** 3 app, 3 tim beda, pola sama — kartu anchored near-full-width, arrow nunjuk target, footer counter/dots + 1 tombol maju. Ini yang dipakai.

---

## Pola B — Kartu pinned di bawah layar

Kartu mentok bawah, nggak nempel ke elemen tertentu. Dipakai kalau yang dijelasin **konsep umum**, bukan satu elemen spesifik.

| App | Screen | Yang keliatan |
|---|---|---|
| **eBay** | [screen](https://mobbin.com/screens/f1f02cb9-829b-4c2a-9b29-f2001db57af8) | Kartu full-width mentok bawah: `Back` · `2/2` · `Got it`. Area atas buat ilustrasi besar |
| **Pinterest** | [screen](https://mobbin.com/screens/72d4e2e7-94e3-468d-8fe1-091c1b1ee27c) | Kartu bawah + grafis tangan nunjuk ke target |

**Kenapa nggak dipilih:** beda use case, bukan pengganti. Pola B nutupin bagian bawah layar — padahal yang mau ditunjukin justru elemen di layar itu.

---

## Pola C — Kartu di samping (arrow horizontal)

| App | Screen | Yang keliatan |
|---|---|---|
| **Whatnot** | [screen](https://mobbin.com/screens/65bf9641-dffc-464c-a55b-673d73c77bea) | Kartu di kiri, **arrow nunjuk kanan** ke ikon Wallet yang nempel tepi layar |

**Kenapa nggak dipakai di mobile:** cuma jalan kalau target mepet banget ke tepi. Di layar 360px, kartu 320px nggak nyisain ruang buat naruh kartu di samping target yang posisinya di tengah. Makanya `Placement` mobile cuma **Bottom/Top** — Left/Right dibuang.

---

## Screen lain yang muncul (pola beda, bukan coachmark anchored)

Dicatat biar nggak dicari ulang:

- [Google Drive](https://mobbin.com/screens/c75ea239-a35c-4fd8-a71a-468ce51b390c) — overlay spotlight bulat full-bleed, bukan kartu
- [Google Photos](https://mobbin.com/screens/b88dd68c-79e5-400a-add3-503e1e3e33da) — layar gelap penuh + dots + tombol panah
- [Tumblr](https://mobbin.com/screens/877cc282-83ff-4098-b67a-28c18eb58322) — dim full-screen, teks + link "I get it"
- [Notion](https://mobbin.com/screens/df0b15e9-c80a-496c-8982-1fbe4374eb05) — kartu onboarding, nggak nempel elemen
- [Meta AI](https://mobbin.com/screens/1221c8f3-b7f5-4f42-a0a2-67e716b74954) — bottom sheet permission
- [NGL](https://mobbin.com/screens/09c75dcf-1268-4229-87cc-41c54a2d8fca) — modal langkah bernomor

---

## Yang berubah gara-gara riset ini

Riset ini **mengoreksi 2 asumsi** yang tadinya mau dipakai:

1. **Bukan "Bottom Sheet vs anchored 320px".** Tebakan awal salah. Yang dominan di lapangan: anchored tapi **near-full-width**, dan `Placement` cuma Top/Bottom.
2. **Jumlah step: 2–3, bukan 5.** MD Vinyl 3, monday.com 3, eBay 2. Makanya `_Coachmark/Dots` mobile default-nya **`Steps=3`** (web pakai 5).

Sumber non-Mobbin yang juga dipakai:
- [NN/g — Instructional Overlays and Coach Marks](https://www.nngroup.com/articles/mobile-instructional-overlay/) — coachmark cuma jalan kalau pendek, bisa di-dismiss, dan nempel elemen konkret
- [Atlassian — Onboarding / Spotlight](https://atlassian.design/components/onboarding/) — maksimal 3–4 step
- [Ant Design — Tour](https://ant.design/components/tour) — anatomi + penamaan placement (`top`, `topLeft`, `bottomRight`, dst) → jadi dasar sumbu `Arrow` Start/Center/End
