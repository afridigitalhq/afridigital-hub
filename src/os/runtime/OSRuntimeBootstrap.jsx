import React, { useEffect, useState } from "react";
import { bootOS } from "../brain/OSBootLoader";
import OSShellSidebar from "../sidebar/OSShellSidebar";

export default function OSRuntimeBootstrap({ brain, dag, registry, sidebar }) {
  const [os, setOs] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const instance = bootOS({ brain, dag, registry, sidebar });
    instance.start();
    setOs(instance);
  }, []);

  if (!os) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050816",
        color: "#fff"
      }}>
        🧠 Booting AfriDigital OS...
      </div>
    );
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      height: "100vh",
      background: "#050816"
    }}>

      {/* SIDEBAR */}
      <OSShellSidebar
        registry={registry}
        active={active}
        onSelect={(id) => setActive(id)}
      />

      {/* MAIN OS SCREEN */}
      <div style={{ padding: 10, color: "#fff" }}>
        <h2>🧠 AfriDigital Command OS</h2>

        <div style={{
          marginTop: 20,
          padding: 20,
          border: "1px solid #1f2937",
          borderRadius: 8
        }}>
          ⚡ System Active<br/>
          🧠 Brain Connected<br/>
          🌐 DAG Runtime Live<br/>
          🔌 Registry Synced<br/>
          📡 OS Listening for Events
        </div>

        <div style={{ marginTop: 20, opacity: 0.8 }}>
          Active Module: {active || "None"}
        </div>
      </div>
    </div>
  );
}
