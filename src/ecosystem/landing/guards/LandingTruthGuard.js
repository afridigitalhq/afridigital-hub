import LandingEcosystemRegistry from "../registry/LandingEcosystemRegistry";

const LandingTruthGuard = Object.freeze({

  validate(){

    return {

      products:
        LandingEcosystemRegistry.products,

      services:
        LandingEcosystemRegistry.services,

      status:
        "TRUTH_SOURCE_ACTIVE"

    };

  }

});

export default LandingTruthGuard;
