const { getModule } = require('../kernel/afri.registry.cjs');

function resolveModule(name) {
  return getModule(name);
}

module.exports = { resolveModule };
