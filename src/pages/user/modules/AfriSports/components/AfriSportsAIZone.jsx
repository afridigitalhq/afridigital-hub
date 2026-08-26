export default function AfriSportsAIZone({ analysis }) {
  return (
    <section className="afrisports-ai-zone">
      <div className="afrisports-ai-heading">
        <div>
          <span className="afrisports-kicker">AFRIAI SPORTS INTELLIGENCE</span>
          <h2>🧠 {analysis.title}</h2>
        </div>
        <span className="afrisports-ai-badge">AI INSIGHT</span>
      </div>

      <div className="afrisports-ai-grid">
        <div className="afrisports-ai-card">
          <span>Win Probability</span>
          <strong>{analysis.homeProbability}% — {analysis.awayProbability}%</strong>
          <small>Static UI preview</small>
        </div>

        <div className="afrisports-ai-card">
          <span>Expected Goals</span>
          <strong>{analysis.expectedGoals}</strong>
          <small>Static UI preview</small>
        </div>

        <div className="afrisports-ai-card afrisports-ai-insight">
          <span>AI Insight</span>
          <p>Match analysis and prediction experience will appear here.</p>
        </div>
      </div>
    </section>
  );
}
