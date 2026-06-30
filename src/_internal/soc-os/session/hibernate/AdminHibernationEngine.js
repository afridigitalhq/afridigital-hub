import { AdminSnapshotEngine } from "../snapshot/AdminSnapshotEngine";

export class AdminHibernationEngine {
  constructor() {
    this.snapshotEngine = new AdminSnapshotEngine();
    this.hibernateStore = new Map();
  }

  hibernate(adminId, state) {
    const snapshot = this.snapshotEngine.capture(adminId, state);

    this.hibernateStore.set(adminId, {
      snapshot,
      status: "HIBERNATED"
    });

    return snapshot;
  }

  resume(adminId) {
    const data = this.hibernateStore.get(adminId);

    if (!data) return null;

    return {
      ...data.snapshot,
      status: "RESUMED"
    };
  }

  isHibernated(adminId) {
    return this.hibernateStore.has(adminId);
  }
}
