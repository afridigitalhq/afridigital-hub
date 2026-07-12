import LandingShowroomRegistry from "./LandingShowroomRegistry";
import LandingServiceCatalog from "../catalog/LandingServiceCatalog";

const LandingEcosystemRegistry = Object.freeze({

  products: LandingShowroomRegistry,

  services: LandingServiceCatalog,

  version: "LANDING_V1",

  status: "LOCKED"

});

export default LandingEcosystemRegistry;
