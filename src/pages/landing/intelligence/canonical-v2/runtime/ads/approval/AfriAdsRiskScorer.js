/**
 * AfriAds Risk Scorer
 *
 * OWNER:
 * Campaign safety intelligence.
 */

const AfriAdsRiskScorer = {

  score(campaign){

    let score = 100;

    if(!campaign.media) score -= 20;
    if(!campaign.destination) score -= 20;
    if(!campaign.provider) score -= 10;

    return Math.max(score,0);

  }

};

export default AfriAdsRiskScorer;
