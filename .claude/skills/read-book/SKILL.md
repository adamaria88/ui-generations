---
name: read-book
description: Extract knowledge dari buku UIUX (PDF) atau artikel (URL Medium/NN/g/blog) ke paper-designer/knowledge/. Workflow INTERACTIVE — tampilin draft di chat dulu, diskusi sama user, baru tulis file setelah approve. Auto-trigger saat user paste path .pdf, URL artikel, atau bilang "extract / baca / serap / tarik insight" dari buku/artikel. Bisa juga manual: /read-book (akan tanya path/URL).
---

# Read Book — Knowledge Extraction (Interactive)

Skill untuk extract insight dari **buku UIUX (PDF)** atau **artikel (URL/teks)** ke knowledge folder Paper Designer.

**Workflow INTERACTIVE** — gue tampilin draft di chat dulu, lo approve/revise, baru gue tulis file. Bukan extract → langsung commit → lo baca file (workflow lama).

## Bahasa

Selalu Bahasa Indonesia santai/awam. Opsi berlabel ([1]/[2]) > pertanyaan terbuka panjang.

## Input

User invoke:

```
/read-book                          # tanpa arg → tanya path/URL
/read-book <path-to-pdf>            # PDF buku
/read-book <url-artikel>            # URL Medium/NN/g/blog
```

**Auto-trigger** (skill auto-invoke tanpa user ketik `/read-book` literally):
- User paste path file `.pdf` ke chat
- User paste URL artikel (https://medium.com/, https://nngroup.com/, dll)
- User bilang: "extract buku ini ___", "baca artikel ini ___", "serap insight ___", "tarik dari ___"
- User drop file `.html` / teks artikel + bilang mau di-process

Auto-detect format:
- Path lokal `.pdf` → mode **BUKU**
- URL `http(s)://` → mode **ARTIKEL**
- Path `.html` / `.txt` → mode **ARTIKEL** (treat sebagai single piece)
- Lainnya → tanya user

## Pre-flight check (sebelum extract)

1. Baca memory [[knowledge-extraction-workflow]] dan [[knowledge-mode-trigger-rule]]
2. Cek `paper-designer/knowledge/` folder + template ready
3. Kalau belum scaffold → STOP, lapor "knowledge folder belum siap, lihat `paper-designer/knowledge/README.md`"

---

## Workflow INTERACTIVE — Mode BUKU (PDF)

### Phase 1 — Setup & Confirm Metadata (chat only)

**Tampilkan ke user:**
```
✓ Detected: <judul> oleh <author>
  - Total halaman: <X>
  - Bahasa: <Inggris/Indonesia>
  - Path: <path>

Pertanyaan:
1. Metadata di atas bener? Mau revisi judul/author?
2. Ada chapter prioritas yang lo pengen di-cover dulu? (default: gue scan TOC lalu propose)
```

Tunggu user respond.

### Phase 2 — TOC Scan + Plan Prioritization (chat only)

1. Read PDF page 1-10 (TOC + intro)
2. Petakan struktur — list semua chapter dengan estimasi apply-value
3. **Tampilkan ke user di chat (BUKAN tulis file):**

```
📚 <Judul> — Plan Extraction

Total: <Y> chapter

Prioritization gue (3-5 chapter high-ROI):
1. Bab X: <Judul Bab> — heuristik dense (estimasi 5-8 kartu)
2. Bab Y: <Judul Bab> — framework reusable (estimasi 3-5 kartu)
3. Bab Z: <Judul Bab> — case study konkret (estimasi 2-3 kartu)

Skip / low-priority:
- Bab A: teoritik abstract (low apply-value)
- Bab B: outdated context (mobile-only)

Setuju plan ini? Atau ada bab yang lo prefer extract / skip?
```

Tunggu user approve / revise.

### Phase 3 — Draft Thesis + Framework (chat only, DIDISKUSIKAN)

Setelah plan approved, mulai baca chapter prioritas.

**Draft thesis + 3-5 framework langsung di chat:**

```
📝 Draft Skeleton — <Judul>

THESIS (1 kalimat operasional):
> "<thesis draft gue>"

FRAMEWORK 1: <Nama>
- When to invoke: <kapan>
- The thinking: <2-3 kalimat>
- Anti-pattern: <yang dilanggar>
- Source: Bab X, hal Y

FRAMEWORK 2: ...
FRAMEWORK 3: ...

MONEY QUOTES (1-3 quote signature):
> "<quote 1>" — Bab X, hal Y
> "<quote 2>" — Bab X, hal Y

Diskusi:
- Thesis ini sesuai sama yang lo tangkep dari buku?
- Framework di atas missing yang penting?
- Ada quote yang harusnya ke-include tapi belum?
- Konflik dengan Aurora / Paper.id rules?
```

Tunggu user diskusi / approve. Iterate kalau perlu — revise thesis, tambah/kurang framework.

### Phase 4 — Propose Kartu List (chat only)

Setelah thesis + framework approved, **propose list calon kartu** (title + 1-line synopsis only, BUKAN full content):

```
🎴 Calon Kartu (urut by ROI)

HEURISTIK KONKRET (highest apply-value):
1. "<topik-1>" — <1 kalimat synopsis> (Bab X, hal Y)
2. "<topik-2>" — <1 kalimat synopsis> (Bab Z, hal A)
3. "<topik-3>" — ...
...8 kartu total

FRAMEWORK CARDS:
9. "<topik-9>" — ...
10. "<topik-10>" — ...

MONEY QUOTE CARDS:
11. "<topik-11>" — ...

Total: 11 kartu calon.

Pilih:
[A] Extract semua → gue lanjut Phase 5 dengan semua kartu
[B] Pilih spesifik → kasih nomor mana yang mau di-extract (mis. "1, 3, 5, 9-11")
[C] Skip yang ini → kasih tau nomor mana yang skip
```

Tunggu user pilih.

### Phase 5 — Extract Kartu (per batch, REVIEW di chat)

Extract kartu yang approved. **Batch by 3-5 kartu**, tampilkan di chat:

```
📋 Batch 1/3 — Kartu 1-4

KARTU #1: <topik-1>
---
Problem Trigger: <1 kalimat>
The Thinking: <2-3 kalimat>
Contoh Konkret: <1 contoh>
Anti-pattern: <yang BUKAN ini>
Aplikasi Paper.id: <spesifik>
Source: Bab X, hal Y
Quote verbatim (kalau ada): "..."

KARTU #2: <topik-2>
---
(format sama)

[... up to 4 kartu]

Diskusi batch ini:
- Ada kartu yang interpretasi gue salah?
- Contoh konkret ngawur / kurang relevan ke Paper.id?
- Anti-pattern yang missing?
- Lanjut batch 2?
```

Tunggu user review. Setelah approve → catat batch 1 final, lanjut batch 2.

Iterate sampai semua batch reviewed + approved.

### Phase 6 — Final Write (akhirnya tulis file)

Setelah ALL kartu approved di chat, BARU tulis file:

1. Write `paper-designer/knowledge/books/<slug>-ringkasan.md` (ringkasan + reading map terisi)
2. Write `paper-designer/knowledge/books/<slug>/kartu/<topik>.md` × N (semua kartu approved)
3. Update `paper-designer/knowledge/INDEX.md` (entry baru + tag index update)

Frontmatter `review_status: reviewed` langsung — karena lo udah review di chat.

### Phase 7 — Lapor Final
```
✓ Extract <Judul> done:
  - Ringkasan: paper-designer/knowledge/books/<slug>-ringkasan.md
  - Kartu: N kartu di paper-designer/knowledge/books/<slug>/kartu/
  - INDEX.md updated

Saran follow-up:
- Commit dengan `knowledge: <slug> extracted`
- Test Mode 2 trigger: "ada ide lain ga untuk <topik>?" — cek apakah Claude pull insight dari buku ini
```

---

## Workflow INTERACTIVE — Mode ARTIKEL (URL / teks)

Artikel lebih simple — 1 file atomic, ga butuh ringkasan-kartu split.

### Phase 1 — Setup
Confirm: URL valid? Author? Publication? Date?

### Phase 2 — Fetch + Identify Core Insight (chat)
- WebFetch (kalau URL) atau Read teks
- Identify: Problem Trigger / The Thinking / Contoh Konkret / Anti-pattern
- **Tampilkan di chat draft-nya** (BUKAN tulis file)

```
📰 Draft Artikel — <Judul>

Author: <X> @ <Publication> (<Date>)
URL: <url>

PROBLEM TRIGGER:
<1 kalimat search-able>

THE THINKING:
<2-3 kalimat>

CONTOH KONKRET:
<dari artikel>

ANTI-PATTERN:
<yang ditolak artikel>

APLIKASI PAPER.ID:
<spesifik untuk B2B finance>

QUOTE VERBATIM:
> "<exact quote>"

Diskusi:
- Capture ini sesuai dengan inti artikel?
- Aplikasi Paper.id make sense?
- Tag yang relevant: [...]
- Apply-value: high / medium / low?
```

### Phase 3 — Approve + Write
Setelah user approve → tulis file ke `paper-designer/knowledge/articles/<slug>.md` + update INDEX.

---

## Anti-pattern (DILARANG ABSOLUTE)

1. **Skip diskusi / langsung commit file** — workflow ini INTERACTIVE. JANGAN extract → langsung write tanpa user approve di chat.
2. **Halusinasi citation** — kalau ga tau page/URL exact, tulis `TBD`, JANGAN ngarang. User akan cek di PDF asli.
3. **Skip pre-flight check** — selalu baca memory workflow + cek template ready DULU.
4. **Extract noise** — kalau "Problem Trigger" tidak bisa spesifik & search-able, SKIP kartu itu.
5. **One-shot read big PDF** — buku 300+ hal HARUS bertahap (Read 10 pages × N call).
6. **Mix dengan design work** — saat skill aktif, FOCUS extract only.
7. **Lupa update INDEX.md** — extract tapi INDEX ga update = invisible saat Mode 2 retrieval.
8. **Lupa konfirmasi metadata** — Phase 1 wajib sebelum baca chapter.

## Edge Cases

**Buku tua (>10 tahun)**: section "Adaptation Note" di ringkasan WAJIB.

**Buku terjemahan / non-Inggris**: quote verbatim pake bahasa original + terjemahan Indonesia singkat.

**Konflik antar buku** (extracted di session berbeda): catat di kartu masing-masing dengan cross-ref ke buku lain.

**PDF rusak / OCR jelek**: lapor user, ga lanjut extract. Minta PDF version bersih.

**Buku tebal (>500 hal)**: pas Phase 2, propose batasi ke 5-7 chapter highest-value. Sisanya skip atau later.

**Artikel di balik paywall**: minta user paste teks manual.

**Artikel video (YouTube/podcast)**: belum supported. Lapor user "skill ini cuma PDF/URL text. Kalau lo ada transcript, paste aja."

**User mau "auto mode" tanpa diskusi** (kalau emang buru-buru):
User explicit minta: "extract langsung, skip diskusi, gue review di file"
→ Skip Phase 3-5 diskusi, langsung Phase 6 write semua file dengan frontmatter `review_status: draft`. Lapor user "Done, please review files manually."

## Check sebelum Phase 6 Write

- [ ] Phase 1 metadata confirmed user?
- [ ] Phase 2 prioritization approved user?
- [ ] Phase 3 thesis + framework approved user?
- [ ] Phase 4 kartu list approved user (mana yg extract)?
- [ ] Phase 5 semua batch kartu reviewed + approved user?
- [ ] Ga ada halusinasi page/quote/URL?
- [ ] Frontmatter complete di semua draft?

Kalau semua check ✅ → boleh Write.

## Hubungan ke memory + rules

- [[knowledge-mode-trigger-rule]] — kapan APPLY knowledge (Mode 2 only)
- [[knowledge-extraction-workflow]] — full workflow detail (sync dengan skill ini)
- [[aurora-lookup-ritual]] — analogous discipline buat Aurora DS
- [[user-prefers-plain-indonesian]] — bahasa awam saat lapor user

## Reference files

- `paper-designer/knowledge/README.md` — full workflow doc
- `paper-designer/knowledge/_template-ringkasan.md` — buku ringkasan template
- `paper-designer/knowledge/_template-kartu.md` — kartu / artikel template
- `paper-designer/knowledge/INDEX.md` — master index
- `CLAUDE.md` section "Knowledge Library" — eager-load pointer + Mode 1/2 trigger
