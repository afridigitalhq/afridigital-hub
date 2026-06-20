export function kernelHealthCheck(dag) {
  return {
    nodes: dag?.graph?.().nodes?.length || 0,
    edges: dag?.graph?.().edges?.length || 0,
    status: "DAG_ONLY_RUNTIME_ACTIVE"
  };
}
