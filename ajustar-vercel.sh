#!/bin/bash
# ============================================================
# Script de ajuste para Vercel — SITE ALCATEIA
# Root Directory na Vercel: src/pages
# Ajusta caminhos para funcionar com src/pages como raiz
# ============================================================

set -e

PAGES_DIR="$(pwd)/src/pages"

if [ ! -d "$PAGES_DIR" ]; then
  echo "❌ Pasta src/pages/ não encontrada."
  exit 1
fi

replace_in_file() {
  local file="$1"
  local search="$2"
  local replace="$3"
  if sed --version 2>/dev/null | grep -q GNU; then
    sed -i "s|$search|$replace|g" "$file"
  else
    sed -i '' "s|$search|$replace|g" "$file"
  fi
}

echo "⚡ Ajustando caminhos para Vercel (root: src/pages)..."
echo ""

for html in "$PAGES_DIR"/*.html; do
  [ -f "$html" ] || continue
  name=$(basename "$html")
  echo "📄 $name"

  # CSS: ../styles/ → /styles/
  replace_in_file "$html" 'href="../styles/' 'href="/styles/'

  # JS: ../scripts/ → /scripts/
  replace_in_file "$html" 'src="../scripts/' 'src="/scripts/'

  # Imagens: ../assets/images/ → /assets/images/
  replace_in_file "$html" 'src="../assets/images/' 'src="/assets/images/'

  echo "   ✅ ok"
done

echo ""
echo "✅ Pronto! Agora crie o vercel.json na raiz do projeto:"
echo ""
cat << 'EOF'
{
  "rewrites": [
    { "source": "/styles/(.*)", "destination": "/src/styles/$1" },
    { "source": "/scripts/(.*)", "destination": "/src/scripts/$1" },
    { "source": "/assets/(.*)", "destination": "/src/assets/$1" }
  ]
}
EOF
