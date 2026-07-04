import React from "react";
import ModuleCard from "../ModuleCard";

export default function MonitorModule({ live }) {
  return (
    <ModuleCard
      title="AfriMonitor"
      description="Live security & CCTV intelligence"
      color="bg-blue-700"
      status={!!live}
    >
      {live && (
        <div className="text-sm">
          📡 Motion: {live.motion ? "Detected" : "Stable"}
        </div>
      )}
    </ModuleCard>
  );
}
