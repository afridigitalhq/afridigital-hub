
const ModuleContract = {
  vision: {
    engine: 'AfriVision',
    ui: 'AfriCCTV',
    stream: true
  }
};

function getModule(name) {
  return ModuleContract[name] || null;
}

module.exports = { ModuleContract, getModule };
