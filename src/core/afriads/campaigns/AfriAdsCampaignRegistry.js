/**
 * AfriAds Campaign Registry
 * Single source of truth for ecosystem ads
 */

const AfriAdsCampaignRegistry = [];

export function registerCampaign(campaign){
  AfriAdsCampaignRegistry.push({
    ...campaign,
    source:"ADMIN_PLATFORM",
    status:"ACTIVE"
  });

  return campaign;
}

export function getCampaigns(){
  return AfriAdsCampaignRegistry;
}

export default AfriAdsCampaignRegistry;
