import { KernelObservabilityRegistry } from "./KernelObservabilityRegistry";

export function bindKernelToSidebar(registry) {
  const items = Object.entries(KernelObservabilityRegistry).map(([key, value]) => ({
    id: key,
    label: key.toUpperCase(),
    route: value.route,
    cluster: "kernel-observability",
    locked: value.type !== "ADAPTER_VIEW"
  }));

  registry.registerBatch?.(items);
  return items;
}
