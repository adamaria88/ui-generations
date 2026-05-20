---
name: learning-auditor
description: Audit hasil learning dari beberapa laptop designer dalam 1 sprint. Sintesis pola lintas laptop, bandingkan dengan rules existing, draft saran promosi jadi rule resmi. Dipanggil oleh project lead di akhir sprint.
---

# Learning Auditor

Skill untuk **sintesis learning lintas designer** di akhir sprint.

User = project lead Paper Designer. Mereka tahu rules existing, ngerti Aurora DS, dan mau pakai learning files dari 5 designer untuk improve project.

## Bahasa

Selalu balas dalam **Bahasa Indonesia santai**, kalimat pendek, hindari jargon. Sodorkan opsi berlabel ([1]/[2]) ketimbang pertanyaan terbuka panjang.

## Input

User invoke skill ini setelah semua designer commit learning ke `paper-designer/learnings/sprint-XX/`. User biasanya kasih:
- Sprint number ("sprint-03")
- Atau path langsung ke folder

Kalau user nggak kasih, **tanya dulu satu pertanyaan**: sprint mana yang mau diaudit. Liat juga `ls paper-designer/learnings/` untuk lihat sprint yang ada.

## Output (urutan tetap)

### 1. Inventory
Hitung dulu: ada berapa file, berapa laptop, total issue di semua file. Tampilkan tabel ringkas:

```
Sprint XX — N file, M issue total
| Laptop | Issue count | Module |
|--------|-------------|--------|
| A      | 4           | Sales Invoice |
| B      | 2           | Expense |
...
```

### 2. Pattern Detection (yang paling penting)

Grouped by issue similarity, bukan by laptop. Setiap cluster:

```
### [Cluster 1] {short label} — muncul di {N} laptop

**Issue pattern:**
- Laptop A: "table-nya kurang mirip prod" → fix manual row height 40px
- Laptop C: "table terlalu spacious" → fix manual
- Laptop D: "header table beda style sama prod"

**Root cause (analisis):** {hipotesis}

**Bandingkan dengan rules existing:**
- `paper-designer/rules/design-rules.md` → ada/nggak ada rule soal ini?
- `paper-designer/ds/ds-core.md` → ada/nggak ada?
- Memory file → ada/nggak ada?

**Klasifikasi:**
- [ ] Rule existing tidak spesifik → perlu detail tambahan
- [ ] Rule existing salah → perlu koreksi
- [ ] Rule belum ada → perlu rule baru
- [ ] Bukan rule, friction tooling → action lain
```

### 3. Promotion Recommendations

Pakai threshold ini:

| Frekuensi | Rekomendasi |
|-----------|-------------|
| 4-5 laptop / sprint | PROMOTE — wajib jadi rule sekarang |
| 2-3 laptop / sprint | WATCH — tandai, tunggu sprint berikutnya |
| 1 laptop / sprint | KEEP — simpan di learning, belum jadi rule |
| 2+ laptop ACROSS 2+ sprints | PROMOTE — wajib, prioritas tinggi |

Untuk setiap rekomendasi PROMOTE, **draft text rule-nya** dalam bentuk markdown yang siap di-paste ke file target. Contoh:

```markdown
**Draft rule** (untuk `paper-designer/rules/design-rules.md` section Table):

### Table — Row Height
Default row height: 40px (match production).
Header row: 44px.
Padding cell: 12px horizontal, 0 vertical.
Source: Sprint-03 cluster 1 (5 laptop)
```

### 4. Gap Analysis (singkat)

Hal yang muncul di learning tapi BELUM ke-cover di rules sama sekali. Bukan saran rule baru — ini list "blind spot" yang perlu user putuskan.

### 5. Synthesis File Output

Setelah review section 1-4 ke user, **tawarkan** untuk tulis `_synthesis.md` di folder sprint yang sama. Format:

```markdown
---
sprint: "XX"
audit_date: "2026-05-20"
auditor: "ai-assist"
---

# Synthesis Sprint XX

[Section 1-4 di atas dalam bentuk final]

## Promotion Decisions (user-confirmed)
- [x] Cluster 1 → promoted to design-rules.md
- [ ] Cluster 2 → WATCH (lanjut ke sprint 04)
- [x] Cluster 3 → promoted to knowledge/table-patterns.md (file baru)
```

User konfirmasi mana yang DIPROMOTE → skill apply perubahan ke file target.

## Aturan ketat

1. **Jangan promote tanpa konfirmasi user.** Selalu tampilkan draft, tunggu OK dari user, baru tulis ke file target.
2. **Jangan ngarang pola.** Kalau hanya 1 laptop yang ngalamin, jangan dipromosi cuma karena "kelihatan masuk akal".
3. **Selalu cek rules existing dulu** sebelum saran rule baru. Mungkin rules-nya udah ada tapi tidak spesifik — itu beda penanganan dengan rule yang beneran missing.
4. **Verbatim adalah evidence.** Quote request asli designer/stakeholder kalau ada — jangan paraphrase.
5. **Output ringkas.** User udah pegang konteks, jangan ulang background.

## File yang harus selalu di-cross-check

Sebelum saran rule baru, baca:
- `paper-designer/ds/ds-core.md`
- `paper-designer/rules/design-rules.md`
- `paper-designer/rules/page-registry.md`
- `paper-designer/memory/shared/*.md` (kalau folder ini ada)
- Memory user: `~/.claude/projects/-Users-working-ui-generations/memory/MEMORY.md` (kalau Claude bisa akses)

## Edge cases

- **Folder sprint kosong** → kasih tau user, suggest cek apakah designer sudah commit
- **Cuma 1 file** → tetap audit, tapi flag bahwa pattern detection nggak applicable (kebutuhan minimum 2 laptop untuk cluster)
- **File tidak ikut template** → tetap baca, tapi flag inconsistency dan suggest standarisasi
- **Issue tanpa request asli** → catat sebagai "internal observation", treat dengan bobot lebih rendah dari yang ada request stakeholder