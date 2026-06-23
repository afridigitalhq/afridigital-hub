import { dashboardRegistry } from "../registry/dashboardRegistry";
import { UnifiedPluginRegistry } from "../registry/UnifiedPluginRegistry";

export function getUnifiedSidebar() {
  const legacy = dashboardRegistry || [];
  const modern = UnifiedPluginRegistry?.getAll?.() || [];

  return [...legacy, ...modern].filter(Boolean);
}
