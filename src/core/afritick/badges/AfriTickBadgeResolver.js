/**
 * AfriTick Badge Resolver V2
 *
 * Uses verification + trust intelligence
 * to determine public trust badges.
 *
 * RULE:
 * Trust score supports discovery.
 * Verification controls verified status.
 */

const AfriTickBadgeResolver = {

  resolve(profile){

    const badges = [];

    if(profile.premium){
      badges.push({
        type:"PREMIUM",
        label:"AfriTick Premium",
        icon:"blue-check"
      });
    }

    if(profile.verifiedSeller){
      badges.push({
        type:"VERIFIED_SELLER",
        label:"Verified Seller",
        icon:"shield-check"
      });
    }

    if(profile.verifiedAgent){
      badges.push({
        type:"VERIFIED_AGENT",
        label:"Verified Agent",
        icon:"shield-check"
      });
    }

    if(profile.trustScore >= 80){
      badges.push({
        type:"TRUSTED",
        label:"Trusted",
        icon:"blue-check"
      });
    }

    return badges;

  }

};

export default AfriTickBadgeResolver;
