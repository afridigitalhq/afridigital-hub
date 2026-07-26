/**
 * AfriAds Admin Campaign Registry V1
 * Stores approved admin campaigns
 */

const AfriAdsAdminCampaignRegistry = {

  campaigns:[],

  register(campaign){

    this.campaigns.push({
      ...campaign,
      registeredAt:Date.now()
    });

    return campaign;

  },

  list(){

    return this.campaigns;

  }

};

export default AfriAdsAdminCampaignRegistry;
