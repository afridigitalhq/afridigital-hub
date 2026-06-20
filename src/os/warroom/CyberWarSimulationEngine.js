export function simulateCyberWar({ nodes = [], intensity = 0.5 }) {
  return nodes.map((n) => ({
    nodeId: n.id,
    side: Math.random() > 0.5 ? "ATTACKER" : "DEFENDER",
    pressure: Math.random() * intensity,
    status:
      Math.random() > 0.7
        ? "BREACH RISK"
        : "STABLE",
    projectedSpread: Math.random() * 100
  }));
}
