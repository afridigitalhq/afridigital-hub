
const fs = require("fs");
const path = require("path");

const MODULE_DIR = path.join(__dirname, "../modules");

function loadModules() {
  if (!fs.existsSync(MODULE_DIR)) return [];

  return fs.readdirSync(MODULE_DIR)
    .filter(f => f.endsWith(".json"))
    .map(file => {
      try {
        return JSON.parse(
          fs.readFileSync(path.join(MODULE_DIR, file), "utf-8")
        );
      } catch (e) {
        return null;
      }
    })
    .filter(Boolean);
}

function buildRouteMap(modules) {
  return modules.reduce((acc, m) => {
    if (m?.route) acc[m.route] = m;
    return acc;
  }, {});
}

function buildSidebar(modules) {
  return modules.map(m => ({
    label: m?.sidebar?.label || m.id,
    icon: m?.sidebar?.icon || "📦",
    route: m.route
  }));
}

/**
 * 🔥 FIX: dual export (CJS + ESM compatibility)
 */
module.exports = {
  loadModules,
  buildRouteMap,
  buildSidebar
};

// ESM fallback safety
module.exports.default = module.exports;
