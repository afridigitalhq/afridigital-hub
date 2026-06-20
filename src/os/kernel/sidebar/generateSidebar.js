import { dashboardRegistry } from "../../os/registry/dashboardRegistry";

export function generateSidebar() {
  return dashboardRegistry
    .sort((a, b) => a.priority - b.priority)
    .map(d => ({
      id: d.id,
      label: d.name,
      role: d.role
    }));
}
