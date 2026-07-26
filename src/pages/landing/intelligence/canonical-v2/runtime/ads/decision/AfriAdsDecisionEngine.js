/**
 * AfriAds Decision Engine
 *
 * OWNER:
 * AfriAI + AfriAds intelligence layer.
 *
 * RULE:
 * Intent selects relevant campaigns.
 *
 * INPUT:
 * Intent, category, placement.
 *
 * OUTPUT:
 * Approved advertisements.
 */

import AfriAdsCampaignResolver from "../AfriAdsCampaignResolver";

const AfriAdsDecisionEngine = {

  decide({
    intent,
    placement
  }){

    const campaigns =
      AfriAdsCampaignResolver.resolve(intent);

    return campaigns.filter(
      campaign =>
        campaign.status === "ACTIVE" &&
        (!campaign.placement ||
         campaign.placement === placement)
    );

  }

};

export default AfriAdsDecisionEngine;
