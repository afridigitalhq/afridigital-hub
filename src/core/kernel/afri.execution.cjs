const AfriVisionEngineRaw = require('../afrivision/AfriVisionHybridEngine');
const { getSystem, getModule } = require('./afri.registry.cjs');

const AfriVisionEngine =
  AfriVisionEngineRaw?.default || AfriVisionEngineRaw;

class ExecutionKernel {
  constructor() {
    this.registry = { getSystem, getModule };
    this.engine = new AfriVisionEngine();

    // 🔧 DISCOVER ENGINE ENTRY POINT ONCE
    this.entry = this.detectEntryPoint();
  }

  detectEntryPoint() {
    const proto = Object.getPrototypeOf(this.engine);
    const methods = Object.getOwnPropertyNames(proto)
      .filter(m => m !== 'constructor');

    // Priority heuristics (safe ordering)
    const priority = [
      'processStream',
      'handleStream',
      'runStream',
      'executeStream',
      'execute',
      'start',
      'run'
    ];

    for (const p of priority) {
      if (methods.includes(p)) {
        return p;
      }
    }

    // fallback: first available method
    return methods[0];
  }

  execute(moduleName, payload = {}) {
    const module = this.registry.getModule(moduleName);

    if (!module) {
      throw new Error(`Module not registered: ${moduleName}`);
    }

    const fn = this.engine[this.entry];

    if (typeof fn !== 'function') {
      throw new Error(`Invalid engine entry point: ${this.entry}`);
    }

    return fn.call(this.engine, {
      module,
      payload,
      context: this.registry.getSystem()
    });
  }

  getRuntime(moduleName) {
    const module = this.registry.getModule(moduleName);

    if (!module) {
      throw new Error(`Module not registered: ${moduleName}`);
    }

    return this.engine;
  }


  status() {
    const proto = Object.getPrototypeOf(this.engine);

    return {
      engineAttached: !!this.engine,
      detectedEntry: this.entry,
      availableMethods: Object.getOwnPropertyNames(proto),
      registry: this.registry.getSystem(),
      mode: "KERNEL_EXECUTION_ACTIVE"
    };
  }
}

module.exports = ExecutionKernel;
