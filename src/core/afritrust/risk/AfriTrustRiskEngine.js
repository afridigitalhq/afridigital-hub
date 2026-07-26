const AfriTrustRiskEngine = {
  evaluate(signals){
    return {
      riskLevel: "LOW",
      score: 0,
      flags: [],
      signals
    };
  }
};

export default AfriTrustRiskEngine;
