/**
 * AfriTick Badge Renderer
 *
 * OWNER:
 * AfriTick Core UI layer.
 *
 * RULE:
 * All ecosystem products render trust badges from one source.
 */

import AfriTickBadge from "../ui/AfriTickBadge";
import AfriTickSafeguardIcon from "../ui/icons/AfriTickSafeguardIcon";

const AfriTickBadgeRenderer = {

  render(profile={}){

    return {
      premium:
        profile.premium
          ? AfriTickBadge("AFRITICK_PREMIUM")
          : null,

      verification:
        profile.verified
          ? AfriTickBadge("VERIFIED")
          : null,

      safeguard:
        profile.official
          ? AfriTickSafeguardIcon
          : null
    };

  }

};

export default AfriTickBadgeRenderer;
