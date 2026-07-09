import BoostHero from "./afriboost/BoostHero";
import BoostPreview from "./afriboost/BoostPreview";
import BoostFeatures from "./afriboost/BoostFeatures";
import BoostCTA from "./afriboost/BoostCTA";

export default function AfriBoostPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase">
      <BoostHero />
      <BoostPreview />
      <BoostFeatures />
      <BoostCTA onExplore={onExplore} />
    </section>
  );
}
