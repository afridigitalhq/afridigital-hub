import { useEffect, useState } from "react";

const API = "http://localhost:10000/api/afrisports";

function normalize(match){
  return {
    homeTeam: match?.teams?.home?.name || "Home",
    awayTeam: match?.teams?.away?.name || "Away",
    homeScore: match?.goals?.home ?? 0,
    awayScore: match?.goals?.away ?? 0,
    competition: match?.league?.name || "Football",
    status: match?.fixture?.status?.long || "Scheduled",
    minute: match?.fixture?.status?.elapsed
      ? `${match.fixture.status.elapsed}'`
      : "NS",
    raw: match
  };
}

export default function useAfriSportsFeed(){
  const [matches,setMatches] = useState([]);
  const [selectedMatch,setSelectedMatch] = useState(null);

  useEffect(()=>{
    async function load(){
      const response = await fetch(`${API}/trending`);
      const data = await response.json();

      const items = (data.matches || []).map(normalize);

      setMatches(items);
      setSelectedMatch(items[0] || null);
    }

    load();
  },[]);

  return {
    fixtures: matches,
    selectedMatch,
    analysis:{
      title:"AfriAI Match Radar",
      summary:"Live football intelligence powered by AfriSports AI."
    }
  };
}
