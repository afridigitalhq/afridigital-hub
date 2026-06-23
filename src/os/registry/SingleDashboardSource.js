import { UnifiedPluginRegistry } from "./UnifiedPluginRegistry";

export function getActiveDashboards() {
  if (!UnifiedPluginRegistry) {
    return [];
  }
  return UnifiedPluginRegistry.getAll?.() || [];
}
