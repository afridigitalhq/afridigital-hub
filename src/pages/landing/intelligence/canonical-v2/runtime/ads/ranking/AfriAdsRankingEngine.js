/**
 * AfriAds Ranking Engine
 *
 * OWNER:
 * AfriAds intelligence ranking layer.
 *
 * RULE:
 * Optimize performance while preserving discovery.
 */

import AfriAdsVisibilityScore from "./AfriAdsVisibilityScore";

const AfriAdsRankingEngine = {

  rank(campaigns=[]){

    return campaigns
      .map(campaign=>({
        ...campaign,
        visibilityScore:
          AfriAdsVisibilityScore.calculate(campaign)
      }))
      .sort(
        (a,b)=>
          b.visibilityScore-a.visibilityScore
      );

  }

};

export default AfriAdsRankingEngine;
