import AFDS011ProductRegistryMigrationManifest from "../manifests/AFDS011ProductRegistryMigrationManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS011ProductRegistryMigrationManifest
    );

  console.log(
    "AFDS-011 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
