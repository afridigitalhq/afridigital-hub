import { useEffect, useState } from "react";
import { createMatchIdentities } from "../identity/afriSportsIdentity.js";

const API = "https://afridigital-api.onrender.com/api/afrisports";

function normalize(match){
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

  const homeScore =
    match?.score?.home?.goals ??
    match?.score?.home ??
    match?.goals?.home ??
    0;

  const awayScore =
    match?.score?.away?.goals ??
    match?.score?.away ??
    match?.goals?.away ??
    0;

  const kickoff = match?.kickoff || match?.starting_at || null;

  const kickoffDate = kickoff ? new Date(kickoff) : null;

  const statusValue = String(
    match?.status?.name ||
    match?.status?.short ||
    match?.status ||
    ""
  ).toLowerCase();

  const isScheduled =
    !statusValue ||
    statusValue.includes("scheduled") ||
    statusValue === "ns" ||
    statusValue.includes("not started");

  const isLive =
    statusValue.includes("live") ||
    statusValue.includes("inplay") ||
    statusValue.includes("1h") ||
    statusValue.includes("2h") ||
    statusValue.includes("half");

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

  const identities = createMatchIdentities(match);

  return {
    homeTeam: homeName,
    awayTeam: awayName,
    homeLogo: match?.home?.image_path || match?.teams?.home?.image_path || null,
    awayLogo: match?.away?.image_path || match?.teams?.away?.image_path || null,
    homeScore,
    awayScore,
    competition: match?.league?.name || "Football",
    homeIdentity: identities.home,
    awayIdentity: identities.away,
    competitionIdentity: identities.competition,
    status: displayStatus,
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

export default function useAfriSportsFeed(){
  const [matches,setMatches] = useState([]);
  const [liveMatches,setLiveMatches] = useState([]);
  const [tomorrowMatches,setTomorrowMatches] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [selectedMatch,setSelectedMatch] = useState(null);
  const [predictions,setPredictions] = useState({});

  useEffect(()=>{
    async function load(){
      try{
        console.log("AFRISPORTS FETCH:", `${API}/live`, `${API}/today`);

        const [liveResponse, todayResponse, tomorrowResponse] = await Promise.all([
          fetch(`${API}/live`),
          fetch(`${API}/today`),
          fetch(`${API}/tomorrow`)
        ]);

        console.log(
          "AFRISPORTS STATUS:",
          {
            live: liveResponse.status,
            today: todayResponse.status,
            tomorrow: tomorrowResponse.status
          }
        );

        const liveData = liveResponse.ok ? await liveResponse.json() : { matches: [] };
        const data = todayResponse.ok ? await todayResponse.json() : { matches: [] };
        const tomorrowData = tomorrowResponse.ok ? await tomorrowResponse.json() : { matches: [] };

        console.log("AFRISPORTS LIVE DATA:", liveData);
        console.log("AFRISPORTS TODAY DATA:", data);
        console.log("AFRISPORTS TOMORROW DATA:", tomorrowData);

        if (!todayResponse.ok) {
          throw new Error(
            data?.message ||
            data?.error ||
            `AfriSports today request failed (${todayResponse.status})`
          );
        }

        const items = Array.from(new Map((data.matches || []).map((match) => [String(match?.id ?? match?.metadata?.providerMatchId ?? ""), match])).values()).map(normalize);
        const liveItems = (liveData?.matches || []).map(normalize);
        const tomorrowItems = (tomorrowData?.matches || []).map(normalize);

        setMatches(items);
        setLiveMatches(liveItems);
        setTomorrowMatches(tomorrowItems);

        console.log("AFRISPORTS ITEMS:", {
          today: items.length,
          live: liveItems.length,
          tomorrow: tomorrowItems.length,
          firstToday: items[0],
          firstLive: liveItems[0],
          firstTomorrow: tomorrowItems[0]
        });

        setSelectedMatch(liveItems[0] || items[0] || tomorrowItems[0] || null);
        setLoading(false);

        const predictionEntries = await Promise.all(items.map(async (item) => {
          try {
            const predictionResponse = await fetch(`${API}/prediction/${item.raw?.id ?? item.id}?date=${encodeURIComponent((item.kickoff || "").slice(0,10))}`);
            if (!predictionResponse.ok) return [item.raw?.id ?? item.id, null];
            return [item.raw?.id ?? item.id, await predictionResponse.json()];
          } catch { return [item.raw?.id ?? item.id, null]; }
        }));
        setPredictions(Object.fromEntries(predictionEntries));

      }catch(error){
        console.error("AFRISPORTS FEED ERROR:", error);
        setMatches([]);
        setSelectedMatch(null);
        setError(error?.message || "AfriSports feed unavailable");
        setLoading(false);
      }
    }

    load();
  },[]);

  return {
    fixtures: matches,
    liveFixtures: liveMatches,
    todayFixtures: matches,
    tomorrowFixtures: tomorrowMatches,
    selectedMatch,
    predictions,
    loading,
    error,
    analysis:{
      title:"AfriAI Match Radar",
      summary:"Live football intelligence powered by AfriSports AI."
    }
  };
}
