#!/usr/bin/env node
/**
 * HTML → Figma Converter
 *
 * Renders an HTML prototype with Puppeteer, extracts the full DOM tree
 * with computed styles, and outputs Figma-compatible JSON.
 *
 * Usage:
 *   node html-to-figma.mjs <path-to-html> [--port=3333] [--width=1440] [--height=900]
 *
 * Output:
 *   1. JSON file in ../figma-export/<filename>.json
 *   2. Local HTTP server serving the JSON (for Figma plugin to fetch)
 */

import puppeteer from 'puppeteer-core';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Parse CLI args ──
const args = process.argv.slice(2);
const htmlFile = args.find(a => !a.startsWith('--'));
const port = parseInt(args.find(a => a.startsWith('--port='))?.split('=')[1] || '3333');
const vpWidth = parseInt(args.find(a => a.startsWith('--width='))?.split('=')[1] || '1440');
const vpHeight = parseInt(args.find(a => a.startsWith('--height='))?.split('=')[1] || '900');

if (!htmlFile) {
  console.log(`
  Aurora HTML → Figma Converter

  Usage:
    node html-to-figma.mjs <html-file> [options]

  Options:
    --port=3333     HTTP server port (default: 3333)
    --width=1440    Viewport width (default: 1440)
    --height=900    Viewport height (default: 900)

  Example:
    node html-to-figma.mjs ../prototypes/preview-shell.html
  `);
  process.exit(1);
}

const absPath = resolve(htmlFile);
const fileName = basename(htmlFile, '.html');

console.log(`\n  HTML → Figma Converter`);
console.log(`  ─────────────────────`);
console.log(`  File:     ${htmlFile}`);
console.log(`  Viewport: ${vpWidth}x${vpHeight}`);
console.log(`  Port:     ${port}\n`);

// ── Launch Puppeteer & extract ──
console.log('  [1/4] Launching browser...');
// Use system Chrome (puppeteer-core doesn't bundle Chromium)
const chromePath = process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : process.platform === 'win32'
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : '/usr/bin/google-chrome';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: chromePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: vpWidth, height: vpHeight });

console.log('  [2/4] Loading HTML...');
await page.goto(`file://${absPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for web fonts
await page.evaluate(() => document.fonts.ready);
// Allow transitions/animations to settle
await new Promise(r => setTimeout(r, 600));

console.log('  [3/4] Extracting DOM layers...');

const layers = await page.evaluate(() => {
  /**
   * Walk the DOM tree and extract every visible element as a layer node.
   * Returns a nested JSON structure matching the DOM hierarchy.
   */

  function getDirectTextContent(el) {
    let text = '';
    for (const n of el.childNodes) {
      if (n.nodeType === 3) {
        const t = n.textContent.trim();
        if (t) text += (text ? ' ' : '') + t;
      }
    }
    return text;
  }

  function extractStyles(cs) {
    return {
      backgroundColor: cs.backgroundColor,
      backgroundImage: cs.backgroundImage,
      borderTopLeftRadius: parseFloat(cs.borderTopLeftRadius) || 0,
      borderTopRightRadius: parseFloat(cs.borderTopRightRadius) || 0,
      borderBottomRightRadius: parseFloat(cs.borderBottomRightRadius) || 0,
      borderBottomLeftRadius: parseFloat(cs.borderBottomLeftRadius) || 0,
      borderTopWidth: parseFloat(cs.borderTopWidth) || 0,
      borderRightWidth: parseFloat(cs.borderRightWidth) || 0,
      borderBottomWidth: parseFloat(cs.borderBottomWidth) || 0,
      borderLeftWidth: parseFloat(cs.borderLeftWidth) || 0,
      borderTopColor: cs.borderTopColor,
      borderRightColor: cs.borderRightColor,
      borderBottomColor: cs.borderBottomColor,
      borderLeftColor: cs.borderLeftColor,
      boxShadow: cs.boxShadow,
      opacity: parseFloat(cs.opacity),
      overflow: cs.overflow
    };
  }

  function extractTextStyles(cs) {
    return {
      fontFamily: cs.fontFamily.split(',')[0].replace(/['"]/g, '').trim(),
      fontSize: parseFloat(cs.fontSize),
      fontWeight: parseInt(cs.fontWeight),
      color: cs.color,
      lineHeight: cs.lineHeight === 'normal'
        ? Math.round(parseFloat(cs.fontSize) * 1.4)
        : parseFloat(cs.lineHeight),
      textAlign: cs.textAlign,
      letterSpacing: cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing)
    };
  }

  // Auto Layout info — only when the element is flex (else null → absolute)
  function extractLayout(cs) {
    const d = cs.display || '';
    if (d.indexOf('flex') < 0) return null;
    return {
      display: 'flex',
      flexDirection: cs.flexDirection || 'row',
      flexWrap: cs.flexWrap || 'nowrap',
      justifyContent: cs.justifyContent || 'flex-start',
      alignItems: cs.alignItems || 'stretch',
      rowGap: parseFloat(cs.rowGap) || 0,
      columnGap: parseFloat(cs.columnGap) || 0,
      pt: parseFloat(cs.paddingTop) || 0,
      pr: parseFloat(cs.paddingRight) || 0,
      pb: parseFloat(cs.paddingBottom) || 0,
      pl: parseFloat(cs.paddingLeft) || 0
    };
  }

  function extractNode(el, parentRect, parentEl) {
    const rect = el.getBoundingClientRect();

    // Skip zero-size or invisible elements
    if (rect.width <= 0 || rect.height <= 0) return null;

    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return null;

    const tag = el.tagName.toLowerCase();
    const className = el.classList.length > 0 ? el.classList[0] : '';
    const id = el.id || '';
    const nodeName = id || className || tag;
    const pos = cs.position;

    // Account for parent's scroll offset
    const scrollLeft = parentEl ? parentEl.scrollLeft : 0;
    const scrollTop = parentEl ? parentEl.scrollTop : 0;
    const px = parentRect ? parentRect.left : 0;
    const py = parentRect ? parentRect.top : 0;

    const x = rect.left - px + scrollLeft;
    const y = rect.top - py + scrollTop;
    const w = rect.width;
    const h = rect.height;

    // ── SVG element → capture raw SVG string ──
    if (tag === 'svg') {
      return {
        type: 'SVG',
        name: className || 'svg',
        x, y, width: w, height: h, pos,
        svg: el.outerHTML
      };
    }

    // ── IMG element → capture src ──
    if (tag === 'img') {
      // Try to get base64 data
      let dataUrl = null;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = el.naturalWidth || w;
        canvas.height = el.naturalHeight || h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(el, 0, 0);
        dataUrl = canvas.toDataURL('image/png');
      } catch (e) { /* cross-origin */ }

      return {
        type: 'IMAGE',
        name: el.alt || 'image',
        x, y, width: w, height: h, pos,
        src: el.src,
        dataUrl
      };
    }

    const hasElementChildren = el.children.length > 0;
    const directText = getDirectTextContent(el);

    // ── Pure text element (no child elements, has text) ──
    if (!hasElementChildren && directText) {
      const pl = parseFloat(cs.paddingLeft) || 0;
      const pt = parseFloat(cs.paddingTop) || 0;
      const pr = parseFloat(cs.paddingRight) || 0;
      const pb = parseFloat(cs.paddingBottom) || 0;
      const hasPadding = pl > 0 || pt > 0 || pr > 0 || pb > 0;
      const hasBg = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';

      // If has padding or background, wrap text in a frame to preserve spacing
      if (hasPadding || hasBg) {
        return {
          type: 'FRAME',
          name: nodeName,
          x, y, width: w, height: h, pos,
          styles: extractStyles(cs),
          children: [{
            type: 'TEXT',
            name: directText.slice(0, 40),
            text: directText,
            x: pl,
            y: pt,
            width: Math.max(1, w - pl - pr),
            height: Math.max(1, h - pt - pb),
            textStyles: extractTextStyles(cs)
          }]
        };
      }

      return {
        type: 'TEXT',
        name: directText.slice(0, 40),
        text: directText,
        x, y, width: w, height: h, pos,
        styles: extractStyles(cs),
        textStyles: extractTextStyles(cs)
      };
    }

    // ── Frame / container ──
    const node = {
      type: 'FRAME',
      name: nodeName,
      x, y, width: w, height: h, pos,
      styles: extractStyles(cs),
      layout: extractLayout(cs),
      children: []
    };

    // Walk childNodes (elements + text nodes) in DOM order
    for (const child of el.childNodes) {
      if (child.nodeType === 1) {
        // Element node
        const childLayer = extractNode(child, rect, el);
        if (childLayer) node.children.push(childLayer);

      } else if (child.nodeType === 3 && child.textContent.trim()) {
        // Text node (e.g. "Dashboard" next to icon spans)
        const range = document.createRange();
        range.selectNodeContents(child);
        const tr = range.getBoundingClientRect();
        if (tr.width > 0 && tr.height > 0) {
          node.children.push({
            type: 'TEXT',
            name: child.textContent.trim().slice(0, 40),
            text: child.textContent.trim(),
            x: tr.left - rect.left,
            y: tr.top - rect.top,
            width: tr.width,
            height: tr.height,
            textStyles: extractTextStyles(cs) // inherit parent styles
          });
        }
      }
    }

    return node;
  }

  // ── Multi-screen flow: [data-screen] top-level → FLOW payload ──
  const allScreens = Array.prototype.slice.call(document.querySelectorAll('[data-screen]'));
  const topLevel = allScreens.filter(e =>
    !e.parentElement || !e.parentElement.closest('[data-screen]'));

  if (topLevel.length >= 2) {
    const names = topLevel.map(e => e.getAttribute('data-screen') || 'screen');
    const screens = [];
    const edges = [];
    let hasExplicit = false;
    topLevel.forEach((e, i) => {
      const t = extractNode(e, null, null);
      if (t) { t.name = names[i]; screens.push({ name: names[i], tree: t }); }
      const nx = e.getAttribute('data-flow-next');
      if (nx) {
        hasExplicit = true;
        nx.split(',').forEach(to => {
          to = to.trim();
          if (to) edges.push({ from: names[i], to, label: e.getAttribute('data-flow-label') || '' });
        });
      }
    });
    if (!hasExplicit) {
      for (let i = 0; i < screens.length - 1; i++)
        edges.push({ from: screens[i].name, to: screens[i + 1].name, label: '' });
    }
    return { type: 'FLOW', screens, edges };
  }

  // Single screen
  const root = document.querySelector('.app-layout') || document.body.firstElementChild || document.body;
  return extractNode(root, null, null);
});

await browser.close();

// ── Count total layers ──
function countLayers(node) {
  if (!node) return 0;
  let c = 1;
  for (const child of node.children || []) c += countLayers(child);
  return c;
}

let totalLayers;
if (layers && layers.type === 'FLOW') {
  totalLayers = layers.screens.reduce((a, s) => a + countLayers(s.tree), 0);
  console.log(`        ${layers.screens.length} screens, ${layers.edges.length} connectors, ${totalLayers} layers extracted`);
} else {
  totalLayers = countLayers(layers);
  console.log(`        ${totalLayers} layers extracted`);
}

// ── Save JSON ──
console.log('  [4/4] Saving JSON...');
const exportDir = resolve(__dirname, '..', 'figma-export');
if (!existsSync(exportDir)) mkdirSync(exportDir, { recursive: true });

const outputFile = resolve(exportDir, `${fileName}.json`);
writeFileSync(outputFile, JSON.stringify(layers, null, 2));
console.log(`        Saved to: figma-export/${fileName}.json`);

// ── Start HTTP server for Figma plugin ──
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(layers));
});

server.listen(port, () => {
  console.log(`
  ======================================
   Server ready at http://localhost:${port}
  ======================================

  Next steps:
  1. Open Figma Desktop
  2. Go to Plugins → Development → Import plugin from manifest
     (select: figma-plugin/manifest.json)
  3. Run the plugin: Plugins → "HTML to Figma (Aurora)"
  4. Click "Import from Server"
  5. Done! Layers will appear on your canvas.

  Alternative: Copy figma-export/${fileName}.json
  and paste into the plugin's "Paste JSON" tab.

  Press Ctrl+C to stop the server.
`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n  Server stopped.');
  server.close();
  process.exit(0);
});
