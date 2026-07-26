/**
 * AfriTick Badge Resolver
 *
 * OWNER:
 * Badge rendering intelligence.
 */

const AfriTickBadgeResolver = {

  resolve(profile){

    if(profile.afriTick){
      return [
        "AFRITICK",
        "KYC_VERIFIED"
      ];
    }

    if(profile.kycVerified){
      return [
        "KYC_VERIFIED"
      ];
    }

    return [];

  }

};

export default AfriTickBadgeResolver;
