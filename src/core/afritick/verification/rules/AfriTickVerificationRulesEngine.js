/**
 * AfriTick Verification Rules Engine
 *
 * OWNER:
 * AfriTick Core.
 *
 * RULE:
 * Automates verification decisions using trust signals.
 */

const AfriTickVerificationRulesEngine = {

  evaluate(profile={}){

    const score =
      (profile.phoneVerified ? 25 : 0) +
      (profile.accountAge ? 25 : 0) +
      (profile.activity ? 25 : 0) +
      (profile.reputation ? 25 : 0);

    return {

      score,

      decision:
        score >= 75
          ? "AUTO_APPROVE"
          : "ADMIN_REVIEW"

    };

  }

};

export default AfriTickVerificationRulesEngine;
