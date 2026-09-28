import { useNavigate } from "react-router-dom";
import LandingEcosystemBridge from "./composition/LandingEcosystemBridge";
import LandingAuthCTA from "./auth/LandingAuthCTA";
import LandingFooter from "./footer/LandingFooter";
import GlobalExperienceShell from "../../core/layout/global-shell/GlobalExperienceShell"

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <GlobalExperienceShell>

      <LandingAuthCTA navigate={navigate} />

      {/* AfriAI card temporarily disabled — implementation preserved for later remount. */}

      <div className="landing-container">

        <LandingEcosystemBridge />

        <LandingAuthCTA navigate={navigate} />

        <LandingFooter />

      </div>

    </GlobalExperienceShell>
  );
}
