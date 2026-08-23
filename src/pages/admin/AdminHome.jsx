import LandingBackground from "../landing/background/LandingBackground";
import LandingWorldLayer from "../landing/world/LandingWorldLayer";
import LandingNavigation from "../landing/navigation/LandingNavigation";
import LandingHero from "../landing/hero/LandingHero";
import EcosystemMarquee from "../landing/marquee/EcosystemMarquee";
import LandingFooter from "../landing/footer/LandingFooter";
import ControlRoomShell from "../../control-room/core/ControlRoomShell";

export default function AdminHome() {
  return (
    <div className="admin-home">
      <LandingBackground />
      <LandingWorldLayer />
      <LandingNavigation />
      <LandingHero />
      <EcosystemMarquee />
      <ControlRoomShell />
      <LandingFooter />
    </div>
  );
}
