import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import LandingNavigation from "./navigation/LandingNavigation";
import TierOneProducts from "./products/TierOneProducts";
import TierTwoProducts from "./products/TierTwoProducts";
import AfriAIDock from "./intelligence/AfriAIDock";
import AfriWhatsappGateway from "./whatsapp/AfriWhatsappGateway";
import EcosystemDiscovery from "./discovery/EcosystemDiscovery";
import LandingFooter from "./footer/LandingFooter";
import PlatformServices from "./services/PlatformServices";
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

      {/* AfriAI Intelligence */}
      <AfriAIDock />

      {/* AfriDigital WhatsApp Gateway */}
      <AfriWhatsappGateway />

      {/* PRODUCTS */}
      <TierOneProducts navigate={navigate} />
      <TierTwoProducts navigate={navigate} />

      {/* PLATFORM SERVICES */}
      <PlatformServices />

      {/* ECOSYSTEM DISCOVERY */}
      <EcosystemDiscovery />

      {/* FOOTER */}
      <LandingFooter />

    </div>
  );
}
