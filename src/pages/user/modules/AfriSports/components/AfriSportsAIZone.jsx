export default function AfriSportsAIZone({ analysis, prediction }) {
  const probabilities = prediction?.probabilities || {};
  const homeProbability = probabilities.home ?? analysis?.homeProbability ?? 0;
  const drawProbability = probabilities.draw ?? 0;
  const awayProbability = probabilities.away ?? analysis?.awayProbability ?? 0;

  return (
    <section className="afrisports-ai-zone">
      <div className="afrisports-ai-heading">
        <div>
          <span className="afrisports-kicker">AFRIAI SPORTS INTELLIGENCE</span>
          <h2>🧠 {prediction?.model || analysis?.title || "AfriAI Match Analysis"}</h2>
        </div>
        <span className="afrisports-ai-badge">AI INSIGHT</span>
      </div>

      <div className="afrisports-ai-grid">
        <div className="afrisports-ai-card afrisports-ai-probabilities">
          <span>Win Probability</span>
          <div className="afrisports-probability-columns">
            <div>
              <small>HOME</small>
              <strong>{homeProbability}%</strong>
              <em>{prediction?.match?.split(" vs ")[0] || "Home"}</em>
            </div>
            <div>
              <small>DRAW</small>
              <strong>{drawProbability}%</strong>
              <em>Draw</em>
            </div>
            <div>
              <small>AWAY</small>
              <strong>{awayProbability}%</strong>
              <em>{prediction?.match?.split(" vs ")[1] || "Away"}</em>
            </div>
          </div>
        </div>

        <div className="afrisports-ai-card afrisports-ai-score">
          <span>Correct Score</span>
          <strong>{prediction?.correctScore || "--"}</strong>
          <small>
            {prediction?.correctScoreProbability
              ? `${prediction.correctScoreProbability}% scoreline probability`
              : "Scoreline prediction unavailable"}
          </small>
        </div>

        <div className="afrisports-ai-card">
          <span>Goals Prediction</span>
          <strong>
            {prediction?.totalGoals != null
              ? `${prediction.totalGoals >= 2.5 ? "Over" : "Under"} 2.5 Goals`
              : "Over/Under 2.5"}
          </strong>
          <small>
            {prediction?.totalGoals != null
              ? `Projected total: ${prediction.totalGoals} goals`
              : "Total-goals prediction unavailable"}
          </small>
        </div>

        <div className="afrisports-ai-card">
          <span>Predicted Outcome</span>
          <strong>
            {prediction?.prediction
              ? prediction.prediction === "Draw"
                ? "Draw"
                : `${prediction.prediction} to Win`
              : "--"}
          </strong>
          <small>
            {prediction?.confidence
              ? `${prediction.confidence}% model confidence`
              : "Prediction confidence unavailable"}
          </small>
        </div>

        <div className="afrisports-ai-card afrisports-ai-insight">
          <span>AI Insight</span>
          <p>
            {prediction?.prediction
              ? `${prediction.prediction} is the current AfriAI prediction for ${prediction.match}, based on the model scoreline and probability analysis.`
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
