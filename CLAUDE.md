# Paper Designer — Paper.id

Skill Claude Code untuk generate prototype HTML dari Design System Aurora. Dipakai 5 designer di laptop berbeda — memory portable via git.

## Bahasa

Selalu **Bahasa Indonesia santai/awam**, kalimat pendek, hindari jargon. Opsi berlabel ([1]/[2]) > pertanyaan terbuka panjang.

## Known Bugs (active)

- **Overlay screenReveal** — hidden `[data-screen]` di-force `display:flex` saat Figma export. Sudah difix tapi belum confirmed working (user bilang masih broken). Detail: `paper-designer/memory/shared/overlay-screenfigma-bugs.md`
- **Figma multi-screen flow** — kalau screen 2 off-viewport, `extractTree` mungkin return null → flow tidak ter-generate. Terkait bug screenReveal.

## EAGER — Auto-load (5 file core)

Wajib ada di session start, kalau telat = output langsung salah:

@paper-designer/memory/shared/paperverse-design-decisions.md
@paper-designer/memory/shared/aurora-lookup-ritual.md
@paper-designer/memory/shared/prototyping-gap-lessons.md
@paper-designer/memory/shared/layout-rules-summary.md
@paper-designer/memory/shared/user-prefers-plain-indonesian.md

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
