const rules = {
  security: [
    "Security",
    "security",
    "AccessGuard",
    "Trust",
    "Permission",
    "KillSwitch",
    "kill",
    "switch"
  ],
  approval: [
    "Approval",
    "approval",
    "Policy"
  ],
  evidence: [
    "Evidence",
    "Artifact",
    "Collector"
  ],
  gateway: [
    "Gateway",
    "gateway",
    "Connector"
  ],
  contract: [
    "Contract",
    "contract"
  ],
  runtime: [
    "Runtime",
    "runtime",
    "Lifecycle"
  ],
  registry: [
    "Registry",
    "registry"
  ]
};

const AfriNexusCapabilityClassifier = {

  classify(items = []) {

    return items.map(item => {

      const classifications = [];

      for (const [type, patterns] of Object.entries(rules)) {
        if (
          patterns.some(pattern =>
            item.file.includes(pattern)
          )
        ) {
          classifications.push(type);
        }
      }

      return {
        ...item,
        capabilities: classifications
      };

    }).filter(item => item.capabilities.length);

  }

};

export default AfriNexusCapabilityClassifier;
