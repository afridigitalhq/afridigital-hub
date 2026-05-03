#!/bin/bash

echo "🔒 AFRIDIGITAL PIPELINE LOCK v2"

# =========================
# 📦 PATHS
# =========================
FRONTEND_DIST="SaaS/afridigital-frontend/dist"
BACKEND_PUBLIC="SaaS/afridigital-backend/public"

# =========================
# 🔍 CHECK BUILD OUTPUT
# =========================
if [ ! -f "$FRONTEND_DIST/index.html" ]; then
  echo "⛔ BLOCKED: Missing frontend index.html"
  exit 1
fi

if [ ! -d "$FRONTEND_DIST/assets" ]; then
  echo "⛔ BLOCKED: Missing frontend assets folder (broken Vite build)"
  exit 1
fi

# =========================
# 🔍 CHECK BACKEND SYNC
# =========================
if [ ! -f "$BACKEND_PUBLIC/index.html" ]; then
  echo "⛔ BLOCKED: Backend missing index.html"
  exit 1
fi

if [ ! -d "$BACKEND_PUBLIC/assets" ]; then
  echo "⛔ BLOCKED: Backend missing assets folder (incomplete deploy)"
  exit 1
fi

# =========================
# 🔄 FINAL VALIDATION
# =========================
DIFF=$(diff -qr "$FRONTEND_DIST" "$BACKEND_PUBLIC")

if [ "$DIFF" != "" ]; then
  echo "⛔ BLOCKED: Frontend and backend are NOT identical"
  echo "$DIFF"
  exit 1
fi

echo "✅ AFRIDIGITAL PIPELINE LOCK: PASSED"
echo "🚀 Build + Sync integrity confirmed"
