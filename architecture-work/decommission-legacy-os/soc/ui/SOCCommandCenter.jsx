import React from "react";
import GlobalHeatMap from "../../orchestrator/heat/GlobalHeatMap";
import IncidentNarratorPanel from "../../orchestrator/ai/IncidentNarratorPanel";

export default function SOCCommandCenter({
  dagData,
  latestEvent,
  heatZones
}) {
  return (
    <div style={{
      position: "relative",
      height: "100vh",
      background: "#020617",
      overflow: "hidden"
    }}>

      {/* MAIN CONTROL CENTER */}
      <div data-soc-runtime="active" />

      {/* GLOBAL OVERLAY LAYERS */}
      <GlobalHeatMap zones={heatZones} />

      {/* AI NARRATOR (RIGHT SIDE FLOATING PANEL) */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: 320,
        height: "100%"
      }}>
        <IncidentNarratorPanel latestEvent={latestEvent} />
      </div>

    </div>
  );
}
