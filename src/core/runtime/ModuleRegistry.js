class ModuleRegistry {
  constructor() {
    this.modules = new Map();
  }

  register(name, module) {
    if (!this.modules.has(name)) this.modules.set(name, module);
  }

  get(name) {
    return this.modules.get(name);
  }

  getAll() {
    return [...this.modules.entries()];
  }
}

export default new ModuleRegistry();
