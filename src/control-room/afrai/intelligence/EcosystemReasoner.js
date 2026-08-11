const EcosystemReasoner = {
  analyze(query = "") {
    const q = String(query).toLowerCase();

    return {
      intent: q,
      matchedModules: []
    };
  }
};

export default EcosystemReasoner;
