export const UnifiedPluginRegistry = [
  { id: "dag-control", label: "DAG Control", icon: "🧠", route: "/admin/dag", cluster: "core", component: "DagDashboard" },
  { id: "event-stream", label: "Event Stream", icon: "🔥", route: "/admin/events", cluster: "core", component: "EventStreamDashboard" },
  { id: "sync-cluster", label: "Sync Cluster", icon: "⚡", route: "/admin/sync", cluster: "core", component: "SyncDashboard" },
  { id: "security", label: "Security & Fraud", icon: "🛡", route: "/admin/security", cluster: "governance", component: "SecurityDashboard" },
  { id: "afribank", label: "AfriBank", icon: "🏦", route: "/admin/bank", cluster: "finance", component: "AfriBankDashboard" },
  { id: "afritshop", label: "AfriShop", icon: "🛒", route: "/admin/shop", cluster: "business", component: "AfriShopDashboard" }
];
