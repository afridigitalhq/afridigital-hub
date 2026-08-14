const AfriNexusApprovalPolicy = {

  evaluate(context = {}) {

    const risk =
      context.risk || "standard";

    return {
      type: "AFRINEXUS_APPROVAL_POLICY",

      requiredApprovals:
        risk === "critical"
          ? [
              "user",
              "admin"
            ]
          : [
              "user"
            ],

      risk,

      executionAllowed:false,

      reason:
        "Human authorization required before materialization"
    };

  }

};

export default AfriNexusApprovalPolicy;
