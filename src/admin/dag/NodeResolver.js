import { UnifiedPluginRegistry } from "./UnifiedPluginRegistry";

export function resolveNodeByRoute(route) {
  return UnifiedPluginRegistry.find((n) => n.route === route);
}

export function resolveNodeById(id) {
  return UnifiedPluginRegistry.find((n) => n.id === id);
}
