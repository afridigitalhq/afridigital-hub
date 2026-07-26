/**
 * AfriTick Verification Rules Engine V2
 *
 * OWNER:
 * AfriTickCore
 *
 * RULE:
 * Automation assists governance without replacing admin control.
 */

const AfriTickVerificationRulesEngine = {

  evaluate(request={}){

    const score = request.trustScore || 0;
    const verified = request.identityVerified || false;
    const activity = request.activityScore || 0;

    if(
      verified &&
      score >= 80 &&
      activity >= 50
    ){

      return {
        decision:"AUTO_APPROVE",
        reason:"HIGH_TRUST_PROFILE"
      };

    }

    if(
      score >= 50
    ){

      return {
        decision:"ADMIN_REVIEW",
        reason:"MODERATE_TRUST_PROFILE"
      };

    }

    return {
      decision:"REJECT",
      reason:"INSUFFICIENT_TRUST_SIGNALS"
    };

  }

};

export default AfriTickVerificationRulesEngine;
