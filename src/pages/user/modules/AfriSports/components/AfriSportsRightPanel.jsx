export default function AfriSportsRightPanel({ match }) {
  const safeMatch = match || {
    status:"Loading",
    minute:"--",
    competition:"AfriSports Radar",
    homeTeam:"Loading",
    awayTeam:"Loading",
    homeScore:0,
    awayScore:0
  };

  return (
    <aside className="afrisports-panel afrisports-right-panel">
      <div className="afrisports-panel-heading">
        <span>Match Centre</span>
        <span>📊</span>
      </div>

      <div className="afrisports-stat-card">
        <span>Current Match</span>
        <strong>{safeMatch.homeTeam} vs {safeMatch.awayTeam}</strong>
      </div>

      <div className="afrisports-stat-grid">
        <div>
          <span>Score</span>
          <strong>{safeMatch.homeScore} - {safeMatch.awayScore}</strong>
        </div>
        <div>
          <span>Match Time</span>
          <strong>{safeMatch.minute}</strong>
        </div>
      </div>

      <button type="button" className="afrisports-secondary-action">
        View Match Details
      </button>
    </aside>
  );
}
