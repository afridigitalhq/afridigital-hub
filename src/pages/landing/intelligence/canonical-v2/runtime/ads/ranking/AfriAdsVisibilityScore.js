/**
 * AfriAds Visibility Score
 *
 * OWNER:
 * Balanced advertisement ranking intelligence.
 *
 * RULE:
 * Performance improves visibility,
 * but discovery remains available.
 */

const AfriAdsVisibilityScore = {

  calculate(campaign={}){

    const performance =
      campaign.performanceScore || 0;

    const relevance =
      campaign.relevanceScore || 0;

    const priority =
      campaign.priority || 0;

    const freshness =
      campaign.freshnessScore || 0;

    const exploration =
      campaign.explorationScore || 0;

    return Math.round(
      (performance * 0.4) +
      (relevance * 0.25) +
      (priority * 0.15) +
      (freshness * 0.1) +
      (exploration * 0.1)
    );

  }

};

export default AfriAdsVisibilityScore;
