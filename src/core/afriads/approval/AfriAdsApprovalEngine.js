/**
 * AfriAds Approval Engine V1
 * Validates campaigns before distribution
 */

const AfriAdsApprovalEngine = {

  validate(campaign){

    const checks = {
      hasCreative: !!campaign.creative,
      hasDescription: !!campaign.description,
      hasBudget: !!campaign.budget,
      hasOwner: !!campaign.owner
    };

    const approved = Object.values(checks).every(Boolean);

    return {
      approved,
      checks,
      status: approved ? "APPROVED" : "PENDING_REVIEW"
    };

  }

};

export default AfriAdsApprovalEngine;
