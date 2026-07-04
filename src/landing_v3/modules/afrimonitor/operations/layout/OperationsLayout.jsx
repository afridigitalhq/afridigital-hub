import React from "react";
import EventCenter from "../events/EventCenter";
import TimelinePanel from "../timeline/TimelinePanel";
import MiniMap from "../map/MiniMap";
import AnalyticsPanel from "../analytics/AnalyticsPanel";
import SystemStatus from "../status/SystemStatus";

export default function OperationsLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr 360px",
        gridTemplateRows: "64px 1fr",
        height: "100vh",
        background: "#05080d",
        color: "#e6e6e6",
        fontFamily: "system-ui"
      }}
    >
      {/* LEFT — SYSTEM TRUST + ADS SLOT READY */}
      <div
        style={{
          gridRow: "1 / span 2",
          padding: 12,
          borderRight: "1px solid #1c2633",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
        {/* SYSTEM STATUS (TRUST CORE) */}
        <div
          style={{
            padding: 10,
            border: "1px solid #1f2a38",
            borderRadius: 6,
            background: "#0a0f16"
          }}
        >
          <SystemStatus />
        </div>

        {/* AD SLOT 1 (PRESERVED ZONE) */}
        <div
          style={{
            marginTop: "auto",
            padding: 10,
            border: "1px dashed #2a3a4d",
            borderRadius: 6,
            opacity: 0.6,
            fontSize: 12
          }}
        >
          AD SLOT — CONTROL ROOM FEED
        </div>
      </div>

      {/* TOP BAR — LIVE STATUS STRIP */}
      <div
        style={{
          gridColumn: "2 / span 2",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          borderBottom: "1px solid #1c2633",
          background: "#070c12",
          fontWeight: 600,
          letterSpacing: 1
        }}
      >
        🟢 AFRIMONITOR LIVE OPERATIONS • REAL-TIME CONTROL CENTER
      </div>

      {/* CENTER — EVENT DOMINANCE ZONE */}
      <div
        style={{
          padding: 12,
          overflow: "auto"
        }}
      >
        {/* EVENT CENTER (PRIMARY FOCUS) */}
        <div
          style={{
            padding: 10,
            border: "1px solid #1f2a38",
            borderRadius: 6,
            background: "#0a0f16",
            marginBottom: 16
          }}
        >
          <EventCenter />
        </div>

        {/* TIMELINE (SECONDARY FEED) */}
        <div
          style={{
            padding: 10,
            border: "1px solid #1f2a38",
            borderRadius: 6,
            background: "#0a0f16"
          }}
        >
          <TimelinePanel />
        </div>
      </div>

      {/* RIGHT — SITUATIONAL AWARENESS */}
      <div
        style={{
          padding: 12,
          borderLeft: "1px solid #1c2633",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}
      >
        {/* MAP (VISUAL INTELLIGENCE) */}
        <div
          style={{
            padding: 10,
            border: "1px solid #1f2a38",
            borderRadius: 6,
            background: "#0a0f16"
          }}
        >
          <MiniMap />
        </div>

        {/* ANALYTICS (DEEP SIGNALS) */}
        <div
          style={{
            padding: 10,
            border: "1px solid #1f2a38",
            borderRadius: 6,
            background: "#0a0f16"
          }}
        >
          <AnalyticsPanel />
        </div>

        {/* AD SLOT 2 (PRESERVED ZONE) */}
        <div
          style={{
            padding: 10,
            border: "1px dashed #2a3a4d",
            borderRadius: 6,
            opacity: 0.6,
            fontSize: 12,
            marginTop: "auto"
          }}
        >
          AD SLOT — CONTEXTUAL INSIGHT UNIT
        </div>
      </div>
    </div>
  );
}
