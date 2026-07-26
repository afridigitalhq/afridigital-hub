/**
 * AfriTick Trust Enforcement Engine
 *
 * OWNER:
 * Ecosystem safety decisions.
 *
 * RULE:
 * Trust signals control permissions,
 * not just visual badges.
 */

const AfriTickTrustEnforcementEngine = {

  check(action, profile={}){

    const trustScore =
      profile.trustScore || 0;

    const verified =
      profile.verified || false;


    if(!verified){

      return {
        status:"REVIEW",
        reason:"VERIFICATION_REQUIRED"
      };

    }


    if(trustScore < 40){

      return {
        status:"LIMITED",
        reason:"LOW_TRUST_SCORE"
      };

    }


    return {
      status:"APPROVED",
      action
    };

  }

};

export default AfriTickTrustEnforcementEngine;
