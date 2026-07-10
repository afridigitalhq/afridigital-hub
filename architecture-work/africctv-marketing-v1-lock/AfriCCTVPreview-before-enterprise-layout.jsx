import "./AfriCCTV/marketing/marketing.css";
import AfriCCTVHero from "./AfriCCTV/marketing/AfriCCTVHero";
import AfriCCTVMarketingWall from "./AfriCCTV/marketing/AfriCCTVMarketingWall";
import MarketingFooter from "./AfriCCTV/marketing/MarketingFooter";

export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="africctv-marketing">
      <AfriCCTVHero />
      <AfriCCTVMarketingWall />
      <MarketingFooter />
      <button onClick={onExplore}>Explore AfriCCTV</button>
    </section>
  );
}
