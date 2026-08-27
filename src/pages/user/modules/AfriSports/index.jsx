import { useState } from "react";
import "./AfriSports.css";
import useAfriSportsFeed from "./hooks/useAfriSportsFeed";
import AfriSportsHeader from "./components/AfriSportsHeader";
import AfriSportsLeftPanel from "./components/AfriSportsLeftPanel";
import AfriSportsMatchCenter from "./components/AfriSportsMatchCenter";
import AfriSportsRightPanel from "./components/AfriSportsRightPanel";
import AfriSportsAIZone from "./components/AfriSportsAIZone";
import AfriSportsFeatureSurface from "./components/AfriSportsFeatureSurface";

export default function AfriSports() {
  console.log("AFRISPORTS COMPONENT MOUNTED");
  const { selectedMatch, fixtures, analysis } = useAfriSportsFeed();
  const [selectedFeature, setSelectedFeature] = useState(null);

  console.log("AFRISPORTS STATE", { selectedMatch, fixtures, selectedFeature });

  return (
    <main className="afrisports-shell">
      <AfriSportsHeader />

      <section className="afrisports-dashboard">
        <AfriSportsLeftPanel
          fixtures={fixtures}
          onSelectFeature={setSelectedFeature}
        />
        <AfriSportsMatchCenter match={selectedMatch} />
        <AfriSportsRightPanel match={selectedMatch} />
      </section>

      <AfriSportsAIZone analysis={analysis} />

      <AfriSportsFeatureSurface
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </main>
  );
}
