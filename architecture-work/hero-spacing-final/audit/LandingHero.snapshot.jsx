import HeroGlobe from "./components/HeroGlobe";
import LandingNavigation from "../navigation/LandingNavigation";

export default function LandingHero(){
  return(
    <section className="landing-hero">
      <HeroGlobe/>

      <LandingNavigation />

      <div className="landing-hero-content">
        <div className="landing-eyebrow">
          Africa's Digital Future
        </div>

        <h1>
          Building Africa's Connected<br/>
          Digital Ecosystem
        </h1>
      </div>
    </section>
  );
}
