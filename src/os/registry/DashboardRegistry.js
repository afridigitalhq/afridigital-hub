export class UnifiedPluginRegistry {
  constructor() {
    this.dashboards = new Map();
    this.active = null;
  }

  register(id, dashboard) {
    this.dashboards.set(id, dashboard);
  }

  getAll() {
    return Array.from(this.dashboards.entries());
  }

  activate(id) {
    this.active = id;
  }

  getActive() {
    return this.dashboards.get(this.active);
  }
}
