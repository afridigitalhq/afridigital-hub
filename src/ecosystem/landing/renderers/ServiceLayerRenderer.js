import LandingEcosystemRegistry from "../registry/LandingEcosystemRegistry";

const ServiceLayerRenderer = Object.freeze({

  getServices(){

    return Object.values(
      LandingEcosystemRegistry.services
    );

  }

});

export default ServiceLayerRenderer;
