import * as afriRuntimeModuleRegistry from "../../runtime/modules/afriRuntimeModuleRegistry.js";
import * as afriRuntimeServiceRegistry from "../../runtime/services/afriRuntimeServiceRegistry.js";
import * as afriRuntimeFeatureRegistry from "../../runtime/features/afriRuntimeFeatureRegistry.js";
import * as afriRuntimeDependencyRegistry from "../../runtime/dependencies/afriRuntimeDependencyRegistry.js";

const runtimeModules = new Map();

export const afriRuntimeRegistry = {
  modules: afriRuntimeModuleRegistry,
  services: afriRuntimeServiceRegistry,
  features: afriRuntimeFeatureRegistry,
  dependencies: afriRuntimeDependencyRegistry,

  register(name, module) {
    runtimeModules.set(name, module);
  },

  get(name) {
    return runtimeModules.get(name);
  },

  has(name) {
    return runtimeModules.has(name);
  },

  list() {
    return [...runtimeModules.keys()];
  }
};

export default afriRuntimeRegistry;
