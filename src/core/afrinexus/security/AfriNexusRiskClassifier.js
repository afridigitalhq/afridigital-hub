const AfriNexusRiskClassifier = {

  classify(targets = []) {

    const names = targets.map(t => t.name);

    if (names.includes("ExternalAIGateway")) {
      return {
        risk: "high",
        reason: "external_ai_gateway_operation"
      };
    }

    return {
      risk: "standard",
      reason: "default_mission_risk"
    };
  }

};

export default AfriNexusRiskClassifier;
