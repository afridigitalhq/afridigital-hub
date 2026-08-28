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
  const { selectedMatch, fixtures, analysis, loading, error } = useAfriSportsFeed();
  const [activeFeature, setActiveFeature] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  console.log("AFRISPORTS STATE", { selectedMatch, fixtures, selectedFeature, loading, error });

  return (
    <main className="afrisports-shell">
      <AfriSportsHeader />

      <section className="afrisports-dashboard">
        <AfriSportsLeftPanel
          fixtures={fixtures}
          onSelectFeature={setSelectedFeature}
        />
        <AfriSportsMatchCenter match={selectedMatch} activeFeature={activeFeature} loading={loading} error={error} />
        <AfriSportsRightPanel match={selectedMatch} loading={loading} error={error} />
      </section>

      <AfriSportsAIZone analysis={analysis} />

      <AfriSportsFeatureSurface
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </main>
  );
}
