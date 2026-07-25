import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAfriAI from "./intelligence/canonical/LandingAfriAI";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import LandingFooter from "./footer/LandingFooter";
import LandingNavigation from "./navigation/LandingNavigation";
import LandingBackground from "./background/LandingBackground";
import LandingWorldLayer from "./world/LandingWorldLayer";
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-shell">

      <LandingBackground />

      <LandingWorldLayer />

      <LandingNavigation />

      <LandingHero />

      <EcosystemMarquee />

      <LandingAuthCTA navigate={navigate} />

      <LandingAfriAI />

      <div className="landing-container">

        <LandingEcosystemBridge />

        <LandingAuthCTA navigate={navigate} />

        <LandingFooter />

      </div>

    </div>
  );
}
