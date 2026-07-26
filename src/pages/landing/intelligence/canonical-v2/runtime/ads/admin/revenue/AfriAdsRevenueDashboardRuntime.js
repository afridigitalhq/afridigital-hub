/**
 * AfriAds Revenue Dashboard Runtime
 *
 * OWNER:
 * Admin analytics layer.
 *
 * RULE:
 * Admin sees campaign health and revenue performance.
 */

const AfriAdsRevenueDashboardRuntime = {

  metrics:{
    impressions:0,
    clicks:0,
    conversions:0,
    revenue:0,
    activeCampaigns:0
  },

  getOverview(){

    return this.metrics;

  }

};

export default AfriAdsRevenueDashboardRuntime;
