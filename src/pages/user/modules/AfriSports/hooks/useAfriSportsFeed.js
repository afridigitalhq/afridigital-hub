import { useEffect, useRef, useState } from "react";
import { createMatchIdentities } from "../identity/afriSportsIdentity.js";
import { AFRISPORTS_API } from "../config.js";

const API = AFRISPORTS_API;

function normalize(match, source = "standard", options = {}){
  const homeName =
    match?.home?.name ||
    match?.home?.short_code ||
    match?.teams?.home?.name ||
    "Home";

  const awayName =
    match?.away?.name ||
    match?.away?.short_code ||
    match?.teams?.away?.name ||
    "Away";

  const scoreValue = (value) => {
    if (value && typeof value === "object") {
      return value.goals ?? value.score ?? value.value ?? null;
    }

    const numericValue = Number(value);
    return Number.isFinite(numericValue) ? numericValue : null;
  };

  const homeScore = scoreValue(
    match?.score?.home?.goals ??
      match?.score?.home ??
      match?.goals?.home ??
      null
  );

  const awayScore = scoreValue(
    match?.score?.away?.goals ??
      match?.score?.away ??
      match?.goals?.away ??
      null
  );

  const kickoff = match?.kickoff || match?.starting_at || null;

  const kickoffDate = kickoff ? new Date(kickoff) : null;

  const statusValue = String(
    match?.status?.name ||
    match?.status?.short ||
    match?.status ||
    ""
  ).toLowerCase();

  const scheduledStatuses = new Set([
    "",
    "scheduled",
    "not started",
    "not_started",
    "ns",
    "fixture"
  ]);

  const liveStatuses = new Set([
    "live",
    "inplay",
    "in_play",
    "1h",
    "2h",
    "ht",
    "et",
    "extra_time"
  ]);

  const isScheduled = scheduledStatuses.has(statusValue);

  const isLive =
    source === "live" &&
    (match?.metadata?.live === true || liveStatuses.has(statusValue));

  let minute = "NS";
  let displayStatus = "Scheduled";

  if (isLive) {
    displayStatus = "LIVE";
    const elapsed =
      match?.minute ??
      match?.fixture?.status?.elapsed ??
      null;

    minute = elapsed !== null
      ? `${elapsed}'`
      : "LIVE";
  } else if (isScheduled && kickoffDate && !Number.isNaN(kickoffDate.getTime())) {
    minute = `Starts ${kickoffDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).replace(/\s/g, "")}`;
  } else if (statusValue) {
    displayStatus =
      match?.status?.name ||
      match?.status?.short ||
      "Scheduled";
    minute =
      match?.minute ??
      (match?.fixture?.status?.elapsed
        ? `${match.fixture.status.elapsed}'`
        : "NS");
  }

  const identities = options.skipIdentities
    ? { home: null, away: null, competition: null }
    : createMatchIdentities(match);

  const normalizedHomeScore = isScheduled ? null : homeScore;
  const normalizedAwayScore = isScheduled ? null : awayScore;

  const normalizedStatus =
    source === "live" && isLive
      ? "LIVE"
      : isScheduled
        ? "Scheduled"
        : displayStatus === "LIVE"
          ? "Scheduled"
          : displayStatus;

  return {
    homeTeam: homeName,
    awayTeam: awayName,
    homeLogo: match?.home?.image_path || match?.teams?.home?.image_path || null,
    awayLogo: match?.away?.image_path || match?.teams?.away?.image_path || null,
    homeScore: normalizedHomeScore,
    awayScore: normalizedAwayScore,
    competition: match?.league?.name || "Football",
    homeIdentity: identities.home,
    awayIdentity: identities.away,
    competitionIdentity: identities.competition,
    status: normalizedStatus,
    minute,
    kickoff,
    events: Array.isArray(match?.events)
      ? match.events
      : Array.isArray(match?.timeline)
        ? match.timeline
        : [],
    raw: match
  };
}

function selectArenaFeaturedMatch(
  liveItems = [],
  todayItems = [],
  tomorrowItems = []
) {
  const genuineLiveItems = liveItems.filter(
    (match) => String(match?.status || "").toUpperCase() === "LIVE"
  );

  if (genuineLiveItems.length) {
    return genuineLiveItems[0];
  }

  const isUnavailableStatus = (match) => {
    const status = String(match?.status || "").toLowerCase();

    return (
      status.includes("finished") ||
      status.includes("cancelled") ||
      status.includes("postponed") ||
      status.includes("suspended")
    );
  };

  const kickoffTime = (match) => {
    const value = Date.parse(match?.kickoff || "");
    return Number.isNaN(value) ? null : value;
  };

  const isUpcoming = (match) => {
    if (isUnavailableStatus(match)) {
      return false;
    }

    const kickoff = kickoffTime(match);
    return kickoff !== null && kickoff >= Date.now();
  };

  const leagueId = (match) =>
    String(
      match?.raw?.league?.id ??
      match?.raw?.league_id ??
      match?.raw?.leagueId ??
      match?.competitionIdentity?.id ??
      ""
    );

  const elite = todayItems.filter(
    (match) =>
      (leagueId(match) === "152" || leagueId(match) === "3") &&
      isUpcoming(match)
  );

  if (elite.length) {
    return [...elite].sort((a, b) => {
      const rankA = leagueId(a) === "152" ? 0 : 1;
      const rankB = leagueId(b) === "152" ? 0 : 1;

      if (rankA !== rankB) {
        return rankA - rankB;
      }

      return (kickoffTime(a) ?? Number.MAX_SAFE_INTEGER) -
        (kickoffTime(b) ?? Number.MAX_SAFE_INTEGER);
    })[0];
  }

  const upcomingToday = todayItems
    .filter(isUpcoming)
    .sort(
      (a, b) =>
        (kickoffTime(a) ?? Number.MAX_SAFE_INTEGER) -
        (kickoffTime(b) ?? Number.MAX_SAFE_INTEGER)
    );

  if (upcomingToday.length) {
    return upcomingToday[0];
  }

  const upcomingTomorrow = tomorrowItems
    .filter(isUpcoming)
    .sort(
      (a, b) =>
        (kickoffTime(a) ?? Number.MAX_SAFE_INTEGER) -
        (kickoffTime(b) ?? Number.MAX_SAFE_INTEGER)
    );

  if (upcomingTomorrow.length) {
    return upcomingTomorrow[0];
  }

  // Final non-empty fallback: never leave Arena empty when usable feed data exists.
  const availableToday = todayItems.find(
    (match) => !isUnavailableStatus(match)
  );

  if (availableToday) {
    return availableToday;
  }

  const availableTomorrow = tomorrowItems.find(
    (match) => !isUnavailableStatus(match)
  );

  return availableTomorrow || null;
}

export default function useAfriSportsFeed(activeView = "live"){
  const [matches,setMatches] = useState([]);
  const [liveMatches,setLiveMatches] = useState([]);
  const [tomorrowMatches,setTomorrowMatches] = useState([]);
  const [allMatches,setAllMatches] = useState([]);
  const tomorrowRequested = useRef(false);
  const allRequested = useRef(false);
  const [tomorrowLoading,setTomorrowLoading] = useState(false);
  const [allLoading,setAllLoading] = useState(false);
  const [loading,setLoading] = useState(true);
  const [fixtureTiming,setFixtureTiming] = useState({
    tomorrowJson: null,
    tomorrowNormalize: null,
    universeJson: null,
    universeNormalize: null
  });
  const [error,setError] = useState(null);
  const [selectedMatch,setSelectedMatch] = useState(null);

  useEffect(()=>{
    async function load(){
      try{
        console.log("AFRISPORTS FETCH:", `${API}/live`, `${API}/today`);

        const [liveResponse, todayResponse] = await Promise.all([
          fetch(`${API}/live`).catch(() => null),
          fetch(`${API}/today`)
        ]);

        console.log("AFRISPORTS STATUS:", {
          live: liveResponse?.status ?? "unavailable",
          today: todayResponse?.status ?? "unavailable"
        });

        const liveData = liveResponse?.ok ? await liveResponse.json() : { matches: [] };
        const data = todayResponse.ok ? await todayResponse.json() : { matches: [] };

        if (!todayResponse.ok) {
          throw new Error(
            data?.message ||
            data?.error ||
            `AfriSports today request failed (${todayResponse.status})`
          );
        }

        const items = Array.from(new Map((data.matches || []).map((match) => [String(match?.id ?? match?.metadata?.providerMatchId ?? ""), match])).values()).map((match) => normalize(match, "today"));
        const liveItems = (liveData?.matches || []).map((match) => normalize(match, "live"));

        console.log("AFRISPORTS MAIN FEED LOADED:", {
          live: liveItems.length,
          today: items.length
        });

        setMatches(items);
        setLiveMatches(liveItems);

        const arenaMatch = selectArenaFeaturedMatch(liveItems, items, []);
        setSelectedMatch(arenaMatch);
        setLoading(false);

      }catch(error){
        console.error("AFRISPORTS FEED ERROR:", error);
        setMatches([]);
        setLiveMatches([]);
        setSelectedMatch(null);
        setError(error?.message || "AfriSports feed unavailable");
        setLoading(false);
      }
    }

    load();
  },[]);

  useEffect(() => {
    if (activeView !== "tomorrow" || tomorrowRequested.current) {
      return;
    }

    let cancelled = false;
    tomorrowRequested.current = true;
    setTomorrowLoading(true);

    fetch(`${API}/tomorrow`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Tomorrow fixtures request failed (${response.status})`);
        }
        return response.json();
      })
      .then((tomorrowData) => {
        if (cancelled) return;

        const tomorrowItems = (tomorrowData?.matches || [])
          .map((match) => normalize(match, "tomorrow", { skipIdentities: true }));

        console.log("AFRISPORTS TOMORROW LOADED:", tomorrowItems.length);
        setTomorrowMatches(tomorrowItems);
        setTomorrowLoading(false);
      })
      .catch((tomorrowError) => {
        if (cancelled) return;

        console.warn(
          "AFRISPORTS TOMORROW NON_FATAL:",
          tomorrowError?.message || tomorrowError
        );
        setTomorrowLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeView]);

  useEffect(() => {
    if (activeView !== "all" || allRequested.current) {
      return;
    }

    let cancelled = false;
    allRequested.current = true;
    setAllLoading(true);

    fetch(`${API}/fixture-universe`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fixture universe request failed (${response.status})`);
        }
        return response.json();
      })
      .then((allData) => {
        if (cancelled) return;

        const allItems = (Array.isArray(allData) ? allData : [])
          .map((match) => normalize(match, "all", { skipIdentities: true }));

        console.log("AFRISPORTS FIXTURE UNIVERSE LOADED:", allItems.length);
        setAllMatches(allItems);
        setAllLoading(false);
      })
      .catch((universeError) => {
        if (cancelled) return;

        console.warn(
          "AFRISPORTS FIXTURE UNIVERSE NON_FATAL:",
          universeError?.message || universeError
        );
        setAllLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeView]);

  return {
    fixtures: matches,
    liveFixtures: liveMatches,
    todayFixtures: matches,
    tomorrowFixtures: tomorrowMatches,
    allFixtures: allMatches,
    tomorrowLoading,
    allLoading,
    matchCounts: {
      live: liveMatches.length,
      today: matches.length,
      tomorrow: tomorrowMatches.length,
      all: allMatches.length
    },
    selectedMatch,
    loading,
    error,
    analysis:{
      title:"AfriAI Match Radar",
      summary:"Live football intelligence powered by AfriSports AI."
    }
  };
}
