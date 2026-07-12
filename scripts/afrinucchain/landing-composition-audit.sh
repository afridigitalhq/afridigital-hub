#!/data/data/com.termux/files/usr/bin/bash

echo "☢️ AFRINUCCHAIN • LANDING COMPOSITION AUDIT START"

echo ""
echo "===== LANDING PAGE IMPORTS ====="

grep -n "import" src/pages/landing/LandingPage.jsx || true


echo ""
echo "===== CURRENT LANDING COMPONENT TREE ====="

grep -n "<[A-Z]" src/pages/landing/LandingPage.jsx || true


echo ""
echo "===== PRODUCT NAME REFERENCES ====="

grep -R "AfriCommerce\|AfriCCTV\|AfriTracker\|AfriWork\|AfriBoost\|AfriSports\|AfriMetaWorld\|AfriEducation\|AfriLove" \
src/pages/landing \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== SERVICE NAME REFERENCES ====="

grep -R "AfriAI\|AfriBank\|AfriAds\|AfriVision\|AfriTrust\|AfriComm\|AfriWhatsApp\|AfriEventBus" \
src/pages/landing \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== SNAPSHOT ====="

ls snapshots/landing


echo ""
echo "☢️ AFRINUCCHAIN • LANDING COMPOSITION AUDIT COMPLETE"

