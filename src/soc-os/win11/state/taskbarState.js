export class TaskbarState {
  constructor() {
    this.pinned = ["warroom", "admin", "dag"];
    this.active = "warroom";
    this.openApps = new Set();
  }

  open(app) {
    this.openApps.add(app);
    this.active = app;
  }

  close(app) {
    this.openApps.delete(app);
  }

  setActive(app) {
    if (this.openApps.has(app)) {
      this.active = app;
    }
  }
}
