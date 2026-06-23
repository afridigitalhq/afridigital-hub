import React, { useEffect, useState } from "react";
import useDAGStream from "../dag/useDAGStream";

export default function PacketHeatwaveSystem() {
  const events = useDAGStream();
  const [packets, setPackets] = useState([]);
  const [heat, setHeat] = useState(0);

  useEffect(() => {
    if (!events.length) return;

    const latest = events[events.length - 1];

    // 🌐 Packet simulation
    const newPacket = {
      id: Math.random().toString(36).slice(2),
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: latest.latency ? latest.latency / 50 : 1
    };

    setPackets(prev => [...prev.slice(-50), newPacket]);

    // 🌡 Heatwave propagation (failure intensity model)
    const stress =
      (latest.cpu || 0) * 0.5 +
      (latest.latency || 0) * 0.3 +
      (latest.memory || 0) * 0.2;

    setHeat(stress);
  }, [events]);

  return (
    <div style={{
      border: "1px solid #00ffcc",
      padding: 12,
      marginTop: 10,
      position: "relative",
      height: 420,
      overflow: "hidden",
      background: "#05070d"
    }}>
      <h3>🌐 PACKET FLOW + HEATWAVE SYSTEM</h3>

      {/* 🌡 HEAT OVERLAY */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle, rgba(255,0,0,${heat / 200}) 0%, transparent 70%)`,
        transition: "0.4s"
      }} />

      {/* 🌐 PACKETS */}
      {packets.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: heat > 70 ? "#ff0044" : "#00ffcc",
            transition: "all 0.3s linear"
          }}
        />
      ))}

      {/* 🌡 HEAT INDICATOR */}
      <div style={{
        position: "absolute",
        bottom: 10,
        left: 10,
        color: heat > 70 ? "#ff0044" : "#00ffcc"
      }}>
        HEAT: {heat.toFixed(1)}
      </div>
    </div>
  );
}
