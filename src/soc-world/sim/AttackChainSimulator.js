export function simulateAttackChain(startNode, graph = {}) {

  const chain = [];
  let current = startNode;

  for (let i = 0; i < 5; i++) {
    const next = graph[current]?.next || `node-${i}`;

    chain.push({
      from: current,
      to: next,
      propagationTime: Math.random() * 1000,
      severity: Math.random() * 10
    });

    current = next;
  }

  return {
    chain,
    prediction: "Multi-node cascade likely within 3–5 hops",
    riskLevel: "HIGH"
  };
}
