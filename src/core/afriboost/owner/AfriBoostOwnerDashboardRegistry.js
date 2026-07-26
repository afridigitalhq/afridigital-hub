const AfriBoostOwnerDashboardRegistry = {

 getOverview(data){

   return {

    ownerId:data.ownerId,

    campaigns:data.campaigns || [],

    escrow:data.escrow || {},

    pendingApprovals:data.pendingApprovals || [],

    analytics:data.analytics || {},

    generatedAt:Date.now()

   };

 },

 getCampaignSummary(campaign){

   return {

    campaignId:campaign.campaignId,

    status:campaign.status,

    budget:campaign.budget,

    cycle:campaign.cycle || 1,

    performance:campaign.performance || {}

   };

 }

};

export default AfriBoostOwnerDashboardRegistry;
