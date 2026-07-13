import CommerceHero from "../products/africommerce/CommerceHero";
import CommerceStats from "../products/africommerce/CommerceStats";
import CommerceEcosystem from "../products/africommerce/CommerceEcosystem";
import CommerceCategories from "../products/africommerce/CommerceCategories";
import CommerceTrustPanel from "../products/africommerce/CommerceTrustPanel";
import CommerceSecurityBanner from "../products/africommerce/CommerceSecurityBanner";
import CommerceJourney from "../products/africommerce/CommerceJourney";
import CommerceActivity from "../products/africommerce/CommerceActivity";
import CommerceCTA from "../products/africommerce/CommerceCTA";

export default function AfriCommercePreview({ onExplore }) {

  return (
    <section className="glass-card product-showcase commerce-showcase premium-showcase">

      <CommerceHero />

      <CommerceStats />

      <CommerceEcosystem />

      <CommerceCategories />

      <CommerceTrustPanel />

      <CommerceSecurityBanner />

      <CommerceJourney />

      <CommerceActivity />

      <CommerceCTA onExplore={onExplore} />

    </section>
  );
}
