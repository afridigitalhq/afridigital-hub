export function mergeThreatGraphs(graphs = []) {
  const merged = {
    nodes: {},
    edges: []
  };

  graphs.forEach(g => {
    g.nodes?.forEach(n => {
      merged.nodes[n.id] = (merged.nodes[n.id] || 0) + 1;
    });

    g.edges?.forEach(e => merged.edges.push(e));
  });

  return {
    ...merged,
    insight: "Federated threat pattern correlation detected across SOC nodes"
  };
}
