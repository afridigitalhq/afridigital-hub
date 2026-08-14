import AfriNexusEvidenceAdapterResolver from "./AfriNexusEvidenceAdapterResolver.js";

const AfriNexusInvestigationTargetBuilder = {

  build(capabilities = []) {

    return capabilities.map(item => ({
      name: item.file.split("/").pop().replace(".js",""),
      source: item.file,
      mode: "ecosystem",
      capabilities: item.capabilities,
      evidence: [
        {
          type: "capability_discovery",
          data: item
        },
        ...(AfriNexusEvidenceAdapterResolver.resolve(item)
          ? [
              {
                type: "runtime_evidence",
                data: AfriNexusEvidenceAdapterResolver.resolve(item)
              }
            ]
          : [])
      ]
    }));

  }

};

export default AfriNexusInvestigationTargetBuilder;
