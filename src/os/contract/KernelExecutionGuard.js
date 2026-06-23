export function assertKernelExecution(event) {
  if (!event || event.source !== "kernel") {
    console.warn("BLOCKED_NON_KERNEL_EXECUTION");
    return false;
  }
  return true;
}
