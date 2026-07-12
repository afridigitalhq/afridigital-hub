import LandingEcosystemRegistry from "../registry/LandingEcosystemRegistry";

const ProductTierRenderer = Object.freeze({

  getTier1(){

    return LandingEcosystemRegistry.products.tier1;

  },

  getTier2(){

    return LandingEcosystemRegistry.products.tier2;

  },

  getFuture(){

    return LandingEcosystemRegistry.products.future;

  },

  getAll(){

    return [
      ...LandingEcosystemRegistry.products.tier1,
      ...LandingEcosystemRegistry.products.tier2,
      ...LandingEcosystemRegistry.products.future
    ];

  }

});

export default ProductTierRenderer;
