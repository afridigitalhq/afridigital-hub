const AfriBoostCampaignReactivationEngine = {

 reactivate(campaign){

   return {

    reactivationId:
    "REA-" +
    Math.random()
    .toString(36)
    .substring(2,10)
    .toUpperCase(),

    originalCampaignId:
    campaign.campaignId,

    ownerId:
    campaign.ownerId,

    status:"REACTIVATED",

    previousPerformance:
    campaign.performance || {},

    newCycle:{
      budget:null,
      duration:null,
      targeting:null,
      escrowStatus:"PENDING"
    },

    createdAt:Date.now()

   };

 },

 archivePreviousCycle(campaign){

   return {

    campaignId:campaign.campaignId,

    archived:true,

    archiveTime:Date.now()

   };

 }

};

export default AfriBoostCampaignReactivationEngine;
