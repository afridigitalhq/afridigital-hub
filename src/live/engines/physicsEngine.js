export function propagate(nodes, edges, sourceId) {
  const affected = new Set([sourceId]);

  edges.forEach((e) => {
    if (e.source === sourceId) affected.add(e.target);
  });

  return nodes.map((n) =>
    affected.has(n.id)
      ? { ...n, data: { ...n.data, stress: 1 } }
      : n
  );
}
