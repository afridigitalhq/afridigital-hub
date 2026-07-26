/**
 * AfriAds Billing Engine V1
 * Handles campaign payment lifecycle
 */

const AfriAdsBillingEngine = {

  createPayment(campaign){

    if(campaign.ownerType === "ADMIN"){
      return {
        paymentRequired:false,
        status:"APPROVED_PLATFORM_CAMPAIGN"
      };
    }

    return {
      paymentRequired:true,
      currency:"AfriCoin",
      amount:campaign.cost,
      status:"PENDING_PAYMENT"
    };

  },


  activatePayment(payment){

    if(payment.status !== "PENDING_PAYMENT"){
      return {
        activated:false,
        reason:"INVALID_PAYMENT_STATE"
      };
    }

    return {
      activated:true,
      status:"PAID",
      currency:"AfriCoin"
    };

  }

};

export default AfriAdsBillingEngine;
