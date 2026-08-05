import AFDS008AfriDebugIntelligenceOrchestrationManifest from "../manifests/AFDS008AfriDebugIntelligenceOrchestrationManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS008AfriDebugIntelligenceOrchestrationManifest
    );

  console.log(
    "AFDS-008 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
