const fs = require('fs');

const file = 'src/landing_v3/streams/core/StreamRegistry.js';

let code = fs.readFileSync(file, 'utf8');

// safe abstraction layer (no shell parsing risk)
const registryMap = `
const MODULES = {
  vision: 'AfriVision',
  monitor: 'AfriMonitor'
};
`;

if (!code.includes('MODULES')) {
  code = registryMap + '\n' + code;
}

// safe replacements
code = code.replaceAll('AfriVision', 'MODULES.vision');
code = code.replaceAll('AfriMonitor', 'MODULES.monitor');

fs.writeFileSync(file, code);

console.log('🧱 MODULE REGISTRY HARDENED (SAFE MODE)');
