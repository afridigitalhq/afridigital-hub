#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "🧭 WARROOM ROUTER SOURCE PATCH"

python3 - <<'PY'
from pathlib import Path

p = Path("src/os/kernel/router/ViewRouter.jsx")
s = p.read_text()

if 'import SOCWarRoom from "../../soc/SOCWarRoom";' not in s:
    s = s.replace(
        'import React from "react";',
        'import React from "react";\nimport SOCWarRoom from "../../soc/SOCWarRoom";'
    )

s = s.replace(
    'return <WarRoomShell dagData={dagData} />;',
    'return <SOCWarRoom />;'
)

p.write_text(s)
PY

echo "✅ WARROOM ROUTER PATCH COMPLETE"
