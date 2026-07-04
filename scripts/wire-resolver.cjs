const fs = require('fs');

const file = 'src/landing_v3/registry/landing.registry.js';

let code = fs.readFileSync(file, 'utf8');

// safe guard
if (!code.includes('resolveModule')) {
  code = "import { resolveModule } from '../../../core/authority/module.authority.cjs';\n" + code;
}

// safe replacements (no escaping hell)
code = code.replaceAll(
  'AfriVision',
  'resolveModule("vision")?.engine || "AfriVision"'
);

code = code.replaceAll(
  'AfriMonitor',
  'resolveModule("vision")?.ui || "AfriMonitor"'
);

fs.writeFileSync(file, code);

console.log('🔗 RESOLVER WIRED SAFELY');
