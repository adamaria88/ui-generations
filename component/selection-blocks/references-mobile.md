# Referensi — Selection Blocks Mobile

Riset Fase 1 (mobile), diambil **2026-07-23** via **Mobbin MCP** (`search_screens`, `ios`). Tiap screen **dilihat gambarnya**, bukan cuma metadata.

Komponen ini **adapt dari versi web** (`Selection Block` web `8525:276822`) — riset Mobbin dipakai buat nentuin apa yang beda di mobile, bukan bikin pola dari nol.

---

## Pola dominan: kartu full-width, kontrol KANAN

| App | Pola | Kontrol | Catatan |
|---|---|---|---|
| [MyFitnessPal](https://mobbin.com/screens/70a93ece-0635-4353-a10a-5115fc446e85) | Title + deskripsi multi-baris, selected = **border biru** | **kanan** | Paling mirip Selection Block: title + deskripsi + radio |
| [Lex](https://mobbin.com/screens/fd40df6b-8a48-49e3-a7bb-95f761490644) | Image + title + deskripsi + **chip/tag** | **kanan** | Paling kaya — persis anatomi Selection Block web (badge + leading) |
| [Fabric](https://mobbin.com/screens/b94e76f5-2b64-46f9-a422-c02a3729eee4) | **Ikon monogram** + title, selected = border + tint | **kanan** | Bukti leading icon/monogram |
| [Zocdoc](https://mobbin.com/screens/317beaf7-4c47-4cf3-be08-1db5573bef9f) | Title + alamat multi-baris, selected = border + tint | **kanan** | Deskripsi panjang wrap |
| [Cash App](https://mobbin.com/screens/3a17233d-03db-401e-8fb4-3b296e8156ef) | Title + deskripsi, selected = border | **kanan** | |
| [Vocabulary](https://mobbin.com/screens/a80813e1-822a-45f1-a3aa-502fe812e5cf) | Pill 1 baris, selected = fill | **kanan** | Kartu padat |
| [Zopa Bank](https://mobbin.com/screens/86b687df-6d0d-4ed2-afa0-f4166aa69265) | Padat, title only | **kiri** | Satu-satunya yang kontrol kiri |

**Kesimpulan:** kontrol **kanan** = **7 dari 8 app**. Web ngasih opsi kiri/kanan (kartu padat → kiri); **mobile default kanan, opsi kiri dibuang** biar varian ramping. Kalau nanti ada kebutuhan kartu padat kiri, tinggal tambah.

---

## Yang di-adapt dari web ke mobile

| Aspek | Web | Mobile | Alasan |
|---|---|---|---|
| State | Default/**Hover**/Selected/Disabled | Default/**Pressed**/Selected/Disabled | Touch, nggak ada hover |
| Kontrol | kiri **atau** kanan | **kanan aja** | Bukti Mobbin 7/8 |
| Lebar | fleksibel | **320 full-width** (frame 360 − 20 margin) | Layar sempit |
| Radio dot | `_Radio/Options/Radio-Box` (web) | **`_Radio/Options/Box`** `82:1459` (mobile) | Building block DS mobile |
| Badge | Chip Status | **Chips** mobile `6404:33140` | idem |

Yang **sama**: SLOT Leading/Trailing, TEXT Title, BOOLEAN Badge/Description, selected = border biru + tint `state/active/bg`, area sentuh seluruh kartu.

---

## Building block DS mobile yang dipakai (bukan bikin dari nol)

- **`_Radio/Options/Box`** `82:1459` — dot radio 22px, varian Active × Disabled. Di-instance + swap per state.
- **Chips** `6404:33129` (`Type=Outline, Color=Blue` = `6404:33140`) — badge. INSTANCE_SWAP, bisa ganti warna/tipe.

Non-Mobbin: spec + ambang (≤4 opsi, kapan pakai selection block vs radio biasa) semua nurun dari guideline web Radio Button (`_output/explorer/radio-button/guideline-alt-a.md`).
