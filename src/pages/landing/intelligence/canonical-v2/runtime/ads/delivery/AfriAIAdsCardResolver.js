/**
 * AfriAI Ads Card Resolver
 *
 * OWNER:
 * AfriAI presentation intelligence.
 *
 * RULE:
 * UI receives approved ads only.
 */

const AfriAIAdsCardResolver = {

  resolve(campaigns=[]){

    return campaigns.map(campaign => ({
      id:campaign.id,
      title:campaign.title,
      description:campaign.description,
      media:campaign.media,
      destination:campaign.destination,
      sponsored:true
    }));

  }

};

export default AfriAIAdsCardResolver;
