import SportsHero from "./sports/SportsHero";
import SportsScoreboard from "./sports/SportsScoreboard";
import SportsFixtures from "./sports/SportsFixtures";
import SportsCTA from "./sports/SportsCTA";

export default function AfriSportsPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase sports-showcase premium-showcase">
      <SportsHero />
      <SportsScoreboard />
      <SportsFixtures />
      <SportsCTA onExplore={onExplore} />
    </section>
  );
}
