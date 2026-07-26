/**
 * AfriAds Product Link Registry V1
 * Connects campaigns with products and services
 */

const AfriAdsProductLinkRegistry = {

  products:[],

  attach(product){

    this.products.push(product);

    return product;

  },

  findCampaignProducts(campaignId){

    return this.products.filter(
      product=>product.campaignId===campaignId
    );

  }

};

export default AfriAdsProductLinkRegistry;
