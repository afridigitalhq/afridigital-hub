import GlobalHeroBackground from "./GlobalHeroBackground";
import GlobalHeroWorldLayer from "./GlobalHeroWorldLayer";
import GlobalHeroNavigation from "./GlobalHeroNavigation";
import GlobalHero from "./GlobalHero";

export default function GlobalHeroShell() {
  return (
    <>
      <GlobalHeroBackground />
      <GlobalHeroWorldLayer />
      <GlobalHeroNavigation />
      <GlobalHero />
    </>
  );
}
