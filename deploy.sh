#!/usr/bin/env bash
# Publica as páginas do site no servidor: backup → envia como .novo → confere MD5 → mv atômico.
# Uso: HOST=user@<servidor> DEST=<pasta do site no servidor> ./deploy.sh
# (valores reais na documentação interna — não neste repositório público)
set -euo pipefail
cd "$(dirname "$0")"

HOST="${HOST:?defina HOST=user@<servidor>}"
DEST="${DEST:?defina DEST=<pasta do site no servidor>}"
ARQUIVOS=(index.html desenvolvimento.html)
CARIMBO=$(date +%Y%m%d-%H%M%S)

echo "== backup no servidor"
ssh "$HOST" "mkdir -p \$HOME/backups-site/$CARIMBO && cp -p $DEST/*.html \$HOME/backups-site/$CARIMBO/ && ls \$HOME/backups-site/$CARIMBO"

echo "== envio como .novo"
for f in "${ARQUIVOS[@]}"; do scp "$f" "$HOST:$DEST/$f.novo"; done

echo "== conferência do MD5"
for f in "${ARQUIVOS[@]}"; do
  local_md5=$(md5sum "$f" | cut -d' ' -f1)
  remoto_md5=$(ssh "$HOST" "md5sum $DEST/$f.novo" | cut -d' ' -f1)
  echo "$f local $local_md5 remoto $remoto_md5"
  if [ "$local_md5" != "$remoto_md5" ]; then
    echo "MD5 NÃO BATE em $f — abortado, nada foi trocado"; exit 1
  fi
done

echo "== troca atômica"
for f in "${ARQUIVOS[@]}"; do ssh "$HOST" "mv $DEST/$f.novo $DEST/$f"; done
echo "✓ publicado"
echo "rollback: ssh $HOST 'cp -p \$HOME/backups-site/$CARIMBO/*.html $DEST/'  (desenvolvimento.html novo: apagar à mão se não existia)"
