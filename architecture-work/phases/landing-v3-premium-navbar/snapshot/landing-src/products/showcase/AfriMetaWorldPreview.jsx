import MetaWorldHero from "./metaworld/MetaWorldHero";
import MetaWorldPreview from "./metaworld/MetaWorldPreview";
import MetaWorldExperiences from "./metaworld/MetaWorldExperiences";
import MetaWorldCTA from "./metaworld/MetaWorldCTA";

export default function AfriMetaWorldPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase">
      <MetaWorldHero />
      <MetaWorldPreview />
      <MetaWorldExperiences />
      <MetaWorldCTA onExplore={onExplore} />
    </section>
  );
}
