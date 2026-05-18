#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 AFRIDIGITAL V10.6 ULTRA BOOT STARTING..."

cd "$(dirname "$0")"

# kill existing node safely
pkill -f node || true

# safety cleanup
rm -rf node_modules/.cache || true

# env check preview
echo "🔍 Loading environment..."

# start server with crash protection loop
while true
do
  node server.js
  echo "⚠️ SERVER CRASHED - RESTARTING IN 2s..."
  sleep 2
done
