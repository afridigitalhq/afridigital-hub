/**
 * AfriAds Source Registry
 *
 * OWNER:
 * Campaign ingestion layer.
 *
 * RULE:
 * Every promotion source feeds AfriAds Hub.
 */

const AfriAdsSourceRegistry = {

  sources:[
    "ADMIN_CONTROL_CENTER",
    "AFRIBOOST",
    "AFRICOMMERCE_SELLERS",
    "AFRIDIGITAL_PRODUCTS",
    "EXTERNAL_PARTNERS",
    "AFFILIATE_NETWORK"
  ],

  canPublish(source){

    return this.sources.includes(source);

  }

};

export default AfriAdsSourceRegistry;
