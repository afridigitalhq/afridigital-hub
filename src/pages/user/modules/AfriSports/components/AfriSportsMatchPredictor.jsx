import { useMemo, useState } from "react";

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
  onSelectMatch
}) {
  const [competition, setCompetition] = useState("ALL");
  const [selectedId, setSelectedId] = useState("");

  const competitions = useMemo(() => {
    const values = fixtures.map(competitionName).filter(Boolean);
    return ["ALL", ...Array.from(new Set(values))];
  }, [fixtures]);

  const matches = useMemo(() => {
    if (competition === "ALL") return fixtures;
    return fixtures.filter(match => competitionName(match) === competition);
  }, [fixtures, competition]);

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

      <div className="afrisports-league-tabs">
        <select
          value={competition}
          onChange={event => {
            setCompetition(event.target.value);
            setSelectedId("");
            onSelectMatch?.(null);
          }}
          aria-label="Select competition"
        >
          {competitions.map(item => (
            <option key={item} value={item}>
              {item === "ALL" ? "All Competitions" : item}
            </option>
          ))}
        </select>
      </div>

      <div className="afrisports-selected-match">
        {selectedMatch ? (
          <>
            <div className="afrisports-selected-team">
              {selectedMatch.homeLogo ? (
                <img
                  src={selectedMatch.homeLogo}
                  alt={`${teamName(selectedMatch, "homeTeam")} logo`}
                  className="afrisports-selected-team-logo"
                />
              ) : (
                <span className="afrisports-selected-team-logo-fallback">⚽</span>
              )}
              <strong>{teamName(selectedMatch, "homeTeam")}</strong>
            </div>

            <div className="afrisports-selected-vs">VS</div>

            <div className="afrisports-selected-team">
              {selectedMatch.awayLogo ? (
                <img
                  src={selectedMatch.awayLogo}
                  alt={`${teamName(selectedMatch, "awayTeam")} logo`}
                  className="afrisports-selected-team-logo"
                />
              ) : (
                <span className="afrisports-selected-team-logo-fallback">⚽</span>
              )}
              <strong>{teamName(selectedMatch, "awayTeam")}</strong>
            </div>

            <div className="afrisports-selected-match-meta">
              <span>{competitionName(selectedMatch)}</span>
              {selectedMatch.kickoff && <span>• {selectedMatch.kickoff}</span>}
            </div>

            <button
              type="button"
              className="afrisports-predict-button"
              onClick={predictMatch}
            >
              🧠 Predict
            </button>
          </>
        ) : (
          <div className="afrisports-selected-match-meta">
            Select a match to prepare an AfriAI prediction.
          </div>
        )}
      </div>
    </section>
  );
}
