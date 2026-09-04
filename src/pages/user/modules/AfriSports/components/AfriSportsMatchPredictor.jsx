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
  allFixtures = [],
  matchCounts = {},
  currentMatch = null,
  activeView = "live",
  onSelectView,
  onSelectMatch,
  onPredict,
  isPredicting = false,
}) {
  const [competition, setCompetition] = useState("ALL");
  const [selectedId, setSelectedId] = useState("");
  const [selectedMatchState, setSelectedMatchState] = useState(null);
  const [showMatchResults, setShowMatchResults] = useState(false);

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

  const liveMatches = useMemo(
    () =>
      filterCompetition(
        liveFixtures.filter((match) => match?.status === "LIVE")
      ),
    [liveFixtures, competition]
  );
  const todayMatches = useMemo(() => filterCompetition(todayFixtures.length ? todayFixtures : fixtures), [todayFixtures, fixtures, competition]);
  const tomorrowMatches = useMemo(
    () => filterCompetition(tomorrowFixtures),
    [tomorrowFixtures, competition]
  );

  const allMatches = useMemo(
    () => filterCompetition(allFixtures),
    [allFixtures, competition]
  );

  const competitionCounts = useMemo(() => {
    const counts = new Map();

    for (const match of allFixtures) {
      const name = competitionName(match);
      if (!name) continue;
      counts.set(name, (counts.get(name) || 0) + 1);
    }

    return counts;
  }, [allFixtures]);

  const competitions = useMemo(
    () => Array.from(competitionCounts.keys()),
    [competitionCounts]
  );

  const counts = {
    live: matchCounts.live ?? liveFixtures.length,
    today: matchCounts.today ?? todayFixtures.length,
    tomorrow: matchCounts.tomorrow ?? tomorrowFixtures.length,
    all: matchCounts.all ?? allFixtures.length
  };


  const selectedMatch = selectedMatchState;

  const openView = (view) => {
    setSelectedId("");
    setSelectedMatchState(null);
    onSelectView?.(view);
  };

  const selectFromDropdown = (event, view, matches) => {
    const id = String(event.target.value || "");
    setShowMatchResults(false);
    onSelectView?.(view);
    if (!id) {
      setSelectedId("");
      setSelectedMatchState(null);
      return;
    }
    const match = matches.find((item) => String(matchId(item)) === id);
    if (match) selectMatch(match);
  };

  const selectMatch = (match) => {
    if (!match) return;
    const id = String(matchId(match));
    setSelectedId(id);
    setSelectedMatchState(match);
    onSelectMatch?.(match);
  };

  const predictMatch = () => {
    if (selectedMatch && !isPredicting) {
      onPredict?.(selectedMatch);
    }
  };

  const renderAllCompetitions = (matches, emptyText) => {
    const groups = new Map();

    for (const match of matches) {
      const name = competitionName(match) || "Other Competitions";

      if (!groups.has(name)) {
        groups.set(name, []);
      }

      groups.get(name).push(match);
    }

    if (!groups.size) {
      return (
        <div className="afrisports-predictor-empty">
          {emptyText}
        </div>
      );
    }

    return (
      <div className="afrisports-predictor-all-competitions">
        {Array.from(groups.entries()).map(([name, competitionMatches]) => (
          <section
            key={name}
            className="afrisports-predictor-competition-group"
          >
            <div className="afrisports-predictor-competition-heading">
              <strong>{name}</strong>
              <span>{competitionMatches.length}</span>
            </div>

            {renderMatches(
              competitionMatches,
              `No ${name} fixtures available.`
            )}
          </section>
        ))}
      </div>
    );
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
              <div className="afrisports-predictor-match-main">
                <AfriSportsIdentity
                  identity={match.homeIdentity}
                  size="sm"
                  showName={false}
                  showCountry={false}
                />

                <strong>{teamName(match, "homeTeam")}</strong>
                <span className="afrisports-predictor-match-vs">VS</span>
                <strong>{teamName(match, "awayTeam")}</strong>

                <AfriSportsIdentity
                  identity={match.awayIdentity}
                  size="sm"
                  showName={false}
                  showCountry={false}
                />
              </div>

              <small className="afrisports-predictor-match-meta">
                {match.status === "LIVE" && match.minute
                  ? `LIVE • ${match.minute}`
                  : match.status && /finished|ft/i.test(String(match.status))
                    ? `FT${match.homeScore != null && match.awayScore != null ? ` • ${match.homeScore}–${match.awayScore}` : ""}`
                    : match.kickoff
                      ? new Date(match.kickoff).toLocaleString([], {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit"
                        })
                      : match.status || ""}
              </small>
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
        className="afrisports-filter-dropdowns afrisports-unified-fixture-filters"
        aria-label="AfriSports fixture filters"
      >
        <div className="afrisports-fixture-view-tabs">
          {[
            ["live", `🟢 Live (${counts.live})`],
            ["today", `📅 Today (${counts.today})`],
            ["tomorrow", `⏭️ Tomorrow (${counts.tomorrow})`],
            ["all", `🏆 All Competitions (${counts.all})`]
          ].map(([view, label]) => (
            <button
              key={view}
              type="button"
              className={`afrisports-fixture-view-tab ${
                activeView === view ? "is-active" : ""
              }`}
              onClick={() => {
                setCompetition("ALL");
                setSelectedId("");
                setSelectedMatchState(null);
                setShowMatchResults(true);
                onSelectView?.(view);
              }}
            >
              {label}
            </button>
          ))}
        </div>

      </div>

      {showMatchResults && (
        <div className="afrisports-predictor-results">
          {activeView === "live" &&
            renderMatches(
              liveMatches,
              "No live matches available."
            )}

          {activeView === "today" &&
            renderMatches(
              todayMatches,
              "No matches available today."
            )}

          {activeView === "tomorrow" &&
            renderMatches(
              tomorrowMatches,
              "No matches available tomorrow."
            )}

          {activeView === "all" &&
            renderAllCompetitions(
              allMatches,
              "No fixtures available for this selection."
            )}
        </div>
      )}

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
          {isPredicting
            ? "⏳ Predicting..."
            : selectedMatch
              ? `🧠 Predict ${teamName(selectedMatch, "homeTeam")} vs ${teamName(selectedMatch, "awayTeam")}`
              : "🧠 Predict — Select a Match"}
        </button>
      </div>
      </section>
  );
}
