/**
 * AfriAds Admin Distribution Feed V1
 * Sends approved campaigns to ecosystem consumers
 */

const AfriAdsAdminDistributionFeed = {

  feeds:[],

  distribute(campaign){

    const payload = {
      campaignId:campaign.id,
      title:campaign.title,
      description:campaign.description,
      media:campaign.media || [],
      placement:campaign.placement || [],
      status:"ACTIVE"
    };

    this.feeds.push(payload);

    return payload;

  },

  getFeed(){

    return this.feeds;

  }

};

export default AfriAdsAdminDistributionFeed;
