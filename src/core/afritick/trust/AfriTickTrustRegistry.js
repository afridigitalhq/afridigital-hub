/**
 * AfriTick Trust Registry
 *
 * OWNER:
 * Ecosystem trust classification.
 *
 * RULE:
 * Trust levels are shared across AfriDigital products.
 */

const AfriTickTrustRegistry = {

  levels:[
    "BASIC",
    "VERIFIED",
    "KYC_VERIFIED",
    "PREMIUM_PARTNER"
  ],

  assign(entity,level){

    return {
      entity,
      trustLevel:level
    };

  }

};

export default AfriTickTrustRegistry;
