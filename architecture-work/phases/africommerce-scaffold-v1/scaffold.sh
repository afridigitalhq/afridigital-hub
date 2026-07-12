#!/data/data/com.termux/files/usr/bin/bash
set -e

BASE=src/features/africommerce

mkdir -p \
$BASE/layout \
$BASE/components \
$BASE/hooks \
$BASE/api \
$BASE/services \
$BASE/styles \
$BASE/pages/dashboard \
$BASE/pages/afrishop \
$BASE/pages/afrimarket \
$BASE/pages/shopping \
$BASE/pages/orders \
$BASE/pages/messages \
$BASE/pages/wallet \
$BASE/pages/disputes \
$BASE/pages/reviews \
$BASE/pages/seller-center \
$BASE/pages/settings \
$BASE/pages/integrations \
src/pages/admin/modules/AfriCommerce/dashboard \
src/pages/admin/modules/AfriCommerce/afrishop-manager \
src/pages/admin/modules/AfriCommerce/afrimarket-manager \
src/pages/admin/modules/AfriCommerce/orders \
src/pages/admin/modules/AfriCommerce/wallet \
src/pages/admin/modules/AfriCommerce/escrow \
src/pages/admin/modules/AfriCommerce/disputes \
src/pages/admin/modules/AfriCommerce/users \
src/pages/admin/modules/AfriCommerce/reports \
src/pages/admin/modules/AfriCommerce/notifications \
src/pages/admin/modules/AfriCommerce/configuration \
src/pages/admin/modules/AfriCommerce/system

echo "✅ AfriCommerce scaffold directories created."
