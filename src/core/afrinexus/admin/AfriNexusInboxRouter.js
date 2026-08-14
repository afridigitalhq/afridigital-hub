const inboxes = {
  visitor: [],
  client: [],
  watchdog: []
};

const AfriNexusInboxRouter = {

  route(report = {}) {

    let inbox = "visitor";

    if (report.source === "client") {
      inbox = "client";
    }

    if (report.source === "watchdog") {
      inbox = "watchdog";
    }

    const item = {
      id:`AFN-${Date.now()}`,
      inbox,
      status:"PENDING_REVIEW",
      ...report,
      createdAt:Date.now()
    };

    inboxes[inbox].push(item);

    return item;
  },


  getInbox(type) {
    return inboxes[type] || [];
  },


  summary() {
    return {
      visitor: inboxes.visitor.length,
      client: inboxes.client.length,
      watchdog: inboxes.watchdog.length
    };
  }

};

export default AfriNexusInboxRouter;
