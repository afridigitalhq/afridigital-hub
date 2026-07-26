const AfriBoostCampaignMarketplace = {

 publish(campaign){

   return {

    listingId:
    "JOB-" +
    Math.random()
    .toString(36)
    .substring(2,10)
    .toUpperCase(),

    campaignId:campaign.campaignId,

    ownerId:campaign.ownerId,

    category:campaign.category,

    reward:campaign.reward,

    currency:"AFRICOiN",

    availableSlots:
    campaign.slots || 0,

    status:"AVAILABLE",

    createdAt:Date.now()

   };

 },


 search(filters){

   return {

    category:filters.category || "ALL",

    location:filters.location || "GLOBAL",

    rewardRange:filters.rewardRange || null,

    status:"AVAILABLE"

   };

 }

};

export default AfriBoostCampaignMarketplace;
