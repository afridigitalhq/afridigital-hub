#!/data/data/com.termux/files/usr/bin/bash

echo "☢️ AFRINUCCHAIN • PRODUCT SECOND TRUTH SOURCE AUDIT START"

echo ""
echo "===== HARDCODED PRODUCT ARRAYS CHECK ====="

grep -R "const products\|const tierOne\|const tierTwo\|AfriCommerce\|AfriTracker\|AfriWork\|AfriBoost" \
src/pages/landing/products \
--exclude-dir=node_modules \
--exclude="*.snapshot" \
|| true


echo ""
echo "===== REGISTRY CONSUMPTION CHECK ====="

grep -R "ProductTierRenderer" \
src/pages/landing/products \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== SHOWCASE PRESERVATION CHECK ====="

grep -R "AfriCCTV\|CAM-01\|CAM-02\|CAM-03\|CAM-04\|mock" \
src/pages/landing/products/showcase/AfriCCTV \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== FLAGSHIP CHECK ====="

grep -R "flagship" \
src/ecosystem/landing/catalog/LandingProductCatalog.js \
|| true


echo ""
echo "☢️ AFRINUCCHAIN • PRODUCT SECOND TRUTH SOURCE AUDIT COMPLETE"

