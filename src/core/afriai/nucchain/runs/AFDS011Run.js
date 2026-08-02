import AfriNucChainEngine from "../AfriNucChainEngine.js";
import AFDS011 from "../manifests/AFDS011ProductRegistryMigrationManifest.js";

const result = await AfriNucChainEngine.execute(AFDS011);

console.log(JSON.stringify({
  migration: result.completion,
  validation: result.validation.status,
  approval: result.approval.status,
  execution: result.execution.status
}, null, 2));
