/**
 * AfriAds Creative Asset Registry V1
 * Stores campaign media assets
 */

const AfriAdsCreativeAssetRegistry = {

  assets:[],

  register(asset){

    this.assets.push(asset);

    return asset;

  },

  getCampaignAssets(campaignId){

    return this.assets.filter(
      asset=>asset.campaignId===campaignId
    );

  }

};

export default AfriAdsCreativeAssetRegistry;
