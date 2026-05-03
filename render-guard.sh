#!/bin/bash

echo "🔒 AFRIDIGITAL GUARD v3 ACTIVE"

# =========================
# 🧭 CONFIG
# =========================
ALLOWED_GITHUB="afridigitalhq/afridigital-hub"
ALLOWED_RENDER="afridigital-hub.onrender.com"
ALLOWED_BRANCH="master"

# =========================
# 📡 GIT CHECK
# =========================
REMOTE_URL=$(git config --get remote.origin.url)

echo "📡 Git Remote: $REMOTE_URL"

if [[ "$REMOTE_URL" != *"$ALLOWED_GITHUB"* ]]; then
  echo "⛔ BLOCKED: Wrong GitHub repository"
  echo "👉 Expected repo contains: $ALLOWED_GITHUB"
  exit 1
fi

# =========================
# 🌿 BRANCH CHECK
# =========================
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "🌿 Branch: $BRANCH"

if [ "$BRANCH" != "$ALLOWED_BRANCH" ]; then
  echo "⛔ BLOCKED: Wrong branch"
  echo "👉 Required: $ALLOWED_BRANCH"
  exit 1
fi

# =========================
# 📦 BUILD CHECK
# =========================
if [ ! -d "SaaS/afridigital-frontend/dist" ]; then
  echo "⛔ BLOCKED: Missing build output"
  exit 1
fi

# =========================
# 🔒 SUCCESS
# =========================
echo "✅ AFIRDIGITAL TRUTH LOCK: PASSED"
echo "🚀 Safe deploy target: https://$ALLOWED_RENDER"
