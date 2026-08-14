import AfriDebugBatchRunner from "../afridebug/batches/AfriDebugBatchRunner.js";
import AfriNexusDiscoveryEngine from "./discovery/AfriNexusDiscoveryEngine.js";
import AfriNexusEvidencePackage from "./handover/AfriNexusEvidencePackage.js";
import AfriNexusBatchRegistry from "./batches/AfriNexusBatchRegistry.js";
import AfriFixBatchPlanner from "../afrifix/batches/AfriFixBatchPlanner.js";
import AfriBuildBatchPlanner from "../afribuild/batches/AfriBuildBatchPlanner.js";
import AfriNexusMissionIntentClassifier from "./mission/AfriNexusMissionIntentClassifier.js";
import AfriNexusMissionScopeResolver from "./mission/AfriNexusMissionScopeResolver.js";
import AfriNexusVerificationEngine from "./verification/AfriNexusVerificationEngine.js";

const AfriNexusCoordinator = {

  run(targets = [], request = {}) {

    const discovery = AfriNexusDiscoveryEngine.run();

    if (!targets.length) {
      targets = discovery.targets;
    }

    const missionIntent = targets.map(target =>
      AfriNexusMissionIntentClassifier.classify(target)
    );

    const missionScope =
      AfriNexusMissionScopeResolver.resolve(
        targets,
        missionIntent
      );

    const debugTargets =
      targets.filter(target =>
        missionScope.debugTargets.includes(target.name)
      );

    const batch = AfriNexusBatchRegistry.create({
      type: "AFRINEXUS_MISSION",
      request,
      targets,
      discovery: discovery.type,
      status: "INVESTIGATING"
    });


    const investigation = AfriDebugBatchRunner.run(debugTargets);


    const handovers = investigation.reports.map(report =>
      AfriNexusEvidencePackage.generate(report)
    );


    const afriFixPlan = AfriFixBatchPlanner.plan(
      handovers,
      {
        targets: targets.map(target => target.name)
      }
    );


    const afriBuildPlan = AfriBuildBatchPlanner.plan(
      afriFixPlan.repairs
    );

    const verification = AfriNexusVerificationEngine.prepare({
      batch,
      afriBuild: afriBuildPlan
    });


    return {
      type: "AFRINEXUS_ORCHESTRATION_RESULT",

      batch,

      request,

      discovery,
      missionIntent,

      missionScope,

      investigation,

      handovers,

      afriFix: afriFixPlan,

      afriBuild: afriBuildPlan,

      verification,

      approvalGate: {
        required: true,
        approved: false,
        stage: "human_review"
      },


      execution: {
        allowed: false,
        materialized: false
      }
    };
  }

};


export default AfriNexusCoordinator;
