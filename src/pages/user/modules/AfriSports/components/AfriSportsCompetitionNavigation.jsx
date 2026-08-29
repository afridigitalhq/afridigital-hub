import {
  AFRISPORTS_PRIMARY_NAVIGATION,
  AFRISPORTS_COMPETITIONS
} from "../data/afriSportsCompetitionNavigation";

export default function AfriSportsCompetitionNavigation({
  activeView = "live",
  onSelect,
  matchCounts = {}
}) {
  return (
    <nav className="afrisports-competition-navigation" aria-label="AfriSports football navigation">
      <div className="afrisports-primary-tabs">
        {AFRISPORTS_PRIMARY_NAVIGATION.map(item => {
          const count = matchCounts[item.id] ?? 0;

          return (
            <button
              key={item.id}
              type="button"
              className={`afrisports-primary-tab ${activeView === item.id ? "is-active" : ""}`}
              onClick={() => onSelect?.(item.id)}
            >
              <span>{item.icon}</span>
              <strong>{item.label}</strong>
              {count > 0 && <small>{count}</small>}
            </button>
          );
        })}
      </div>

      {activeView === "all-competitions" && (
        <div className="afrisports-all-competitions">
          <div className="afrisports-navigation-heading">
            <span className="afrisports-kicker">COMPETITION CENTRE</span>
            <h2>All Competitions</h2>
            <p>Every supported competition stays visible, even when no match is currently available.</p>
          </div>

          <div className="afrisports-competition-grid">
            {AFRISPORTS_COMPETITIONS.map(competition => {
              const count = matchCounts[competition.key] ?? 0;

              return (
                <button
                  key={competition.key}
                  type="button"
                  className={`afrisports-competition-card ${count > 0 ? "has-matches" : ""}`}
                  onClick={() => onSelect?.(competition.key)}
                >
                  <span className="afrisports-competition-icon">🏆</span>
                  <span className="afrisports-competition-copy">
                    <strong>{competition.name}</strong>
                    <small>{competition.country} · {competition.shortName}</small>
                  </span>
                  <span className="afrisports-competition-status">
                    {count > 0 ? `${count} match${count === 1 ? "" : "es"}` : "Match not available"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
