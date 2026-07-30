import AFDS008AfriDebugAutonomousRepairOrchestrationManifest from "../manifests/AFDS008AfriDebugAutonomousRepairOrchestrationManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS008AfriDebugAutonomousRepairOrchestrationManifest
    );

  console.log(
    "AFDS-008 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
