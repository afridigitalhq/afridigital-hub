/**
 * AfriBoost Campaign Owner Approval Engine V1
 * Owner validation with automatic protection timeout
 */

const AfriBoostCampaignOwnerApprovalEngine = {

  createRequest(data){

    return {
      submissionId:data.submissionId,
      campaignOwner:data.campaignOwner,
      workerId:data.workerId,
      status:"OWNER_REVIEW",
      expiresAt:Date.now() + (24 * 60 * 60 * 1000)
    };

  },

  approve(){

    return {
      status:"APPROVED",
      reward:"READY_FOR_RELEASE"
    };

  },

  reject(reason){

    return {
      status:"REJECTED",
      reason
    };

  },

  autoApprove(){

    return {
      status:"AUTO_APPROVED",
      reason:"OWNER_TIMEOUT_24H",
      reward:"READY_FOR_RELEASE"
    };

  }

};

export default AfriBoostCampaignOwnerApprovalEngine;
