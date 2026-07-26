/**
 * AfriAds Autonomous Approval Engine
 *
 * OWNER:
 * AI campaign approval decision layer.
 *
 * RULE:
 * Safe campaigns flow automatically.
 * Exceptions go to admin.
 */

import AfriAdsRiskScorer from "./AfriAdsRiskScorer";
import AfriAdsApprovalPolicy from "./AfriAdsApprovalPolicy";

const AfriAdsApprovalEngine = {

  approve(campaign){

    const riskScore = AfriAdsRiskScorer.score(campaign);

    const decision =
      AfriAdsApprovalPolicy.evaluate(riskScore);

    return {
      ...campaign,
      riskScore,
      decision,
      published:decision==="AUTO_APPROVE"
    };

  }

};

export default AfriAdsApprovalEngine;
