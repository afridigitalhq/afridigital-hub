export class TaskbarFluentEngine {
  constructor() {
    this.pinned = [];
    this.active = null;
  }

  pin(app) {
    if (!this.pinned.includes(app)) {
      this.pinned.push(app);
    }
  }

  setActive(app) {
    this.active = app;
  }

  getState() {
    return {
      pinned: this.pinned,
      active: this.active
    };
  }
}
