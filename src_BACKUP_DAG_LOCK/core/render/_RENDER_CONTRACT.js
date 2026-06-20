export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const RENDER_CONTRACT = {
  mode: "DAG_SNAPSHOT_ONLY",
  rules: [
    "renderer must not mutate state",
    "renderer consumes DAGRuntime.graph() only",
    "physics is deterministic projection only",
    "no live UI state graphs allowed"
  ]
};
