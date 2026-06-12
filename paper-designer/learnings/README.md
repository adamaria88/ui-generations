# Learnings Folder

Tempat designer ngumpulin "apa yang kepelajari" dari sprint, dan tempat user (project lead) sintesiskan untuk improve project.

## Folder structure

```
learnings/
  _template.md           ← copy ini sebagai starting point
  sprint-01/
    laptop-A.md
    laptop-B.md
    ...
    _synthesis.md        ← user yang nulis, hasil audit
  sprint-02/
    ...
```

## Cara pakai (untuk designer)

Akhir sprint:

```bash
# 1. Copy template ke folder sprint
cp paper-designer/learnings/_template.md paper-designer/learnings/sprint-XX/laptop-YOUR.md

# 2. Isi file-nya (~15 menit)
# Fokus di Section 3 (Issue / Friction). Spesifik, jujur, singkat.

# 3. Commit
git add paper-designer/learnings/sprint-XX/
git commit -m "learning: sprint-XX laptop-YOUR"
git push
```

## Cara audit (untuk project lead)

Setelah semua designer commit, jalankan skill `/learning-auditor` di Claude Code.

Skill akan:
- Baca semua file di `sprint-XX/`
- Bandingkan dengan rules yang udah ada di `paper-designer/knowledge/`, `paper-designer/rules/`
- Identify pola lintas laptop
- Output draft `_synthesis.md` + saran promosi ke knowledge

User review → konfirmasi mana yang dipromosikan jadi rule resmi.

## Prinsip

- **Jangan generic.** "Table harus rapi" ≠ insight. "Table di-prod row height 40px, di prototype 48px, designer minta samakan" = insight.
- **Verbatim > paraphrase.** Tulis ucapan stakeholder apa adanya, jangan diringkas.
- **1 sprint = 1 file per designer.** Bukan 1 file per issue. Lebih simpel.
- **Skip section yang nggak relevan.** Hanya Section 3 yang wajib.
