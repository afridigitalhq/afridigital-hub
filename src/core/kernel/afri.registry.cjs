const REGISTRY = {
  engine: "AfriVision",
  ui: "AfriMonitor",

  modules: {
    vision: {
      engine: "AfriVision",
      ui: "AfriMonitor",
      type: "interaction-core",
      role: "ranking + scoring + behavioral stream processor"
    }
  }
};

function getModule(name) {
  return REGISTRY.modules[name] || null;
}

function getSystem() {
  return REGISTRY;
}

module.exports = { REGISTRY, getModule, getSystem };
