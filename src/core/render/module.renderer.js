const { resolveModule } = require('../authority/module.authority.cjs');

function renderModule(key) {
  const mod = resolveModule(key);

  if (!mod) return null;

  return {
    id: key,
    engine: mod.engine,
    ui: mod.ui,
    stream: mod.stream,
    renderHint: `[${mod.ui}] powered by ${mod.engine}`
  };
}

module.exports = { renderModule };
