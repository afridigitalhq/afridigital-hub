import HeroGlobe from "./components/HeroGlobe";
import LandingNavigation from "../navigation/LandingNavigation";

export default function LandingHero(){
  return(
    <section className="landing-hero">
      <HeroGlobe/>

      <LandingNavigation />

      <div className="landing-hero-content">
        <h1>
          Africa's Biggest Digital Ecosystem
        </h1>

        <p>
          Sell, shop, work, promote ads, secure businesses, track devices, buy tickets, and connect with digital services across Africa — all from one platform.
        </p>
      </div>
    </section>
  );
}
