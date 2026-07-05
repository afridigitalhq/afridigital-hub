const REGISTRY = {
  engine: "AfriVision",
  ui: "AfriCCTV",

  modules: {
    vision: {
      engine: "AfriVision",
      ui: "AfriCCTV",
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
