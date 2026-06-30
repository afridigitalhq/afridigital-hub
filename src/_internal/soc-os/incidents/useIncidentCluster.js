export function clusterIncidents(incidents = []) {
  const clusters = {};

  incidents.forEach(i => {
    const key = i.type || "unknown";

    if (!clusters[key]) clusters[key] = [];

    clusters[key].push(i);
  });

  return Object.entries(clusters).map(([type, items]) => ({
    type,
    severity: items.length,
    items
  }));
}
