import AfriNexusRiskClassifier from "./AfriNexusRiskClassifier.js";

const AfriNexusSecurityPolicyEngine = {

  evaluate(targets = []) {

    const classification =
      AfriNexusRiskClassifier.classify(targets);

    const approvals =
      classification.risk === "critical"
        ? [
            "admin",
            "security",
            "owner"
          ]
        : classification.risk === "high"
        ? [
            "admin",
            "security"
          ]
        : [
            "admin"
          ];

    return {
      type: "AFRINEXUS_SECURITY_POLICY",
      risk: classification.risk,
      reason: classification.reason,
      requiredApprovals: approvals,
      executionAllowed: false,
      approvalRequired: true,
      timestamp: Date.now()
    };
  }

};

export default AfriNexusSecurityPolicyEngine;
