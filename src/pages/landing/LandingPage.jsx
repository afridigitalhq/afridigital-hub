import { useNavigate } from "react-router-dom";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-shell">


      {/* ECOSYSTEM MARQUEE */}
      <EcosystemMarquee />

      {/* LANDING AUTH CTA */}
      <LandingAuthCTA navigate={navigate} />

      {/* TIER 1 PRODUCTS */}
      <LandingEcosystemBridge />

      {/* TIER 2 PRODUCTS */}
      

    </div>
  );
}
