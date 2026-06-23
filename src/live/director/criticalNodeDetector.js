export function detectCriticalNodes(nodes = [], edges = []) {
  const scoreMap = {};

  // 🔥 score nodes by connectivity (simple centrality proxy)
  edges.forEach((e) => {
    scoreMap[e.source] = (scoreMap[e.source] || 0) + 1;
    scoreMap[e.target] = (scoreMap[e.target] || 0) + 1;
  });

  return nodes
    .map((n) => ({
      ...n,
      _score: scoreMap[n.id] || 0
    }))
    .sort((a, b) => b._score - a._score);
}
