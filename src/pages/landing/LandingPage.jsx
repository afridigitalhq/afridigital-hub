import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import AfriAIDock from "./intelligence/AfriAIDock";
import AfriWhatsappGateway from "./whatsapp/AfriWhatsappGateway";
import LandingFooter from "./footer/LandingFooter";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-shell">


      {/* HERO */}
      <LandingHero />

      {/* ECOSYSTEM MARQUEE */}
      <EcosystemMarquee />

      {/* LANDING AUTH CTA */}
      <LandingAuthCTA navigate={navigate} />

      {/* TIER 1 PRODUCTS */}
      <LandingEcosystemBridge />

      {/* TIER 2 PRODUCTS */}
      

      {/* AfriAI Intelligence */}
      <AfriAIDock />

      {/* AfriDigital WhatsApp Gateway */}
      <AfriWhatsappGateway />

      {/* FOOTER */}
      <LandingFooter />

    </div>
  );
}
