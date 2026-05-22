# Knowledge Library — Master Index

> **Cara baca file ini:** ini index 1-baris per buku + list topik kartu. Claude scan dulu file ini saat butuh insight di Mode 2 (Konsultan), baru load file ringkasan/kartu yang relevant.

## Setup Checkpoint (lock 2026-05-22)

✅ Folder structure ready (`books/`, `articles/`, `_pdf/`)
✅ Templates ready (`_template-ringkasan.md`, `_template-kartu.md`)
✅ CLAUDE.md Knowledge Library section + Mode 1/2 trigger documented
✅ Memory rules: `knowledge-mode-trigger-rule`, `knowledge-extraction-workflow`
✅ Pipeline.md Langkah 0a Mode Classification

**Decision lockedown:**
- Granularity: **B1 — Ringkasan pyramid + Kartu atomic per topik**
- Sub-agent untuk PDF reading: **NO** (inline cukup, ga over-engineer)
- Synthesis layer (`thinking-modes.md`): **TUNDA** sampai 5+ buku
- Trigger Mode 2: opt-in eksplisit (kata "ide lain", "revamp", "improvement", "bisa lebih baik", tag `@book` / `@article`)
- Review: wajib user review 2 buku pertama
- Citation: frontmatter `source.*` wajib, no halusinasi page/quote

**Status:** siap terima buku pertama (PDF) atau artikel pertama (URL Medium / NN/g / blog).

---

## Daftar Buku Terdaftar

## Refactoring UI — Adam Wathan & Steve Schoger
- **Slug:** `refactoring-ui`
- **File ringkasan:** `books/refactoring-ui-ringkasan.md`
- **Thesis:** Good-looking UI is the result of applying specific learnable techniques — hierarchy, spacing, color, depth, and polish — not artistic talent.
- **Best for:** Visual polish pass, hierarchy problems, component upgrade, empty state, color system, form UX
- **Tags:** [hierarchy, spacing, color, typography, depth, visual-polish, empty-state, form, component]
- **Topik kartu tersedia:**
  - `hierarchy-weight-color` (`books/refactoring-ui/kartu/hierarchy-weight-color.md`)
  - `labels-secondary-value-primary` (`books/refactoring-ui/kartu/labels-secondary-value-primary.md`)
  - `spacing-system-scale` (`books/refactoring-ui/kartu/spacing-system-scale.md`)
  - `empty-state-priority` (`books/refactoring-ui/kartu/empty-state-priority.md`)
  - `fewer-borders-alternatives` (`books/refactoring-ui/kartu/fewer-borders-alternatives.md`)
  - `color-palette-hsl-shades` (`books/refactoring-ui/kartu/color-palette-hsl-shades.md`)
  - `action-hierarchy-semantics` (`books/refactoring-ui/kartu/action-hierarchy-semantics.md`)
  - `accent-borders-visual-polish` (`books/refactoring-ui/kartu/accent-borders-visual-polish.md`)
  - `selectable-cards-vs-radio` (`books/refactoring-ui/kartu/selectable-cards-vs-radio.md`)
  - `line-height-by-context` (`books/refactoring-ui/kartu/line-height-by-context.md`)
  - `shadow-two-layers` (`books/refactoring-ui/kartu/shadow-two-layers.md`)
  - `think-outside-box-component` (`books/refactoring-ui/kartu/think-outside-box-component.md`)
  - `text-contrast-on-images` (`books/refactoring-ui/kartu/text-contrast-on-images.md`)
  - `supercharge-defaults` (`books/refactoring-ui/kartu/supercharge-defaults.md`)
- **Konflik dengan Aurora/Paper.id:** ada — lihat ringkasan (selectable card belum di Aurora, ilustrasi empty state belum ada Aurora library)
- **Status:** draft
- **Extracted:** 2026-05-22

### Format entry (untuk reference saat tambah buku)

```markdown
## <Judul Buku> — <Author>
- **Slug:** `<buku-slug>`
- **File ringkasan:** `books/<buku-slug>-ringkasan.md`
- **Thesis:** <1 kalimat inti buku>
- **Best for:** <kategori problem yang relevan>
- **Tags:** [navigation, error-state, form, ...]
- **Topik kartu tersedia:**
  - `<topik-1>` (`books/<buku-slug>/kartu/<topik-1>.md`)
  - `<topik-2>`
  - ...
- **Konflik dengan Aurora/Paper.id:** [tidak ada / ada — lihat ringkasan]
- **Status:** [draft / reviewed by user / locked]
- **Extracted:** <YYYY-MM-DD>
```

---

## Topic Tag Index (cross-buku)

> _(akan auto-populate setelah buku ke-2 atau ke-3 — saat ini 1 buku terdaftar)_

Format: tag → list buku + kartu yang membahas

```markdown
### #navigation
- <buku-1>: `web-user-cuma-scan.md`
- <buku-2>: ...

### #error-state
- <buku-1>: ...
```

---

## Status synthesis layer

`thinking-modes.md` belum dibuat — **menunggu 5+ buku** sebelum cross-pattern reliable terdeteksi. Lihat README.md.
