/**
 * AfriAds Privacy Controls V1
 */

const AfriAdsPrivacyControls = {

  allowed:true,

  check(){

    return {
      targetingAllowed:this.allowed,
      privacyStatus:"USER_CONTROLLED"
    };

  }

};

export default AfriAdsPrivacyControls;
