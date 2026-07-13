// Build bundle Claude Design (foundation) dari token Paperverse.
// Sumber nilai: paper-designer/ds/aurora-tokens.md — live-verified dari Figma
// variables collection `semantic` + `primitive_text_and_layout` (2026-07-01),
// input field dari node Autocomplete 2582:6502 (2026-07-08).
//
// Jalanin: node paper-designer/claude-design/build.mjs
// Output: dist/tokens.css + dist/*.html (siap di-push via DesignSync)

import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'dist');
mkdirSync(OUT, { recursive: true });

/* ---------------------------------------------------------------- tokens */

const TEXT = [
  ['--color-text-primary', '#133f5d', 'Teks utama, heading'],
  ['--color-text-secondary', '#718c9e', 'Teks pendukung'],
  ['--color-text-muted', '#a5b6c1', 'Teks redup / disabled'],
  ['--color-text-inverse', '#ffffff', 'Teks di atas background gelap'],
];

const SURFACE = [
  ['--color-surface-light-default', '#ffffff', 'Background halaman'],
  ['--color-surface-light-raised', '#f3f6f9', 'Card, header tabel bertint'],
  ['--color-surface-light-muted', '#e7eaec', 'Background redup'],
  ['--color-surface-light-platform', '#f8fbfe', 'Background app/platform'],
  ['--color-surface-dark-default', '#263640', 'Dark — default'],
  ['--color-surface-dark-raised', '#133f5d', 'Dark — elevated'],
  ['--color-surface-dark-muted', '#4e6f86', 'Dark — redup'],
  ['--color-surface-dark-platform', '#1f2b33', 'Dark — platform'],
];

const BORDER = [
  ['--color-border-subtle', '#f2f4f5', 'Divider halus'],
  ['--color-border-default', '#dde1e5', 'Border default, border input'],
];

const ACTION = [
  ['--color-action-primary-bg', '#4199d5', 'Primary button — fill'],
  ['--color-action-primary-hover', '#89bde5', 'Primary — hover'],
  ['--color-action-primary-pressed', '#3385b5', 'Primary — pressed'],
  ['--color-action-primary-fg', '#ffffff', 'Primary — teks'],
  ['--color-action-destructive-bg', '#e35273', 'Destructive — fill'],
  ['--color-action-destructive-hover', '#ee94a8', 'Destructive — hover'],
  ['--color-action-destructive-pressed', '#b52b55', 'Destructive — pressed'],
  ['--color-action-destructive-fg', '#ffffff', 'Destructive — teks'],
  ['--color-action-neutral-bg', '#fdfdfe', 'Secondary — fill'],
  ['--color-action-neutral-hover', '#f2f4f5', 'Secondary — hover'],
  ['--color-action-neutral-pressed', '#dde1e5', 'Secondary — pressed'],
  ['--color-action-neutral-fg', '#133f5d', 'Secondary — teks'],
  ['--color-action-disabled-bg', '#e7eaec', 'Disabled — fill'],
  ['--color-action-disabled-fg', '#7f97a7', 'Disabled — teks'],
];

const FOCUS = [['--color-focus-ring', '#89bde5', 'Focus ring']];

const INPUT = [
  ['--color-input-field-default-bg', '#ffffff', 'Field — background'],
  ['--color-input-field-default-fg', '#c2cdd5', 'Field — placeholder'],
];

// Warning = ORANGE, Caution = YELLOW. Jangan ketuker.
const STATES = [
  ['Success', '#356021', '#97cc56', '#f7fbf3', '#d6eabe'],
  ['Danger', '#5c122d', '#e35273', '#fdf3f5', '#f6c7d2'],
  ['Warning', '#8c2f0c', '#f37d51', '#fef6f3', '#fbd5c7'],
  ['Caution', '#6e4e00', '#eab11c', '#fdf9ef', '#f8e6b6'],
  ['Active/Info', '#133f5d', '#4199d5', '#f2f7fc', '#c2def2'],
];

const PALETTE = [
  ['Brand Light', ['#f8fbfe', '#4199d5', '#3385b5'], '10 · 50 (primary) · 60'],
  ['Brand Dark', ['#f6f8f9', '#133f5d', '#1f2b33'], '10 · 50 (primary) · 60'],
  ['Green', ['#fbfdf8', '#97cc56', '#6faf35'], '10 · 50 (primary) · 60'],
  ['Red', ['#fef8fa', '#e35273', '#b52b55'], '10 · 50 (primary) · 60'],
  ['Yellow', ['#fefcf6', '#eab11c', '#c89d24'], '10 · 50 (primary) · 60'],
  ['Orange', ['#fffaf8', '#f37d51', '#cc5a2e'], '10 · 50 (primary) · 60'],
  ['Grey', ['#fdfdfe', '#c8cfd5', '#ced3d7'], '10 · 50 (primary) · 60'],
];

const HEADING = [
  ['xs', 14, 20], ['sm', 16, 20], ['md', 22, 28], ['lg', 28, 36], ['xl', 34, 44],
  ['2xl', 42, 52], ['3xl', 52, 60], ['4xl', 64, 72], ['5xl', 72, 82], ['6xl', 80, 92],
];
const BODY = [['sm', 12, 18], ['md', 14, 22], ['lg', 20, 30], ['xl', 24, 36]];
const WEIGHTS = [['Regular', 400], ['Medium', 500], ['Semibold', 600], ['Bold', 700]];

const SPACING = [
  ['2xs', 2], ['xs', 4], ['sm', 8], ['md', 12], ['lg', 16], ['xl', 20],
  ['2xl', 24], ['3xl', 28], ['4xl', 32], ['5xl', 36], ['6xl', 40],
];
const RADIUS = [
  ['none', '0px'], ['sm', '4px'], ['md', '8px'], ['lg', '12px'],
  ['xl', '16px'], ['full', '9999px'],
];
const STROKE = [['none', '0px'], ['xs', '1px'], ['md', '1.5px'], ['lg', '2px']];

const SHADOWS = [
  ['Shadow Neutral-01', '0 3px 10px #00000014', 'Card umum (notif, panel)'],
  ['table/option', '0 1px 5px #133f5d26', 'Dropdown, menu, popover'],
  ['shade/button/color', '0 1px 2px #0a0d120d', 'Button brand (+ inner shadow)'],
  ['shade/button/white', '0 1px 2px #0a0d120d', 'Button putih (+ inner shadow)'],
  ['Shadow Blue-01', '0 -5px 20px #4199d51a', 'Glow atas (brand)'],
  ['Shadow Blue-02', '0 5px 20px #4199d51a', 'Glow bawah (brand)'],
  ['header', '0 4px 20px #4195d51a', 'Nav header'],
];

/* ------------------------------------------------------------ tokens.css */

const cssVar = ([name, val]) => `  ${name}: ${val};`;
const section = (title, rows) => `\n  /* ${title} */\n${rows.map(cssVar).join('\n')}`;

const ROOT = [
  section('Text', TEXT),
  section('Surface', SURFACE),
  section('Border', BORDER),
  section('Action', ACTION),
  section('Focus', FOCUS),
  section('Input', INPUT),
  section('Spacing', SPACING.map(([k, v]) => [`--spacing-${k}`, `${v}px`])),
  section('Radius', RADIUS.map(([k, v]) => [`--radius-${k}`, v])),
  section('Stroke', STROKE.map(([k, v]) => [`--stroke-${k}`, v])),
  section('Font', [['--font-family', 'Lato, sans-serif']]),
].join('\n');

const TOKENS_CSS = `/* Paperverse / Aurora — design tokens
   Sumber: Figma Paperverse 1.0 (KjmdMheQSYqqJoKyniNMnB),
   collection \`semantic\` + \`primitive_text_and_layout\`.
   JANGAN edit manual — regenerate lewat paper-designer/claude-design/build.mjs */

:root {${ROOT}
}
`;
writeFileSync(join(OUT, 'tokens.css'), TOKENS_CSS);

/* ---------------------------------------------------------------- layout */

// Token di-inline ke tiap preview supaya kartu tetap ter-styling walau
// resolusi path relatif ke tokens.css nggak jalan di renderer kartu.
const page = (group, title, sub, body) => `<!-- @dsCard group="${group}" -->
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${TOKENS_CSS}
* { box-sizing: border-box; }
body {
  margin: 0; padding: 32px;
  font-family: Lato, sans-serif;
  font-size: 14px; line-height: 22px;
  color: var(--color-text-primary);
  background: var(--color-surface-light-default);
}
h1 { font-size: 28px; line-height: 36px; font-weight: 700; margin: 0 0 4px; }
.sub { color: var(--color-text-secondary); margin: 0 0 32px; }
h2 {
  font-size: 16px; line-height: 20px; font-weight: 600;
  margin: 32px 0 12px; padding-bottom: 8px;
  border-bottom: var(--stroke-xs) solid var(--color-border-default);
}
h2:first-of-type { margin-top: 0; }
table { width: 100%; border-collapse: collapse; }
td, th {
  text-align: left; padding: 8px 12px;
  border-bottom: var(--stroke-xs) solid var(--color-border-subtle);
  vertical-align: middle;
}
th { font-weight: 600; color: var(--color-text-secondary); font-size: 12px; }
code {
  font-family: Lato, sans-serif;
  font-size: 12px; letter-spacing: 0.2px;
  color: var(--color-text-primary);
}
.muted { color: var(--color-text-muted); }
.secondary { color: var(--color-text-secondary); }
.swatch {
  width: 40px; height: 40px; border-radius: var(--radius-sm);
  border: var(--stroke-xs) solid var(--color-border-default);
}
.wrap { overflow-x: auto; }
${body.css || ''}
</style>
</head>
<body>
<h1>${title}</h1>
<p class="sub">${sub}</p>
${body.html}
</body>
</html>
`;

/* ---------------------------------------------------------------- colors */

const swatchRows = (rows) => rows.map(([name, hex, use]) => `  <tr>
    <td><div class="swatch" style="background:${hex}"></div></td>
    <td><code>${name}</code></td>
    <td><code class="secondary">${hex}</code></td>
    <td class="secondary">${use}</td>
  </tr>`).join('\n');

const swatchTable = (rows) => `<div class="wrap"><table>
  <tr><th></th><th>Token</th><th>Nilai</th><th>Dipakai buat</th></tr>
${swatchRows(rows)}
</table></div>`;

const colorsBody = {
  css: `
.states td:first-child { font-weight: 600; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 4px 12px; border-radius: var(--radius-full);
  font-size: 12px; font-weight: 600;
  border: var(--stroke-xs) solid;
}
.pal { display: flex; gap: 4px; }
.pal div { width: 48px; height: 40px; border-radius: var(--radius-sm); border: var(--stroke-xs) solid var(--color-border-default); }
.warn {
  margin: 0 0 24px; padding: 12px 16px;
  background: #fef6f3; border: var(--stroke-xs) solid #fbd5c7;
  border-radius: var(--radius-md); color: #8c2f0c; font-size: 12px; line-height: 18px;
}`,
  html: `
<p class="warn"><strong>Aturan warna:</strong> teks informasi wajib <em>abu netral</em>. Warna brand (<code>#4199d5</code>) khusus elemen interaktif — button, link, focus. Jangan campur, nanti user ngira teks statis bisa diklik.</p>

<h2>Text</h2>
${swatchTable(TEXT)}

<h2>Surface</h2>
${swatchTable(SURFACE)}

<h2>Border</h2>
${swatchTable(BORDER)}

<h2>Action — khusus elemen interaktif</h2>
${swatchTable(ACTION)}

<h2>Input</h2>
${swatchTable(INPUT)}

<h2>Focus</h2>
${swatchTable(FOCUS)}

<h2>State</h2>
<p class="secondary" style="margin-top:-4px">Warning = <strong>oranye</strong>. Caution = <strong>kuning</strong>. Sering ketuker — perhatiin.</p>
<div class="wrap"><table class="states">
  <tr><th>State</th><th>Contoh</th><th>Teks gelap</th><th>Ikon / teks terang</th><th>Background</th><th>Border</th></tr>
${STATES.map(([n, dark, light, bg, bd]) => `  <tr>
    <td>${n}</td>
    <td><span class="chip" style="color:${dark};background:${bg};border-color:${bd}">${n}</span></td>
    <td><code class="secondary">${dark}</code></td>
    <td><code class="secondary">${light}</code></td>
    <td><code class="secondary">${bg}</code></td>
    <td><code class="secondary">${bd}</code></td>
  </tr>`).join('\n')}
</table></div>

<h2>Primitive palette — referensi aja</h2>
<p class="secondary" style="margin-top:-4px">Jangan dipakai langsung di komponen. Selalu lewat token semantic di atas.</p>
<div class="wrap"><table>
  <tr><th>Ramp</th><th>Contoh</th><th>Step</th></tr>
${PALETTE.map(([n, hexes, steps]) => `  <tr>
    <td>${n}</td>
    <td><div class="pal">${hexes.map(h => `<div style="background:${h}" title="${h}"></div>`).join('')}</div></td>
    <td class="secondary">${steps}</td>
  </tr>`).join('\n')}
</table></div>`,
};

writeFileSync(join(OUT, 'colors.html'), page('Foundations', 'Colors', 'Token warna semantic Paperverse — text, surface, border, action, state.', colorsBody));

/* ------------------------------------------------------------ typography */

const typeBody = {
  css: `.sample { font-family: Lato, sans-serif; white-space: nowrap; }`,
  html: `
<p class="secondary" style="margin-top:-16px">Font tunggal: <strong>Lato</strong>. Cuma pakai Regular &amp; Bold buat teks umum — jangan tambah weight baru.</p>

<h2>Heading</h2>
<div class="wrap"><table>
  <tr><th>Size</th><th>Contoh</th><th>Font size</th><th>Line height</th></tr>
${HEADING.map(([k, fs, lh]) => `  <tr>
    <td><code>heading-${k}</code></td>
    <td><span class="sample" style="font-size:${fs}px;line-height:${lh}px;font-weight:600">Buat invoice</span></td>
    <td class="secondary">${fs}px</td>
    <td class="secondary">${lh}px</td>
  </tr>`).join('\n')}
</table></div>

<h2>Body</h2>
<div class="wrap"><table>
  <tr><th>Size</th><th>Contoh</th><th>Font size</th><th>Line height</th></tr>
${BODY.map(([k, fs, lh]) => `  <tr>
    <td><code>body-${k}</code></td>
    <td><span class="sample" style="font-size:${fs}px;line-height:${lh}px">Tagihan jatuh tempo 30 hari</span></td>
    <td class="secondary">${fs}px</td>
    <td class="secondary">${lh}px</td>
  </tr>`).join('\n')}
</table></div>

<h2>Weight</h2>
<div class="wrap"><table>
  <tr><th>Weight</th><th>Contoh</th><th>Nilai</th></tr>
${WEIGHTS.map(([n, w]) => `  <tr>
    <td>${n}</td>
    <td><span class="sample" style="font-size:20px;line-height:30px;font-weight:${w}">Paper.id</span></td>
    <td class="secondary">${w}</td>
  </tr>`).join('\n')}
</table></div>`,
};

writeFileSync(join(OUT, 'typography.html'), page('Foundations', 'Typography', 'Skala Lato — heading, body, weight.', typeBody));

/* -------------------------------------------------------- spacing/radius */

const spacingBody = {
  css: `
.bar { height: 16px; background: var(--color-action-primary-bg); border-radius: var(--radius-sm); }
.box {
  width: 72px; height: 56px;
  background: var(--color-surface-light-raised);
  border: var(--stroke-xs) solid var(--color-border-default);
}
.line { width: 72px; background: var(--color-text-primary); }`,
  html: `
<h2>Spacing</h2>
<p class="secondary" style="margin-top:-4px">Jarak dalam grup selalu <strong>lebih kecil</strong> dari jarak antar grup. Label ke input = 4px, antar field = 16px, antar section = 32px.</p>
<div class="wrap"><table>
  <tr><th>Token</th><th></th><th>Nilai</th><th>Dipakai buat</th></tr>
${SPACING.map(([k, v]) => `  <tr>
    <td><code>--spacing-${k}</code></td>
    <td style="width:50%"><div class="bar" style="width:${v * 4}px"></div></td>
    <td class="secondary">${v}px</td>
    <td class="secondary">${{ 2: 'Gap ikon', 4: 'Label→input, gap ikon-teks', 8: 'Padding komponen', 12: 'Padding button', 16: 'Antar field, padding card', 20: 'Padding besar', 24: 'Antar section', 28: 'Gap section besar', 32: 'Padding container', 36: 'Padding container besar', 40: 'Maksimum' }[v] || ''}</td>
  </tr>`).join('\n')}
</table></div>

<h2>Radius</h2>
<div class="wrap"><table>
  <tr><th>Token</th><th>Contoh</th><th>Nilai</th><th>Dipakai buat</th></tr>
${RADIUS.map(([k, v]) => `  <tr>
    <td><code>--radius-${k}</code></td>
    <td><div class="box" style="border-radius:${v}"></div></td>
    <td class="secondary">${v}</td>
    <td class="secondary">${{ none: 'Tanpa rounding', sm: 'Input, filter box', md: 'Card, dialog, toast', lg: 'Modal', xl: 'Hero', full: 'Button (pill), avatar, chip' }[k]}</td>
  </tr>`).join('\n')}
</table></div>
<p class="secondary"><strong>Catatan:</strong> radius button = <code>--radius-full</code> (pill), <em>bukan</em> <code>--radius-sm</code>. Ini beda dari tebakan umum.</p>

<h2>Stroke</h2>
<div class="wrap"><table>
  <tr><th>Token</th><th>Contoh</th><th>Nilai</th><th>Dipakai buat</th></tr>
${STROKE.map(([k, v]) => `  <tr>
    <td><code>--stroke-${k}</code></td>
    <td><div class="line" style="height:${v}"></div></td>
    <td class="secondary">${v}</td>
    <td class="secondary">${{ none: 'Tanpa border', xs: 'Border default', md: 'Emphasis sedang, checkbox', lg: 'Focus ring' }[k]}</td>
  </tr>`).join('\n')}
</table></div>`,
};

writeFileSync(join(OUT, 'spacing-radius.html'), page('Foundations', 'Spacing, Radius & Stroke', 'Skala jarak, sudut, dan tebal garis.', spacingBody));

/* ------------------------------------------------------------- elevation */

const elevBody = {
  css: `
.cards { display: flex; flex-wrap: wrap; gap: 24px; }
.card {
  width: 200px; padding: 20px;
  background: var(--color-surface-light-default);
  border-radius: var(--radius-md);
}
.card b { display: block; font-size: 12px; margin-bottom: 4px; }
.card span { font-size: 12px; color: var(--color-text-secondary); }
.stage { padding: 32px; background: var(--color-surface-light-platform); border-radius: var(--radius-md); }`,
  html: `
<p class="secondary" style="margin-top:-16px">Shadow diambil dari Effect Style Paperverse. Makin tinggi elemen, makin jauh dari permukaan.</p>

<h2>Effect style</h2>
<div class="stage">
  <div class="cards">
${SHADOWS.map(([n, v, use]) => `    <div class="card" style="box-shadow:${v}">
      <b>${n}</b>
      <span>${use}</span>
    </div>`).join('\n')}
  </div>
</div>

<h2>Nilai</h2>
<div class="wrap"><table>
  <tr><th>Style</th><th>CSS</th><th>Dipakai buat</th></tr>
${SHADOWS.map(([n, v, use]) => `  <tr>
    <td><code>${n}</code></td>
    <td><code class="secondary">${v}</code></td>
    <td class="secondary">${use}</td>
  </tr>`).join('\n')}
</table></div>
<p class="secondary"><code>shade/button/color</code> dan <code>shade/button/white</code> punya inner shadow tambahan yang belum ke-render di preview ini — cek Figma buat nilai persisnya.</p>`,
};

writeFileSync(join(OUT, 'elevation.html'), page('Foundations', 'Elevation', 'Shadow & kedalaman — dari Effect Style Paperverse.', elevBody));

/* ----------------------------------------------------------------- icons */
// icons.json dihasilkan extract-icons.mjs (potongan SVG asli dari Figma).
// Kalau belum ada, lewati — foundation tetap bisa di-build sendirian.

let iconFiles = [];
try {
  const icons = JSON.parse(readFileSync(join(HERE, 'icons.json'), 'utf8'));

  const iconCss = `
.count { color: var(--color-text-secondary); margin: 0 0 16px; }
.search {
  width: 100%; max-width: 320px; height: 40px;
  padding: 8px 12px; margin-bottom: 24px;
  font-family: Lato, sans-serif; font-size: 14px;
  color: var(--color-text-primary);
  background: var(--color-input-field-default-bg);
  border: var(--stroke-xs) solid var(--color-border-default);
  border-radius: var(--radius-sm);
}
.search::placeholder { color: var(--color-input-field-default-fg); }
.search:focus { outline: var(--stroke-lg) solid var(--color-focus-ring); outline-offset: 0; }
.grid {
  display: grid; gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.icon {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 16px 8px; border-radius: var(--radius-md);
  color: var(--color-text-primary);
  background: var(--color-surface-light-default);
}
.icon:hover { background: var(--color-surface-light-raised); }
.icon svg { flex: none; }
.icon span {
  font-size: 12px; line-height: 18px; text-align: center;
  color: var(--color-text-secondary); word-break: break-word;
}
.none { color: var(--color-text-muted); display: none; }`;

  for (const [label, list] of Object.entries(icons)) {
    const slug = 'icons-' + label.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
    const body = {
      css: iconCss,
      html: `
<p class="count">${list.length} ikon · 24×24 · stroke 1.5px · <code>currentColor</code> (ikutin CSS <code>color</code> induknya)</p>
<input class="search" type="search" placeholder="Cari ikon…" oninput="filter(this.value)">
<div class="grid" id="grid">
${list.map((i) => `  <div class="icon" data-name="${i.name}" title="${i.name}">${i.svg}<span>${i.name}</span></div>`).join('\n')}
</div>
<p class="none" id="none">Nggak ada ikon yang cocok.</p>
<script>
function filter(q) {
  q = q.trim().toLowerCase();
  let hit = 0;
  for (const el of document.querySelectorAll('.icon')) {
    const show = !q || el.dataset.name.includes(q);
    el.style.display = show ? '' : 'none';
    if (show) hit++;
  }
  document.getElementById('none').style.display = hit ? 'none' : 'block';
}
</script>`,
    };
    const file = `${slug}.html`;
    writeFileSync(join(OUT, file), page('Icons', label, `Ikon Paperverse — kategori ${label}.`, body));
    iconFiles.push({ file, label, count: list.length });
  }
} catch (e) {
  if (e.code !== 'ENOENT') throw e;
  console.log('(icons.json belum ada — jalanin extract-icons.mjs dulu kalau mau kartu ikon)');
}

console.log('OK — dist/: tokens.css, colors.html, typography.html, spacing-radius.html, elevation.html'
  + iconFiles.map((i) => `\n     + ${i.file} (${i.count} ikon)`).join(''));
