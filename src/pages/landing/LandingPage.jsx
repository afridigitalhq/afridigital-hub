import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAfriAINext from "./intelligence/canonical-v2/LandingAfriAINext";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import LandingNavigation from "./navigation/LandingNavigation";
import LandingFooter from "./footer/LandingFooter";
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

      <LandingAfriAINext />

      <div className="landing-container">

        <LandingEcosystemBridge />

        <LandingAuthCTA navigate={navigate} />

        <LandingFooter />

      </div>

    </div>
  );
}
