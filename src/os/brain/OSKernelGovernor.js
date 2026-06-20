export class OSKernelGovernor {
  constructor({ brain, registry, dag, sidebar }) {
    this.brain = brain;
    this.registry = registry;
    this.dag = dag;
    this.sidebar = sidebar;
    this.lockedSystems = new Set();
  }

  handleEvent(event) {
    const decision = this.brain?.route?.(event);
    if (!decision) return;

    this.dag?.commit?.(event);
    this.sidebar?.sync?.(decision.ui);
    this.registry?.validate?.(decision.plugin);

    return decision;
  }

  registerSystem(name, system) {
    if (this.lockedSystems.has(name)) {
      throw new Error("Duplicate system blocked: " + name);
    }
    this.lockedSystems.add(name);
    this.registry.register(name, system);
  }
}
