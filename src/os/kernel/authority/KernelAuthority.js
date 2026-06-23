export function routeThroughKernel(kernel, event) {
  if (!kernel?.routeEvent) {
    throw new Error("KERNEL_MISSING_AUTHORITY");
  }

  // enforce single routing entry point
  return kernel.routeEvent(event);
}
