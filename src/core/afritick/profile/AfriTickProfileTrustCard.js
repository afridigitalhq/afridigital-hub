/**
 * AfriTick Profile Trust Card
 *
 * OWNER:
 * Public trust identity display.
 *
 * RULE:
 * All ecosystem profiles use centralized trust presentation.
 */

import AfriTickBadge from "../ui/AfriTickBadge";
import AfriTickTrustScoreEngine from "../trust/score/AfriTickTrustScoreEngine";

const AfriTickProfileTrustCard = {

  build(profile={}){

    return {

      name: profile.name,

      badges:
        AfriTickBadge.render(profile),

      trustScore:
        AfriTickTrustScoreEngine.calculate(profile),

      action:"VIEW_PROFILE"

    };

  }

};

export default AfriTickProfileTrustCard;
