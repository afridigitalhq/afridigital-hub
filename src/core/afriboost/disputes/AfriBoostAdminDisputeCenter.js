const AfriBoostAdminDisputeCenter = {

  createCase(submission){

    return {

      disputeId:
      "DSP-" +
      Math.random()
      .toString(36)
      .substring(2,10)
      .toUpperCase(),

      submissionId: submission.submissionId,

      campaignId: submission.campaignId,

      workerId: submission.workerId,

      ownerId: submission.ownerId,

      evidence: submission.proof || [],

      status:"OPEN",

      timeline:[
        {
          event:"DISPUTE_CREATED",
          timestamp:Date.now()
        }
      ]

    };

  },


  resolve(caseId,decision){

    return {

      caseId,

      decision,

      status:"RESOLVED",

      timestamp:Date.now()

    };

  }

};

export default AfriBoostAdminDisputeCenter;
