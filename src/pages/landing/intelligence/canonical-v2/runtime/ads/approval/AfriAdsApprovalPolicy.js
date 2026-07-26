/**
 * AfriAds Approval Policy
 *
 * OWNER:
 * Approval rules layer.
 *
 * RULE:
 * Risk determines approval path.
 */

const AfriAdsApprovalPolicy = {

  evaluate(riskScore){

    if(riskScore >= 85){
      return "AUTO_APPROVE";
    }

    if(riskScore >= 50){
      return "ADMIN_REVIEW";
    }

    return "BLOCK";

  }

};

export default AfriAdsApprovalPolicy;
