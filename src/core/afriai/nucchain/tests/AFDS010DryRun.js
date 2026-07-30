import AFDS010AfriDebugGovernanceLearningMemoryManifest from "../manifests/AFDS010AfriDebugGovernanceLearningMemoryManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS010AfriDebugGovernanceLearningMemoryManifest
    );

  console.log(
    "AFDS-010 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
