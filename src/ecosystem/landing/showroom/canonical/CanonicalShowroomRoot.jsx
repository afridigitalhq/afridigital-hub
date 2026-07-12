import LandingEcosystemRegistry from "../../registry/LandingEcosystemRegistry";

import FutureProductSection from "../../components/FutureProductSection";

export default function CanonicalShowroomRoot(){
  const products = LandingEcosystemRegistry;

  return (
    <section className="canonical-showroom">
      <FutureProductSection products={products.tier1} />
      <FutureProductSection products={products.tier2} />
    </section>
  );
}
