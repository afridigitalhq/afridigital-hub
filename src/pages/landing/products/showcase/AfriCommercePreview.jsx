import CommerceHero from "./commerce/CommerceHero";
import CommerceStats from "./commerce/CommerceStats";
import CommerceActivity from "./commerce/CommerceActivity";
import CommerceCTA from "./commerce/CommerceCTA";

export default function AfriCommercePreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase commerce-showcase premium-showcase">
      <CommerceHero />
      <CommerceStats />
      <CommerceActivity />
      <CommerceCTA onExplore={onExplore} />
    </section>
  );
}
