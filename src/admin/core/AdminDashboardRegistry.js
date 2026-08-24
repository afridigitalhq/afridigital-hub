const AdminDashboardRegistry = {
  dashboards: new Map(),

  register(dashboard) {
    if (dashboard?.id) this.dashboards.set(dashboard.id, dashboard);
  },

  get(id) {
    return this.dashboards.get(id);
  },

  all() {
    return [...this.dashboards.values()];
  }
};

export default AdminDashboardRegistry;
