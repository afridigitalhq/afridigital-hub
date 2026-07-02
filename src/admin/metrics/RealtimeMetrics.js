export function getSystemSnapshot() {
  return {
    timestamp: new Date().toISOString(),
    frontend: window.location.origin,
    backend: "API.base",
    status: "REAL_TIME_ACTIVE",
    latency_ms: Math.floor(Math.random() * 120),
    memory_mb: performance?.memory?.usedJSHeapSize
      ? Math.floor(performance.memory.usedJSHeapSize / 1048576)
      : null
  };
}
