/**
 * AfriAds Campaign Resolver
 *
 * OWNER:
 * AfriAI + AfriAds decision layer.
 *
 * RULE:
 * Intent selects campaigns.
 * UI only renders approved cards.
 */

import AfriAdsCampaignRegistry from "./AfriAdsCampaignRegistry";
import AfriAdsProviderRegistry from "./providers/AfriAdsProviderRegistry";

const AfriAdsCampaignResolver = {

  resolve(intent){

    const campaigns = [
      ...AfriAdsCampaignRegistry,
      ...AfriAdsProviderRegistry
    ];

    return campaigns.filter(
      campaign =>
        campaign.intentTarget === intent
    );

  }

};

export default AfriAdsCampaignResolver;
