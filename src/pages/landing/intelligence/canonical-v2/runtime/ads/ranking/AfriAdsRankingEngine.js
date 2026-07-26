/**
 * AfriAds Ranking Engine
 *
 * OWNER:
 * AfriAds intelligence ranking layer.
 *
 * RULE:
 * Campaign visibility is determined by relevance,
 * performance, priority and freshness.
 */

const AfriAdsRankingEngine = {

  rank(campaigns=[]){

    return campaigns.sort(
      (a,b)=>{

        const scoreA =
          (a.priority || 0) +
          (a.performanceScore || 0) +
          (a.relevanceScore || 0);

        const scoreB =
          (b.priority || 0) +
          (b.performanceScore || 0) +
          (b.relevanceScore || 0);

        return scoreB - scoreA;

      }
    );

  }

};

export default AfriAdsRankingEngine;
