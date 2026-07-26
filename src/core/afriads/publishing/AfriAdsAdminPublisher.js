/**
 * AfriAds Admin Publisher
 * Temporary internal admin publishing layer
 */

import { registerCampaign } from "../campaigns/AfriAdsCampaignRegistry.js";

const AfriAdsAdminPublisher = {

  publish(campaign){
    return registerCampaign(campaign);
  }

};

export default AfriAdsAdminPublisher;
