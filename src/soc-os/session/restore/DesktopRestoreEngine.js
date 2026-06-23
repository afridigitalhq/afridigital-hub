export class DesktopRestoreEngine {
  constructor() {
    this.savedLayouts = new Map();
  }

  save(adminId, layout) {
    this.savedLayouts.set(adminId, {
      layout,
      savedAt: Date.now()
    });
  }

  load(adminId) {
    return this.savedLayouts.get(adminId)?.layout || null;
  }

  clear(adminId) {
    this.savedLayouts.delete(adminId);
  }
}
