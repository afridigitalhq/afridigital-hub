import registerCoreServices from "./registerCoreServices.js";

export function bootstrapBrainServices(services = {}) {
  const status = registerCoreServices(services);

  return {
    status: "bootstrapped",
    registered: status.services,
    total: status.total,
    timestamp: Date.now()
  };
}

export default bootstrapBrainServices;
