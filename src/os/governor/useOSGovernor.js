import { OSRuntimeGovernor } from "./OSRuntimeGovernor";

export function createGovernorLayer({ orchestrator, dag, registry, narrator }) {
  const governor = new OSRuntimeGovernor({
    orchestrator,
    dag,
    registry,
    narrator
  });

  return {
    governor,
    dispatch: (event) => governor.route(event),
    validateSidebar: (e) => governor.enforceSidebarLock(e)
  };
}
