import AfriNucChainEngine from "../../src/core/afriai/nucchain/AfriNucChainEngine.js";

const manifest = {
  id: process.argv[2] || "AFRI-NUCCHAIN-BUILD",
  source: process.argv[3] || null,
  target: process.argv[4] || "src/core/afriai/nucchain/generated",
  modules: []
};

const result = await AfriNucChainEngine.execute(manifest);

console.log(JSON.stringify(result.completion, null, 2));
