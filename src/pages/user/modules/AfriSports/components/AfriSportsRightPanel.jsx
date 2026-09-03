import { useState } from "react";
import AfriSportsIdentity from "./AfriSportsIdentity";

export default function AfriSportsRightPanel({ match, standings = [] }) {
  const [showDetails, setShowDetails] = useState(false);
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

      <button
            type="button"
            className="afrisports-secondary-action"
            onClick={() => setShowDetails(value => !value)}
          >
            {showDetails ? "Hide Match Details" : "View Match Details"}
          </button>

          {showDetails && (
            <div className="afrisports-match-details">
              <div className="afrisports-match-details-grid">
                <div>
                  <span>Competition</span>
                  <strong>{safeMatch.competition || "Football"}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{safeMatch.status || "Scheduled"}</strong>
                </div>

                <div>
                  <span>Kickoff</span>
                  <strong>{safeMatch.kickoff || "--"}</strong>
                </div>

                <div>
                  <span>Score</span>
                  <strong>{safeMatch.homeScore} - {safeMatch.awayScore}</strong>
                </div>
              </div>

              {safeMatch.events?.length > 0 && (
                <div className="afrisports-match-details-events">
                  <span>Match Events</span>
                  {safeMatch.events.map((event, index) => (
                    <div
                      className="afrisports-match-details-event"
                      key={event.id ?? event.event_id ?? index}
                    >
                      <strong>
                        {event.minute ?? event.time ?? event.elapsed ?? "--"}
                      </strong>
                      <span>
                        {event.type ||
                          event.event_type ||
                          event.detail ||
                          event.description ||
                          "Match event"}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {safeMatch.raw?.venue && (
                <div className="afrisports-match-details-venue">
                  <span>Venue</span>
                  <strong>
                    {typeof safeMatch.raw.venue === "string"
                      ? safeMatch.raw.venue
                      : safeMatch.raw.venue?.name || "--"}
                  </strong>
                </div>
              )}
            </div>
          )}

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
