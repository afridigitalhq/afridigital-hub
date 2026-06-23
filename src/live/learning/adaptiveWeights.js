const weights = {
  diagnostic: 1,
  deploy: 1,
  simulation: 1
};

export function adjustWeights(outcomes = []) {
  const stats = {};

  outcomes.forEach((o) => {
    const key = o.eventType;
    stats[key] = stats[key] || { correct: 0, total: 0 };

    stats[key].total += 1;
    if (o.predicted && o.predicted.includes("deploy")) {
      stats[key].correct += 1;
    }
  });

  Object.keys(stats).forEach((k) => {
    const s = stats[k];
    const accuracy = s.correct / s.total;

    // 🧠 lightweight adaptation (NO logic overwrite)
    weights[k] = 0.5 + accuracy;
  });

  return weights;
}

export function getWeights() {
  return weights;
}
