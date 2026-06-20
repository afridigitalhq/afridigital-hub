export class DependencyCollapseSimulator {
  constructor(dependencies = {}) {
    // module -> dependent modules
    this.dependencies = dependencies;
  }

  simulateFailure(module) {
    const affected = new Set();
    const queue = [module];

    while (queue.length) {
      const current = queue.shift();
      affected.add(current);

      const dependents = this.dependencies[current] || [];
      dependents.forEach(dep => {
        if (!affected.has(dep)) {
          queue.push(dep);
        }
      });
    }

    return {
      failedModule: module,
      affectedSystems: Array.from(affected),
      severity: affected.size > 5 ? "CRITICAL" : "MEDIUM"
    };
  }
}
