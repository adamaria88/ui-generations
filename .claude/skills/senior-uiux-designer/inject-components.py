#!/usr/bin/env python3
"""
SUXC Component Injector
Replaces <!--SUXC:component-name--> tags with content from paper-designer/components/.
Also auto-syncs already-baked overlay blocks whenever overlay.html changes.

Usage:
  python3 inject-components.py <html-file> [<html-file> ...]

Example:
  python3 inject-components.py _output/my-feature/01-flow.html
  python3 inject-components.py _output/my-feature/01-flow.html _output/my-feature/02-ui.html
"""
import sys, re, pathlib

SCRIPT_DIR   = pathlib.Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent   # ui-generations/
COMP_DIR     = PROJECT_ROOT / 'paper-designer' / 'components'

PATTERN       = re.compile(r'<!--SUXC:([a-zA-Z0-9_-]+)-->')
OVERLAY_MARKER = 'KOMEN OVERLAY'

def replace_baked_overlay(html: str, overlay_src: str) -> tuple:
    """Find and replace an already-baked overlay block. Returns (new_html, changed)."""
    idx = html.find(OVERLAY_MARKER)
    if idx < 0:
        return html, False
    start = html.rfind('<!--', 0, idx)
    end_tag = '</script>'
    end_pos = html.find(end_tag, idx)
    if start < 0 or end_pos < 0:
        return html, False
    end = end_pos + len(end_tag)
    return html[:start] + overlay_src + html[end:], True

def inject(html_path: pathlib.Path) -> None:
    html = html_path.read_text(encoding='utf-8')
    tags_found = PATTERN.findall(html)

    if tags_found:
        # Normal injection — file still has SUXC placeholder tags
        def replace(m):
            name = m.group(1)
            comp = COMP_DIR / f'{name}.html'
            if not comp.exists():
                print(f'  [WARN] component not found: {comp}')
                return m.group(0)
            return comp.read_text(encoding='utf-8')

        result = PATTERN.sub(replace, html)
        html_path.write_text(result, encoding='utf-8')
        print(f'  [ok] {html_path.name} — injected: {", ".join(tags_found)}')
    else:
        # No SUXC tags → check if overlay is baked in and needs syncing
        overlay_comp = COMP_DIR / 'overlay.html'
        if overlay_comp.exists():
            overlay_src = overlay_comp.read_text(encoding='utf-8')
            result, changed = replace_baked_overlay(html, overlay_src)
            if changed:
                html_path.write_text(result, encoding='utf-8')
                print(f'  [sync] {html_path.name} — overlay synced')
            else:
                print(f'  [skip] {html_path.name} — no SUXC tags, no baked overlay found')
        else:
            print(f'  [skip] no SUXC tags in {html_path.name}')

if __name__ == '__main__':
    files = [pathlib.Path(f) for f in sys.argv[1:]]
    if not files:
        print(__doc__)
        sys.exit(1)
    for f in files:
        if not f.exists():
            print(f'  [ERR] file not found: {f}')
            sys.exit(1)
        inject(f)
    print('Done.')
