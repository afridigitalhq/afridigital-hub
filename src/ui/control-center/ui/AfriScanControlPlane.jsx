import React, { useState } from "react";
import DAGCanvas from "../../ui/control-center/dag/DAGCanvas";
import RiskSidebar from "../panels/RiskSidebar";
import TopStatusBar from "../panels/TopStatusBar";

  dag,
  prediction,
  cascade,
  alerts,
  explanation
}) {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gridTemplateRows: "60px 1fr",
      height: "100vh",
      background: "#050816",
      color: "#fff"
    }}>

      <div style={{ gridColumn: "1 / span 2" }}>
        <TopStatusBar prediction={prediction} alerts={alerts} />
      </div>

      <div style={{ position: "relative" }}>
        <DAGCanvas
          dag={dag}
          cascade={cascade}
          prediction={prediction}
          onNodeSelect={setSelectedNode}
        />
      </div>

      <RiskSidebar
        alerts={alerts}
        explanation={explanation}
        selectedNode={selectedNode}
      />
    </div>
  );
}
