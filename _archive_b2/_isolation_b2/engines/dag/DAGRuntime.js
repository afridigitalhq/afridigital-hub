// AFRIKERNEL DAGRuntime (CLEAN REWRITE - STABLE CORE)

export class AfriKernelDAG {
  constructor() {
    this.timeline = [];
    this.nodes = new Map();
    this.edges = [];
    this.state = this.createInitialState();
  }

  emit(event) {
    if (!event || typeof event !== "object") return null;

    const node = {
      ...event,
      id: event.id || `${Date.now()}-${Math.random()}`,
      ts: Date.now()
    };

    this.timeline.push(node);
    this.nodes.set(node.id, node);

    const prev = this.timeline[this.timeline.length - 2];
    if (prev) {
      this.edges.push({ from: prev.id, to: node.id });
    }

    this.state = this.reduce(this.state, node);
    return node;
  }

  replay(beforeTs) {
    return this.timeline.filter(e => e.ts <= beforeTs);
  }

  graph() {
    return {
      nodes: Array.from(this.nodes.values()),
      edges: this.edges
    };
  }

  createInitialState() {
    return {
      users: 0,
      stream: "idle",
      system: "active"
    };
  }

  reduce(state, event) {
    switch (event.type) {
      case "USER_CONNECTED":
        return { ...state, users: state.users + 1 };

      case "USER_DISCONNECTED":
        return { ...state, users: Math.max(state.users - 1, 0) };

      case "STREAM_READY":
        return { ...state, stream: "active" };

      case "STREAM_STOP":
        return { ...state, stream: "idle" };

      default:
        return state;
    }
  }
}

// SINGLETON SAFE EXPORT
export const dagRuntime = new AfriKernelDAG();
export const DAGRuntime = dagRuntime;
