import { useState } from "react";
import "./AfriSports.css";
import useAfriSportsFeed from "./hooks/useAfriSportsFeed";
import AfriSportsHeader from "./components/AfriSportsHeader";
import AfriSportsLeftPanel from "./components/AfriSportsLeftPanel";
import AfriSportsMatchCenter from "./components/AfriSportsMatchCenter";
import AfriSportsRightPanel from "./components/AfriSportsRightPanel";
import AfriSportsAIZone from "./components/AfriSportsAIZone";
import AfriSportsMatchPredictor from "./components/AfriSportsMatchPredictor";

import AfriSportsFeatureSurface from "./components/AfriSportsFeatureSurface";

export default function AfriSports() {
  console.log("AFRISPORTS COMPONENT MOUNTED");
  const { selectedMatch, fixtures, predictions, analysis, loading, error } = useAfriSportsFeed();
  const [activeFeature, setActiveFeature] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [predictionMatch, setPredictionMatch] = useState(null);

  console.log("AFRISPORTS STATE", { selectedMatch, fixtures, selectedFeature, loading, error });

  return (
    <main className="afrisports-shell">
      <AfriSportsHeader />

      <section className="afrisports-dashboard">
        <AfriSportsLeftPanel
          fixtures={fixtures}
          onSelectFeature={setSelectedFeature}
        />
        <AfriSportsMatchCenter
          match={predictionMatch || selectedMatch}
          activeFeature={activeFeature}
          loading={loading}
          error={error}
        />
        <AfriSportsRightPanel match={selectedMatch} loading={loading} error={error} />
      </section>

      <AfriSportsMatchPredictor
        fixtures={fixtures}
        predictions={predictions}
        currentMatch={selectedMatch}
        onSelectMatch={setPredictionMatch}
      />

      <AfriSportsAIZone
        analysis={analysis}
        prediction={
          predictionMatch
            ? predictions[predictionMatch.raw?.id ?? predictionMatch.id]
            : null
        }
      />

      <AfriSportsFeatureSurface
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </main>
  );
}
