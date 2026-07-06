
export default class StreamResolutionGovernor {

  static resolve(event, userPreference = "MEDIUM", policy = null) {

    const baseProfiles = {
      LOW: {
        frameRate: 5,
        compression: 3,
        quality: "low"
      },
      MEDIUM: {
        frameRate: 15,
        compression: 2,
        quality: "medium"
      },
      HIGH: {
        frameRate: 30,
        compression: 1,
        quality: "high"
      }
    };

    // 1. start from user preference
    let selected = baseProfiles[userPreference?.toUpperCase()] 
      || baseProfiles.MEDIUM;

    // 2. policy override layer (critical control)
    if (policy) {

      // cost control override
      if (policy.forceLowCost) {
        selected = baseProfiles.LOW;
      }

      // premium override
      if (policy.allowPremium && userPreference?.toUpperCase() === "HIGH") {
        selected = baseProfiles.HIGH;
      }

      // risk-based downgrade
      if (policy.risk === "high") {
        selected = baseProfiles.LOW;
      }

      // medium safety fallback
      if (policy.risk === "medium" && userPreference === "HIGH") {
        selected = baseProfiles.MEDIUM;
      }
    }

    return {
      ...event,
      resolutionMode: userPreference?.toUpperCase() || "MEDIUM",
      frameRate: selected.frameRate,
      compression: selected.compression,
      qualityTier: selected.quality,
      costMultiplier: selected.compression
    };
  }
}
