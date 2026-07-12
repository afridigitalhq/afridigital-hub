import CommerceHero from "./commerce/CommerceHero";
import CommerceStats from "./commerce/CommerceStats";
import CommerceEcosystem from "./commerce/CommerceEcosystem";
import CommerceCategories from "./commerce/CommerceCategories";
import CommerceTrustPanel from "./commerce/CommerceTrustPanel";
import CommerceSecurityBanner from "./commerce/CommerceSecurityBanner";
import CommerceJourney from "./commerce/CommerceJourney";
import CommerceActivity from "./commerce/CommerceActivity";
import CommerceCTA from "./commerce/CommerceCTA";

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
