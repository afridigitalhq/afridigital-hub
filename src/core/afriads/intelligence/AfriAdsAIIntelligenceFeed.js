/**
 * AfriAds AI Intelligence Feed V1
 * Supplies approved campaigns to AfriAI
 */

const AfriAdsAIIntelligenceFeed = {

  campaigns:[],

  register(campaign){

    if(campaign.status !== "APPROVED"){
      return {
        accepted:false,
        reason:"CAMPAIGN_NOT_APPROVED"
      };
    }

    this.campaigns.push(campaign);

    return {
      accepted:true,
      campaign
    };

  },

  getRecommendations(context){

    return this.campaigns.filter(
      campaign =>
      !context.category ||
      campaign.category === context.category
    );

  }

};

export default AfriAdsAIIntelligenceFeed;
