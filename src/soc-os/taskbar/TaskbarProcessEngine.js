export class TaskbarProcessEngine {
  constructor() {
    this.apps = new Map();
  }

  register(appId) {
    this.apps.set(appId, {
      active: true,
      cpu: Math.random() * 40,
      memory: Math.random() * 800
    });
  }

  update(appId, data) {
    if (!this.apps.has(appId)) return;
    this.apps.set(appId, { ...this.apps.get(appId), ...data });
  }

  getSnapshot() {
    return Array.from(this.apps.entries()).map(([id, data]) => ({
      id,
      ...data
    }));
  }
}
