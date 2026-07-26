/**
 * AfriTick Subscription Engine
 *
 * OWNER:
 * Premium membership layer.
 *
 * RULE:
 * AfriTick is a paid identity upgrade.
 */

const AfriTickSubscriptionEngine = {

  activate(userId,plan){

    return {
      userId,
      plan,
      active:true
    };

  }

};

export default AfriTickSubscriptionEngine;
