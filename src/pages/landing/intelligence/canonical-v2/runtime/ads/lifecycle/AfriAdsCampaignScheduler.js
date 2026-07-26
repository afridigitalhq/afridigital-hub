/**
 * AfriAds Campaign Scheduler
 *
 * OWNER:
 * Campaign timing control.
 */

const AfriAdsCampaignScheduler = {

  activate(campaign){

    return {
      ...campaign,
      status:"ACTIVE",
      activatedAt:Date.now()
    };

  },

  expire(campaign){

    return {
      ...campaign,
      status:"EXPIRED",
      expiredAt:Date.now()
    };

  }

};

export default AfriAdsCampaignScheduler;
