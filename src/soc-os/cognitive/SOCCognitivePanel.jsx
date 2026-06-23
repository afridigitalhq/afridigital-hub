import React from "react";
import { explainIncident } from "./useSocReasoningEngine";
import { generateInvestigationPlan } from "./useInvestigationPlanner";
import { buildThreatGraph } from "./useThreatReasoningGraph";

export default function SOCCognitivePanel({ incident, events }) {

  const analysis = explainIncident(incident);
  const plan = generateInvestigationPlan(incident);
  const graph = buildThreatGraph(events);

  return (
    <div className="cognitive-panel">

      <h2>🧠 SOC COGNITIVE ANALYSIS</h2>

      {/* INCIDENT UNDERSTANDING */}
      <section>
        <h3>📌 Summary</h3>
        <p>{analysis?.summary}</p>
      </section>

      {/* ROOT CAUSE THINKING */}
      <section>
        <h3>🧠 Possible Causes</h3>
        <ul>
          {analysis?.possibleCauses.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* INVESTIGATION PLAN */}
      <section>
        <h3>🧭 Investigation Plan</h3>
        <ol>
          {plan.map((p, i) => (
            <li key={i}>
              <b>{p.step}</b> — {p.reason}
            </li>
          ))}
        </ol>
      </section>

      {/* THREAT GRAPH INSIGHT */}
      <section>
        <h3>🌐 Threat Graph Insight</h3>
        <pre>{JSON.stringify(graph.insight, null, 2)}</pre>
      </section>

    </div>
  );
}
