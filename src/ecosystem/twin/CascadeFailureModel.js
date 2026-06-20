// 🌍 Cross-System Failure Cascade Model
export class CascadeFailureModel {
  constructor() {
    this.graph = {
      WhatsApp: ["AfriAI", "AfriBank"],
      AfriBank: ["AfriScan", "FraudEngine"],
      AfriAI: ["Swarm", "WhatsApp"],
      AfriScan: ["Dashboard"],
      Swarm: ["DAGRuntime"]
    };
  }

  simulateFailure(origin) {
    const affected = new Set();
    const queue = [origin];

    while (queue.length) {
      const node = queue.shift();
      affected.add(node);

      const children = this.graph[node] || [];
      children.forEach(n => {
        if (!affected.has(n)) queue.push(n);
      });
    }

    return {
      origin,
      affectedSystems: [...affected],
      severity:
        affected.size > 5 ? "GLOBAL_CASCADE_RISK" :
        affected.size > 3 ? "REGIONAL_IMPACT" :
        "LOCALIZED"
    };
  }
}
