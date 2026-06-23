export const KernelObservabilityRegistry = {
  governance: {
    route: "/admin/governance",
    type: "READ_ONLY",
    source: "kernel.telemetry"
  },
  ci: {
    route: "/admin/ci",
    type: "READ_ONLY",
    source: "kernel.ci.stream"
  },
  whatsapp: {
    route: "/admin/whatsapp",
    type: "ADAPTER_VIEW",
    source: "kernel.adapters.whatsapp"
  },
  ledger: {
    route: "/admin/ledger",
    type: "IMMUTABLE_VIEW",
    source: "kernel.ledger"
  }
};
