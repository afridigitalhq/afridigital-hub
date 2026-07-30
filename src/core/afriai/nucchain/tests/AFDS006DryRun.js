import AFDS006AfriDebugRuntimeLayerManifest from "../manifests/AFDS006AfriDebugRuntimeLayerManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS006AfriDebugRuntimeLayerManifest
    );

  console.log(
    "AFDS-006 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
