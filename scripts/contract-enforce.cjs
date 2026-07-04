const fs = require('fs');

const file = 'src/core/contracts/module.contract.js';

// read current contract (optional fallback-safe)
let base = {};
if (fs.existsSync(file)) {
  base = require('../' + file);
}

const patched = `
const ModuleContract = {
  vision: {
    engine: 'AfriVision',
    ui: 'AfriMonitor',
    stream: true
  }
};

function getModule(name) {
  return ModuleContract[name] || null;
}

module.exports = { ModuleContract, getModule };
`;

fs.writeFileSync(file.replace('.js', '.cjs'), patched);

console.log('🛡️ CONTRACT ENFORCEMENT ACTIVE');
