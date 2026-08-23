import { useNavigate } from "react-router-dom";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAfriAINext from "./intelligence/canonical-v2/LandingAfriAINext";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import LandingFooter from "./footer/LandingFooter";
import LandingExperienceShell from "./shell/LandingExperienceShell"
import "./landing.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-shell">

      <LandingExperienceShell />

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
