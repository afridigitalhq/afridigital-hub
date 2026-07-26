/**
 * AfriAds Click Tracker
 *
 * OWNER:
 * Campaign click analytics.
 */

const AfriAdsClickTracker = {

  record(campaign){

    campaign.clicks = (campaign.clicks || 0) + 1;

    return campaign.clicks;

  }

};

export default AfriAdsClickTracker;
