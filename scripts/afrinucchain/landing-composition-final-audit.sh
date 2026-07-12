#!/data/data/com.termux/files/usr/bin/bash

echo "☢️ AFRINUCCHAIN • LANDING COMPOSITION FINAL AUDIT START"

echo ""
echo "===== LANDING PAGE CURRENT COMPOSITION ====="

grep -n "TierOneProducts\|TierTwoProducts\|EcosystemShowcase\|AfriAIDock\|LandingFooter" \
src/pages/landing/LandingPage.jsx \
|| true

echo ""
echo "===== ECOSYSTEM BRIDGE CHECK ====="

grep -R "LandingEcosystemBridge\|EcosystemShowcase" \
src/pages/landing \
--exclude-dir=node_modules \
|| true

echo ""
echo "===== PRODUCT RENDERER CHECK ====="

grep -R "ProductTierRenderer\|ServiceLayerRenderer" \
src/ecosystem/landing \
--exclude-dir=node_modules \
|| true

echo ""
echo "☢️ AFRINUCCHAIN • LANDING COMPOSITION AUDIT COMPLETE"

