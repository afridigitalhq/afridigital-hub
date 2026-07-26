/**
 * AfriAds Campaign Metrics
 *
 * OWNER:
 * Campaign performance summary.
 */

const AfriAdsCampaignMetrics = {

  get(campaign){

    return {
      impressions:campaign.impressions || {
        current:0,
        target:1000
      },
      clicks:campaign.clicks || 0,
      conversions:campaign.conversions || 0
    };

  }

};

export default AfriAdsCampaignMetrics;
