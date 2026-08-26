import "./AfriSports.css";
import useAfriSportsFeed from "./hooks/useAfriSportsFeed";
import AfriSportsHeader from "./components/AfriSportsHeader";
import AfriSportsLeftPanel from "./components/AfriSportsLeftPanel";
import AfriSportsMatchCenter from "./components/AfriSportsMatchCenter";
import AfriSportsRightPanel from "./components/AfriSportsRightPanel";
import AfriSportsAIZone from "./components/AfriSportsAIZone";

export default function AfriSports() {
  const { selectedMatch, fixtures, analysis } = useAfriSportsFeed();

  return (
    <main className="afrisports-shell">
      <AfriSportsHeader />

      <section className="afrisports-dashboard">
        <AfriSportsLeftPanel fixtures={fixtures} />
        <AfriSportsMatchCenter match={selectedMatch} />
        <AfriSportsRightPanel match={selectedMatch} />
      </section>

      <AfriSportsAIZone analysis={analysis} />
    </main>
  );
}
