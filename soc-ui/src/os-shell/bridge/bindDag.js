export function bindDag(dagRuntime, osBridge) {
  osBridge.subscribe((event) => {
    if (event.node) {
      dagRuntime.updateNode(event.node);
    }

    if (event.type === "ATTACK") {
      dagRuntime.highlightPath(event.path || []);
    }
  });
}
