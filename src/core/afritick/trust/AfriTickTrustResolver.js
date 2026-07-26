/**
 * AfriTick Trust Resolver
 *
 * OWNER:
 * Determines displayed trust signals.
 */

const AfriTickTrustResolver = {

  resolve(profile={}){

    if(profile.kycVerified){
      return "KYC_VERIFIED";
    }

    if(profile.verified){
      return "VERIFIED";
    }

    if(profile.premium){
      return "PREMIUM_PARTNER";
    }

    return "BASIC";

  }

};

export default AfriTickTrustResolver;
