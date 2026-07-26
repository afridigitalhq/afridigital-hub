/**
 * AfriAds Campaign Analytics V1
 * Tracks admin and ecosystem campaign performance
 */

const AfriAdsCampaignAnalytics = {

  events:[],

  record(event){

    this.events.push({
      ...event,
      timestamp:Date.now()
    });

    return event;

  },

  getCampaignStats(campaignId){

    return this.events.filter(
      event => event.campaignId === campaignId
    );

  }

};

export default AfriAdsCampaignAnalytics;
