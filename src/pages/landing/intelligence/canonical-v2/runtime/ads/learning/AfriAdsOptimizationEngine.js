/**
 * AfriAds Optimization Engine
 *
 * OWNER:
 * Automated campaign improvement.
 */

const AfriAdsOptimizationEngine = {

  optimize(signal){

    return {
      campaignId:signal.campaignId,
      action:signal.signal
    };

  }

};

export default AfriAdsOptimizationEngine;
