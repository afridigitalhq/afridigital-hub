/**
 * AfriAds Campaign Performance
 *
 * OWNER:
 * Campaign reporting layer.
 */

const AfriAdsCampaignPerformance = {

  campaigns:[],

  getTopCampaigns(){

    return this.campaigns
      .sort((a,b)=>b.conversions-a.conversions);

  }

};

export default AfriAdsCampaignPerformance;
