/**
 * AfriBoost Proof Submission Engine V1
 * Handles worker evidence submission before reward approval
 */

const AfriBoostProofSubmissionEngine = {

  submit(data){

    return {
      taskId:data.taskId,
      workerId:data.workerId,
      media:data.media || [],
      links:data.links || [],
      status:"PENDING_REVIEW"
    };

  },

  supportedProof(){

    return [
      "IMAGE",
      "VIDEO",
      "SOCIAL_LINK",
      "TEXT_EVIDENCE"
    ];

  }

};

export default AfriBoostProofSubmissionEngine;
