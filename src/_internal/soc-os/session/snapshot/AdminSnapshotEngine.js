export class AdminSnapshotEngine {
  constructor() {
    this.snapshots = new Map(); // adminId → snapshot
  }

  capture(adminId, state) {
    const snapshot = {
      timestamp: Date.now(),
      workspace: state.workspace,
      windows: state.windows,
      layout: state.layout
    };

    this.snapshots.set(adminId, snapshot);
    return snapshot;
  }

  restore(adminId) {
    return this.snapshots.get(adminId) || null;
  }
}
