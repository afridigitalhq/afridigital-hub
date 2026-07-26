/**
 * AfriAds Feed Engine
 *
 * OWNER:
 * Live campaign delivery source.
 *
 * RULE:
 * Products request ads through AfriAds Feed.
 */

import AfriAdsHubRegistry from "../hub/AfriAdsHubRegistry";

const AfriAdsFeedEngine = {

  fetch(intent){

    const campaigns = AfriAdsHubRegistry.getAll();

    return campaigns.filter(
      campaign =>
        campaign.status==="ACTIVE" &&
        campaign.intentTarget===intent
    );

  }

};

export default AfriAdsFeedEngine;
