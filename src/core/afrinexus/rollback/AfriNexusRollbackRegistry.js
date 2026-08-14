const snapshots = new Map();

const AfriNexusRollbackRegistry = {

  create(record = {}) {
    const id = `ROLLBACK-${Date.now()}`;

    const snapshot = {
      id,
      missionId: record.missionId || null,
      target: record.target || "unknown",
      state: record.state || {},
      status: "READY",
      createdAt: Date.now()
    };

    snapshots.set(id, snapshot);

    return snapshot;
  },


  get(id) {
    return snapshots.get(id) || null;
  },


  list() {
    return Array.from(snapshots.values());
  },


  remove(id) {
    return snapshots.delete(id);
  }

};

export default AfriNexusRollbackRegistry;
