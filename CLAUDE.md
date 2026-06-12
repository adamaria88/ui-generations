# Paper Designer — Paper.id

Skill Claude Code untuk generate prototype HTML dari Design System Aurora. Dipakai 5 designer di laptop berbeda — memory portable via git.

## Bahasa

Selalu **Bahasa Indonesia santai/awam**, kalimat pendek, hindari jargon. Opsi berlabel ([1]/[2]) > pertanyaan terbuka panjang.

## Known Bugs (active)

- **Overlay screenReveal** — hidden `[data-screen]` di-force `display:flex` saat Figma export. Sudah difix tapi belum confirmed working (user bilang masih broken). Detail: `paper-designer/memory/shared/overlay-screenfigma-bugs.md`
- **Figma multi-screen flow** — kalau screen 2 off-viewport, `extractTree` mungkin return null → flow tidak ter-generate. Terkait bug screenReveal.
- **Comment context tidak ter-track** — pin overlay flat per file, TIDAK capture `[data-screen]`/`[data-state]` aktif saat dibuat. Submit komen di prototype multi-screen jadi ambiguous (designer DS nggak tau komen di screen/state mana). Workaround sementara: kasih konteks manual di teks komen ("[Daftar] tombol terlalu kecil"). Fix engine pending.

## EAGER — Auto-load (6 file core)

Wajib ada di session start, kalau telat = output langsung salah:

@paper-designer/memory/shared/paperverse-design-decisions.md
@paper-designer/memory/shared/aurora-lookup-ritual.md
@paper-designer/memory/shared/prototyping-gap-lessons.md
@paper-designer/memory/shared/layout-rules-summary.md
@paper-designer/memory/shared/user-prefers-plain-indonesian.md
@paper-designer/knowledge/paper-designer-thinking.md

## LAZY — Reference (load on-demand kalau relevan)

Baca file ini hanya kalau konteks butuh — JANGAN auto-load:

- Form/Sheet/Modal decision tree → `paper-designer/memory/shared/page-templates-summary.md`
- Module registry + Figma fileKeys → `paper-designer/memory/shared/page-registry-modules.md`
- List page default pattern → `paper-designer/memory/shared/list-page-default-pattern.md`
- DS read optimization (meta) → `paper-designer/memory/shared/efficiency-ds-read-optimization.md`
- Figma sync strategy (belum aktif) → `paper-designer/memory/shared/strategy-figma-sync.md`
- Project overview/onboarding → `paper-designer/memory/shared/senior-uiux-designer-concept.md`
- Style Learner agent docs → `paper-designer/memory/shared/style-learner-agent.md`
- Showcase audit status → `paper-designer/memory/shared/showcase-audit-status.md`
- **Figma → HTML mirror method (SOP)** → `paper-designer/memory/shared/figma-mirror-method.md` — WAJIB baca saat user share link Figma + minta direproduksi jadi HTML. Baca dari node tree + copas aset, JANGAN eyeball.

## Knowledge Library — Buku UIUX + Artikel (LAZY, opt-in trigger)

Insight dari buku UIUX + artikel design yang sudah diekstrak. **Dipakai SAAT user minta IDE / REVAMP / IMPROVEMENT open-ended.**

- Master index → `paper-designer/knowledge/INDEX.md`
- Folder: `paper-designer/knowledge/books/` (ringkasan + kartu per buku)
- Folder: `paper-designer/knowledge/articles/` (1 file per artikel atomic)
- Workflow + template → `paper-designer/knowledge/README.md`

### 2 Mode Operasi (CRITICAL — locked 2026-05-22)

**Mode 1 — PELAKSANA (default)**: lo eksekusi cepet sesuai rules teknis. JANGAN buka knowledge. JANGAN propose alternatif yang ga diminta.

Trigger Mode 1:
- "Ganti input X jadi Y", "Pindah tombol ke kanan", "Tambah field Z", "Hapus kolom A"
- Permintaan **execute spesifik** dengan target jelas
- Tweak kecil, koreksi, adjustment
- User udah tau mau apa, lo tinggal lakuin

**Mode 2 — KONSULTAN (opt-in trigger)**: buka knowledge, tarik framework dari buku, propose 2-3 opsi dengan cite source.

Trigger Mode 2 (eksplisit dari user):
- "Ada ide lain ga untuk page ini?"
- "Revamp page ini"
- "Improvement apa yang bisa kita lakukan?"
- "Bisa lebih baik ga UX-nya?"
- Tag `@book` atau `@article`
- Permintaan **open-ended** minta perspektif / ide / alternatif

### Workflow Mode 2 (apply knowledge)
1. Grep `INDEX.md` untuk problem keyword di brief
2. Load ringkasan buku / artikel yang relevan (1-2 file max)
3. Load kartu spesifik kalau butuh detail
4. Propose 2-3 opsi dengan **cite source** WAJIB: `book + chapter + page` atau `article URL + author`
5. Kalau ga ada page/URL valid → tulis `source TBD` + flag user. **JANGAN ngarang citation.**

### Anti-pattern (DILARANG)
- ❌ Tweak kecil → tarik buku → over-propose. User cuma minta ganti input, jangan kasih essay 500 kata.
- ❌ Mode 2 tanpa trigger eksplisit. Default = Pelaksana, jangan asumsi user mau konsultasi.
- ❌ Apply insight buku tanpa cite source.
- ❌ Halusinasi quote / page number. Kalau ragu, lapor user, jangan ngarang.

## Per-Machine Memory

Tiap designer file sendiri di `paper-designer/memory/per-machine/{hostname}.md`. Hostname:
```bash
hostname | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '.' '-'
```
Kalau belum ada: `touch paper-designer/memory/per-machine/{hostname}.md`.

## Design System

- Core rules (wajib eager kalau skill aktif) → `paper-designer/ds/ds-core.md`
- Detail styling per-komponen (LAZY) → `paper-designer/rules/design-rules.md` — baca section spesifik aja, JANGAN full 838 baris
- Screen registry & Figma refs (LAZY) → `paper-designer/rules/page-registry.md`

## Skills tersedia

- **`/senior-uiux-designer`** — main design skill, trigger saat brief masuk
- **`/learning-auditor`** — audit learning lintas designer di sprint end
- **`/read-book`** — extract buku UIUX (PDF) atau artikel (URL/teks) ke `paper-designer/knowledge/`. **Workflow INTERACTIVE** — tampil draft di chat dulu (thesis + framework + calon kartu), diskusi sama user, baru tulis file setelah approve. Auto-trigger saat user paste path `.pdf` / URL artikel / bilang "extract/baca/serap" dari buku/artikel. Lock 2026-05-22.

## Sprint Learning Workflow

Designer akhir sprint:
```bash
cp paper-designer/learnings/_template.md paper-designer/learnings/sprint-XX/laptop-YOUR.md
# isi → commit
git add paper-designer/learnings/sprint-XX/ && git commit -m "learning: sprint-XX laptop-YOUR"
```

Project lead audit: `/learning-auditor sprint-XX`

Detail: `paper-designer/learnings/README.md`

## Onboarding (laptop baru)

1. Clone repo
2. Buka Claude Code di repo ini
3. CLAUDE.md (file ini) auto-load
4. Bikin per-machine file: `touch paper-designer/memory/per-machine/$(hostname | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '.' '-').md`
5. Siap kerja
