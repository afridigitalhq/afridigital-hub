/**
 * AfriTick Billing Runtime
 *
 * OWNER:
 * Subscription payment lifecycle.
 */

const AfriTickBillingRuntime = {

  subscribe(userId,plan){

    return {
      userId,
      plan,
      status:"ACTIVE"
    };

  }

};

export default AfriTickBillingRuntime;
