import "../products/afriforex/afriforex.css";
import ForexHero from "../products/afriforex/ForexHero";
import ForexMarkets from "../products/afriforex/ForexMarkets";
import ForexRates from "../products/afriforex/ForexRates";
import ForexInsights from "../products/afriforex/ForexInsights";
import ForexTrustPanel from "../products/afriforex/ForexTrustPanel";
import ForexCTA from "../products/afriforex/ForexCTA";

export default function AfriForexPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase forex-showcase">
      <ForexHero />
      <ForexMarkets />
      <ForexRates />
      <ForexInsights />
      <ForexTrustPanel />
      <ForexCTA onExplore={onExplore} />
    </section>
  );
}
