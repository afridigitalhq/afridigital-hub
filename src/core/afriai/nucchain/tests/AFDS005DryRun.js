import AFDS005AfriDebugCoreImplementationManifest from "../manifests/AFDS005AfriDebugCoreImplementationManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS005AfriDebugCoreImplementationManifest
    );

  console.log(
    "AFDS-005 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
