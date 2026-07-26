/**
 * AfriTick Verification Resolver
 *
 * OWNER:
 * Converts verification status into public badges.
 */

import AfriTickVerificationLevels from "./AfriTickVerificationLevels";

const AfriTickVerificationResolver = {

  resolve(type){

    return AfriTickVerificationLevels.find(
      item => item.id === type
    );

  }

};

export default AfriTickVerificationResolver;
