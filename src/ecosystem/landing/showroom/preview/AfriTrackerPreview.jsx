import TrackerHero from "../products/afritracker/TrackerHero";
import TrackerMap from "../products/afritracker/TrackerMap";
import TrackerPreview from "../products/afritracker/TrackerPreview";
import TrackerFeatures from "../products/afritracker/TrackerFeatures";
import TrackerCTA from "../products/afritracker/TrackerCTA";

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
