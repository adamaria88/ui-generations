/**
 * HTML to Figma (Aurora) — Plugin Code
 *
 * Receives JSON layer data (from the extraction script) and creates
 * corresponding Figma nodes: Frames, Text, SVGs, with proper fills,
 * strokes, effects, and corner radii.
 */

figma.showUI(__html__, { width: 420, height: 520 });

// ────────────────────────────────────────────────────────
// Color Parsing
// ────────────────────────────────────────────────────────

function parseColor(str) {
  if (!str || str === 'transparent' || str === 'rgba(0, 0, 0, 0)') return null;

  // rgb/rgba
  const m = str.match(/rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\s*\)/);
  if (m) {
    return {
      rgb: { r: +m[1] / 255, g: +m[2] / 255, b: +m[3] / 255 },
      a: m[4] !== undefined ? +m[4] : 1
    };
  }

  // Hex
  const h = str.match(/#([0-9a-f]{3,8})/i);
  if (h) {
    let hex = h[1];
    if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    return {
      rgb: {
        r: parseInt(hex.slice(0,2), 16) / 255,
        g: parseInt(hex.slice(2,4), 16) / 255,
        b: parseInt(hex.slice(4,6), 16) / 255
      },
      a: hex.length === 8 ? parseInt(hex.slice(6,8), 16) / 255 : 1
    };
  }

  return null;
}

// ────────────────────────────────────────────────────────
// Gradient Parsing
// ────────────────────────────────────────────────────────

function parseLinearGradient(cssStr) {
  const match = cssStr.match(/linear-gradient\((.+)\)/);
  if (!match) return null;

  const content = match[1];
  // Split by comma not inside parentheses
  const parts = content.split(/,(?![^(]*\))/);

  let angleDeg = 180; // default: to bottom
  let startIdx = 0;

  const first = parts[0].trim();
  if (first.startsWith('to ')) {
    const dir = first.replace('to ', '').trim();
    const dirMap = { bottom: 180, top: 0, right: 90, left: 270 };
    if (dir in dirMap) angleDeg = dirMap[dir];
    startIdx = 1;
  } else if (first.endsWith('deg')) {
    angleDeg = parseFloat(first);
    startIdx = 1;
  }

  // Parse color stops
  const stops = [];
  for (let i = startIdx; i < parts.length; i++) {
    const part = parts[i].trim();
    const posMatch = part.match(/([\d.]+)%\s*$/);
    const position = posMatch ? parseFloat(posMatch[1]) / 100 : null;
    const colorStr = posMatch ? part.slice(0, part.lastIndexOf(posMatch[1])).trim() : part;

    const color = parseColor(colorStr);
    if (color) {
      stops.push({
        color: { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, a: color.a },
        position
      });
    }
  }

  if (stops.length < 2) return null;

  // Fill missing positions
  if (stops[0].position === null) stops[0].position = 0;
  if (stops[stops.length - 1].position === null) stops[stops.length - 1].position = 1;
  for (let i = 1; i < stops.length - 1; i++) {
    if (stops[i].position === null) {
      const prev = stops[i - 1].position;
      let nextIdx = i + 1;
      while (nextIdx < stops.length && stops[nextIdx].position === null) nextIdx++;
      const next = (nextIdx < stops.length && stops[nextIdx].position !== null) ? stops[nextIdx].position : 1;
      const span = nextIdx - (i - 1);
      stops[i].position = prev + (next - prev) * ((i - (i - 1)) / span);
    }
  }

  // Convert CSS angle to Figma gradient transform
  // CSS: 0deg = to top, 90deg = to right, 180deg = to bottom
  // Figma gradient goes from (0,0.5) to (1,0.5) by default (left to right)
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  return {
    type: 'GRADIENT_LINEAR',
    gradientStops: stops,
    gradientTransform: [
      [cos, sin, 0.5 - cos * 0.5 - sin * 0.5],
      [-sin, cos, 0.5 + sin * 0.5 - cos * 0.5]
    ]
  };
}

// ────────────────────────────────────────────────────────
// Box Shadow Parsing
// ────────────────────────────────────────────────────────

function parseBoxShadows(shadowStr) {
  if (!shadowStr || shadowStr === 'none') return [];

  const effects = [];
  // Match individual shadows (handles multiple)
  const regex = /(inset\s+)?(-?[\d.]+)px\s+(-?[\d.]+)px\s+(-?[\d.]+)px(?:\s+(-?[\d.]+)px)?\s+(rgba?\([^)]+\)|#[0-9a-f]{3,8})/gi;
  let m;

  while ((m = regex.exec(shadowStr)) !== null) {
    const isInset = !!m[1];
    const color = parseColor(m[6]);
    if (!color) continue;

    effects.push({
      type: isInset ? 'INNER_SHADOW' : 'DROP_SHADOW',
      color: { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b, a: color.a },
      offset: { x: parseFloat(m[2]), y: parseFloat(m[3]) },
      radius: parseFloat(m[4]),
      spread: m[5] ? parseFloat(m[5]) : 0,
      visible: true,
      blendMode: 'NORMAL'
    });
  }

  return effects;
}

// ────────────────────────────────────────────────────────
// Font Loading
// ────────────────────────────────────────────────────────

const fontCache = new Map();

function getFigmaStyle(weight) {
  if (weight >= 700) return 'Bold';
  if (weight >= 600) return 'Semi Bold';
  if (weight >= 500) return 'Medium';
  return 'Regular';
}

async function loadFont(family, weight) {
  const cacheKey = `${family}:${weight}`;
  if (fontCache.has(cacheKey)) return fontCache.get(cacheKey);

  const style = getFigmaStyle(weight);
  const candidates = [
    { family, style },
    { family, style: 'Regular' },
    { family: 'Inter', style },
    { family: 'Inter', style: 'Regular' }
  ];

  for (const font of candidates) {
    try {
      await figma.loadFontAsync(font);
      fontCache.set(cacheKey, font);
      return font;
    } catch (e) {}
  }

  // Absolute fallback
  const fallback = { family: 'Inter', style: 'Regular' };
  await figma.loadFontAsync(fallback);
  fontCache.set(cacheKey, fallback);
  return fallback;
}

// ────────────────────────────────────────────────────────
// Auto Layout  (only applied when the source element was flex)
// ────────────────────────────────────────────────────────

const JUSTIFY = {
  'flex-start':'MIN','start':'MIN','left':'MIN','center':'CENTER',
  'flex-end':'MAX','end':'MAX','right':'MAX',
  'space-between':'SPACE_BETWEEN','space-around':'SPACE_BETWEEN','space-evenly':'SPACE_BETWEEN'
};
const ALIGN = {
  'flex-start':'MIN','start':'MIN','center':'CENTER','flex-end':'MAX','end':'MAX',
  'stretch':'MIN','baseline':'MIN','normal':'MIN'
};

function applyAutoLayout(frame, L, w, h, kids) {
  if (!L || (L.display || '').indexOf('flex') < 0) return;
  const col = (L.flexDirection || 'row').indexOf('column') === 0;
  try {
    frame.layoutMode = col ? 'VERTICAL' : 'HORIZONTAL';
    frame.itemSpacing = Math.max(0, Math.round((col ? L.rowGap : L.columnGap) || 0));
    frame.paddingTop = Math.round(L.pt || 0);
    frame.paddingRight = Math.round(L.pr || 0);
    frame.paddingBottom = Math.round(L.pb || 0);
    frame.paddingLeft = Math.round(L.pl || 0);
    frame.primaryAxisAlignItems = JUSTIFY[L.justifyContent] || 'MIN';
    frame.counterAxisAlignItems = ALIGN[L.alignItems] || 'MIN';
    frame.primaryAxisSizingMode = 'FIXED';
    frame.counterAxisSizingMode = 'FIXED';
    if ((L.flexWrap || '').indexOf('wrap') === 0 && frame.layoutMode === 'HORIZONTAL') {
      try { frame.layoutWrap = 'WRAP'; } catch (e) {}
    }
    // Children that were position:absolute/fixed must NOT join the flow
    for (const k of kids) {
      const p = k.data && k.data.pos;
      if (p === 'absolute' || p === 'fixed') {
        try {
          k.node.layoutPositioning = 'ABSOLUTE';
          k.node.x = Math.round(k.data.x);
          k.node.y = Math.round(k.data.y);
        } catch (e) {}
      }
    }
    frame.resize(w, h); // keep the real rendered size, never hug-collapse
  } catch (e) {}
}

// ────────────────────────────────────────────────────────
// Flow connector  (arrow between two screen frames)
// ────────────────────────────────────────────────────────

const fontReady = figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

function drawArrow(parent, a, b, label) {
  const ax = a.x + a.width, ay = a.y + a.height / 2;
  const bx = b.x,            by = b.y + b.height / 2;
  const dx = bx - ax, dy = by - ay;
  const len = Math.max(1, Math.sqrt(dx * dx + dy * dy));
  const line = figma.createLine();
  line.resize(len, 0);
  line.x = (ax + bx) / 2 - len / 2;       // centre line on midpoint, then rotate
  line.y = (ay + by) / 2;                  // around its centre → ends land on a & b
  line.rotation = -Math.atan2(dy, dx) * 180 / Math.PI;
  line.strokes = [{ type: 'SOLID', color: { r: 0.255, g: 0.6, b: 0.835 } }]; // #4199d5
  line.strokeWeight = 2;
  try { line.strokeCap = 'ARROW_LINES'; } catch (e) {}
  parent.appendChild(line);
  if (label) {
    fontReady.then(() => {
      const t = figma.createText();
      t.fontName = { family: 'Inter', style: 'Regular' };
      t.characters = String(label);
      t.fontSize = 12;
      t.fills = [{ type: 'SOLID', color: { r: 0.45, g: 0.55, b: 0.62 } }];
      t.x = Math.round((ax + bx) / 2 - t.width / 2);
      t.y = Math.round((ay + by) / 2 - 20);
      parent.appendChild(t);
    }).catch(() => {});
  }
}

// ────────────────────────────────────────────────────────
// Node Creation
// ────────────────────────────────────────────────────────

let createdCount = 0;

async function createNode(data, parent) {
  if (!data) return null;

  const w = Math.max(1, Math.round(data.width));
  const h = Math.max(1, Math.round(data.height));
  const x = Math.round(data.x);
  const y = Math.round(data.y);

  createdCount++;
  if (createdCount % 50 === 0) {
    figma.ui.postMessage({ type: 'progress', count: createdCount });
  }

  // ── SVG ──
  if (data.type === 'SVG' && data.svg) {
    try {
      const node = figma.createNodeFromSvg(data.svg);
      node.name = data.name || 'svg';
      node.x = x;
      node.y = y;
      node.resize(w, h);
      parent.appendChild(node);
      return node;
    } catch (e) {
      // Fallback: colored rectangle placeholder
      const rect = figma.createRectangle();
      rect.name = (data.name || 'svg') + ' (fallback)';
      rect.x = x;
      rect.y = y;
      rect.resize(w, h);
      rect.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.92, b: 0.92 } }];
      parent.appendChild(rect);
      return rect;
    }
  }

  // ── IMAGE ──
  if (data.type === 'IMAGE') {
    const rect = figma.createRectangle();
    rect.name = data.name || 'image';
    rect.x = x;
    rect.y = y;
    rect.resize(w, h);

    if (data.dataUrl) {
      try {
        // Decode base64 image and create fill
        const base64 = data.dataUrl.split(',')[1];
        const bytes = figma.base64Decode(base64);
        const image = figma.createImage(bytes);
        rect.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FIT' }];
      } catch (e) {
        rect.fills = [{ type: 'SOLID', color: { r: 0.85, g: 0.85, b: 0.85 } }];
      }
    } else {
      rect.fills = [{ type: 'SOLID', color: { r: 0.85, g: 0.85, b: 0.85 } }];
    }

    parent.appendChild(rect);
    return rect;
  }

  // ── TEXT ──
  if (data.type === 'TEXT' && data.text) {
    const ts = data.textStyles || {};
    const font = await loadFont(ts.fontFamily || 'Inter', ts.fontWeight || 400);

    const text = figma.createText();
    text.name = data.name || data.text.slice(0, 30);
    text.fontName = font;
    text.characters = data.text;
    text.fontSize = ts.fontSize || 14;
    text.x = x;
    text.y = y;

    // Line height
    if (ts.lineHeight && ts.lineHeight > 0) {
      text.lineHeight = { value: ts.lineHeight, unit: 'PIXELS' };
    }

    // Letter spacing
    if (ts.letterSpacing && ts.letterSpacing !== 0) {
      text.letterSpacing = { value: ts.letterSpacing, unit: 'PIXELS' };
    }

    // Text color
    const color = parseColor(ts.color);
    if (color) {
      text.fills = [{ type: 'SOLID', color: color.rgb, opacity: color.a }];
    }

    // Text alignment
    const alignMap = { left: 'LEFT', center: 'CENTER', right: 'RIGHT', justify: 'JUSTIFIED' };
    if (ts.textAlign && alignMap[ts.textAlign]) {
      text.textAlignHorizontal = alignMap[ts.textAlign];
    }

    // Constrain text width to match HTML layout, auto-height only
    // Add 5% buffer to account for font metric differences (Lato→Inter)
    if (w > 1) {
      var textW = Math.ceil(w * 1.05);
      text.resize(textW, Math.max(h, 1));
      text.textAutoResize = 'HEIGHT';
    } else {
      text.textAutoResize = 'WIDTH_AND_HEIGHT';
    }

    // Background for text containers (rare but possible)
    if (data.styles) {
      const bg = parseColor(data.styles.backgroundColor);
      if (bg && bg.a > 0) {
        // Wrap in a frame to show background
        const wrapper = figma.createFrame();
        wrapper.name = data.name || 'text-container';
        wrapper.x = x;
        wrapper.y = y;
        wrapper.resize(w, h);
        wrapper.fills = [{ type: 'SOLID', color: bg.rgb, opacity: bg.a }];

        text.x = 0;
        text.y = 0;
        wrapper.appendChild(text);
        parent.appendChild(wrapper);
        return wrapper;
      }
    }

    parent.appendChild(text);
    return text;
  }

  // ── FRAME (container) ──
  const frame = figma.createFrame();
  frame.name = data.name || 'frame';
  frame.x = x;
  frame.y = y;
  frame.resize(w, h);

  const styles = data.styles || {};

  // Background fill
  const bg = parseColor(styles.backgroundColor);
  if (bg && bg.a > 0) {
    frame.fills = [{ type: 'SOLID', color: bg.rgb, opacity: bg.a }];
  } else if (styles.backgroundImage && styles.backgroundImage !== 'none') {
    if (styles.backgroundImage.includes('linear-gradient')) {
      const gradient = parseLinearGradient(styles.backgroundImage);
      if (gradient) {
        frame.fills = [gradient];
      } else {
        frame.fills = [];
      }
    } else {
      frame.fills = [];
    }
  } else {
    frame.fills = [];
  }

  // Border radius
  const tl = styles.borderTopLeftRadius || 0;
  const tr = styles.borderTopRightRadius || 0;
  const br = styles.borderBottomRightRadius || 0;
  const bl = styles.borderBottomLeftRadius || 0;
  if (tl === tr && tr === br && br === bl) {
    frame.cornerRadius = tl;
  } else {
    frame.topLeftRadius = tl;
    frame.topRightRadius = tr;
    frame.bottomRightRadius = br;
    frame.bottomLeftRadius = bl;
  }

  // Borders — pick color from the side that has the largest width
  var borderSides = [
    { w: styles.borderBottomWidth || 0, c: styles.borderBottomColor },
    { w: styles.borderTopWidth || 0, c: styles.borderTopColor },
    { w: styles.borderLeftWidth || 0, c: styles.borderLeftColor },
    { w: styles.borderRightWidth || 0, c: styles.borderRightColor }
  ];
  // Sort by width descending — prefer bottom/top borders (more common in UI)
  borderSides.sort(function(a, b) { return b.w - a.w; });
  var bw = borderSides[0].w;
  if (bw > 0) {
    var bc = parseColor(borderSides[0].c);
    if (bc && bc.a > 0) {
      frame.strokes = [{ type: 'SOLID', color: bc.rgb, opacity: bc.a }];
      frame.strokeWeight = bw;
      frame.strokeAlign = 'INSIDE';
    }
  }

  // Box shadows
  const effects = parseBoxShadows(styles.boxShadow);
  if (effects.length > 0) {
    frame.effects = effects;
  }

  // Opacity
  if (typeof styles.opacity === 'number' && styles.opacity < 1) {
    frame.opacity = styles.opacity;
  }

  // Clip content
  const clipValues = ['hidden', 'auto', 'scroll'];
  frame.clipsContent = clipValues.includes(styles.overflow);

  // Create children (collect them so we can wire Auto Layout afterwards)
  const kids = [];
  for (const child of data.children || []) {
    const kn = await createNode(child, frame);
    if (kn) kids.push({ node: kn, data: child });
  }

  applyAutoLayout(frame, data.layout, w, h, kids);

  parent.appendChild(frame);
  return frame;
}

// ────────────────────────────────────────────────────────
// Main Import Handler
// ────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'import') {
    try {
      createdCount = 0;
      figma.ui.postMessage({ type: 'status', text: 'Creating layers...' });

      const data = msg.data;
      const page = figma.currentPage;

      // ── Multi-screen flow: lay screens left→right + draw connectors ──
      if (data.type === 'FLOW') {
        const byName = {};
        const placed = [];
        let cx = Math.round(figma.viewport.center.x - 700);
        const cy = Math.round(figma.viewport.center.y - 320);
        const GAP = 220;
        for (const s of data.screens || []) {
          const f = await createNode(s.tree, page);
          if (!f) continue;
          f.name = s.name || f.name;
          f.x = cx;
          f.y = cy;
          byName[s.name] = f;
          placed.push(f);
          cx += Math.round(f.width) + GAP;
        }
        for (const e of data.edges || []) {
          const a = byName[e.from], b = byName[e.to];
          if (a && b) drawArrow(page, a, b, e.label);
        }
        if (placed.length) figma.viewport.scrollAndZoomIntoView(placed);
        figma.ui.postMessage({
          type: 'status',
          text: `Done! ${placed.length} screens, ${createdCount} layers.`
        });
        figma.notify(`Imported flow: ${placed.length} screens, ${createdCount} layers.`);
        return;
      }

      // Create root frame
      const rootFrame = figma.createFrame();
      rootFrame.name = data.name || 'Imported HTML';
      rootFrame.resize(
        Math.max(1, Math.round(data.width)),
        Math.max(1, Math.round(data.height))
      );
      rootFrame.x = Math.round(figma.viewport.center.x - data.width / 2);
      rootFrame.y = Math.round(figma.viewport.center.y - data.height / 2);

      // Root background
      const bg = parseColor(data.styles && data.styles.backgroundColor);
      if (bg && bg.a > 0) {
        rootFrame.fills = [{ type: 'SOLID', color: bg.rgb, opacity: bg.a }];
      } else {
        rootFrame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      }
      rootFrame.clipsContent = true;

      // Create all children
      for (const child of data.children || []) {
        await createNode(child, rootFrame);
      }

      page.appendChild(rootFrame);
      figma.viewport.scrollAndZoomIntoView([rootFrame]);

      figma.ui.postMessage({
        type: 'status',
        text: `Done! Created ${createdCount} layers.`
      });
      figma.notify(`Imported ${createdCount} layers successfully!`);

    } catch (err) {
      figma.ui.postMessage({
        type: 'status',
        text: `Error: ${err.message}`
      });
      figma.notify(`Import failed: ${err.message}`, { error: true });
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
