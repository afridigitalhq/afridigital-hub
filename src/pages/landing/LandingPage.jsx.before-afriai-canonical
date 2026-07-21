import { useNavigate } from "react-router-dom";
import LandingHero from "./hero/LandingHero";
import EcosystemMarquee from "./marquee/EcosystemMarquee";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import AfriAIDock from "./intelligence/AfriAIDock";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import LandingFooter from "./footer/LandingFooter";
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-shell">

      <LandingHero />

      <EcosystemMarquee />

      <LandingAuthCTA navigate={navigate} />

      <AfriAIDock />

      <div className="landing-container">

        <LandingEcosystemBridge />

        <LandingAuthCTA navigate={navigate} />

        <LandingFooter />

      </div>

    </div>
  );
}
