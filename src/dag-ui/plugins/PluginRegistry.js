class PluginRegistryClass {
  constructor() {
    this.plugins = [];
  }

  register(plugin) {
    this.plugins.push(plugin);
  }

  getAll() {
    return this.plugins;
  }

  find(id) {
    return this.plugins.find(p => p.id === id);
  }
}

export const PluginRegistry = new PluginRegistryClass();
