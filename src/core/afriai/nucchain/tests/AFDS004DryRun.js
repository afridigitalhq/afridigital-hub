import AFDS004AfriDebugCoreManifest from "../manifests/AFDS004AfriDebugCoreManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS004AfriDebugCoreManifest
    );

  console.log(
    "AFDS-004 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
