import AfriSportsIdentity from "./AfriSportsIdentity";

export default function AfriSportsRightPanel({ match, standings = [] }) {
  const safeMatch = match || {
    status: "Loading",
    minute: "--",
    competition: "AfriSports Radar",
    homeTeam: "Loading",
    awayTeam: "Loading",
    homeScore: 0,
    awayScore: 0,
    homeIdentity: null,
    awayIdentity: null,
  };

  return (
    <aside className="afrisports-panel afrisports-right-panel">
      <div className="afrisports-panel-heading">
        <span>Match Centre</span>
        <span>📊</span>
      </div>

      <div className="afrisports-stat-card">
        <span>Current Match</span>

        <div className="afrisports-right-match-identities">
          <AfriSportsIdentity identity={safeMatch.homeIdentity} size="sm" />
          <span className="afrisports-right-vs">vs</span>
          <AfriSportsIdentity identity={safeMatch.awayIdentity} size="sm" />
        </div>

        <strong>
          {safeMatch.homeIdentity?.name || safeMatch.homeTeam} vs{" "}
          {safeMatch.awayIdentity?.name || safeMatch.awayTeam}
        </strong>
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

      {standings.length > 0 && (
        <div className="afrisports-standings">
          {standings.map((team, index) => (
            <div
              className="afrisports-standing-row"
              key={team.id ?? team.team_id ?? team.name ?? index}
            >
              <span>{index + 1}</span>
              <AfriSportsIdentity
                identity={team.identity || team.teamIdentity || team}
                size="xs"
              />
              <strong>{team.points ?? team.pts ?? 0}</strong>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
