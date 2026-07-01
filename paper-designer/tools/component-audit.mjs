#!/usr/bin/env node
/**
 * component-audit.mjs — Gerbang diff otomatis untuk GENERATE KOMPONEN (HTML).
 *
 * Tujuan: bikin "diam-diam ngarang nilai" MUSTAHIL lolos.
 * Cara pakai:
 *   node paper-designer/tools/component-audit.mjs <file.html>
 *
 * Logika:
 *   1. Allowlist warna = SEMUA hex yang ada di aurora-tokens.md (single source).
 *   2. Ekstrak tiap hex + font-family dari file target.
 *   3. Hex yang TIDAK ada di allowlist  -> PELANGGARAN (kemungkinan ngarang).
 *   4. Font selain Lato (+ fallback generik) -> PELANGGARAN.
 *   5. Ada pelanggaran -> exit 1 (TIDAK BOLEH SETOR).
 *
 * Catatan: ini KHUSUS output komponen HTML. Untuk komponen Figma, "audit"-nya
 * = wajib pakai INSTANCE komponen Paperverse (dicek via MCP), bukan rebuild.
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

// 1. Build allowlist from aurora-tokens.md
const tokenSrc = readFileSync(TOKENS, 'utf8');
const allowed = new Set((tokenSrc.match(HEX_RE) || []).map(norm));
// neutrals yang selalu boleh
['ffffff', 'fff', '000000', '000', 'transparent'].forEach((h) => allowed.add(h));

// 2. Read target — HANYA area CSS (hindari false positive dari teks konten)
const raw = readFileSync(resolve(process.cwd(), target), 'utf8');
const styleBlocks = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
const inlineStyles = [...raw.matchAll(/style\s*=\s*"([^"]*)"/gi)].map((m) => m[1]);
const src = [...styleBlocks, ...inlineStyles].join('\n');

// 3. Hex check
const hexHits = [...src.matchAll(HEX_RE)].map((m) => m[0]);
const badHex = new Map(); // hex -> count
for (const h of hexHits) {
  if (!allowed.has(norm(h))) badHex.set(h, (badHex.get(h) || 0) + 1);
}

// 4. Font check
const fontDecls = [...src.matchAll(/font-family\s*:\s*([^;}"']+)/gi)].map((m) =>
  m[1].trim()
);
const badFonts = fontDecls.filter((f) => {
  const low = f.toLowerCase();
  const ok =
    low.includes('lato') ||
    low === 'inherit' ||
    low === 'var(--font)'; // token wrapper OK kalau isinya Lato
  return !ok;
});

// 5. Report
const violations = badHex.size + badFonts.length;
console.log(`\n=== COMPONENT AUDIT: ${target} ===`);
console.log(`Allowlist warna: ${allowed.size} hex (dari aurora-tokens.md)`);

if (badHex.size) {
  console.log(`\n❌ HEX di luar Aurora (${badHex.size}):`);
  for (const [h, n] of [...badHex].sort((a, b) => b[1] - a[1])) {
    console.log(`   ${h}  (${n}x) — tidak ada di aurora-tokens.md`);
  }
}
if (badFonts.length) {
  console.log(`\n❌ Font non-Lato (${badFonts.length}):`);
  [...new Set(badFonts)].forEach((f) => console.log(`   ${f}`));
}

if (violations === 0) {
  console.log('\n✅ LULUS — semua warna & font match Aurora. Boleh setor.\n');
  process.exit(0);
} else {
  console.log(
    `\n🛑 GAGAL — ${violations} pelanggaran. JANGAN setor. Perbaiki dulu:` +
      `\n   - Hex asing: resolve dari Paperverse (Figma Variables), bukan karang.` +
      `\n   - Font: pakai Lato.\n`
  );
  process.exit(1);
}
