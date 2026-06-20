import React from "react";
import ViewRouter from "../router/ViewRouter";

export default function WarRoomLayout({ screens = [], dagData }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gridTemplateRows: "1fr 1fr",
      height: "100vh",
      background: "#050816",
      gap: 6
    }}>

      {/* MAIN DAG SCREEN */}
      <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
        <ViewRouter activeDashboard="afriscan" dagData={dagData} />
      </div>

      {/* TOP RIGHT: FINANCE */}
      <div style={{ background: "#0a0f1c" }}>
        <ViewRouter activeDashboard="afribank" dagData={dagData} />
      </div>

      {/* BOTTOM RIGHT: SECURITY */}
      <div style={{ background: "#0a0f1c" }}>
        <ViewRouter activeDashboard="security" dagData={dagData} />
      </div>

    </div>
  );
}
