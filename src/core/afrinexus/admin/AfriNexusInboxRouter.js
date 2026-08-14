import AfriNexusAdminInbox from "./AfriNexusAdminInbox.js";

const AfriNexusInboxRouter = {

  route(report = {}) {

    let inbox = "visitor";

    if (report.source === "client") {
      inbox = "client";
    }

    if (report.source === "watchdog") {
      inbox = "watchdog";
    }

    return AfriNexusAdminInbox.push({
      id: report.id,
      source: inbox,
      target: report.target || "unknown",
      message: report.message || "",
      priority: report.priority || "normal",
      artifact: report.artifact || null
    });
  },

  getInbox(type) {
    return AfriNexusAdminInbox.list(type);
  },

  summary() {
    return AfriNexusAdminInbox.summary();
  }

};

export default AfriNexusInboxRouter;
