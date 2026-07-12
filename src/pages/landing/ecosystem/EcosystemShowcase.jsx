import useLandingProducts from "../../../ecosystem/landing/hooks/useLandingProducts";
import useLandingServices from "../../../ecosystem/landing/hooks/useLandingServices";

import ProductTierSection from "../../../ecosystem/landing/components/ProductTierSection";
import ServiceLayerSection from "../../../ecosystem/landing/components/ServiceLayerSection";
import FutureProductSection from "../../../ecosystem/landing/components/FutureProductSection";

export default function EcosystemShowcase(){

  const products = useLandingProducts();
  const services = useLandingServices();

  return (
    <section className="ecosystem-showcase">

      <ProductTierSection
        title="Tier 1 Products"
        products={products.tier1}
      />

      <ProductTierSection
        title="Tier 2 Products"
        products={products.tier2}
      />

      <FutureProductSection
        products={products.future}
      />

      <ServiceLayerSection
        services={services}
      />

    </section>
  );

}
