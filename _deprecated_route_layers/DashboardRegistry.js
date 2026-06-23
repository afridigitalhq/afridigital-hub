export const UnifiedPluginRegistry = [
  { id: "dag", label: "DAG Control", icon: "🧠", cluster: "core", route: "/admin/dag" },
  { id: "events", label: "Event Stream", icon: "🔥", cluster: "core", route: "/admin/events" },
  { id: "sync", label: "Sync Cluster", icon: "⚡", cluster: "core", route: "/admin/sync" },
  { id: "ws", label: "WebSocket Monitor", icon: "📡", cluster: "core", route: "/admin/ws" },

  { id: "security", label: "Security", icon: "🛡", cluster: "governance", route: "/admin/security" },
  { id: "analytics", label: "Analytics", icon: "📊", cluster: "governance", route: "/admin/analytics" },

  { id: "afribank", label: "AfriBank", icon: "🏦", cluster: "finance", route: "/admin/bank" },
  { id: "afritshop", label: "AfriShop", icon: "🛒", cluster: "business", route: "/admin/shop" },
  { id: "africomms", label: "AfriComms", icon: "💬", cluster: "business", route: "/admin/comms" },

  { id: "control", label: "Control Tower", icon: "🎛", cluster: "core", route: "/admin/control" }
];
