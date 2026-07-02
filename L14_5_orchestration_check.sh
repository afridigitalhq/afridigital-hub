#!/bin/bash

echo "🧪 L-14.5 AFRIAI ORCHESTRATION LAYER CHECK"

scan() {
  if grep -r "$1" src/ >/dev/null 2>&1; then
    echo "🟢 $2"
  else
    echo "🔴 $2"
  fi
}

scan "AfriAI" "AfriAI command dock presence"
scan "ControlRoom" "Control Room runtime link"
scan "bootstrap" "system bootstrap integrity"
scan "render" "Render deployment linkage"

if test -f package.json && grep -q "start" package.json; then
  echo "🟢 package.json start script exists"
else
  echo "🔴 package.json start script missing"
fi

if test -d src/control-room; then
  echo "🟢 control-room module present"
else
  echo "🔴 control-room module missing"
fi

echo "🚀 L-14.5 ORCHESTRATION CHECK COMPLETE"
