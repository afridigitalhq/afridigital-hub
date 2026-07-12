import AdminShell from "../shell/AdminShell";
import AdminDashboard from "../admin/AdminDashboard";
import MarketplaceOperations from "../admin/MarketplaceOperations";
import SellerManagement from "../admin/SellerManagement";
import ProductModeration from "../admin/ProductModeration";
import OrderOperations from "../admin/OrderOperations";
import CommerceAnalytics from "../admin/CommerceAnalytics";
import TrustMonitoring from "../admin/TrustMonitoring";

export default function AdminApp(){

  return (
    <AdminShell>

      <AdminDashboard />
      <MarketplaceOperations />
      <SellerManagement />
      <ProductModeration />
      <OrderOperations />
      <CommerceAnalytics />
      <TrustMonitoring />

    </AdminShell>
  );
}
