export class TaskbarUXEngine {

  constructor() {
    this.pinned = ["warroom", "admin", "dag"];
  }

  activate(app) {
    return {
      active: app,
      glow: true,
      timestamp: Date.now()
    };
  }
}
