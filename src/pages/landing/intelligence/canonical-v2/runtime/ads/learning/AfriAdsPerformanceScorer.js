/**
 * AfriAds Performance Scorer
 *
 * OWNER:
 * Campaign intelligence layer.
 *
 * RULE:
 * Performance determines future visibility.
 */

const AfriAdsPerformanceScorer = {

  score(metrics={}){

    const impressions = metrics.impressions || 0;
    const clicks = metrics.clicks || 0;
    const conversions = metrics.conversions || 0;

    const ctr = impressions
      ? (clicks / impressions) * 100
      : 0;

    const conversionRate = clicks
      ? (conversions / clicks) * 100
      : 0;

    return {
      ctr,
      conversionRate,
      performanceScore:
        Math.round(
          (ctr * 0.4) +
          (conversionRate * 0.6)
        )
    };

  }

};

export default AfriAdsPerformanceScorer;
