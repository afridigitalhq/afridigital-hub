import React, { useState } from "react";
import DynamicSidebar from "../ui/DynamicSidebar";
import ViewRouter from "../router/ViewRouter";

export default function OSRuntimeBootstrap({ dagData }) {
  const [active, setActive] = useState("afriscan");

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      height: "100vh",
      background: "#050816",
      color: "#fff"
    }}>

      {/* SIDEBAR */}
      <DynamicSidebar
        active={active}
        onSelect={setActive}
      />

      {/* MAIN VIEW */}
      <div style={{ padding: 10 }}>
        <ViewRouter
          activeDashboard={active}
          dagData={dagData}
        />
      </div>

    </div>
  );
}
