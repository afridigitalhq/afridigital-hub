export class OSRuntimeGovernor {
  constructor({ orchestrator, dag, registry, narrator }) {
    this.orchestrator = orchestrator;
    this.dag = dag;
    this.registry = registry;
    this.narrator = narrator;
    this.locked = true;
  }

  allow(event) {
    // ALL mutations must go through orchestrator
    if (!event || !event.source) return false;

    const allowedSources = [
      "OSRuntimeBootstrap",
      "OSOrchestrator",
      "DAGRuntime",
      "SystemEvent"
    ];

    return allowedSources.includes(event.source);
  }

  route(event) {
    if (!this.allow(event)) {
      console.warn("🚫 GOVERNOR BLOCKED EVENT:", event);
      return null;
    }

    const result = this.orchestrator?.handle(event);

    // side-effects only (no mutation authority)
    this.narrator?.speak?.(event);
    this.dag?.ingest?.(event);

    return result;
  }

  enforceSidebarLock(sidebarEvent) {
    if (sidebarEvent?.type === "STATE_MUTATION") {
      console.warn("🚫 SIDEBAR MUTATION BLOCKED");
      return false;
    }
    return true;
  }
}
