/**
 * AfriTick Ecosystem Adapter
 *
 * OWNER:
 * Shared ecosystem badge connector.
 *
 * RULE:
 * Every AfriDigital product consumes AfriTick from one source.
 */

import AfriTickBadgeResolver from "../badges/AfriTickBadgeResolver";

const AfriTickEcosystemAdapter = {

  getBadges(profile){

    return AfriTickBadgeResolver.resolve(profile);

  },

  attach(entity){

    return {
      ...entity,
      badges:this.getBadges(entity.profile || {})
    };

  }

};

export default AfriTickEcosystemAdapter;
