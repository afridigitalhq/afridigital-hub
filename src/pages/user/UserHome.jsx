import "./home/UserHome.css";
import GlobalHeroShell from "../../core/layout/global-hero/GlobalHeroShell";
import EcosystemMarquee from "../landing/marquee/EcosystemMarquee";
import LandingFooter from "../landing/footer/LandingFooter";
import UserHomeDashboard from "./home/dashboard/UserHomeDashboard";
import UserHomeProducts from "./home/products/UserHomeProducts";

export default function UserHome() {
  return (
    <div className="user-home">
      <GlobalHeroShell />
      <EcosystemMarquee />
      <UserHomeDashboard />
      <UserHomeProducts />
      <LandingFooter />
    </div>
  );
}
