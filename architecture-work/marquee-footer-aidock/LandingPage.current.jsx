import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import HeroHighlights from "./hero/HeroHighlights";
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
      <HeroHighlights />

      {/* PRODUCTS */}
      <TierOneProducts navigate={navigate} />
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
