import React, { useEffect, useState } from "react";
import eventBus from "../../core/afrieventbus/AfriEventBus";
import { getActiveAdminPlugins } from "../../plugins/admin/adminPluginRegistry";

/**
 * AFRIDIGITAL SOC (REAL-TIME COMMAND CENTER)
 * Now fully event-driven (AfriEventBus integrated)
 */

export default function AdminHome() {
  const plugins = getActiveAdminPlugins();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // 🧠 Subscribe to ALL system events
    const handler = (data) => {
      setEvents((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          ...data
        },
        ...prev.slice(0, 19) // keep last 20 events
      ]);
    };

    eventBus.on("SYSTEM_EVENT", handler);

    return () => {
      eventBus.off("SYSTEM_EVENT", handler);
    };
  }, []);

  return (
    <div style={{ padding: "20px", background: "#0b0f14", color: "#fff", minHeight: "100vh" }}>
      
      {/* SOC HEADER */}
      <div style={{ borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        <h1>🧠 AFRIDIGITAL COMMAND CENTER</h1>
        <p>Live System Intelligence • AfriScan • AfriBank • Event Stream</p>
      </div>

      {/* LIVE EVENT FEED */}
      <div style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #222",
        borderRadius: "8px",
        background: "#111"
      }}>
        <h3>⚡ LIVE EVENT STREAM</h3>

        <div style={{ maxHeight: "200px", overflowY: "auto", fontSize: "12px" }}>
          {events.length === 0 && (
            <div style={{ opacity: 0.5 }}>Waiting for system activity...</div>
          )}

          {events.map((event, index) => (
            <div key={index} style={{ marginBottom: "6px" }}>
              <span style={{ color: "#888" }}>[{event.time}]</span>{" "}
              <span>{event.type || "UNKNOWN_EVENT"}</span>{" "}
              <span style={{ color: "#4ade80" }}>
                {event.message || JSON.stringify(event.data || {})}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* GRID DASHBOARD */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "15px",
        marginTop: "20px"
      }}>
        
        {plugins.map((plugin) => {
          const Component = plugin.component;

          return (
            <div
              key={plugin.key}
              style={{
                border: "1px solid #222",
                borderRadius: "10px",
                padding: "15px",
                background: "#111827"
              }}
            >
              <h3>{plugin.name}</h3>

              <React.Suspense fallback={<div>Loading module...</div>}>
                <Component />
              </React.Suspense>
            </div>
          );
        })}

      </div>
    </div>
  );
}
