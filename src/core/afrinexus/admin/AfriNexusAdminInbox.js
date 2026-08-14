import AfriNexusIdGenerator from "../utils/AfriNexusIdGenerator.js";

const queues = {
  visitor: [],
  client: [],
  watchdog: []
};

const AfriNexusAdminInbox = {
  push(report) {
    const item = {
      id: report.id || AfriNexusIdGenerator.create(),
      source: report.source || "visitor",
      target: report.target || "unknown",
      message: report.message || "",
      priority: report.priority || "normal",
      status: "PENDING_REVIEW",
      unread: true,
      createdAt: Date.now()
    };

    if (!queues[item.source]) {
      queues.visitor.push(item);
    } else {
      queues[item.source].push(item);
    }

    return item;
  },

  list(type = null) {
    if (type) return queues[type] || [];
    
    return {
      visitor: queues.visitor,
      client: queues.client,
      watchdog: queues.watchdog
    };
  },

  summary() {
    return {
      visitorInbox: queues.visitor.length,
      clientInbox: queues.client.length,
      watchdogInbox: queues.watchdog.length,
      total:
        queues.visitor.length +
        queues.client.length +
        queues.watchdog.length
    };
  }
};

export default AfriNexusAdminInbox;
