import LandingProductCatalog from "../catalog/LandingExperienceCatalog";
import LandingServiceCatalog from "../catalog/LandingServiceCatalog";

const LandingEcosystemRegistry = Object.freeze({

  products: LandingProductCatalog,

  services: LandingServiceCatalog,

  version: "LANDING_V1",

  status: "LOCKED"

});

export default LandingEcosystemRegistry;
