/**
 * AfriAds Advertiser Portal
 *
 * OWNER:
 * Advertiser campaign entry layer.
 *
 * RULE:
 * Approved advertisers can submit campaigns into AfriAds Hub.
 */

const AfriAdsAdvertiserPortal = {

  advertisers:[],

  submitCampaign(campaign){

    return {
      ...campaign,
      status:"PENDING_REVIEW"
    };

  }

};

export default AfriAdsAdvertiserPortal;
