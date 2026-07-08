import React from "react";
import { resolveAdminPlugin } from "../../../plugins/admin/adminPluginRegistry";

export default function ViewRouter({ activeDashboard }) {
  const plugin = resolveAdminPlugin(activeDashboard);

  if (!plugin) {
    return <div>🧠 Workspace not found.</div>;
  }

  const Component = plugin.component;

  return (
    <React.Suspense fallback={<div>Loading workspace...</div>}>
      <Component />
    </React.Suspense>
  );
}
