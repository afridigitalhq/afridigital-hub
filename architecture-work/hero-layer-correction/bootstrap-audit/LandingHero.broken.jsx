import HeroBackground from "./components/HeroBackground";
import HeroTopBar from "./components/HeroTopBar";
import HeroHeadline from "./components/HeroHeadline";
import HeroGlobe from "./components/HeroGlobe";

export default function LandingHero(){
return(
<section className="landing-hero">
<HeroBackground/>
<HeroTopBar/>
<HeroHeadline/>
<HeroGlobe/>
</section>
);
}
