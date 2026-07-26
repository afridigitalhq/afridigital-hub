/**
 * AfriAds User Campaign Payment Gateway V1
 * User ads require AfriCoin activation payment
 */

const AfriAdsCampaignPaymentGateway = {

  activate(payment){

    return {
      campaignId:payment.campaignId,
      currency:"AFRICOiN",
      status:"ACTIVATED",
      amount:payment.amount,
      audienceReach:payment.reach || 0
    };

  },

  adminOverride(){

    return {
      currency:"AFRICOiN",
      required:false,
      reason:"ADMIN_CAMPAIGN"
    };

  }

};

export default AfriAdsCampaignPaymentGateway;
