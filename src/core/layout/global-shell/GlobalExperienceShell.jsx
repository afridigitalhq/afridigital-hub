import LandingBackground from "../../../pages/landing/background/LandingBackground";
import LandingWorldLayer from "../../../pages/landing/world/LandingWorldLayer";
import LandingNavigation from "../../../pages/landing/navigation/LandingNavigation";
import LandingHero from "../../../pages/landing/hero/LandingHero";
import EcosystemMarquee from "../../../pages/landing/marquee/EcosystemMarquee";
import "../../../pages/landing/landing.css";

export default function GlobalExperienceShell({ children }) {
  return (
    <div className="landing-shell global-experience-shell">
      <LandingBackground />
      <LandingWorldLayer />
      <LandingNavigation />
      <LandingHero />
      <EcosystemMarquee />
      {children}
    </div>
  );
}
