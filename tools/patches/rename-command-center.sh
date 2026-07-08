#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "🧠 AFRIDIGITAL COMMAND CENTER BRAND PATCH"

sed -i 's#/adminhomepage#/admin#g' src/ui/GlobalNav.jsx src/auth/AuthPage.jsx
sed -i 's/🛡️ AFRIDIGITAL SOC COMMAND CENTER/🧠 AFRIDIGITAL COMMAND CENTER/g' src/pages/admin/AdminHome.jsx
sed -i 's/🧠 Control Center/🧠 AfriDigital Command Center/g' src/os/kernel/ui/DynamicSidebar.jsx

echo "✅ BRAND PATCH COMPLETE"
