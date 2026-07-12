import LandingEcosystemRegistry from "./LandingEcosystemRegistry";
import LandingExperienceCatalog from "../catalog/LandingExperienceCatalog";
import LandingShowroomRegistry from "./LandingShowroomRegistry";

const TruthSource = Object.freeze({
  products: LandingShowroomRegistry,
  services: LandingEcosystemRegistry.services,
  experiences: LandingExperienceCatalog,
  status: "PRIMARY_SOURCE"
});

export default TruthSource;
