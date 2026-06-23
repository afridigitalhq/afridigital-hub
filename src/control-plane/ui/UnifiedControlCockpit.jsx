import React from "react";
import DevOpsTradingFloor from "../floor/DevOpsTradingFloor";
import ServiceTopologyMap from "../topology/ServiceTopologyMap";
import SystemIntelligenceLayer from "../intelligence/SystemIntelligenceLayer";
import ServiceMeshTracer from "../mesh/ServiceMeshTracer";
import RequestFlowLayer from "../mesh/RequestFlowLayer";
import PacketHeatwaveSystem from "../physics/PacketHeatwaveSystem";
import FailureShockwaveLayer from "../physics/FailureShockwaveLayer";
import CinematicControlRoom from "../cinematic/CinematicControlRoom";

export default function UnifiedControlCockpit() {
  return (
    <div style={{ background: "#02040a", minHeight: "100vh" }}>

      {/* 🌐 CINEMATIC MAIN COMMAND ROOM */}
      <CinematicControlRoom />

      {/* CORE DEVOPS FLOOR */}
      <DevOpsTradingFloor />

      {/* SYSTEM MAP */}
      <ServiceTopologyMap />

      {/* INTELLIGENCE */}
      <SystemIntelligenceLayer />

      {/* SERVICE MESH */}
      <ServiceMeshTracer />

      {/* REQUEST FLOW */}
      <RequestFlowLayer />

      {/* PHYSICS LAYER */}
      <PacketHeatwaveSystem />
      <FailureShockwaveLayer />

    </div>
  );
}
