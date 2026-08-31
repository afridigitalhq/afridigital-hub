import { useEffect, useState } from "react";
import "./AfriSports.css";
import useAfriSportsFeed from "./hooks/useAfriSportsFeed";
import AfriSportsHeader from "./components/AfriSportsHeader";
import AfriSportsLeftPanel from "./components/AfriSportsLeftPanel";
import AfriSportsMatchCenter from "./components/AfriSportsMatchCenter";
import AfriSportsRightPanel from "./components/AfriSportsRightPanel";
import AfriSportsAIZone from "./components/AfriSportsAIZone";
import AfriSportsMatchPredictor from "./components/AfriSportsMatchPredictor";
import AfriSportsFootballNews from "./components/AfriSportsFootballNews";

import AfriSportsFeatureSurface from "./components/AfriSportsFeatureSurface";

export default function AfriSports() {
  console.log("AFRISPORTS COMPONENT MOUNTED");
  const {
    selectedMatch,
    fixtures,
    liveFixtures,
    todayFixtures,
    tomorrowFixtures,
    predictions,
    analysis,
    loading,
    error
  } = useAfriSportsFeed();
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [predictionMatch, setPredictionMatch] = useState(null);
  const [predictionVisibleMatch, setPredictionVisibleMatch] = useState(null);
  const [activeView, setActiveView] = useState("live");
  const [isPredicting, setIsPredicting] = useState(false);

  const activeFixtures =
    activeView === "live"
      ? liveFixtures
      : activeView === "tomorrow"
        ? tomorrowFixtures
        : todayFixtures;

  const activeMatch = predictionMatch || selectedMatch;
  const activePrediction = predictionVisibleMatch
      ? predictions[predictionVisibleMatch.raw?.id ?? predictionVisibleMatch.id] ??
        predictions[String(predictionVisibleMatch.raw?.id ?? predictionVisibleMatch.id)] ??
        null
      : null;

  useEffect(() => {
    if (!isPredicting || !predictionMatch) return undefined;
    const timer = setTimeout(() => {
      setPredictionVisibleMatch(predictionMatch);
      setIsPredicting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isPredicting, predictionMatch]);

  const handleSelectMatch = (match) => {
    setIsPredicting(false);
    setPredictionMatch(match);
    setPredictionVisibleMatch(null);
  };

  const handlePredict = (match) => {
    if (!match || isPredicting) return;
    setPredictionMatch(match);
    setPredictionVisibleMatch(null);
    setIsPredicting(true);
  };

  const activeAnalysis = {
    ...analysis,
    match: activeMatch
  };

  console.log("AFRISPORTS STATE", {
    selectedMatch,
    predictionMatch,
    activeMatch,
    activePrediction,
    fixtures,
    selectedFeature,
    loading,
    error
  });

  return (
    <main className="afrisports-shell">
      <AfriSportsHeader />

      <section className="afrisports-dashboard">
        <AfriSportsLeftPanel
          fixtures={fixtures}
          onSelectFeature={setSelectedFeature}
        />
        <AfriSportsMatchCenter
          match={activeMatch}
          activeFeature={selectedFeature}
          loading={loading}
          error={error}
        />
        <AfriSportsRightPanel
          match={activeMatch}
          loading={loading}
          error={error}
        />
      </section>

      <AfriSportsMatchPredictor
        fixtures={activeFixtures}
        liveFixtures={liveFixtures}
        todayFixtures={todayFixtures}
        tomorrowFixtures={tomorrowFixtures}
        currentMatch={selectedMatch}
        activeView={activeView}
        onSelectView={setActiveView}
        matchCounts={{
          live: liveFixtures.length,
          today: todayFixtures.length,
          tomorrow: tomorrowFixtures.length
        }}
        onSelectMatch={handleSelectMatch}
        onPredict={handlePredict}
        isPredicting={isPredicting}
      />


      <AfriSportsAIZone
        analysis={activeAnalysis}
        prediction={activePrediction}
      />

      <AfriSportsFootballNews />

      <AfriSportsFeatureSurface
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </main>
  );
}
