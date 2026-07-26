/**
 * AfriAds Campaign Lifecycle Runtime
 *
 * OWNER:
 * Campaign state management.
 *
 * RULE:
 * Every advertisement follows a controlled lifecycle.
 */

const AfriAdsCampaignLifecycle = {

  states:[
    "DRAFT",
    "PENDING_REVIEW",
    "APPROVED",
    "ACTIVE",
    "PAUSED",
    "EXPIRED",
    "REJECTED"
  ],

  transition(campaign,nextState){

    if(!this.states.includes(nextState)){
      return {
        success:false,
        error:"INVALID_STATE"
      };
    }

    return {
      ...campaign,
      status:nextState
    };

  }

};

export default AfriAdsCampaignLifecycle;
