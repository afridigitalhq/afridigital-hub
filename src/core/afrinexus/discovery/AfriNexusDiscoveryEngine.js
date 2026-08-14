import AfriNexusCapabilityScanner from "./AfriNexusCapabilityScanner.js";
import AfriNexusCapabilityClassifier from "./AfriNexusCapabilityClassifier.js";
import AfriNexusCapabilityReport from "./AfriNexusCapabilityReport.js";
import AfriNexusInvestigationTargetBuilder from "./AfriNexusInvestigationTargetBuilder.js";

const AfriNexusDiscoveryEngine = {

  run() {

    const scan = AfriNexusCapabilityScanner.scan();

    const classified =
      AfriNexusCapabilityClassifier.classify(
        scan.capabilities
      );

    const report =
      AfriNexusCapabilityReport.generate(
        classified
      );

    const targets =
      AfriNexusInvestigationTargetBuilder.build(
        classified.filter(item =>
          item.capabilities.includes("security") ||
          item.capabilities.includes("approval") ||
          item.capabilities.includes("evidence") ||
          item.capabilities.includes("gateway") ||
          item.capabilities.includes("registry") ||
          item.capabilities.includes("runtime")
        )
      );

    return {
      type: "AFRINEXUS_DISCOVERY_RESULT",
      scan,
      classified,
      report,
      targets
    };

  }

};

export default AfriNexusDiscoveryEngine;
