# Pipeline — Prosedur Kerja Paper Designer

Baca `SKILL.md` dulu (persona + 14 dasar + Hukum Mati). File ini = langkah eksekusi.

Output disimpan di: `_output/<slug-fitur>/` di root project.
Memory disimpan di: `paper-designer/memory/<slug-fitur>.md`.

---

## ⛔ ANTI-STUCK PROTOCOL (baca duluan, WAJIB dipatuhi)

> **Kenapa ada section ini:** Claude sering stuck/interrupt saat generate prototype karena over-read sebelum nulis + Write file gede sekaligus. Protokol ini biar setiap tool call survivable dan setiap interrupt recoverable.

### Read Budget (sebelum Write pertama)

- **MAX 3 file read** sebelum mulai Write. Prioritas: brief user → `ds/ds-core.md` → memory terkait.
- **`rules/design-rules.md` > 500 baris** — JANGAN read full. Baca section spesifik aja pakai `Read` dengan `offset` + `limit`. Header/index biasanya di baris 1-150.
- **Aurora SCSS source (`/Users/working/aurora/projects/ui/...`)** — DILARANG read full file saat generate prototype. Pakai class name dari `ds-core.md`. Kalau bener-bener butuh detail value: `grep` aja, jangan `Read` full.
- **LAZY file di CLAUDE.md** — read on-demand, hanya kalau konteks butuh.

### Write/Edit Size Budget

- **Write pertama = skeleton only**, max ~80 baris. Cuma struktur HTML kosong + slot/placeholder per section.
- **Edit per section**, max 150 baris per pair. 1 screen = 1 Edit call. Script block = Edit terpisah. CSS overrides = Edit terpisah.
- **Hindari satu Write besar** (>500 baris) — guaranteed timeout/interrupt risk.

### Skeleton-First Pattern (wajib untuk prototype)

```
1. Write  → 02-ui.html skeleton (~80 baris)
            <html><head>...</head><body>
              <!-- SLOT: sidemenu -->
              <!-- SLOT: nav-header -->
              <!-- SLOT: screen-1 (Daftar X) -->
              <!-- SLOT: screen-2 (Form X) -->
              <!-- SLOT: scripts -->
              <!-- SUXC:overlay -->
            </body></html>
2. Edit   → fill sidemenu
3. Edit   → fill nav-header
4. Edit   → fill screen-1 (data-states + content)
5. Edit   → fill screen-2
6. Edit   → fill scripts
7. Run inject script untuk overlay
```

Interrupt? Skeleton + section yang udah ke-fill tetap ada. Tinggal lanjut Edit berikutnya.

### Checkpoint Pattern

Setelah tiap Edit besar, kasih comment singkat ke user: `✓ sidemenu (47 baris) → next: nav-header`. Kalau interrupt, user tau persis posisi terakhir.

### Anti-pattern (DILARANG)

- ❌ Read 5+ file sebelum Write pertama
- ❌ Read Aurora SCSS source saat generate prototype
- ❌ Read full `design-rules.md` (838 baris)
- ❌ Satu Write file 2000+ baris langsung
- ❌ Read file LAZY (lihat CLAUDE.md) tanpa alasan jelas

---

## ⛔ OVERLAY INJECTION (HARGA MATI — TIDAK BOLEH SKIP)

**Setiap HTML yang lo generate WAJIB ada overlay-nya.** Tanpa overlay, user nggak bisa komen, nggak bisa Submit, nggak bisa Generate Figma — workflow Paper Designer mati.

### Aturan absolut

1. **Marker WAJIB ditulis** — taruh `<!--SUXC:overlay-->` tepat sebelum `</body>` di SETIAP file HTML yang lo generate. Berlaku untuk:
   - `01-flow.html`
   - `02-ui.html`
   - Semua varian: `02-ui-aurora.html`, `03-figma.html`, dst
   - File HTML lain yang masuk workflow Paper Designer

2. **Inject script WAJIB di-run** setelah generate file selesai (sebelum lapor ke user):
   ```bash
   python3 /Users/working/ui-generations/.claude/skills/senior-uiux-designer/inject-components.py <absolute-path-to-file.html>
   ```
   Script ini mengganti `<!--SUXC:overlay-->` marker dengan isi `paper-designer/components/overlay.html` terkini, **plus auto-insert favicon** ke `<head>` kalau belum ada. Selalu pakai overlay versi engine yang lagi committed — JANGAN copy paste manual.

3. **Verify setelah inject** — quick grep untuk pastikan:
   ```bash
   grep -c "KOMEN OVERLAY" <file>  # harus >= 1
   grep -c "findFixedLayer\|findScrollContainer" <file>  # harus >= 1
   ```
   Kalau 0, inject gagal — debug script dulu, jangan lapor "selesai".

### Kenapa wajib pakai inject script (bukan manual)

- Engine overlay sering update (bug fix, fitur baru — modal pin, scroll container, submit/approve workflow)
- Manual copy-paste = drift cepat → file lama ketinggalan fitur baru
- Inject script always sync dengan `paper-designer/components/overlay.html` terkini
- Kalau lo Edit overlay.html, semua file yang udah ke-inject akan otomatis dapet update di run berikutnya

### Anti-pattern (DILARANG)

- ❌ Generate HTML tanpa `<!--SUXC:overlay-->` marker
- ❌ Skip inject script "biar cepet"
- ❌ Copy-paste overlay manual dari file lain
- ❌ Lapor "selesai" tanpa verify overlay ke-inject

### Edge case

- **File yang sudah ada overlay** → tetap jalanin inject script, dia detect `KOMEN OVERLAY` marker dan replace dengan versi terkini. Aman.
- **File HTML internal (komponen, fragment)** yang nggak dipakai langsung user → boleh skip overlay. Tapi default-nya: kalau ragu, inject.

---

## LANGKAH 0 — Routing (Mode + Tweak vs Full)

### 0a — Mode Classification (locked 2026-05-22, ref [[knowledge-mode-trigger-rule]])

**Default: Mode 1 (PELAKSANA)** — execute spesifik pakai rules teknis. JANGAN buka knowledge folder.

**Mode 2 (KONSULTAN)** — TRIGGER kalau user EKSPLISIT minta ide/revamp/improvement open-ended:
- "Ada ide lain ga untuk page ini?"
- "Revamp page ini" / "Improvement apa yang bisa kita lakukan?"
- "Bisa lebih baik ga UX-nya?" / "Gimana cara bikin ini lebih ___?"
- Tag `@book` / `@article` di brief
- Permintaan **curate ide / perspektif baru**

**Behavior Mode 2:**
1. Grep `paper-designer/knowledge/INDEX.md` untuk problem keyword
2. Load ringkasan + kartu relevan (max 1-2 file)
3. Propose 2-3 opsi dengan **cite source verbatim** (book + chapter + page, atau article URL + author)
4. Kalau knowledge ga cover → lapor "knowledge ga cover topik ini, improvise dari rules" — JANGAN ngarang citation
5. Lalu lanjut ke 0b setelah user pilih opsi

**Anti-pattern absolute:**
- ❌ Mode 1 brief → over-propose alternatif yg ga diminta
- ❌ Mode 2 tanpa trigger eksplisit dari user
- ❌ Halusinasi page/quote dari buku

### 0b — Tweak vs Full Routing

- Brief = ubahan receh pada layar yang sudah ada & **tidak mengubah alur**
  (hapus/ubah field, warna, teks, posisi) → **JALUR TWEAK** (lihat bawah).
- Selain itu → **JALUR FULL**, mulai Langkah 1.
- Ragu Tweak/Full? Tanya 1 kalimat ke user.

---

## JALUR FULL

### Langkah 1 — Pertanyaan wajib (satu-satunya)
Tanya: **"Cepet apa Mateng?"** (lihat SKILL.md untuk teks). Tunggu jawaban.

### Langkah 2 — Kerja diam-diam (kamu, bukan user)
1. Baca memory terkait di `paper-designer/memory/` (Dasar #10).
2. Baca WAJIB: `ds/ds-core.md` (1 file — semua aturan universal, token, layout, komponen catalog).
   Kalau butuh detail styling komponen tertentu yang akan dipakai → baca section-nya di `rules/design-rules.md`.
   **Wajib juga baca:** section "⛔ HARGA MATI — Aurora Component Lookup Ritual (4 Mekanisme)" di `rules/design-rules.md` — itu hukum prosedural baru per 2026-05-20.
3. Cek `rules/page-registry.md` → ini fitur baru atau modifikasi screen yang
   sudah ada?
   - **Fitur baru**: lanjut seperti biasa.
   - **Modifikasi screen yang sudah ada**:
     a. Cek apakah `paper-designer/patterns/<module>-<screen-slug>.md` sudah ada.
        Kalau ada → baca file itu sebagai referensi pola production.
        Kalau belum ada → spawn sub-agent dengan instruksi: baca
        `paper-designer/style-learner/workflow.md` lalu fetch screen terkait dari Figma.
        Tunggu hasilnya, baru lanjut generate.
     b. Ambil pola & gaya dari pattern file + `components/` shell (Dasar #6, #13).
4. Kalau **Mateng**: benchmarking — bandingkan cara app kelas Stripe/Xero/dst
   bikin fitur sejenis (boleh WebSearch). Boleh nyalakan party mode internal
   (`bmad-party-mode`) / `bmad-create-ux-design` / `bmad-review-edge-case-hunter`
   sebagai mesin di belakang. **User tetap cuma lihat 1 hasil dari kamu.**
   Kalau **Cepet**: skip benchmarking & party mode, langsung susun alur.
5. Kalau butuh komponen yang tidak ada di Aurora → **STOP** (Hukum Mati #2):
   lapor + pembelaan (kenapa baru / kenapa bukan yang ada / alasan UX). Tunggu
   keputusan user sebelum lanjut.

### Langkah 2.5 — ⛔ AURORA COMPONENT MAPPING (WAJIB sebelum coding UI prototype)

> **Phase ini dikunci user 2026-05-20** setelah audit Expense Management nemu 15 dari 17 komponen ternyata custom/ngarang. Rincian mekanisme: `rules/design-rules.md` section "HARGA MATI — Aurora Component Lookup Ritual". A+B mechanism (Intent Scan + Mapping Table) dikunci user 2026-05-20 sesi audit "ada di rules ga lo pake".

**Phase ini WAJIB jalan SEBELUM Langkah 5 (HTML UI Prototype) — bukan boleh-skip.** Hasilnya = mapping table yang user **approve eksplisit** sebelum coding dimulai.

**Prosedur (4 substep urut):**

#### 2.5a — Aurora Intent Scan (WAJIB, baca lookup table DULU)

**Tujuan:** discovery komponen Aurora yang lo MUNGKIN ga ke pikiran kalau cuma jalan dari ingatan. Aurora punya 33 komponen, sering "luput dari radar" karena lo default ke yang familiar.

**Prosedur:**

1. **Pecah brief** jadi list "interaction need" (mis. "user pilih tanggal", "input PIN", "konfirmasi hapus", "step-by-step onboarding").

2. **Buka `paper-designer/ds/aurora-intent-lookup.md`** — itu reverse lookup table (intent → Aurora component).

3. **Untuk tiap interaction need, cocokin ke tabel.** Catat kandidat komponen Aurora. Bisa lebih dari satu kandidat (mis. "pilih 1 dari banyak" → `au-dropdown-menu` atau `au-autocomplete` tergantung searchable).

4. **Catat hasil scan** dalam format:

   ```
   Brief intent           → Aurora kandidat        | Override?
   ──────────────────────────────────────────────────────────────────
   pilih tanggal            au-datepicker            -
   step-by-step onboarding  au-stepper               -
   konfirmasi hapus         au-dialog sectioned      YES (override)
   table list bawah         au-pagination            YES (override)
   loading skeleton         au-skeleton              -
   ```

5. **Cek override status** untuk tiap kandidat:
   - Buka `paper-designer/ds/AURORA-OVERRIDES.md` — cari entry per komponen
   - Kalau ada → mark "YES (override)" + spec override menang vs Aurora source
   - Kalau tidak ada → mark "-" → pakai Aurora source persis

**Anti-pattern 2.5a:**
- Skip baca aurora-intent-lookup.md → langsung mikir UI element → guaranteed lo lewatin komponen Aurora yang available
- Lupa cek AURORA-OVERRIDES.md → pakai Aurora source padahal ada override locked → revert progress user

#### 2.5b — Aurora Source Lookup (per kandidat dari 2.5a)

Untuk tiap kandidat komponen dari Intent Scan, jalankan lookup detail:

1. **`ls /Users/working/aurora/projects/ui/`** — confirm folder exist
2. **Baca `<component>/<component>.component.scss`** untuk CSS VALUE (color, padding, radius, font, transition)
3. **Baca `<component>/<component>.interface.ts`** untuk VARIANTS (size, type, color enum)
4. **Kalau folder tidak ada** → mark ❌ TIDAK ADA → STOP & lapor (HUKUM MATI #2)

#### 2.5c — Susun Component Mapping Table

Format:

| UI Need | Aurora Component | Variant | Source file | Override? | Notes |
|---------|------------------|---------|-------------|-----------|-------|
| Primary action btn | `au-btn` | `primary` | `button/button.component.scss` | — | pill filled #4199d5 |
| Bulk action trigger | `au-btn` | `tertiary-plain` | `button/button.component.scss` | — | text-link no border |
| Pick tanggal (form) | `au-datepicker` | default | `datepicker/datepicker.component.scss` | — | NOT native input type=date |
| Konfirmasi hapus | `au-dialog` | sectioned | `dialog/dialog.component.scss` | **YES** (sectioned + outer stroke + body text-primary 16px) | Lihat AURORA-OVERRIDES.md entry au-dialog |
| Pagination | `au-pagination` | default | `pagination/pagination.component.scss` | **YES** (justify-end + borderless + active light-brand-15 + inside list-card) | Lihat AURORA-OVERRIDES.md entry au-pagination |
| Empty state | ❌ TIDAK ADA → custom `.empty` | — | — | **YES** (no Aurora — custom dengan token) | Lihat AURORA-OVERRIDES.md entry Empty State |

#### 2.5d — Approval User + Catat Override Baru

1. **Share mapping table ke user** — minta approve eksplisit:
   - "oke lanjut" → boleh coding
   - "ganti komponen X" → revisi mapping
   - "yang ini override jadi custom" → record entry baru di AURORA-OVERRIDES.md
   - "skip fitur Y karena Aurora ga punya" → drop from scope

2. **Catat override baru kalau ada** (user bilang "Aurora-nya jelek, pakai custom" / "value beda sama production"):
   - Tulis entry di `paper-designer/ds/AURORA-OVERRIDES.md` dengan format standard
   - Alasan + tanggal + approver
   - Class CSS yang dipakai (anotasi `OVERRIDE:` bukan `AURORA:`)

3. **Setelah user approve mapping table** → boleh lanjut Langkah 3 (User Flow) → Langkah 5 (UI Prototype).

**Anti-pattern 2.5 keseluruhan yang dilarang:**
- Lompat ke coding tanpa Intent Scan + Mapping Table — guaranteed bakal ngarang
- Build mapping table tapi ga share/approve dulu — gerbang harus dilewati
- Custom komponen tanpa entry di AURORA-OVERRIDES.md — pelanggaran
- Pakai Aurora source padahal ada override locked di AURORA-OVERRIDES.md — pelanggaran HARD RULE [[frozen-baseline-overrides-rule]]

**Kapan phase ini boleh di-skip?** **TIDAK PERNAH** untuk full prototype. Boleh skip cuma di **JALUR TWEAK** (ubahan receh di file yang sudah ada — komponennya sudah ter-map sebelumnya).

### Langkah 3 — HTML USER FLOW / JOURNEY (BUKAN UI)
Bikin `_output/<slug>/01-flow.html`. Ini harus **beneran menggambarkan
PERJALANAN USER**, bukan sekadar kotak berderet. WAJIB ada:

- **Header konteks:** Aktor + Goal + Trigger. Tampilkan sebagai **teks metadata
  biasa** (label kecil uppercase + value), **TANPA kotak/card/border** — jangan
  sampai kelihatan seperti node flow. Beda jelas dari elemen alur.
- **Jalur utama (happy path):** langkah BERNOMOR dari trigger → goal tercapai,
  tiap langkah ditulis dari sudut user ("User lihat…", "User pilih…",
  "User klik…"), terhubung panah yang jelas (atas→bawah / kiri→kanan konsisten).
- **Titik keputusan** = **bentuk diamond/rhombus beneran** (SVG outline,
  `vector-effect:non-scaling-stroke`, teks tetap horizontal di tengah) —
  bukan pill. Khas flowchart.
  Percabangan **PISAH KIRI–KANAN** (fork mendatar) seperti flowchart beneran:
  dari node keputusan turun garis stem, lalu **memecah ke 2 kolom kiri & kanan**
  pakai garis penghubung (stem vertikal → bar horizontal → 2 drop vertikal),
  tiap kolom diberi label cabang ("YA"/"TIDAK") lalu isinya (langkah lanjutan
  atau exit). **Bukan ditumpuk ke bawah.** Jangan ada cabang menggantung.
- **Jalur gagal/exit nyambung balik** (Dasar #4): batal, error, kosong,
  no-akses — pakai garis/panah yang menunjuk balik ke langkah tujuannya, bukan
  ditaruh terpisah tanpa koneksi.
- **Anotasi kecil** di langkah yang perlu (aturan bisnis, kondisi, catatan UX).
- Visual: **DARK MODE**, kanvas **grid kotak-kotak halus** (graph-paper, 24px,
  garis `rgba(255,255,255,.04)`) biar mirip papan flow. Warna nyaman
  di mata, kontras cukup tapi tidak menyilaukan. Palet acuan:
  bg `#10151b` · dot `rgba(255,255,255,.045)` · teks `#e6edf2` · muted `#8ea3b2`
  · kartu/step bg `#1b2630` border `rgba(255,255,255,.09)` · aksen `#4199d5`
  · exit/danger border `#e35273` teks `#f0a8b8` · konektor `rgba(255,255,255,.22)`.
  Belum ada komponen UI Aurora — ini peta alur, bukan layar. Boks rounded,
  panah jelas, swimlane kalau perlu.

> ⚠️ **BATAS PENTING — semua aturan visual di Langkah 3 ini (dark mode, grid
> header tanpa box, diamond, palet) HANYA untuk output USER FLOW
> (`01-flow.html`).** Output UI prototype (`02-ui.html`, Langkah 5) **TIDAK**
> pakai ini — itu wajib persis Aurora DS (tema & komponen app user, ikuti
> `design-rules.md`/`layout-rules.md`). Yang sama di kedua output cuma
> `comment-overlay.html` — tapi dia **2 mode**: `data-suxc="flow"` (kanvas +
> komen, buat 01-flow) vs `data-suxc="prototype"` (web natural, cuma tombol
> Figma, buat 02-ui). Jangan bawa styling flow-doc ke UI prototype, sebaliknya.
>
> Tetap tulis HTML/CSS **rapi & modular** (kelas komponen jelas: `.step`,
> `.dec`, `.exit`, dll) supaya pola/elemen bisa dipakai ulang & dirujuk saat
> tahap UI prototype.

Patokan kualitas: orang yang belum tau fitur ini, **baca flow ini sekali, langsung
ngerti perjalanan user dari awal sampai semua kemungkinan akhir.**

Set **`<body data-suxc="flow">`**. Tulis `<!--SUXC:overlay-->` tepat sebelum
`</body>` (JANGAN embed verbatim — biarkan inject script yang handle).
Setelah Write selesai, jalankan inject lalu open:
```
python3 /Users/working/ui-generations/.claude/skills/senior-uiux-designer/inject-components.py "<ABSOLUTE_PATH>/_output/<slug>/01-flow.html"
open "<ABSOLUTE_PATH>/_output/<slug>/01-flow.html"
```
Lalu lapor, contoh:
> "Alurnya udah aku buka di browser 👉 `_output/<slug>/01-flow.html`
> Komen langsung di situ: tombol 💬 pojok kanan bawah → klik buat taro pin →
> tulis → 'Salin semua komen' → paste balik ke chat. Atau bilang aja di chat."

### Langkah 4 — GERBANG #1 (sepakat ALUR)
Tunggu user. Kalau user paste hasil "Salin semua komen" atau komen di chat →
revisi `01-flow.html`, ulangi sampai user bilang oke/sepakat. **Jangan lanjut
ke UI sebelum alur disepakati.**

### Langkah 5 — HTML UI PROTOTYPE
Bikin `_output/<slug>/02-ui.html`: UI jadi, bisa diklik, **semua state**
(loading, kosong, error, sukses, no-akses — Dasar #8/J1), **100% dari Aurora**
(Hukum Mati).

**⚠️ WAJIB — State Switcher (tidak boleh dilewati):**
Setiap area yang punya lebih dari 1 kondisi tampilan (tabel ada data vs kosong vs
loading, form sukses vs error, dsb) **HARUS** dibungkus dengan `[data-states]`.
Jangan hardcode satu state saja — reviewer harus bisa cek semua kondisi tanpa
ganti kode.

```html
<div data-states>
  <div data-state="default"><!-- UI normal / ada data --></div>
  <div data-state="empty"><!-- Belum ada data --></div>
  <div data-state="loading"><!-- Skeleton shimmer --></div>
  <div data-state="error"><!-- Error / gagal load --></div>
</div>
```

Cara kerja overlay: widget gelap **"State"** muncul otomatis di kiri bawah layar
(draggable, ingat posisi terakhir via localStorage). Klik → pilih state → label
berubah jadi **"Empty Active"** dll. Widget tidak ikut di-export Figma.

> ⚠️ **KNOWN LIMITATION** — comment system overlay belum track `[data-screen]`/`[data-state]` context. Pin pindah-pindah ngambang saat user switch screen/state, submit output tidak nyebut screen/state asal komen. Kalau generate prototype multi-screen, **kasih warning ke user**: "FYI komen di overlay masih ambiguous untuk multi-screen — kasih konteks manual di teks komen, contoh: '[Daftar] tombol kekecilan'". Detail: `memory/shared/overlay-screenfigma-bugs.md` Bug 3.

State wajib yang selalu ada (kecuali tidak relevan secara konteks):
- `default` — UI dengan data / kondisi normal
- `empty` — belum ada data, belum pernah diisi
- `loading` — sedang memuat (pakai `.skel` shimmer dari Aurora)

State tambahan sesuai kebutuhan: `error`, `no-akses`, `sukses`, `partial` dll.
Kalau satu area memang hanya punya 1 kondisi → tidak perlu `[data-states]`.

**⚠️ WAJIB — Auto-Layout Friendly HTML (tidak boleh dilewati):**
HTML harus generate dengan pola flexbox konsisten, supaya **export ke Figma otomatis jadi auto-layout** (bukan absolute positioning). Pipeline `overlay.html` → Figma plugin sudah baca flex properties — yang penting HTML-nya disiplin pakai flex.

Aturan:
- **Container layout = `display:flex`** (kolom: `flex-direction:column`). Jangan pakai `display:block` untuk container yang punya children stack — pakai flex column.
- **Spacing antar children = `gap`**, BUKAN `margin`. Margin pada child = absolute positioning di Figma, gap = auto-layout itemSpacing.
- **Padding di container, bukan margin di child.** Container yang punya padding bakal jadi frame dengan padding auto-layout.
- **Absolute positioning HANYA untuk:** FAB, modal scrim, dropdown menu, tooltip, toast — element yang memang "floating". Selain itu wajib flex.
- **Jangan pakai `width`/`height` fixed di flex container** kecuali komponen spesifik (avatar, ikon, button width). Container biarin auto-size.
- **`[data-screen]`, `.app-layout`, `.main-area`** wajib flex container (sudah convention engine).

Hasilnya: setiap frame di Figma punya auto-layout dengan `layoutMode`, `itemSpacing`, `padding` yang persis seperti HTML — designer DS nggak perlu konversi manual.

Pakai struktur 3-Zone dari `layout-rules.md` & template yang tepat
dari `page-templates.md`. Gunakan komponen shell dengan tag inject:
`<!--SUXC:sidemenu-->`, `<!--SUXC:nav-header-->` — taruh di posisi yang tepat
dalam layout. Deklarasikan token dari `ds/aurora-tokens.md` sebagai `:root` CSS vars.
Set **`<body data-suxc="prototype">`** (atau biarin kosong — default = prototype).
Tulis `<!--SUXC:overlay-->` tepat sebelum `</body>`.
Mode prototype = **web natural**: TIDAK ada kanvas pan/zoom, scroll & klik biasa,
biar user ngerasain experience asli. UI overlay-nya **1 FAB bulat** (bisa
di-drag, posisi diinget) — klik FAB → muncul 4 pilihan deket FAB: **💬 Komen
(tetap aktif), ☰ List, ↑ Submit, ⬙ Generate Figma**. Pilih 1 → nav nutup balik
ke FAB. Klik Figma → overlay disembunyiin sebentar → export bersih (skip semua
`suxc-`) → download JSON → **overlay balik lagi** (komen tetap utuh). **JANGAN
hand-edit file hasil generate** — overlay sudah otomatis nyesuain mode dari
`data-suxc`; cukup sisipkan apa adanya, biarin Senior yang generate.

**Konvensi buat hasil Figma rapi (Auto Layout + multi-screen):**
- **Pakai `display:flex` + `gap` + `padding`** buat tiap container (jangan tata
  pakai posisi absolut/margin ajaib). Ekstraktor baca flex → Figma jadi **Auto
  Layout** beneran (bisa di-resize, bukan kaku). Elemen yang memang
  `position:absolute` tetap aman (di-mark absolute di Figma).
- **Kalau alur > 1 layar:** bungkus tiap layar di elemen top-level
  `<div class="screen" data-screen="Nama Layar">…</div>`. Elemen `[data-screen]`
  **itu sendiri = frame layar** → kasih dia styling layar (flex column + padding,
  jangan cuma atribut kosong, nanti nggak jadi Auto Layout). Tiap `[data-screen]`
  jadi 1 frame terpisah di Figma, disusun kiri→kanan + panah konektor. Default
  panah = urutan DOM; mau bercabang: `data-flow-next="Layar B,Layar C"`
  (opsional `data-flow-label="bayar"`). Cuma 1 layar → nggak usah `data-screen`.
  **Layar aktif/nonaktif via JS (`display:none`)**: oke — overlay otomatis
  force-show semua `[data-screen]` yang tersembunyi saat export (G), lalu restore.
  **Nggak perlu file `03-figma.html` terpisah.**
  Edge case: kalau tetap butuh file terpisah → tambah `data-figma-src="03-figma.html"`
  di `<body>` → tombol G redirect ke file itu tanpa script override manual.

Sebelum setor, jalankan **Pre-Generation Checklist** di `rules/design-rules.md`
+ Penjaga Konsistensi (Dasar #13): bandingkan vs acuan screen lama
(`page-registry.md` → fetch Figma node bila modifikasi) + `components/` shell.
Ada cek gagal → perbaiki; kalau sengaja beda → lapor jujur (Dasar #9).

### Langkah 6 — GERBANG #2 (sepakat TAMPILAN/UX)
**Inject lalu buka otomatis:**
```
python3 /Users/working/ui-generations/.claude/skills/senior-uiux-designer/inject-components.py "<ABSOLUTE_PATH>/_output/<slug>/02-ui.html"
open "<ABSOLUTE_PATH>/_output/<slug>/02-ui.html"
```
Tunggu
komen user (overlay/chat). Revisi sampai sreg (revisi → buka ulang otomatis).
Default jangan jelasin alasan; tawarkan "mau tau kenapa? ketik 'kenapa'" (Dasar #5).

### Langkah 7 — Selesai + simpan memory
Saat user approve: tulis `paper-designer/memory/<slug>.md` berisi: ringkasan brief,
keputusan flow & UI yang dipilih, pola/komponen Aurora yang dipakai, hal yang
user koreksi. Tutup dengan: "Selesai di HTML. Mau lanjut **generate figma**?
(opsional — nggak wajib)".

### Langkah 8 — Figma (OPSIONAL, hanya kalau user minta)
Hanya jalan kalau user eksplisit minta ("ke figma"/"generate figma").
**Jangan pernah otomatis.**

**Jalur utama (di overlay — nggak perlu file bersih / Node / server):**
Overlay `comment-overlay.html` punya tombol **Generate Figma** (ikon layers di
nav bawah, atau tekan **G**). Ekstraktornya jalan di browser, otomatis **skip
semua elemen komen `suxc-*`** (overlay boleh tetap nempel — hasil tetap bersih),
lalu **download `<nama>.figma.json`** langsung. Auto Layout & multi-screen ikut
(lihat konvensi di Langkah 5). Arahin user:
1. Di `02-ui.html` → tekan **G** → file `<nama>.figma.json` ke-download.
2. Figma → plugin **"HTML to Figma (Aurora)"** → tab **"Paste JSON"** → tempel
   isi file → Import. Layer Aurora muncul (kalau multi-screen: tiap layar jadi
   frame + panah konektor).
3. Setup plugin sekali aja: Figma Desktop → Plugins → Development → Import plugin
   from manifest → `paper-designer/figma-pipeline/figma-plugin/manifest.json`.

**Jalur cadangan (headless/batch, tanpa buka browser):**
```bash
cd paper-designer/figma-pipeline
node html-to-figma.mjs "/abs/path/_output/<slug>/02-ui.html" --width=1440 --height=900
```
Script ini sekarang juga skip overlay `suxc-*`, jadi **nggak perlu file bersih
terpisah** lagi. Output JSON: `paper-designer/figma-export/<nama>.json` + server
`http://localhost:3333` (plugin tab "Import from Server"). Prasyarat:
`figma-pipeline/node_modules` (`puppeteer-core`) — kalau hilang, `npm install`
di `figma-pipeline/` dulu.

**Alternatif:** kalau Figma MCP tersedia, boleh pakai itu langsung (skill
`/figma-*`). Default tetap: tawarkan, jangan paksa.

---

## JALUR TWEAK

1. Identifikasi file target (biasanya `_output/<slug>/02-ui.html` terakhir, atau
   tanya user file mana kalau tidak jelas — ini "ragu genuine", boleh tanya).
2. Terapkan perubahan **tetap dari Aurora** (Hukum Mati) — jangan ngarang nilai.
3. Jalankan Penjaga Konsistensi singkat + Pre-Generation Checklist untuk bagian
   yang disentuh.
4. Kasih HTML update + 1 baris ringkas apa yang diubah. Tidak ada gerbang/benchmark.
5. Update memory bila keputusan berubah.

---

## ATURAN BUKA & KOMEN
- **JANGAN PERNAH** menyuruh user "klik kanan → Open Preview" — di chat VS Code
  itu tidak jalan (cuma muncul "Copy Link"). Setiap kali selesai generate/revisi
  HTML, **buka otomatis** dengan Bash: `open "<ABSOLUTE_PATH>"` (macOS). User cukup
  lihat browser yang kebuka, tidak usah ngapa-ngapain.
- Setiap HTML generate WAJIB menulis `<!--SUXC:overlay-->` tepat sebelum `</body>`.
  **JANGAN embed verbatim** — jalankan `inject-components.py` setelah Write, sebelum `open`.
  Komponen shared ada di `paper-designer/components/`: `overlay.html`, `sidemenu.html`, `nav-header.html`.
  Tambah komponen baru → taruh di sana, panggil via `<!--SUXC:nama-->`.
  File hasil inject = self-contained (bisa dipindah).
- User bisa kasih feedback 2 cara: (a) pin di HTML lalu "Salin semua komen" →
  paste ke chat (kalau dibuka via `file://` & clipboard diblokir, overlay otomatis
  fallback ke prompt copy-manual); (b) ngomong biasa di chat. Dua-duanya valid —
  kamu yang petakan komen ke elemen lalu revisi.

## PRINSIP PENUTUP
Ukuran sukses tunggal: **"HTML-nya sudah sesuai yang user bayangkan?"** Kejar itu,
bukan kelengkapan dokumen. Bahasa ke user: Indonesia santai, ringkas, pilihan
berlabel.
