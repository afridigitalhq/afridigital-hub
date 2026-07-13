import SportsHero from "./sports/SportsHero";
import SportsFixtures from "./sports/SportsFixtures";
import SportsAnalysis from "./sports/SportsAnalysis";
import SportsScoreboard from "./sports/SportsScoreboard";
import SportsCTA from "./sports/SportsCTA";

export default function AfriSportsPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase">
      <SportsHero />
      <SportsFixtures />
      <SportsAnalysis />
      <SportsScoreboard />
      <SportsCTA onExplore={onExplore} />
    </section>
  );
}
