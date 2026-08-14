const AfriNexusMissionScopeResolver = {

  resolve(targets = [], intents = []) {

    const debugTargets = [];
    const migrationTargets = [];
    const verificationTargets = [];

    intents.forEach((intent, index) => {

      const target = targets[index];

      if (intent.requiresAfriDebug) {
        debugTargets.push(target);
      }

      if (intent.action === "NUCCHAIN_ANALYSIS") {
        migrationTargets.push(target);
      }

      if (intent.requiresVerification) {
        verificationTargets.push(target);
      }

    });

    return {
      type: "AFRINEXUS_MISSION_SCOPE",
      mode: "MISSION",
      targets: targets.map(t => t.name),
      debugTargets: debugTargets.map(t => t.name),
      migrationTargets: migrationTargets.map(t => t.name),
      verificationTargets: verificationTargets.map(t => t.name),
      timestamp: Date.now()
    };

  }

};

export default AfriNexusMissionScopeResolver;
