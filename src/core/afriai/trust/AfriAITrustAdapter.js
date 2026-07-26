const AfriAITrustAdapter = {

  buildSignals(user){

    return {
      userId:user.userId,
      aiInteractions:user.aiInteractions || 0,
      successfulTasks:user.successfulTasks || 0,
      feedbackScore:user.feedbackScore || 0,
      policyViolations:user.policyViolations || 0,
      verifiedIdentity:user.verifiedIdentity || false,
      ecosystemActivity:user.ecosystemActivity || 0
    };

  }

};

export default AfriAITrustAdapter;
