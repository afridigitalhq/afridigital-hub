import ImportReplacementTransformer from "./src/core/afriai/nucchain/transformers/ImportReplacementTransformer.js";

const result = ImportReplacementTransformer.transform({
  content:'import { AfriProducts } from "./registry/AfriProductRegistry.js";',
  from:"./registry/AfriProductRegistry.js",
  to:"./registry/ProductRegistry.js"
});

console.log(JSON.stringify({
  transformed:result.transformed,
  updated:result.updated
},null,2));
