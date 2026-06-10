#!/usr/bin/env bash
#
# publish-public.sh — kirim hasil generate UI ke ROG, balikin link publik.
#
# Cara pakai:
#   ./scripts/publish-public.sh <path di _output>
#
# Contoh:
#   ./scripts/publish-public.sh invoice-pembelian/02-ui.html   # 1 file
#   ./scripts/publish-public.sh invoice-pembelian              # 1 folder
#
# Mekanisme: tar stream lewat SSH→WSL2 ke folder static dashboard ROG
# (route /ui/), yang udah ke-expose publik via Tailscale Funnel.
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)/_output"
REMOTE_ROOT="/home/adamm/claude-telegram-bot/public/ui-output"
ROG_KEY="$HOME/.ssh/rog_ally_claude"
ROG_HOST="adamm@100.104.24.119"
BASE_URL="https://adam-1.tailc9cc10.ts.net/ui"

if [ $# -lt 1 ]; then
  echo "Usage: ./scripts/publish-public.sh <path-di-_output>"
  echo "Contoh: ./scripts/publish-public.sh invoice-pembelian/02-ui.html"
  echo "        ./scripts/publish-public.sh invoice-pembelian"
  exit 1
fi

ARG="$1"

# Resolve ke absolute path (terima path apa adanya atau relatif ke _output)
if [ -e "$ARG" ]; then
  ABS="$(cd "$(dirname "$ARG")" && pwd)/$(basename "$ARG")"
elif [ -e "$OUTPUT_ROOT/$ARG" ]; then
  ABS="$OUTPUT_ROOT/$ARG"
else
  echo "❌ Nggak ketemu: $ARG"
  exit 1
fi

# Wajib di dalam _output/
case "$ABS" in
  "$OUTPUT_ROOT"/*) ;;
  *) echo "❌ Path harus di dalam _output/ — dapet: $ABS"; exit 1 ;;
esac

REL="${ABS#"$OUTPUT_ROOT"/}"

echo "📤 Publishing: $REL"
tar -czf - -C "$OUTPUT_ROOT" "$REL" \
  | ssh -i "$ROG_KEY" -p 22 -o BatchMode=yes -o ConnectTimeout=25 "$ROG_HOST" \
      "wsl bash -lc \"mkdir -p $REMOTE_ROOT && tar -xzf - -C $REMOTE_ROOT\"" 2>/dev/null

echo ""
if [ -d "$ABS" ]; then
  echo "✅ Live (folder):"
  echo "   $BASE_URL/$REL/"
  find "$ABS" -maxdepth 2 -name "*.html" 2>/dev/null | sort | while read -r f; do
    frel="${f#"$OUTPUT_ROOT"/}"
    echo "   $BASE_URL/$frel"
  done
else
  echo "✅ Live:"
  echo "   $BASE_URL/$REL"
fi
