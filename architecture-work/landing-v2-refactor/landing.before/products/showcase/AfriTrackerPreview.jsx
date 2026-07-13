import TrackerHero from "./afritracker/TrackerHero";
import TrackerMap from "./afritracker/TrackerMap";
import TrackerPreview from "./afritracker/TrackerPreview";
import TrackerFeatures from "./afritracker/TrackerFeatures";
import TrackerCTA from "./afritracker/TrackerCTA";

export default function AfriTrackerPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase">
      <TrackerHero />
      <TrackerMap />
      <TrackerPreview />
      <TrackerFeatures />
      <TrackerCTA onExplore={onExplore} />
    </section>
  );
}
