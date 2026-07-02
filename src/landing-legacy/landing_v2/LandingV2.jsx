import HeroCore from "./core/HeroCore";
import ExperienceLayer from "./experience/ExperienceLayer";
import EcosystemStrip from "./ecosystem/EcosystemStrip";
import ProofLayer from "./proof/ProofLayer";
import ConversionDock from "./conversion/ConversionDock";

export default function LandingV2() {
  return (
    <div className="landing-v2">
      <HeroCore />
      <ExperienceLayer />
      <EcosystemStrip />
      <ProofLayer />
      <ConversionDock />
    </div>
  );
}
