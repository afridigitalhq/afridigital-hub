import AFDS002ExecutionTraceManifest from "../manifests/AFDS002ExecutionTraceManifest.js";
import AfriNucChainEngine from "../AfriNucChainEngine.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(
      AFDS002ExecutionTraceManifest
    );

  console.log(
    "AFDS-002 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run().catch(console.error);
