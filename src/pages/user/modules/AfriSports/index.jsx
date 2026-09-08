import { useEffect, useRef, useState } from "react";
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
  const [activeView, setActiveView] = useState("live");
  const {
    selectedMatch,
    fixtures,
    liveFixtures,
    todayFixtures,
    tomorrowFixtures,
    allFixtures,
    tomorrowLoading,
    allLoading,
    matchCounts,
    analysis,
    loading,
    error
  } = useAfriSportsFeed(activeView);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [predictionMatch, setPredictionMatch] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionDiagnostic, setPredictionDiagnostic] = useState("IDLE");
  const predictionRequestRef = useRef(0);

  const activeFixtures =
    activeView === "all"
      ? allFixtures
      : activeView === "live"
        ? liveFixtures
        : activeView === "tomorrow"
          ? tomorrowFixtures
          : todayFixtures;

  const activeMatch = selectedMatch;
  const activePrediction = prediction;

  const handleSelectMatch = (match) => {
    predictionRequestRef.current += 1;
    setIsPredicting(false);
    setPredictionMatch(match || null);
    setPrediction(null);
    setPredictionDiagnostic(match ? `SELECTED • ${match.raw?.id ?? match.id}` : "IDLE");
  };

  const handlePredict = async (match) => {
    if (!match || isPredicting) return;

    const fixtureId = match.raw?.id ?? match.id;
    if (!fixtureId) return;

    const requestId = ++predictionRequestRef.current;

    setPredictionMatch(match);
    setPrediction(null);
    setPredictionDiagnostic(`REQUESTING • ${fixtureId}`);
    setIsPredicting(true);

    try {
      const date = (match.kickoff || "").slice(0, 10);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);

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
      const returnedFixtureId = String(prediction?.fixtureId ?? "");

      if (returnedFixtureId !== String(fixtureId)) {
        throw new Error(
          `Prediction fixture mismatch: requested ${fixtureId}, received ${returnedFixtureId || "unknown"}`
        );
      }

      const returnedHome = String(prediction?.homeTeam ?? "").trim().toLowerCase();
      const returnedAway = String(prediction?.awayTeam ?? "").trim().toLowerCase();
      const requestedHome = String(match?.homeTeam ?? "").trim().toLowerCase();
      const requestedAway = String(match?.awayTeam ?? "").trim().toLowerCase();

      if (
        (requestedHome && returnedHome && requestedHome !== returnedHome) ||
        (requestedAway && returnedAway && requestedAway !== returnedAway)
      ) {
        throw new Error(
          `Prediction team mismatch for fixture ${fixtureId}`
        );
      }

      setPredictionDiagnostic(`RECEIVED • ${returnedFixtureId}`);

      setTimeout(() => {
        if (predictionRequestRef.current !== requestId) return;

        setPredictionDiagnostic(`DISPLAYING • ${returnedFixtureId}`);
        setPrediction(prediction);
        setIsPredicting(false);
      }, 2000);
    } catch (error) {
      console.error("AFRIAI PREDICTION ERROR:", error);
      setPredictionDiagnostic(`ERROR • ${error?.message || error}`);
      setIsPredicting(false);
    }
  };

  const radarMatch = predictionMatch || activeMatch;

  const activeAnalysis = {
    ...analysis,
    match: radarMatch
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
        tomorrowLoading={tomorrowLoading}
        allLoading={allLoading}
        currentMatch={selectedMatch}
        activeView={activeView}
        onSelectView={setActiveView}
        matchCounts={matchCounts}
        onSelectMatch={handleSelectMatch}
        onPredict={handlePredict}
        isPredicting={isPredicting}
      />


      <div style={{padding:"8px 12px",margin:"8px 0",fontSize:"12px",fontFamily:"monospace",opacity:0.85}}>
        PREDICTION DIAGNOSTIC: {predictionDiagnostic}
      </div>

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
