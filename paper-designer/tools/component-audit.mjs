#!/usr/bin/env node
/**
 * component-audit.mjs — Gerbang diff otomatis untuk GENERATE KOMPONEN (HTML).
 *
 * Tujuan: bikin "diam-diam ngarang nilai" MUSTAHIL lolos.
 * Cara pakai:
 *   node paper-designer/tools/component-audit.mjs <file.html>
 *
 * Yang dicek (semua allowlist dari aurora-tokens.md = single source):
 *   1. HEX warna     — hex di luar aurora-tokens.md            -> PELANGGARAN
 *   2. Font          — selain Lato (+ inherit/var wrapper)     -> PELANGGARAN
 *   3. Spacing       — padding/margin/gap px di luar --spacing -> PELANGGARAN
 *   4. Radius        — border-radius px di luar --radius       -> PELANGGARAN
 *   5. Stroke        — border-width px di luar --stroke        -> PELANGGARAN
 *   Ada pelanggaran  -> exit 1 (TIDAK BOLEH SETOR).
 *
 * Catatan penting:
 *   - Cuma scan <style> blok KOMPONEN. Blok tooling (review chrome) WAJIB
 *     dikasih marker __TOOLING__ di dalam CSS-nya biar di-skip (px chrome bebas).
 *   - box-shadow SENGAJA nggak dicek geometrinya (offset/blur beda-beda per
 *     effect style); tapi WARNA shadow (hex+alpha) tetap kena cek HEX di atas.
 *   - width/height/top/left/font-size/line-height BUKAN spacing token → nggak dicek.
 *   - Untuk komponen Figma, "audit"-nya = wajib INSTANCE Paperverse (cek via MCP)
 *     + checklist PRE-FLIGHT Fase 5 (lihat pipeline.md), bukan file ini.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const TOKENS = resolve(__dir, '../ds/aurora-tokens.md');

const target = process.argv[2];
if (!target) {
  console.error('Usage: node component-audit.mjs <file.html>');
  process.exit(2);
}

const norm = (h) => h.toLowerCase().replace(/^#/, '');
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;

// ── Build allowlists from aurora-tokens.md (single source) ──
const tokenSrc = readFileSync(TOKENS, 'utf8');

// warna
const allowedHex = new Set((tokenSrc.match(HEX_RE) || []).map(norm));
['ffffff', 'fff', '000000', '000', 'transparent'].forEach((h) => allowedHex.add(h));

// scale numeric: ambil nilai px dari baris token tabel (mis. `--spacing-sm` | 8px)
const scaleSet = (prefix) => {
  const re = new RegExp('--' + prefix + '-[\\w-]+`\\s*\\|\\s*([\\d.]+)px', 'gi');
  const s = new Set([0]); // 0 selalu boleh
  for (const m of tokenSrc.matchAll(re)) s.add(parseFloat(m[1]));
  return s;
};
const SPACING = scaleSet('spacing'); // 2,4,8,12,16,20,24,28,32,36,40
const RADIUS = scaleSet('radius');   // 0,4,8,12,16,9999
const STROKE = scaleSet('stroke');   // 0,1,1.5,2

// ── Read target — scan CSS di <style>, KECUALI blok tooling (__TOOLING__) ──
const raw = readFileSync(resolve(process.cwd(), target), 'utf8');
const styleBlocks = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
  .map((m) => m[1])
  .filter((css) => !/__TOOLING__/.test(css));
const src = styleBlocks.join('\n');

// ── 1. Hex check ──
const badHex = new Map();
for (const h of [...src.matchAll(HEX_RE)].map((m) => m[0])) {
  if (!allowedHex.has(norm(h))) badHex.set(h, (badHex.get(h) || 0) + 1);
}

// ── 2. Font check ──
// Value berhenti di `;` atau `}` — JANGAN exclude kutip, nanti
// `font-family: 'Lato', sans-serif` ke-capture kosong dan dianggap font asing.
const fontDecls = [...src.matchAll(/font-family\s*:\s*([^;}]+)/gi)].map((m) => m[1].trim());
const badFonts = fontDecls.filter((f) => {
  const low = f.toLowerCase().replace(/['"]/g, '');
  // OK: Lato (dengan/tanpa kutip & fallback stack), inherit, atau var wrapper token font.
  return !(low.includes('lato') || low === 'inherit' || /var\(--[^)]*font[^)]*\)/.test(low));
});

// ── 3-5. Numeric scale checks (spacing / radius / stroke) ──
// Ambil value tiap deklarasi properti terkait, cek tiap nilai `Npx` vs allowlist.
// Nilai pakai var(...) / % / em / rem / calc = OK (di-skip; token wrapper ideal).
const grab = (re) => [...src.matchAll(re)].map((m) => m[1]);
const pxViolations = (decls, allowed, label) => {
  const bad = new Map(); // "12px" -> count
  for (const v of decls) {
    for (const m of v.matchAll(/(-?\d+(?:\.\d+)?)px/g)) {
      const n = Math.abs(parseFloat(m[1]));
      if (n !== 0 && !allowed.has(n)) bad.set(m[1], (bad.get(m[1]) || 0) + 1);
    }
  }
  return bad;
};

const spacingDecls = grab(
  /(?:padding|margin|gap|row-gap|column-gap)(?:-(?:top|right|bottom|left))?\s*:\s*([^;}]+)/gi
);
const radiusDecls = grab(/border(?:-[a-z]+)?-radius\s*:\s*([^;}]+)/gi);
// border shorthand + border-width (bukan border-radius): tangkap width-nya
const strokeDecls = grab(
  /border(?:-(?:top|right|bottom|left))?(?:-width)?\s*:\s*([^;}]+)/gi
).filter((v) => !/radius/i.test(v));

const badSpacing = pxViolations(spacingDecls, SPACING, 'spacing');
const badRadius = pxViolations(radiusDecls, RADIUS, 'radius');
const badStroke = pxViolations(strokeDecls, STROKE, 'stroke');

// ── Report ──
const setLines = (m) => [...m].sort((a, b) => b[1] - a[1]).map(([k, n]) => `   ${k}  (${n}x)`);
const violations =
  badHex.size + badFonts.length + badSpacing.size + badRadius.size + badStroke.size;

console.log(`\n=== COMPONENT AUDIT: ${target} ===`);
console.log(`Allowlist (dari aurora-tokens.md): ${allowedHex.size} hex · spacing {${[...SPACING].sort((a,b)=>a-b).join(',')}} · radius {${[...RADIUS].sort((a,b)=>a-b).join(',')}} · stroke {${[...STROKE].sort((a,b)=>a-b).join(',')}}`);

if (badHex.size) {
  console.log(`\n❌ HEX di luar Aurora (${badHex.size}):`);
  setLines(badHex).forEach((l) => console.log(l + ' — bukan dari aurora-tokens.md'));
}
if (badFonts.length) {
  console.log(`\n❌ Font non-Lato (${badFonts.length}):`);
  [...new Set(badFonts)].forEach((f) => console.log(`   ${f}`));
}
if (badSpacing.size) {
  console.log(`\n❌ Spacing di luar skala --spacing (${badSpacing.size}) [padding/margin/gap]:`);
  setLines(badSpacing).forEach((l) => console.log(l));
}
if (badRadius.size) {
  console.log(`\n❌ Radius di luar skala --radius (${badRadius.size}) [border-radius]:`);
  setLines(badRadius).forEach((l) => console.log(l));
}
if (badStroke.size) {
  console.log(`\n❌ Stroke di luar skala --stroke (${badStroke.size}) [border-width]:`);
  setLines(badStroke).forEach((l) => console.log(l));
}

if (violations === 0) {
  console.log('\n✅ LULUS — warna, font, spacing, radius, stroke match Aurora. Boleh setor.\n');
  process.exit(0);
} else {
  console.log(
    `\n🛑 GAGAL — ${violations} pelanggaran. JANGAN setor. Perbaiki dulu:` +
      `\n   - Nilai asing: resolve dari Paperverse (Figma Variables) / pakai token skala Aurora, bukan karang.` +
      `\n   - Font: pakai Lato.` +
      `\n   (Kalau ada nilai yang MEMANG harus beda & sudah disetujui → catat di AURORA-OVERRIDES.md, lalu boleh di-skip manual.)\n`
  );
  process.exit(1);
}
