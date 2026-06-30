export function buildThreatGraph(events = []) {
  const nodes = {};
  const edges = [];

  events.forEach(e => {
    const from = e.source || "external";
    const to = e.target || "system";

    nodes[from] = (nodes[from] || 0) + 1;
    nodes[to] = (nodes[to] || 0) + 1;

    edges.push({ from, to, weight: e.severity || 1 });
  });

  return {
    nodes,
    edges,
    insight: "Propagation detected across layered system boundaries"
  };
}
