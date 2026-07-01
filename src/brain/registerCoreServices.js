import BrainServiceRegistry from "./BrainServiceRegistry.js";

export function registerCoreServices(services = {}) {
  const {
    runtime,
    orchestrator,
    eventBus,
    brainKernel,
    systemState,
    decisionRouter
  } = services;

  if (runtime) BrainServiceRegistry.register("runtime", runtime);
  if (orchestrator) BrainServiceRegistry.register("orchestrator", orchestrator);
  if (eventBus) BrainServiceRegistry.register("eventBus", eventBus);
  if (brainKernel) BrainServiceRegistry.register("brainKernel", brainKernel);
  if (systemState) BrainServiceRegistry.register("systemState", systemState);
  if (decisionRouter) BrainServiceRegistry.register("decisionRouter", decisionRouter);

  return BrainServiceRegistry.status();
}

export default registerCoreServices;
