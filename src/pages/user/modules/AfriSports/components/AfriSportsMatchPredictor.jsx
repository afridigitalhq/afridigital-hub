import { useMemo, useState } from "react";
import AfriSportsIdentity from "./AfriSportsIdentity";
import { AFRISPORTS_COMPETITIONS } from "../data/afriSportsCompetitionNavigation";

function matchId(match) {
  return match?.raw?.id ?? match?.id ?? `${match?.homeTeam}-${match?.awayTeam}`;
}

function teamName(match, side) {
  return (
    match?.[side] ??
    match?.[`${side}Team`] ??
    match?.raw?.[side]?.name ??
    side
  );
}

function competitionName(match) {
  return (
    match?.competition ??
    match?.league?.name ??
    match?.raw?.league?.name ??
    "Other"
  );
}

function MatchOptions({ matches, label, emptyLabel, onSelect }) {
  return (
    <>
      <option value="">{label}</option>
      {matches.map((match) => {
        const id = String(matchId(match));

        return (
          <option key={id} value={id}>
            {teamName(match, "homeTeam")} vs {teamName(match, "awayTeam")}
          </option>
        );
      })}
    </>
  );
}

export default function AfriSportsMatchPredictor({
  fixtures = [],
  liveFixtures = [],
  todayFixtures = [],
  tomorrowFixtures = [],
  currentMatch = null,
  activeView = "live",
  onSelectView,
  onSelectMatch,
  onPredict,
  isPredicting = false,
}) {
  const [competition, setCompetition] = useState("ALL");
  const [selectedId, setSelectedId] = useState("");

  const competitionName = (match) =>
    match?.competition ??
    match?.league?.name ??
    match?.raw?.league?.name ??
    "Other";

  const matchId = (match) =>
    match?.raw?.id ??
    match?.id ??
    `${match?.homeTeam}-${match?.awayTeam}`;

  const teamName = (match, side) =>
    match?.[side] ??
    match?.[`${side}Team`] ??
    match?.raw?.[side]?.name ??
    side;

  const filterCompetition = (matches) =>
    competition === "ALL"
      ? matches
      : matches.filter(
          (match) => competitionName(match) === competition
        );

  const liveMatches = useMemo(() => filterCompetition(liveFixtures.length ? liveFixtures : fixtures.filter((match) => match?.status === "LIVE" || match?.live === true)), [liveFixtures, fixtures, competition]);
  const todayMatches = useMemo(() => filterCompetition(todayFixtures.length ? todayFixtures : fixtures), [todayFixtures, fixtures, competition]);
  const tomorrowMatches = useMemo(
    () => filterCompetition(tomorrowFixtures),
    [tomorrowFixtures, competition]
  );

  const competitions = useMemo(() => {
    const values = [
      ...fixtures,
      ...liveFixtures,
      ...todayFixtures,
      ...tomorrowFixtures,
    ]
      .map(competitionName)
      .filter(Boolean);

    return Array.from(new Set(values));
  }, [fixtures, liveFixtures, todayFixtures, tomorrowFixtures]);

  const selectedMatch = useMemo(() => {
    const allMatches = [
      ...liveMatches,
      ...todayMatches,
      ...tomorrowMatches,
    ];

    return (
      allMatches.find(
        (match) =>
          String(matchId(match)) === String(selectedId)
      ) ?? null
    );
  }, [liveMatches, todayMatches, tomorrowMatches, selectedId]);

  const openView = (view) => {
    setSelectedId("");
    onSelectView?.(view);
  };

  const selectMatch = (match) => {
    const id = String(matchId(match));
    setSelectedId(id);
    onSelectMatch?.(match);
  };

  const predictMatch = () => {
    if (selectedMatch && !isPredicting) {
      onPredict?.(selectedMatch);
    }
  };

  const renderMatches = (matches, emptyText) => (
    <div className="afrisports-predictor-match-list">
      {matches.length ? (
        matches.map((match) => {
          const id = String(matchId(match));

          return (
            <button
              key={id}
              type="button"
              className={`afrisports-predictor-match ${
                String(selectedId) === id ? "is-selected" : ""
              }`}
              onClick={() => selectMatch(match)}
            >
              <AfriSportsIdentity
                identity={match.homeIdentity}
                size="sm"
                showName={false}
                showCountry={false}
              />

              <span>
                <strong>{teamName(match, "homeTeam")}</strong>
                <small>VS</small>
                <strong>{teamName(match, "awayTeam")}</strong>
              </span>

              <AfriSportsIdentity
                identity={match.awayIdentity}
                size="sm"
                showName={false}
                showCountry={false}
              />

              <em>
                {match.minute ||
                  match.kickoff ||
                  match.status ||
                  ""}
              </em>
            </button>
          );
        })
      ) : (
        <div className="afrisports-predictor-empty">
          {emptyText}
        </div>
      )}
    </div>
  );

  return (
    <section className="afrisports-predictor">
      <div className="afrisports-predictor-heading">
        <span className="afrisports-kicker">
          AFRIAI MATCH PREDICTOR
        </span>

        <h2>🧠 Select a match for AfriAI</h2>

        <p>
          Choose Live, Today, Tomorrow, or a competition,
          then select the match for prediction.
        </p>
      </div>

      <div
        className="afrisports-filter-dropdowns"
        aria-label="AfriSports match filters"
      >
        <div className="afrisports-filter-dropdown">
          <label htmlFor="afrisports-live-filter">
            🟢 Live
          </label>

          <select
            id="afrisports-live-filter"
            value={activeView === "live" ? "live" : ""}
            onChange={() => openView("live")}
          >
            <option value="">🟢 Live matches</option>
            {liveMatches.map((match) => (
              <option
                key={String(matchId(match))}
                value={String(matchId(match))}
              >
                {teamName(match, "homeTeam")} vs{" "}
                {teamName(match, "awayTeam")}
              </option>
            ))}
          </select>
        </div>

        <div className="afrisports-filter-dropdown">
          <label htmlFor="afrisports-today-filter">
            📅 Today
          </label>

          <select
            id="afrisports-today-filter"
            value={activeView === "today" ? "today" : ""}
            onChange={() => openView("today")}
          >
            <option value="">📅 Today's matches</option>
            {todayMatches.map((match) => (
              <option
                key={String(matchId(match))}
                value={String(matchId(match))}
              >
                {teamName(match, "homeTeam")} vs{" "}
                {teamName(match, "awayTeam")}
              </option>
            ))}
          </select>
        </div>

        <div className="afrisports-filter-dropdown">
          <label htmlFor="afrisports-tomorrow-filter">
            ⏭️ Tomorrow
          </label>

          <select
            id="afrisports-tomorrow-filter"
            value={activeView === "tomorrow" ? "tomorrow" : ""}
            onChange={() => openView("tomorrow")}
          >
            <option value="">⏭️ Tomorrow's matches</option>
            {tomorrowMatches.map((match) => (
              <option
                key={String(matchId(match))}
                value={String(matchId(match))}
              >
                {teamName(match, "homeTeam")} vs{" "}
                {teamName(match, "awayTeam")}
              </option>
            ))}
          </select>
        </div>

        <div className="afrisports-filter-dropdown">
          <label htmlFor="afrisports-competition-select">
            🏆 Competition
          </label>

          <select
            id="afrisports-competition-select"
            value={competition}
            onChange={(event) => {
              setCompetition(event.target.value);
              setSelectedId("");
            }}
          >
            <option value="ALL">
              🏆 All Competitions
            </option>

            {Object.entries(
              AFRISPORTS_COMPETITIONS
                .filter((item) => item.active !== false)
                .reduce((groups, item) => {
                  (groups[item.country] ||= []).push(item);
                  return groups;
                }, {})
            ).map(([country, items]) => (
              <optgroup key={country} label={country}>
                {items.map((item) => (
                  <option
                    key={item.key}
                    value={item.name}
                  >
                    {item.shortName} — {item.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div className="afrisports-predictor-results">
        {activeView === "live" && liveMatches.length > 0 && renderMatches(liveMatches, "")}
        {activeView === "today" && todayMatches.length > 0 && renderMatches(todayMatches, "")}
        {activeView === "tomorrow" && tomorrowMatches.length > 0 && renderMatches(tomorrowMatches, "")}
      </div>

      <div className="afrisports-selected-match">
        {selectedMatch ? (
          <>
            <div className="afrisports-selected-team">
              <AfriSportsIdentity identity={selectedMatch.homeIdentity} size="sm" showName={false} showCountry={false} />
              <strong>{teamName(selectedMatch, "homeTeam")}</strong>
            </div>

            <div className="afrisports-selected-vs">VS</div>

            <div className="afrisports-selected-team">
              <AfriSportsIdentity identity={selectedMatch.awayIdentity} size="sm" showName={false} showCountry={false} />
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
          disabled={!selectedMatch || isPredicting}
        >
          {isPredicting ? "⏳ Predicting..." : "🧠 Predict"}
        </button>
      </div>
      </section>
  );
}
