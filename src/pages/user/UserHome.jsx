import "./home/UserHome.css";
import GlobalExperienceShell from "../../core/layout/global-shell/GlobalExperienceShell";
import LandingFooter from "../landing/footer/LandingFooter";
import UserHomeDashboard from "./home/dashboard/UserHomeDashboard";
import UserHomeProducts from "./home/products/UserHomeProducts";

export default function UserHome() {
  return (
    <GlobalExperienceShell>
      <UserHomeDashboard />
      <UserHomeProducts />
      <LandingFooter />
    </GlobalExperienceShell>
  );
}
