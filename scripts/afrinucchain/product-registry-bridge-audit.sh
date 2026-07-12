#!/data/data/com.termux/files/usr/bin/bash

echo "☢️ AFRINUCCHAIN • PRODUCT REGISTRY BRIDGE AUDIT START"

echo ""
echo "===== OLD REGISTRY IMPORTS ====="

grep -R "ProductRegistry\|ProductCatalog\|ProductGateway\|ProductRuntime" \
src/pages \
src/products \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== NEW TRUTH SOURCE ====="

grep -R "LandingEcosystemRegistry\|LandingProductCatalog\|ProductTierRenderer" \
src/ecosystem \
src/pages/landing \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== SHOWCASE PROTECTION ====="

grep -R "AfriCCTV\|AfriCommerce\|AfriTracker\|AfriWork\|AfriBoost" \
src/pages/landing/products/showcase \
--exclude-dir=node_modules \
|| true


echo ""
echo "☢️ AFRINUCCHAIN • PRODUCT REGISTRY BRIDGE AUDIT COMPLETE"
