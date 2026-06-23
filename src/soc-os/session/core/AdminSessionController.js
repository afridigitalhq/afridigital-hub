import { AdminHibernationEngine } from "../hibernate/AdminHibernationEngine";
import { DesktopRestoreEngine } from "../restore/DesktopRestoreEngine";

export class AdminSessionController {
  constructor() {
    this.hibernate = new AdminHibernationEngine();
    this.restore = new DesktopRestoreEngine();

    this.activeSession = null;
  }

  startSession(adminId) {
    const restored = this.hibernate.resume(adminId);

    if (restored) {
      this.activeSession = restored;
      return restored;
    }

    this.activeSession = {
      adminId,
      workspace: "warroom",
      windows: [],
      layout: {}
    };

    return this.activeSession;
  }

  updateSession(state) {
    this.activeSession = state;
  }

  hibernate(adminId) {
    return this.hibernate.hibernate(adminId, this.activeSession);
  }

  saveLayout(adminId, layout) {
    this.restore.save(adminId, layout);
  }

  loadLayout(adminId) {
    return this.restore.load(adminId);
  }
}
