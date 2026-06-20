import React, { useMemo, useState } from "react";
import { UnifiedPluginRegistry } from "../../os/registry/UnifiedPluginRegistry";

export default function OSShellSidebar({ onNavigate }) {
  const [active, setActive] = useState(null);

  const clusters = useMemo(() => {
    const map = {};
    UnifiedPluginRegistry.forEach(n => {
      if (!map[n.cluster]) map[n.cluster] = [];
      map[n.cluster].push(n);
    });
    return map;
  }, []);

  return (
    <div style={{
      width: "320px",
      height: "100vh",
      background: "#0b0f19",
      color: "#fff",
      borderRight: "1px solid #1f2937",
      overflowY: "auto"
    }}>

      <div style={{ padding: 16, opacity: 0.6 }}>
        🌐 DAG UI KERNEL
      </div>

      {Object.entries(clusters).map(([cluster, nodes]) => (
        <div key={cluster}>
          <div style={{ padding: "8px 16px", opacity: 0.5, fontSize: 12 }}>
            {cluster.toUpperCase()}
          </div>

          {nodes.map(node => (
            <div
              key={node.id}
              onClick={() => {
                setActive(node.id);
                onNavigate?.(node.route, node);
              }}
              style={{
                padding: "10px 16px",
                cursor: "pointer",
                display: "flex",
                gap: 10,
                alignItems: "center",
                background: active === node.id ? "#111827" : "transparent",
                borderLeft: active === node.id ? "3px solid #3b82f6" : "3px solid transparent"
              }}
            >
              <span>{node.icon}</span>
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
