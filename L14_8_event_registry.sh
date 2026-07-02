#!/bin/bash

echo "🧪 L-14.8 PERSISTENT EVENT REGISTRY"

mkdir -p src/event-bus

EVENT_FILE="src/event-bus/event-log.json"

# initialize file if missing
test -f "$EVENT_FILE" || echo "[]" > "$EVENT_FILE"

# function to emit persistent event
emit() {
  event="{\"event\":\"$1\",\"data\":\"$2\",\"ts\":$(date +%s)}"
  tmp=$(mktemp)
  jq ". += [$event]" "$EVENT_FILE" > "$tmp" && mv "$tmp" "$EVENT_FILE"
  echo "📡 STORED EVENT: $1"
}

# emit system events
emit "AFRIAI_INIT" "system boot sequence started"
emit "CONTROL_ROOM_SYNC" "modules linked"
emit "BOOTSTRAP_OK" "runtime stable"
emit "RENDER_LINK" "deployment channel active"

# validation
if test -f "$EVENT_FILE"; then
  echo "🟢 event registry active"
else
  echo "🔴 event registry missing"
fi

echo "🚀 L-14.8 EVENT REGISTRY ACTIVE"
