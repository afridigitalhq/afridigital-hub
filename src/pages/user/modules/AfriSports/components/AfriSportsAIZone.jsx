export default function AfriSportsAIZone({ analysis, prediction }) {
  const probabilities = prediction?.probabilities || {};
  const homeProbability = probabilities.home ?? analysis?.homeProbability ?? 0;
  const drawProbability = probabilities.draw ?? 0;
  const awayProbability = probabilities.away ?? analysis?.awayProbability ?? 0;
  const hasPrediction = Boolean(prediction);

  return (
    <section className="afrisports-ai-zone">
      <div className="afrisports-ai-heading">
        <div>
          <span className="afrisports-kicker">AFRIAI SPORTS INTELLIGENCE</span>
          <h2>🧠 {prediction?.model || analysis?.title || "AfriAI Match Analysis"}</h2>
        </div>
        <span className="afrisports-ai-badge">
          {hasPrediction ? "LIVE AI PREDICTION" : "AI INSIGHT"}
        </span>
      </div>

      <div className="afrisports-ai-grid">
        <div className="afrisports-ai-card">
          <span>Win Probability</span>
          <strong>{homeProbability}% — {drawProbability}% — {awayProbability}%</strong>
          <small>
            {prediction?.match
              ? `${prediction.match} • Home / Draw / Away`
              : "Awaiting match prediction"}
          </small>
        </div>

        <div className="afrisports-ai-card">
          <span>Expected Goals</span>
          <strong>{prediction?.expectedGoals ?? analysis?.expectedGoals ?? "--"}</strong>
          <small>
            {prediction?.confidence
              ? `${prediction.confidence}% model confidence`
              : "Prediction confidence unavailable"}
          </small>
        </div>

        <div className="afrisports-ai-card afrisports-ai-insight">
          <span>AI Prediction</span>
          <p>
            {prediction?.prediction
              ? `${prediction.prediction} is the current AfriAI prediction for ${prediction.match}.`
              : "Match analysis and prediction will appear when the live prediction is available."}
          </p>
          {prediction?.factors?.length ? (
            <small>{prediction.factors.join(" • ")}</small>
          ) : null}
        </div>
      </div>
    </section>
  );
}
