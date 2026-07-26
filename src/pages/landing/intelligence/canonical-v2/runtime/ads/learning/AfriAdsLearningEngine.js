/**
 * AfriAds Learning Engine
 *
 * OWNER:
 * Campaign optimization intelligence.
 *
 * RULE:
 * Analytics signals improve future ad delivery.
 */

import AfriAdsPerformanceScorer from "./AfriAdsPerformanceScorer";

const AfriAdsLearningEngine = {

  analyze(campaign){

    const score =
      AfriAdsPerformanceScorer.score(
        campaign.metrics
      );

    return {
      campaignId:campaign.id,
      score,
      signal:
        score.performanceScore > 70
          ? "INCREASE_VISIBILITY"
          : "OPTIMIZE_CAMPAIGN"
    };

  }

};

export default AfriAdsLearningEngine;
