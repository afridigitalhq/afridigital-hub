/**
 * AfriAds Delivery Engine
 *
 * OWNER:
 * AfriAds final delivery layer.
 *
 * RULE:
 * Only approved ranked campaigns can be rendered.
 */

const AfriAdsDeliveryEngine = {

  deliver(campaigns=[]){

    return campaigns.filter(
      campaign =>
        campaign.status === "ACTIVE"
    );

  }

};

export default AfriAdsDeliveryEngine;
