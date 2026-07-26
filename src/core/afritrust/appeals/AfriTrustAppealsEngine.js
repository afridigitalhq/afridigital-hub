const AfriTrustAppealsEngine = {
  submit(appeal){
    return {
      appealId: `ATR-${Date.now()}`,
      status: "PENDING_REVIEW",
      submittedAt: Date.now(),
      ...appeal
    };
  }
};

export default AfriTrustAppealsEngine;
