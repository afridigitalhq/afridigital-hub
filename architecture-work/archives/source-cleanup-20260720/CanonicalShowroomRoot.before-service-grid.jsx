import LandingEcosystemRegistry from "../../registry/LandingEcosystemRegistry";
import ProductPreviewResolver from "../resolver/ProductPreviewResolver";
import ShowroomComposition from "../composition/ShowroomComposition";

export default function CanonicalShowroomRoot(){

  const showroom = LandingEcosystemRegistry.products;

  return (
    <ShowroomComposition>

      <section className="canonical-showroom">

        <section className="tier-showcase tier-one">
          {showroom.tier1.map(product => (
            <ProductPreviewResolver
              key={product.id}
              product={product}
            />
          ))}
        </section>

        <section className="tier-showcase tier-two">
          {showroom.tier2.map(product => (
            <ProductPreviewResolver
              key={product.id}
              product={product}
            />
          ))}
        </section>

      </section>

    </ShowroomComposition>
  );
}
