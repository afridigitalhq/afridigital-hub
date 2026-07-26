/**
 * AfriTick Trust API
 *
 * OWNER:
 * Universal ecosystem trust gateway.
 *
 * RULE:
 * Products consume trust through one interface.
 */

import AfriTickTrustScoreEngine from "../trust/score/AfriTickTrustScoreEngine";
import AfriTickTrustEnforcementEngine from "../enforcement/AfriTickTrustEnforcementEngine";
import AfriTickVerificationResolver from "../verification/levels/AfriTickVerificationResolver";

const AfriTickTrustAPI = {

  profile(profile={}){

    return {

      verification:
        AfriTickVerificationResolver.resolve(
          profile.verificationType
        ),

      trustScore:
        AfriTickTrustScoreEngine.calculate(
          profile
        )

    };

  },


  permission(action,profile={}){

    return AfriTickTrustEnforcementEngine.check(
      action,
      profile
    );

  }

};

export default AfriTickTrustAPI;
