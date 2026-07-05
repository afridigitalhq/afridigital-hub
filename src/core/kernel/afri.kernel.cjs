const fs = require('fs');

// Load architecture lock
const lock = fs.readFileSync('src/core/architecture.lock', 'utf8');

// Core kernel state
const KERNEL = {
  engine: 'AfriVision',
  ui: 'AfriCCTV',
  modules: {
    vision: {
      engine: 'AfriVision',
      ui: 'AfriCCTV'
    }
  }
};

// Strict resolver (single entry point)
function resolve(moduleName) {
  return KERNEL.modules[moduleName] || null;
}

// Guard: prevent unknown modules
function register(name, config) {
  if (KERNEL.modules[name]) {
    console.log('🛡️ MODULE ALREADY EXISTS:', name);
    return;
  }

  KERNEL.modules[name] = config;
  console.log('🧩 MODULE REGISTERED:', name);
}

// System status
function status() {
  return {
    engine: KERNEL.engine,
    ui: KERNEL.ui,
    modules: Object.keys(KERNEL.modules),
    locked: lock.includes('ARCHITECTURE LOCK ACTIVE')
  };
}

module.exports = {
  KERNEL,
  resolve,
  register,
  status
};
