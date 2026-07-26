/**
 * AfriAds Impression Counter
 *
 * OWNER:
 * Campaign view tracking.
 */

const AfriAdsImpressionCounter = {

  record(campaign){
    campaign.impressions = campaign.impressions || {
      current:0,
      target:1000
    };

    campaign.impressions.current++;

    return campaign.impressions;
  }

};

export default AfriAdsImpressionCounter;
