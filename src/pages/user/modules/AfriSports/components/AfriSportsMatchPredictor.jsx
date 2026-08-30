import { useMemo, useState } from "react";
import AfriSportsIdentity from "./AfriSportsIdentity";
import { AFRISPORTS_PRIMARY_NAVIGATION } from "../data/afriSportsCompetitionNavigation";

function matchId(match) {
  return match?.raw?.id ?? match?.id ?? `${match?.homeTeam}-${match?.awayTeam}`;
}

function teamName(match, side) {
  return match?.[side] ?? match?.[`${side}Team`] ?? match?.raw?.[side]?.name ?? side;
}

function competitionName(match) {
  return (
    match?.competition ??
    match?.league?.name ??
    match?.raw?.league?.name ??
    "Other"
  );
}

export default function AfriSportsMatchPredictor({
  fixtures = [],
  currentMatch = null,
  activeView = "live",
  onSelectView,
  matchCounts = {},
  onSelectMatch
}) {
  const [competition, setCompetition] = useState("ALL");
  const [selectedId, setSelectedId] = useState("");

  const competitions = useMemo(() => {
    const values = fixtures.map(competitionName).filter(Boolean);
    return ["ALL", ...Array.from(new Set(values))];
  }, [fixtures]);

  const matches = useMemo(() => {
    let filtered = fixtures;

    if (activeView === "live") {
      filtered = filtered.filter(match =>
        String(match?.status || "").toLowerCase().includes("live")
      );
    } else if (activeView === "today") {
      filtered = filtered.filter(match => {
        const value = match?.kickoff ? new Date(match.kickoff) : null;
        if (!value || Number.isNaN(value.getTime())) return false;
        const now = new Date();
        return value.toDateString() === now.toDateString();
      });
    } else if (activeView === "tomorrow") {
      filtered = filtered.filter(match => {
        const value = match?.kickoff ? new Date(match.kickoff) : null;
        if (!value || Number.isNaN(value.getTime())) return false;
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return value.toDateString() === tomorrow.toDateString();
      });
    }

    if (competition !== "ALL") {
      filtered = filtered.filter(match => competitionName(match) === competition);
    }

    return filtered;
  }, [fixtures, activeView, competition]);

  const selectedMatch = useMemo(
    () =>
      matches.find(match => matchId(match) === selectedId) ??
      currentMatch ??
      matches[0] ??
      null,
    [matches, selectedId, currentMatch]
  );

  const predictMatch = () => {
    if (selectedMatch) onSelectMatch?.(selectedMatch);
  };

  return (
    <section className="afrisports-predictor">
      <div className="afrisports-predictor-heading">
        <div>
          <span className="afrisports-kicker">AFRIAI MATCH PREDICTOR</span>
          <h2>🧠 Select a match for AfriAI</h2>
          <p>Choose a competition, then prepare a match for AfriAI prediction.</p>
        </div>
      </div>

      <div className="afrisports-primary-tabs" aria-label="AfriSports match filters">
        {AFRISPORTS_PRIMARY_NAVIGATION.map(item => {
          const count = matchCounts[item.id] ?? 0;

          return (
            <button
              key={item.id}
              type="button"
              className={`afrisports-primary-tab ${activeView === item.id ? "is-active" : ""}`}
              onClick={() => onSelectView?.(item.id)}
            >
              <span>{item.icon}</span>
              <strong>{item.label}</strong>
              {count > 0 && <small>{count}</small>}
            </button>
          );
        })}
      </div>

      <div className="afrisports-match-selector">
        <label htmlFor="afrisports-match-select">
          Select match <span>({matches.length} available)</span>
        </label>
        <select
          id="afrisports-match-select"
          value={selectedId}
          onChange={event => {
            const nextId = event.target.value;
            setSelectedId(nextId);
            const nextMatch =
              matches.find(match => String(matchId(match)) === nextId) ?? null;
            if (nextMatch) onSelectMatch?.(nextMatch);
          }}
          disabled={matches.length === 0}
          aria-label={`${activeView} AfriSports matches`}
        >
          <option value="">
            {matches.length > 0
              ? `Choose a ${activeView === "today" ? "today's" : activeView === "live" ? "live" : "available"} match`
              : activeView === "tomorrow"
                ? "No tomorrow matches available"
                : "No matches available"}
          </option>
          {matches.map(match => {
            const id = String(matchId(match));
            return (
              <option key={id} value={id}>
                {teamName(match, "homeTeam")} vs {teamName(match, "awayTeam")}
              </option>
            );
          })}
        </select>
      </div>

      <div className="afrisports-selected-match">
        {selectedMatch ? (
          <>
            <div className="afrisports-selected-team">
              <AfriSportsIdentity
                identity={selectedMatch.homeIdentity}
                size="sm"
                showName={false}
                showCountry={false}
              />
              <strong>{teamName(selectedMatch, "homeTeam")}</strong>
            </div>

            <div className="afrisports-selected-vs">VS</div>

            <div className="afrisports-selected-team">
              <AfriSportsIdentity
                identity={selectedMatch.awayIdentity}
                size="sm"
                showName={false}
                showCountry={false}
              />
              <strong>{teamName(selectedMatch, "awayTeam")}</strong>
            </div>

            <div className="afrisports-selected-match-meta">
              <span>{competitionName(selectedMatch)}</span>
              {selectedMatch.kickoff && <span>• {selectedMatch.kickoff}</span>}
            </div>
          </>
        ) : (
          <div className="afrisports-selected-match-meta afrisports-predictor-selection-empty">
            Select a match to prepare an AfriAI prediction.
          </div>
        )}

        <button
          type="button"
          className="afrisports-predict-button"
          onClick={predictMatch}
          disabled={!selectedMatch}
        >
          🧠 Predict
        </button>
      </div>
    </section>
  );
}
