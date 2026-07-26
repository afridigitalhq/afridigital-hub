/**
 * AfriAds Conversion Tracker
 *
 * OWNER:
 * Campaign outcome analytics.
 */

const AfriAdsConversionTracker = {

  record(campaign){

    campaign.conversions = (campaign.conversions || 0) + 1;

    return campaign.conversions;

  }

};

export default AfriAdsConversionTracker;
