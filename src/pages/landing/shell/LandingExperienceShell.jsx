import LandingBackground from "../background/LandingBackground";
import LandingWorldLayer from "../world/LandingWorldLayer";
import LandingNavigation from "../navigation/LandingNavigation";
import LandingHero from "../hero/LandingHero";
import EcosystemMarquee from "../marquee/EcosystemMarquee";

export default function LandingExperienceShell({ children }) {
  return (
    <>
      <LandingBackground />
      <LandingWorldLayer />
      <LandingNavigation />
      <LandingHero />
      <EcosystemMarquee />
      {children}
    </>
  );
}
