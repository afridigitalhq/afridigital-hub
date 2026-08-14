const AfriNexusCapabilityReport = {

 generate(capabilities = []) {

  const groups = {};

  for (const item of capabilities) {

    for (const capability of item.capabilities) {

      if (!groups[capability]) {
        groups[capability] = [];
      }

      groups[capability].push(item.file);

    }

  }

  return {
    type: "AFRINEXUS_CAPABILITY_REPORT",
    generatedAt: Date.now(),
    summary: {
      capabilities: Object.keys(groups),
      totalFiles: capabilities.length
    },
    groups
  };

 }

};

export default AfriNexusCapabilityReport;
