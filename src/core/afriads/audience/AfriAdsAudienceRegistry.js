/**
 * AfriAds Audience Registry V1
 * Stores campaign audience definitions
 */

const AfriAdsAudienceRegistry = {

  audiences:[],

  register(audience){

    this.audiences.push(audience);

    return audience;

  },

  list(){

    return this.audiences;

  }

};

export default AfriAdsAudienceRegistry;
