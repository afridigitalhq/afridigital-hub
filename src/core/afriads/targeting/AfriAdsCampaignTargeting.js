/**
 * AfriAds Campaign Targeting Runtime V1
 * Defines who receives campaigns
 */

const AfriAdsCampaignTargeting = {

  create(target){

    return {
      country:target.country || "GLOBAL",
      audience:target.audience || [],
      interests:target.interests || [],
      category:target.category || "GENERAL",
      ageRange:target.ageRange || null,
      estimatedReach:target.estimatedReach || 0
    };

  }

};

export default AfriAdsCampaignTargeting;
