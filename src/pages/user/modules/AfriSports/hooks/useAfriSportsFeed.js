import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/afrisports";

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
      try{
        console.log("AFRISPORTS FETCH:", `${API}/trending`);

        const response = await fetch(`${API}/trending`);

        console.log("AFRISPORTS STATUS:", response.status);

        const data = await response.json();

        console.log("AFRISPORTS DATA:", data);

        const items = (data.matches || []).map(normalize);

        setMatches(items);
        console.log("AFRISPORTS ITEMS:", items.length, items[0]);
        setSelectedMatch(items[0] || null);

      }catch(error){
        console.error("AFRISPORTS FEED ERROR:", error);
        setMatches([]);
        setSelectedMatch(null);
      }
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
