/**
 * AfriAds Hub Registry
 *
 * OWNER:
 * Central advertisement source.
 *
 * RULE:
 * All internal and external campaigns enter through AfriAds Hub.
 */

const AfriAdsHubRegistry = {

  internal:[],
  external:[],
  affiliate:[],

  register(campaign){

    if(campaign.type==="INTERNAL"){
      this.internal.push(campaign);
    }

    if(campaign.type==="EXTERNAL"){
      this.external.push(campaign);
    }

    if(campaign.type==="AFFILIATE"){
      this.affiliate.push(campaign);
    }

  },

  getAll(){

    return [
      ...this.internal,
      ...this.external,
      ...this.affiliate
    ];

  }

};

export default AfriAdsHubRegistry;
