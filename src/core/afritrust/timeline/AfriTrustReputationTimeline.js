const AfriTrustReputationTimeline = {
  record(identityId,event){
    return {
      identityId,
      timestamp: Date.now(),
      event
    };
  }
};

export default AfriTrustReputationTimeline;
