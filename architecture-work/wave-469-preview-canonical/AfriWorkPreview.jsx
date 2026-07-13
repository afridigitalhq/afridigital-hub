import WorkHero from "./afriwork/WorkHero";
import WorkPreview from "./afriwork/WorkPreview";
import WorkFeatures from "./afriwork/WorkFeatures";
import WorkCTA from "./afriwork/WorkCTA";

export default function AfriWorkPreview({onExplore}){
  return (
    <section className="glass-card product-showcase">
      <WorkHero />
      <WorkPreview />
      <WorkFeatures />
      <WorkCTA onExplore={onExplore} />
    </section>
  );
}
