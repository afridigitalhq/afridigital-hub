import "./home/UserHome.css";
import LandingBackground from "../landing/background/LandingBackground";
import LandingWorldLayer from "../landing/world/LandingWorldLayer";
import LandingNavigation from "../landing/navigation/LandingNavigation";
import LandingHero from "../landing/hero/LandingHero";
import EcosystemMarquee from "../landing/marquee/EcosystemMarquee";
import LandingFooter from "../landing/footer/LandingFooter";
import UserHomeDashboard from "./home/dashboard/UserHomeDashboard";
import UserHomeProducts from "./home/products/UserHomeProducts";

export default function UserHome() {
  return (
    <div className="user-home">
      <LandingBackground />
      <LandingWorldLayer />
      <LandingNavigation />
      <LandingHero />
      <EcosystemMarquee />
      <UserHomeDashboard />
      <UserHomeProducts />
      <LandingFooter />
    </div>
  );
}
