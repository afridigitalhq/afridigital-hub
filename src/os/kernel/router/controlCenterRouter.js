import { dashboardRegistry } from "../../kernel/registry/dashboardRegistry";

export function resolveHomeDashboard() {
  // HOME RULE:
  // highest priority + system_observability = HOME

  const home = dashboardRegistry.find(
    d => d.role === "system_observability"
  );

  return home || dashboardRegistry[0];
}

export function getDashboardById(id) {
  return dashboardRegistry.find(d => d.id === id);
}

import GovernanceDashboard from "../../governance/dashboard/GovernanceDashboard";

export function bindGovernanceRoute() {
  return {
    id: "governance",
    route: "/admin/governance",
    component: GovernanceDashboard
  };
}
