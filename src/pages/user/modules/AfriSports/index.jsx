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
import { AFRISPORTS_API } from "./config.js";

export default function AfriSports() {
  console.log("AFRISPORTS COMPONENT MOUNTED");
  const {
    selectedMatch,
    fixtures,
    liveFixtures,
    todayFixtures,
    tomorrowFixtures,
    allFixtures,
    matchCounts,
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
    activeView === "all"
      ? allFixtures
      : activeView === "live"
        ? liveFixtures
        : activeView === "tomorrow"
          ? tomorrowFixtures
          : todayFixtures;

  const activeMatch = selectedMatch;
  const activePrediction = predictionVisibleMatch?.__afriAiPrediction ?? null;

  const handleSelectMatch = (match) => {
    setIsPredicting(false);
    setPredictionMatch(match);
    setPredictionVisibleMatch(null);
  };

  const handlePredict = async (match) => {
    if (!match || isPredicting) return;

    const fixtureId = match.raw?.id ?? match.id;
    if (!fixtureId) return;

    setPredictionMatch(match);
    setPredictionVisibleMatch(null);
    setIsPredicting(true);

    try {
      const date = (match.kickoff || "").slice(0, 10);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      let response;
      try {
        response = await fetch(
          `${AFRISPORTS_API}/prediction/${encodeURIComponent(fixtureId)}?date=${encodeURIComponent(date)}`,
          { signal: controller.signal }
        );
      } finally {
        clearTimeout(timeoutId);
      }

      if (!response.ok) {
        throw new Error(`Prediction request failed (${response.status})`);
      }

      const prediction = await response.json();

      setTimeout(() => {
        setPredictionVisibleMatch({
          ...match,
          __afriAiPrediction: prediction
        });
        setIsPredicting(false);
      }, 3000);
    } catch (error) {
      console.error("AFRIAI PREDICTION ERROR:", error);
      setIsPredicting(false);
    }
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
        allFixtures={allFixtures}
        currentMatch={selectedMatch}
        activeView={activeView}
        onSelectView={setActiveView}
        matchCounts={matchCounts}
        onSelectMatch={handleSelectMatch}
        onPredict={handlePredict}
        isPredicting={isPredicting}
      />


      <AfriSportsAIZone
        analysis={activePrediction ? activeAnalysis : null}
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
