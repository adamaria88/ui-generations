#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────
# PostToolUse hook (Write|Edit) — AUTO-RUN verifier statis tiap edit _output/*.html.
# Bikin gerbang reuse/behavior MUSTAHIL di-skip diam-diam (harness yg jalanin,
# bukan ingatan model). LULUS → diam. GAGAL → exit 2 + daftar masalah ke model.
# Lock 2026-06-18 (companion: figma-mirror-method.md S18).
# ──────────────────────────────────────────────────────────────────────────
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ambil file_path dari JSON hook (stdin)
file="$(cat | python3 -c '
import json, sys
try:
    d = json.load(sys.stdin)
    print((d.get("tool_input") or {}).get("file_path", ""))
except Exception:
    print("")
' 2>/dev/null)"

# Cuma jaga file prototype HTML
case "$file" in
  */_output/*.html) ;;
  *) exit 0 ;;
esac
[ -f "$file" ] || exit 0

problems=""
if ! python3 "$DIR/component-coverage-audit.py" "$file" >/tmp/_mcov.out 2>&1; then
  problems+="$(grep -E '❌|BLOK' /tmp/_mcov.out)
"
fi
if [ -f "$DIR/behavior-audit.py" ] && ! python3 "$DIR/behavior-audit.py" "$file" >/tmp/_mbeh.out 2>&1; then
  problems+="$(grep -E 'XX |TELANJANG' /tmp/_mbeh.out)
"
fi

if [ -n "$problems" ]; then
  {
    echo "⛔ GERBANG STATIS GAGAL di $(basename "$file") — beresin DULU sebelum bilang 'jadi':"
    echo "$problems"
    echo "(reuse: port komponen Aurora ls aurora/projects/ui/<comp> → kelas au-* · behavior: wire/static-with-reason)"
  } >&2
  exit 2
fi
exit 0
