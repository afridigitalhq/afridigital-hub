import ModuleRegistry from "../ModuleRegistry";

export const UnifiedPluginRegistry = ModuleRegistry.getAll().map(([id,module]) => ({
  id,
  label: module.label || id,
  icon: module.icon || "🧩"
}));
