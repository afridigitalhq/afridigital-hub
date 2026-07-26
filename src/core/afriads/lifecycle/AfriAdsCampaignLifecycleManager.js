/**
 * AfriAds Campaign Lifecycle Manager V1
 * Controls campaign state transitions
 */

const AfriAdsCampaignLifecycleManager = {

  states:[
    "DRAFT",
    "PREVIEW",
    "PAYMENT_PENDING",
    "ACTIVE",
    "PAUSED",
    "COMPLETED"
  ],

  transition(campaign,state){

    return {
      ...campaign,
      status:state,
      updatedAt:Date.now()
    };

  }

};

export default AfriAdsCampaignLifecycleManager;
