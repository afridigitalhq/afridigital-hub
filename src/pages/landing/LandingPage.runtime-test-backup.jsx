import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import LandingNavigation from "./navigation/LandingNavigation";
import TierOneProducts from "./products/TierOneProducts";
import TierTwoProducts from "./products/TierTwoProducts";
import AfriAIDock from "./intelligence/AfriAIDock";
import AfriWhatsappGateway from "./whatsapp/AfriWhatsappGateway";
import LandingFooter from "./footer/LandingFooter";
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

;

  return (
    <div className="landing-shell">

      {/* NAVIGATION */}
      <LandingNavigation />

      {/* HERO */}
      <LandingHero navigate={navigate} />

      {/* ECOSYSTEM MARQUEE */}
      <EcosystemMarquee />

      {/* TIER 1 PRODUCTS */}
      <TierOneProducts navigate={navigate} />

      {/* TIER 2 PRODUCTS */}
      <TierTwoProducts navigate={navigate} />

      {/* AfriAI Intelligence */}
      <AfriAIDock />

      {/* AfriDigital WhatsApp Gateway */}
      <AfriWhatsappGateway />

      {/* FOOTER */}
      <LandingFooter />

    </div>
  );
}
