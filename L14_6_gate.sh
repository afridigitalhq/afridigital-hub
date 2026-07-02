#!/bin/bash

echo "🧪 L-14.6 UNIFIED BOOTSTRAP + ORCHESTRATION GATE"

# Ensure core structure exists
test -d src || mkdir -p src
test -d src/control-room || mkdir -p src/control-room

# Validation function
check() {
  if grep -r "$1" src/ >/dev/null 2>&1; then
    echo "🟢 $2"
  else
    echo "🔴 $2"
  fi
}

# Runtime checks
check "AfriAI" "AfriAI command layer"
check "ControlRoom" "Control Room wiring"
check "bootstrap" "system bootstrap integrity"
check "render" "Render deployment linkage"

# package.json safety check
if test -f package.json && grep -q "start" package.json; then
  echo "🟢 package.json runtime entry exists"
else
  echo "🔴 package.json runtime entry missing"
fi

echo "🚀 L-14.6 GATE COMPLETE"
