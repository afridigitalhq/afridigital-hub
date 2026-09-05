import AfriSportsIdentity from "./AfriSportsIdentity";
import { createAfriSportsIdentity } from "../identity/afriSportsIdentity";

function normalizeOutcome(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;

  const normalized = text.toLowerCase();

  if (normalized === "home") return "Home";
  if (normalized === "draw") return "Draw";
  if (normalized === "away") return "Away";

  return text;
}

function predictionLabel(prediction) {
  const outcome = normalizeOutcome(prediction?.prediction);
  if (!outcome) return null;

  return outcome === "Draw" ? "Draw" : `${outcome} to Win`;
}

function probability(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? `${numeric}%` : "--";
}

function selectedPredictions(prediction) {
  const items = Array.isArray(prediction?.predictions)
    ? prediction.predictions
    : [];

  return items.filter((item) => {
    if (!item || typeof item !== "object") return false;
    if (item.selection == null || item.probability == null) return false;
    return Number.isFinite(Number(item.probability));
  });
}

function groupPredictions(predictions) {
  const groups = new Map();

  for (const item of predictions) {
    const type = String(item.type || "").toLowerCase();
    const market = String(item.market || "").trim();

    let key = market || type || "Prediction";

    if (type === "match_prediction") {
      continue;
    } else if (type === "btts") {
      key = "BTTS (GG)";
    } else if (type === "double_chance") {
      key = "Double Chance";
    } else if (type === "over_under") {
      key = market ? `Goals — ${market}` : "Goals";
    } else if (type === "correct_score") {
      key = "Correct Score";
    } else if (type === "handicap") {
      key = market || "Handicap";
    }

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(item);
  }

  const priority = [
    "BTTS (GG)",
    "Double Chance",
    "Correct Score"
  ];

  return Array.from(groups.entries()).sort(([a], [b]) => {
    const indexA = priority.indexOf(a);
    const indexB = priority.indexOf(b);

    const rankA = indexA === -1 ? 100 : indexA;
    const rankB = indexB === -1 ? 100 : indexB;

    return rankA - rankB;
  });
}

export default function AfriSportsAIZone({
  analysis,
  prediction,
  loading = false
}) {
  const predictions = selectedPredictions(prediction);
  const groupedPredictions = groupPredictions(predictions);

    const probabilities = prediction?.probabilities || {};

    const predictionHomeName = prediction?.homeTeam || null;
    const predictionAwayName = prediction?.awayTeam || null;

    const homeName =
      predictionHomeName ||
      analysis?.match?.homeTeam ||
      "Home";

    const awayName =
      predictionAwayName ||
      analysis?.match?.awayTeam ||
      "Away";

    const predictionHomeIdentity = predictionHomeName
      ? createAfriSportsIdentity({
          name: predictionHomeName,
          id: prediction?.homeTeamId
        })
      : null;

    const predictionAwayIdentity = predictionAwayName
      ? createAfriSportsIdentity({
          name: predictionAwayName,
          id: prediction?.awayTeamId
        })
      : null;

    const homeIdentity =
      predictionHomeIdentity ||
      analysis?.match?.homeIdentity ||
      null;

    const awayIdentity =
      predictionAwayIdentity ||
      analysis?.match?.awayIdentity ||
      null;

  const outcome = predictionLabel(prediction);

  return (
    <section className="afrisports-ai-zone">
      <div className="afrisports-ai-heading">
        <div>
          <span className="afrisports-kicker">
            AFRIAI SPORTS INTELLIGENCE
          </span>

          <h2>
            🧠{" "}
            {(prediction?.model ||
              analysis?.title ||
              "AfriAI Match Analysis")
              .replace(/\s*v1\b/gi, "")
              .trim()}
          </h2>

          {homeIdentity && awayIdentity && (
            <div className="afrisports-ai-identities">
              <AfriSportsIdentity
                identity={homeIdentity}
                size="lg"
              />
              <span>vs</span>
              <AfriSportsIdentity
                identity={awayIdentity}
                size="lg"
              />
            </div>
          )}
        </div>

        <span className="afrisports-ai-badge">AI INSIGHT</span>
      </div>

      {!prediction && !loading ? (
        <div className="afrisports-ai-empty">
          <strong>AfriAI Match Radar</strong>
          <span>
            Select a match and run an AfriAI prediction to populate the
            intelligence radar.
          </span>
        </div>
      ) : (
        <>
          <div className="afrisports-ai-grid">
            <div className="afrisports-ai-card afrisports-ai-probabilities">
              <span>Match Prediction</span>

              <div className="afrisports-ai-selection-list">
                {(() => {
                  const selected = predictions.find(
                    (item) =>
                      String(item.type).toLowerCase() === "match_prediction"
                  );

                  if (!selected) return null;

                  return (
                    <div className="afrisports-ai-selection">
                      <strong>
                        {selected.selection} : - {probability(selected.probability)}
                      </strong>
                    </div>
                  );
                })()}
              </div>
            </div>

            {groupedPredictions.map(([market, selections]) => (
              <div
                className="afrisports-ai-card"
                key={market}
              >
                <span>{market}</span>

                <div className="afrisports-ai-selection-list">
                  {selections.map((item, index) => (
                    <div
                      className="afrisports-ai-selection"
                      key={`${market}-${item.selection}-${index}`}
                    >
                      <strong>
                        {item.selection} : - {probability(item.probability)}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {prediction?.correctScore && !predictions.some(
              (item) =>
                String(item.type).toLowerCase() === "correct_score"
            ) && (
              <div className="afrisports-ai-card afrisports-ai-score">
                <span>Correct Score</span>
                <strong>{prediction.correctScore}</strong>
                <small>
                  {prediction.correctScoreProbability
                    ? `${prediction.correctScoreProbability}% scoreline probability`
                    : "Selected AfriAI scoreline"}
                </small>
              </div>
            )}

            {prediction?.expectedGoals != null && (
              <div className="afrisports-ai-card">
                <span>Expected Goals</span>
                <strong>{prediction.expectedGoals}</strong>
                <small>AfriAI expected-goals estimate</small>
              </div>
            )}

            <div className="afrisports-ai-card afrisports-ai-insight">
              <span>AI Insight</span>

              <p>
                {outcome
                  ? `AfriAI selects ${outcome} for ${`${homeName} vs ${awayName}`}, using its normalized prediction evidence and decision layer.`
                  : "AfriAI analysis will appear when the prediction is available."}
              </p>

              {prediction?.factors?.length ? (
                <small>
                  {prediction.factors.map((factor, index) => (
                    <span key={index}>
                      {typeof factor === "string"
                        ? factor
                        : factor?.label ||
                          factor?.name ||
                          factor?.text ||
                          JSON.stringify(factor)}
                      {index < prediction.factors.length - 1
                        ? " • "
                        : ""}
                    </span>
                  ))}
                </small>
              ) : null}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
