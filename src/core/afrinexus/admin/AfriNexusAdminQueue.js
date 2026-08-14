const queue = new Map();

const AfriNexusAdminQueue = {

  submit(request = {}) {
    const id = request.id || `AFN-${Date.now()}`;

    const item = {
      id,
      status: "PENDING_REVIEW",
      priority: request.priority || "normal",
      source: request.source || "unknown",
      target: request.target || "unknown",
      message: request.message || "",
      createdAt: Date.now()
    };

    queue.set(id, item);

    return item;
  },


  approve(id, admin = "admin") {
    const item = queue.get(id);

    if (!item) return null;

    const updated = {
      ...item,
      status:"APPROVED",
      approvedBy:admin,
      approvedAt:Date.now()
    };

    queue.set(id, updated);

    return updated;
  },


  reject(id, reason = "Rejected") {
    const item = queue.get(id);

    if (!item) return null;

    const updated = {
      ...item,
      status:"REJECTED",
      reason,
      rejectedAt:Date.now()
    };

    queue.set(id, updated);

    return updated;
  },


  list() {
    return Array.from(queue.values());
  }

};


export default AfriNexusAdminQueue;
