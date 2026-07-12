import AfriShopShowcase from "./showcase/AfriShopShowcase";
import AfriMarketShowcase from "./showcase/AfriMarketShowcase";
import CommerceVisualCatalog from "./catalog/CommerceVisualCatalog";

export default function AfriCommerceLanding(){

  return (
    <section className="africommerce-landing">

      <h1>
        AfriCommerce
      </h1>

      <p>
        Shop, sell and grow across the AfriDigital ecosystem.
      </p>

      <AfriShopShowcase />

      <AfriMarketShowcase />

      <CommerceVisualCatalog />

    </section>
  );
}
