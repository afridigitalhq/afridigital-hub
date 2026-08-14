const AfriNexusMissionIntentClassifier = {

  classify(target = {}) {

    const capabilities = target.capabilities || [];
    const evidence = target.evidence || [];
    const name = target.name || "";

    let missionType = "INVESTIGATION";
    let action = "DEBUG_FIRST";
    let confidence = 0.5;


    // Security and control plane always debug first
    if (
      capabilities.includes("security") ||
      name.includes("KillSwitch")
    ) {
      missionType = "INVESTIGATION";
      action = "DEBUG_FIRST";
      confidence = 0.95;
    }


    // AI gateway infrastructure requires debugging before migration
    else if (
      capabilities.includes("gateway") ||
      name.includes("Gateway")
    ) {
      missionType = "INVESTIGATION";
      action = "DEBUG_FIRST";
      confidence = 0.9;
    }


    // Runtime evidence validation path
    else if (
      capabilities.includes("runtime") &&
      capabilities.includes("evidence")
    ) {
      missionType = "VERIFICATION";
      action = "VERIFY_ONLY";
      confidence = 0.9;
    }


    // Generic registries/contracts go to NucChain analysis
    else if (
      capabilities.includes("registry") ||
      capabilities.includes("contract")
    ) {
      missionType = "MIGRATION";
      action = "NUCCHAIN_ANALYSIS";
      confidence = 0.8;
    }


    return {
      target: name,
      missionType,
      action,
      confidence,
      evidenceCount: evidence.length,
      requiresAfriDebug: action === "DEBUG_FIRST",
      requiresVerification: action === "VERIFY_ONLY",
      requiresApproval: true
    };

  }

};

export default AfriNexusMissionIntentClassifier;
