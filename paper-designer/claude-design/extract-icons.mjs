// Pecah SVG frame kategori (export dari Figma) jadi ikon-ikon individual.
//
// Kenapa nggak export satu-satu: MCP download_assets cuma nerima 1 node per
// panggilan — 305 ikon = 305 panggilan. Gantinya kita export SATU frame per
// kategori, lalu potong tiap <g id="nama"> pakai koordinat dari metadata.
// Path di dalam SVG pakai koordinat absolut ruang-frame, jadi tiap ikon bisa
// dikurung viewBox sendiri tanpa nge-transform apa pun.
//
// Input : svg/<slug>.svg (hasil curl dari download_assets)
//         meta/icons.xml (hasil get_metadata node 8:334)
// Output : icons.json { kategori: [{name, svg}] }

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SIZE = 24; // semua ikon Paperverse 24x24

const CATEGORIES = [
  { slug: 'general', frameId: '8:340', label: 'General' },
  { slug: 'system', frameId: '58:8519', label: 'System' },
  { slug: 'arrows', frameId: '5441:2284', label: 'Arrows' },
  { slug: 'alerts', frameId: '5441:3749', label: 'Alerts & feedback' },
  { slug: 'finance', frameId: '5441:2657', label: 'Finance & eCommerce' },
];

/* ------------------------------------------------ koordinat dari metadata */

const xml = readFileSync(join(HERE, 'meta/icons.xml'), 'utf8');

const attrs = (line) => {
  const get = (k) => {
    const m = line.match(new RegExp(`${k}="([^"]*)"`));
    return m ? m[1] : null;
  };
  return { id: get('id'), name: get('name'), x: +get('x'), y: +get('y') };
};

// Telusuri nesting: symbol mana ada di frame mana.
function symbolsByFrame() {
  const stack = [];
  const byFrame = {};
  for (const line of xml.split('\n')) {
    const ind = line.search(/\S/);
    if (ind < 0) continue;
    const m = line.match(/<(\w+) id="/);
    if (!m) continue;
    while (stack.length && stack[stack.length - 1].ind >= ind) stack.pop();
    const node = { tag: m[1], ind, ...attrs(line) };
    if (node.tag === 'symbol') {
      const frame = [...stack].reverse().find((s) => s.tag === 'frame');
      if (frame) (byFrame[frame.id] ||= { frame, syms: [] }).syms.push(node);
    }
    if (!/\/>\s*$/.test(line)) stack.push(node);
  }
  return byFrame;
}

const byFrame = symbolsByFrame();

/* -------------------------------------------------- potong grup per ikon */

// Ambil isi <g id="..."> ... </g> dengan hitung kedalaman <g> supaya grup
// bersarang nggak bikin penutupnya salah ambil.
function groupContents(svg) {
  const found = new Map();
  const re = /<g id="([^"]+)">/g;
  let m;
  while ((m = re.exec(svg))) {
    let depth = 1;
    let i = re.lastIndex;
    while (depth > 0) {
      const next = svg.slice(i).search(/<g[ >]|<\/g>/);
      if (next < 0) break;
      i += next;
      if (svg.startsWith('</g>', i)) { depth--; i += 4; }
      else { depth++; i += 2; }
    }
    if (depth === 0 && !found.has(m[1])) {
      found.set(m[1], svg.slice(re.lastIndex, i - 4).trim());
    }
  }
  return found;
}

// #133F5D = --color-text-primary, warna default ikon. Jadiin currentColor
// biar kartu/prototype bisa nentuin warnanya sendiri lewat CSS `color`.
// #E35273 (destructive) sengaja dibiarkan — itu warna semantic, bukan default.
const recolor = (s) => s.replace(/#133F5D/gi, 'currentColor');

// Sebagian ikon ke-export dengan grup TANPA nama (`icon_15`, dst) — nggak bisa
// dicocokin by name. Fallback: hitung titik tengah geometri grup, lalu cocokin
// ke kotak 24x24 symbol yang belum kebagian. Ini yang nyelametin dots-vertical
// (ikon menu 3-titik) yang wajib ada di tabel.
function centerOf(body) {
  const xs = [];
  const ys = [];
  for (const m of body.matchAll(/[-\d.]+\s+[-\d.]+/g)) {
    const [a, b] = m[0].split(/\s+/).map(Number);
    if (Number.isFinite(a) && Number.isFinite(b)) { xs.push(a); ys.push(b); }
  }
  if (!xs.length) return null;
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
}

const result = {};
let total = 0;
const skipped = [];

for (const cat of CATEGORIES) {
  const entry = byFrame[cat.frameId];
  if (!entry) throw new Error(`Frame ${cat.frameId} (${cat.label}) nggak ketemu di metadata`);

  const svg = readFileSync(join(HERE, `svg/${cat.slug}.svg`), 'utf8');
  const groups = groupContents(svg);
  const { syms } = entry;

  const named = new Set(syms.map((s) => s.name));
  const orphans = [...groups.entries()]
    .filter(([id]) => !named.has(id))
    .map(([id, body]) => ({ id, body, c: centerOf(body) }))
    .filter((o) => o.c);

  const icons = [];
  for (const sym of syms) {
    let body = groups.get(sym.name);
    if (!body) {
      const hit = orphans.find((o) =>
        o.c[0] >= sym.x && o.c[0] <= sym.x + SIZE && o.c[1] >= sym.y && o.c[1] <= sym.y + SIZE);
      if (hit) { body = hit.body; orphans.splice(orphans.indexOf(hit), 1); }
    }
    if (!body) { skipped.push(`${cat.label}/${sym.name}`); continue; }

    // x/y di metadata SUDAH relatif ke parent (frame), dan path di SVG pakai
    // koordinat ruang-frame yang sama. Jadi viewBox = x/y symbol apa adanya —
    // JANGAN dikurangi origin frame (frame.x/y itu relatif ke section).
    icons.push({
      name: sym.name,
      svg: `<svg viewBox="${sym.x} ${sym.y} ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}" `
        + `fill="none" xmlns="http://www.w3.org/2000/svg">${recolor(body)}</svg>`,
    });
  }

  icons.sort((a, b) => a.name.localeCompare(b.name));
  result[cat.label] = icons;
  total += icons.length;
  console.log(`${cat.label.padEnd(22)} ${icons.length}/${syms.length}`);
}

writeFileSync(join(HERE, 'icons.json'), JSON.stringify(result, null, 1));
console.log(`\nTOTAL ${total} ikon → icons.json`);
if (skipped.length) console.log(`Ke-skip (nggak ada grup padanannya di SVG): ${skipped.join(', ')}`);
