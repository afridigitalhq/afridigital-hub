import SellerShell from "../shell/SellerShell";
import SellerDashboard from "../seller/SellerDashboard";
import ProductManagement from "../seller/ProductManagement";
import InventoryManagement from "../seller/InventoryManagement";
import OrderManagement from "../seller/OrderManagement";
import Analytics from "../seller/Analytics";

export default function SellerApp(){

  return (
    <SellerShell>

      <SellerDashboard />
      <ProductManagement />
      <InventoryManagement />
      <OrderManagement />
      <Analytics />

    </SellerShell>
  );
}
