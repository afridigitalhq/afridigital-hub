import { dashboardRegistry } from "../../registry/dashboardRegistry";

export function registerGovernanceDashboard() {
  dashboardRegistry.push({
    id: "governance",
    label: "Governance Cockpit",
    icon: "🧠",
    cluster: "core",
    route: "/admin/governance"
  });

  return dashboardRegistry;
}
