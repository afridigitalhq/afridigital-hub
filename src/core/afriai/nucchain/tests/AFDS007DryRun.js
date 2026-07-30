import AFDS007AfriDebugIntelligenceLayerManifest from "../manifests/AFDS007AfriDebugIntelligenceLayerManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS007AfriDebugIntelligenceLayerManifest
    );

  console.log(
    "AFDS-007 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
