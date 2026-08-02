import { afriRuntimeRegistry } from "./AfriRuntimeRegistry.js";

export function bootstrapRuntime(modules = {}) {
  return {
    status: "bootstrapped",
    registry: afriRuntimeRegistry,
    modules
  };
}

export default bootstrapRuntime;
