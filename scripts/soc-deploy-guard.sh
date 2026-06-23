#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 SOC PRODUCTION DEPLOYMENT CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━"

echo "🧠 Checking runtime..."
node --check src/soc-os/runtime/SOCUnifiedRuntime.js || exit 1

echo "🧩 Checking entry..."
node --check src/soc-os/entry/index.js || exit 1

echo "🎬 Checking cinematic layer..."
ls src/soc-os/cinematic >/dev/null || exit 1

echo "⚡ Checking performance layer..."
ls src/soc-os/performance >/dev/null || exit 1

echo "📦 Checking build scripts..."
ls scripts >/dev/null || exit 1

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━"
echo "🟢 SOC DEPLOYMENT READY"
echo "━━━━━━━━━━━━━━━━━━━━━━"
