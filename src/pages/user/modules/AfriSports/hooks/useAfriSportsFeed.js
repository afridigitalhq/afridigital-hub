import { useEffect, useState } from "react";

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
      minute: "2-digit"
    })}`;
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

  return {
    homeTeam: homeName,
    awayTeam: awayName,
    homeScore,
    awayScore,
    competition: match?.league?.name || "Football",
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
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [selectedMatch,setSelectedMatch] = useState(null);
  const [predictions,setPredictions] = useState({});

  useEffect(()=>{
    async function load(){
      try{
        console.log("AFRISPORTS FETCH:", `${API}/today`);

        const response = await fetch(`${API}/today`);

        console.log("AFRISPORTS STATUS:", response.status);

        const data = await response.json();

        console.log("AFRISPORTS DATA:", data);

        if (!response.ok) {
          throw new Error(
            data?.message ||
            data?.error ||
            `AfriSports request failed (${response.status})`
          );
        }

        const items = (data.matches || []).map(normalize);

        setMatches(items);
        console.log("AFRISPORTS ITEMS:", items.length, items[0]);
        setSelectedMatch(items[0] || null);
        const predictionEntries = await Promise.all(items.map(async (item) => {
          try {
            const predictionResponse = await fetch(`${API}/prediction/${item.raw?.id ?? item.id}?date=${encodeURIComponent((item.kickoff || "").slice(0,10))}`);
            if (!predictionResponse.ok) return [item.raw?.id ?? item.id, null];
            return [item.raw?.id ?? item.id, await predictionResponse.json()];
          } catch { return [item.raw?.id ?? item.id, null]; }
        }));
        setPredictions(Object.fromEntries(predictionEntries));
        setLoading(false);

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
