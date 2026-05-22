# Knowledge Library — Buku UIUX

Folder ini = **arsip kerja Claude** untuk insight dari buku UIUX/Design. **Bukan untuk dibaca user utuh** — tapi dipake Claude saat brief minta sesuatu di luar Design System Aurora atau di luar rules existing.

## Struktur

```
paper-designer/knowledge/
├── README.md                   ← file ini
├── INDEX.md                    ← daftar semua buku + thesis 1-baris (gue scan dulu)
├── _template-ringkasan.md      ← template untuk ringkasan per buku
├── _template-kartu.md          ← template untuk kartu insight
├── books/
│   ├── <buku-slug>-ringkasan.md  ← pyramid summary per buku (1 halaman)
│   └── <buku-slug>/
│       └── kartu/
│           ├── <topik-1>.md       ← atomic insight per problem
│           └── <topik-2>.md
└── _pdf/                       ← arsip PDF mentah (gitignore atau LFS)
```

## Alur kerja

### EXTRACT (sekali per buku)
1. User share PDF buku → drop ke `_pdf/<buku-slug>.pdf`
2. Claude baca PDF (~30-60 menit) → extract jadi:
   - 1 file ringkasan: `books/<buku-slug>-ringkasan.md` (pyramid format)
   - N kartu: `books/<buku-slug>/kartu/*.md` (per topik/problem)
3. Update `INDEX.md` (1 baris per buku + list topik kartu)
4. User review (~10 menit per buku):
   - Cek ringkasan: thesis bener?
   - Cek kartu sample 2-3: contoh konkret bener, source citation valid?
   - Edit langsung di MD kalau ngarang
   - Commit `git commit -m "knowledge: <buku-slug> reviewed"`

### APPLY (saat brief masuk)
Trigger lookup = **opt-in eksplisit**:
- User mention keyword strategis: `"UX principle"`, `"strategis"`, `"di luar DS"`, `"kayak buku ___"`
- ATAU user pakai tag `@book` di prompt
- ATAU brief minta pattern yang clearly di luar Aurora coverage

Workflow:
1. Claude grep `INDEX.md` untuk problem keyword
2. Load file ringkasan + kartu yang relevant
3. Apply ke brief dengan **cite source** (book + chapter + page)
4. Output ke user dengan transparency: "Berdasarkan Krug, DMMT Bab 2 hal 21..."

## Aturan ekstraksi (HARGA MATI)

### Format wajib

**Ringkasan per buku** (`<buku-slug>-ringkasan.md`):
- Frontmatter: book, author, edition, isbn, extracted_at
- Thesis 1 kalimat (paling penting)
- 3-5 Framework (mental model utama)
- Reading map (peta topik kartu)
- Konflik dengan Aurora/Paper.id rules (kalau ada)

**Kartu per insight** (`<buku-slug>/kartu/<topik>.md`):
- Frontmatter: source.book, source.chapter, source.page, source.quote_verbatim, extracted_at, tags
- Problem trigger (1 kalimat — kapan ini relevan)
- The thinking (2-3 kalimat — cara berpikirnya)
- Contoh konkret (1 contoh nyata)
- Anti-pattern (yang BUKAN ini)
- Aplikasi ke Paper.id (kalau jelas)

### Citation discipline (non-negotiable)
- WAJIB cite `source.book` + `source.page` saat Claude apply ke brief
- Kalau ga ada page number → tulis `page TBD` + flag ke user
- Quote verbatim WAJIB exact match — kalau paraphrase, label `paraphrase` eksplisit
- JANGAN ngarang citation. Kalau ragu, lapor user.

### Drift management
- Frontmatter `extracted_at` per file
- Konflik dengan rules existing (Aurora/Paperverse) → catat di section "Konflik" di ringkasan
- Re-extraction = overwrite + bump extracted_at, git history = audit trail

## Cross-buku synthesis (`thinking-modes.md`)

**TUNDA** sampai 5+ buku. 2 buku ga reliable cross-pattern. Nanti pas 5+ buku, baru bikin synthesis layer untuk mental modes lintas buku.

## Folder bawah
- `_pdf/` = arsip PDF mentah. Bisa di-gitignore atau pake Git LFS kalau gede. Claude **TIDAK** baca PDF di runtime (extract sekali, lalu pakai MD).
- `books/` = working memory Claude. Ini yang aktif dipake.

## Catatan untuk designer lain

Kalau lo bukan yang ekstrak buku, tetep boleh:
- Baca ringkasan buku untuk konteks
- Edit ringkasan/kartu kalau nemu yang ngarang
- Tambah kartu baru dari insight buku yang lo baca sendiri (asal pakai template + citation)
