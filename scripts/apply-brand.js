const fs = require('fs');
const path = require('path');

const brandPath = path.join(process.cwd(), 'src/core/brand/brand.registry.js');
const targetFile = path.join(process.cwd(), 'src/landing_v3/ecosystem/EcosystemGrid.jsx');

const brandFile = fs.readFileSync(brandPath, 'utf8');

const engineName = (brandFile.match(/engineName:\s*"([^"]+)"/) || [])[1] || "AfriVision";
const productName = (brandFile.match(/productName:\s*"([^"]+)"/) || [])[1] || "AfriMonitor";
const uiName = (brandFile.match(/uiName:\s*"([^"]+)"/) || [])[1] || "AfriMonitor";

let code = fs.readFileSync(targetFile, 'utf8');

// SAFE replacements only
code = code
  .replace(new RegExp(engineName, 'g'), uiName)
  .replace(/AfriVision/g, uiName);

fs.writeFileSync(targetFile, code);

console.log("🧱 BRAND APPLIED:");
console.log("engine =", engineName);
console.log("ui =", uiName);
console.log("product =", productName);
