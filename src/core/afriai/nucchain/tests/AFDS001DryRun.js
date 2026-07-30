import AfriNucChainEngine from "../AfriNucChainEngine.js";
import AFDS001 from "../manifests/AFDS001Manifest.js";

async function run(){

  const result =
    await AfriNucChainEngine.execute(AFDS001);

  console.log(
    "AFDS-001 DRY RUN",
    JSON.stringify(result, null, 2)
  );

}

run();
