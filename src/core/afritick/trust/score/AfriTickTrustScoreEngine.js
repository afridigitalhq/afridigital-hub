/**
 * AfriTick Trust Score Engine
 *
 * OWNER:
 * Ecosystem reputation intelligence.
 *
 * RULE:
 * Trust score supports discovery,
 * verification remains the identity proof.
 */

const AfriTickTrustScoreEngine = {

  calculate(profile={}){

    const score =
      (profile.verificationScore || 0) +
      (profile.activityScore || 0) +
      (profile.transactionScore || 0) +
      (profile.reputationScore || 0);

    return Math.min(score,100);

  }

};

export default AfriTickTrustScoreEngine;
