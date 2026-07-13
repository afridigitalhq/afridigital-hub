import React, { useMemo, useState } from "react";
import { UnifiedPluginRegistry } from "../../core/runtime/adapters/UnifiedPluginRegistry";

export default function OSShellSidebar({ onNavigate }) {
  const [activeNode, setActiveNode] = useState(null);

  const graph = useMemo(() => {
    const clusters = {};
    UnifiedPluginRegistry.forEach((node) => {
      if (!clusters[node.cluster]) clusters[node.cluster] = [];
      clusters[node.cluster].push(node);
    });
    return clusters;
  }, []);

  const handleClick = (node) => {
    setActiveNode(node.id);
    onNavigate?.(node.route, node);
  };

  return (
    <div style={{ width: "320px", height: "100vh", background: "#0b0f19", color: "white", overflowY: "auto", borderRight: "1px solid #1f2937" }}>
      <div style={{ padding: "16px", fontSize: "14px", opacity: 0.7 }}>🌐 DAG CONTROL PLANE</div>

      {Object.entries(graph).map(([cluster, nodes]) => (
        <div key={cluster} style={{ marginBottom: "20px" }}>
          <div style={{ padding: "10px 16px", fontSize: "12px", opacity: 0.5, textTransform: "uppercase" }}>
            {cluster}
          </div>

          {nodes.map((node) => (
            <div key={node.id} onClick={() => handleClick(node)}
              style={{
                padding: "10px 16px",
                cursor: "pointer",
                background: activeNode === node.id ? "#111827" : "transparent",
                borderLeft: activeNode === node.id ? "3px solid #3b82f6" : "3px solid transparent",
                display: "flex",
                gap: "10px",
                alignItems: "center"
              }}>
              <span>{node.icon}</span>
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
