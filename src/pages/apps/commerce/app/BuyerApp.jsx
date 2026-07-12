import BuyerShell from "../shell/BuyerShell";
import Marketplace from "../buyer/Marketplace";
import ProductDiscovery from "../buyer/ProductDiscovery";
import Cart from "../buyer/Cart";
import Checkout from "../buyer/Checkout";
import Orders from "../buyer/Orders";

export default function BuyerApp(){

  return (
    <BuyerShell>

      <Marketplace />
      <ProductDiscovery />
      <Cart />
      <Checkout />
      <Orders />

    </BuyerShell>
  );
}
