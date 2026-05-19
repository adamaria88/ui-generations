#!/usr/bin/env python3
"""
SUXC Component Injector
Replaces <!--SUXC:component-name--> tags with content from senior-uiux/components/.

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

PATTERN = re.compile(r'<!--SUXC:([a-zA-Z0-9_-]+)-->')

def inject(html_path: pathlib.Path) -> None:
    html = html_path.read_text(encoding='utf-8')
    tags_found = PATTERN.findall(html)
    if not tags_found:
        print(f'  [skip] no SUXC tags in {html_path.name}')
        return

    def replace(m):
        name = m.group(1)
        comp = COMP_DIR / f'{name}.html'
        if not comp.exists():
            print(f'  [WARN] component not found: {comp}')
            return m.group(0)  # leave tag intact
        return comp.read_text(encoding='utf-8')

    result = PATTERN.sub(replace, html)
    html_path.write_text(result, encoding='utf-8')
    print(f'  [ok] {html_path.name} — injected: {", ".join(tags_found)}')

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
