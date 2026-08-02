import AfriNucChainEngine from "./src/core/afriai/nucchain/AfriNucChainEngine.js";

const result = await AfriNucChainEngine.execute({
  id:"AFRI-NUCCHAIN-INTEGRATION-001",
  source:"AfriDigital",
  target:"src/core/afriai/nucchain/generated-real/integration-test",
  modules:[
    "IntegrationModule",
    "RuntimeModule"
  ],
  files:[],
  artifacts:[],
  mode:"MIGRATION"
});

console.log(JSON.stringify({
  status: result.completion?.status,
  executed: result.execution?.executed,
  artifacts: result.artifact?.files?.length,
  traceCount: result.trace?.length
},null,2));
