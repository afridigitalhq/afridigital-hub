#!/bin/bash

echo "🚀 AFRIDIGITAL DEPLOY ENGINE v1 STARTED"

# =========================
# 🔒 RUN GUARD
# =========================
./render-guard.sh
if [ $? -ne 0 ]; then
  echo "⛔ DEPLOY STOPPED: Truth Lock failed"
  exit 1
fi

# =========================
# 📦 BUILD FRONTEND
# =========================
cd SaaS/afridigital-frontend
npm install
npm run build

if [ $? -ne 0 ]; then
  echo "⛔ DEPLOY STOPPED: Build failed"
  exit 1
fi

cd ~/AfriDigitalHub

# =========================
# 📁 SYNC BUILD OUTPUT
# =========================
cp -r SaaS/afridigital-frontend/dist/* SaaS/afridigital-backend/public/

# =========================
# 🧾 GIT OPERATIONS
# =========================
git add .

if git diff --cached --quiet; then
  echo "ℹ️ No changes to commit"
else
  git commit -m "deploy: afrideploy auto sync (frontend → backend)"
fi

git push origin master

# =========================
# 🔒 FINAL STATUS
# =========================
echo "✅ AFRIDIGITAL DEPLOY COMPLETE"
echo "🌐 Live Target: https://afridigital-hub.onrender.com"
