#!/data/data/com.termux/files/usr/bin/bash

echo "☢️ AFRINUCCHAIN • PRODUCT REGISTRY MIGRATION AUDIT START"

echo ""
echo "===== OLD PRODUCT REGISTRY REFERENCES ====="

grep -R "ProductCatalog\|ProductRegistry\|ProductShowcaseRegistry\|ProductShowcaseResolver" \
src \
--exclude-dir=node_modules \
--exclude-dir=.git \
|| true


echo ""
echo "===== NEW ECOSYSTEM REGISTRY REFERENCES ====="

grep -R "LandingEcosystemRegistry\|LandingProductCatalog\|ProductTierRenderer\|ServiceLayerRenderer" \
src \
--exclude-dir=node_modules \
--exclude-dir=.git \
|| true


echo ""
echo "===== AFRICCTV SHOWCASE PROTECTION CHECK ====="

grep -R "AfriCCTV\|africctv\|CAM-01\|CAM-02\|CAM-03\|CAM-04\|mock" \
src/pages/landing/products/showcase/AfriCCTV \
--exclude-dir=node_modules \
|| true


echo ""
echo "===== PRODUCT VS SERVICE NAME CHECK ====="

grep -R "AfriAI\|AfriBank\|AfriVision\|AfriAds\|AfriTrust" \
src/products \
src/pages/landing \
--exclude-dir=node_modules \
|| true


echo ""
echo "☢️ AFRINUCCHAIN • PRODUCT REGISTRY MIGRATION AUDIT COMPLETE"
