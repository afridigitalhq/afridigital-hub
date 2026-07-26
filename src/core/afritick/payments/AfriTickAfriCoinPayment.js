/**
 * AfriTick AfriCoin Payment Runtime
 *
 * OWNER:
 * AfriTick Billing.
 *
 * RULE:
 * Premium trust membership uses AfriCoin.
 */

const AfriTickAfriCoinPayment = {

  pay(subscription){

    return {
      userId:subscription.userId,
      plan:subscription.plan,
      currency:"AFRICOIN",
      status:"PAID"
    };

  }

};

export default AfriTickAfriCoinPayment;
