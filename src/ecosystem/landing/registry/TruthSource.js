import LandingEcosystemRegistry from "./LandingEcosystemRegistry";
import LandingExperienceCatalog from "../catalog/LandingExperienceCatalog";

const TruthSource = Object.freeze({

  products:
    LandingEcosystemRegistry.products,

  services:
    LandingEcosystemRegistry.services,

  experiences:
    LandingExperienceCatalog,

  status:
    "PRIMARY_SOURCE"

});

export default TruthSource;
