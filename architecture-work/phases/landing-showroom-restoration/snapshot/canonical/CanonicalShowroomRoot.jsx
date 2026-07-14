import LandingEcosystemRegistry from "../../registry/LandingEcosystemRegistry";

import FutureProductSection from "../../components/FutureProductSection";

export default function CanonicalShowroomRoot(){
  const showroom = LandingEcosystemRegistry.products;

  return (
    <section className="canonical-showroom">
      <FutureProductSection products={showroom.tier1} />
      <FutureProductSection products={showroom.tier2} />
    </section>
  );
}
