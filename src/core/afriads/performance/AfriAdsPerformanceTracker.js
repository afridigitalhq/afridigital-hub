/**
 * AfriAds Performance Tracker V1
 * Central campaign measurement runtime
 */

const AfriAdsPerformanceTracker = {

  events:[],

  record(event){

    this.events.push(event);

    return {
      recorded:true,
      event
    };

  },


  getCampaignPerformance(campaignId){

    return this.events.filter(
      event => event.campaignId === campaignId
    );

  }

};

export default AfriAdsPerformanceTracker;
