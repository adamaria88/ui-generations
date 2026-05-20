# Paper Designer — Paper.id

Repo ini berisi **Paper Designer** — skill Claude Code untuk generate prototype HTML mengikuti Design System Aurora (Paper.id).

Dipakai oleh tim designer Paper.id di beberapa laptop. Memory & knowledge wajib **portable via git**, bukan machine-local.

## Bahasa default

Selalu pakai **Bahasa Indonesia santai/awam** untuk komunikasi ke user. Hindari jargon. Kalimat pendek. Sodorkan opsi berlabel ([1]/[2]) ketimbang pertanyaan terbuka panjang.

## Auto-load: Shared Knowledge (semua designer)

Project decisions, rules, pattern yang berlaku untuk semua:

@paper-designer/memory/shared/paperverse-design-decisions.md
@paper-designer/memory/shared/aurora-lookup-ritual.md
@paper-designer/memory/shared/prototyping-gap-lessons.md
@paper-designer/memory/shared/layout-rules-summary.md
@paper-designer/memory/shared/page-templates-summary.md
@paper-designer/memory/shared/page-registry-modules.md
@paper-designer/memory/shared/list-page-default-pattern.md
@paper-designer/memory/shared/efficiency-ds-read-optimization.md
@paper-designer/memory/shared/strategy-figma-sync.md
@paper-designer/memory/shared/senior-uiux-designer-concept.md
@paper-designer/memory/shared/style-learner-agent.md
@paper-designer/memory/shared/user-prefers-plain-indonesian.md

## Active bugs (sementara, hapus saat selesai)

@paper-designer/memory/shared/overlay-screenfigma-bugs.md
@paper-designer/memory/shared/showcase-audit-status.md

## Per-Machine Memory

Tiap designer punya file sendiri di `paper-designer/memory/per-machine/{hostname}.md`. Isi: catatan personal, learning yang belum graduate ke shared.

Cara dapet hostname:
```bash
hostname | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '.' '-'
```

Kalau file untuk hostname kamu belum ada, bikin: `touch paper-designer/memory/per-machine/{hostname}.md`.

## Design System

@paper-designer/ds/ds-core.md

Untuk detail styling per-komponen: baca `paper-designer/rules/design-rules.md` section terkait.
Untuk screen registry & Figma references: baca `paper-designer/rules/page-registry.md`.

## Skills tersedia

- **`/senior-uiux-designer`** — main design skill. Trigger saat user paste brief & mau UI/UX dari Aurora.
- **`/learning-auditor`** — audit learning lintas designer di akhir sprint, draft promosi ke rules.

## Sprint Learning Workflow

Akhir sprint, tiap designer commit learning:
```bash
cp paper-designer/learnings/_template.md paper-designer/learnings/sprint-XX/laptop-YOUR.md
# isi file
git add paper-designer/learnings/sprint-XX/ && git commit -m "learning: sprint-XX laptop-YOUR"
```

Project lead audit:
```
/learning-auditor sprint-XX
```

Detail lengkap: lihat `paper-designer/learnings/README.md`.

## Onboarding (laptop baru)

1. Clone repo
2. Buka Claude Code di repo ini
3. CLAUDE.md (file ini) auto-load setiap session
4. Bikin per-machine file: `touch paper-designer/memory/per-machine/$(hostname | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '.' '-').md`
5. Siap kerja
