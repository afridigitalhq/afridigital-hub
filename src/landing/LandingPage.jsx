import LandingBackground from "./LandingBackground";
import BrandHero from "./BrandHero";
import EcosystemGrid from "./EcosystemGrid";
import AfriVisionPreview from "./AfriVisionPreview";
import AfriSportsPreview from "./AfriSportsPreview";
import LiveShowcase from "./LiveShowcase";
import EcosystemStats from "./EcosystemStats";
import ControlCenterPreview from "./ControlCenterPreview";
import TrustSection from "./TrustSection";
import LiveActivityTicker from "./LiveActivityTicker";
import LandingFooter from "./LandingFooter";
import AfriBoostSidebar from "../components/ads/AfriBoostSidebar";

export default function LandingPage() {
useAfriAIRouter();
const path = "home"; useAfriAIRouter(path);
  return (
    <div style={{
      background: "#050814",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    }}>
      <LandingBackground />
      {/* HERO */}
      <BrandHero />
      {/* ECOSYSTEM */}
      <EcosystemGrid />
<AfriVisionPreview />
<AfriSportsPreview />
      {/* LIVE SHOWCASE */}
      <LiveShowcase />
      <EcosystemStats />
      <ControlCenterPreview />
      {/* TRUST */}
      <TrustSection />
      {/* ACTIVITY */}
      <LiveActivityTicker />
      {/* FOOTER */}
      <LandingFooter />
import AfriBoostSidebar from "../components/ads/AfriBoostSidebar";
    </div>
  );
}
