import BuyerApp from "./BuyerApp";
import SellerApp from "./SellerApp";
import AdminApp from "./AdminApp";

export default function AfriCommerceApp(){

  return (
    <section className="africommerce-app">

      <BuyerApp />
      <SellerApp />
      <AdminApp />

    </section>
  );
}
