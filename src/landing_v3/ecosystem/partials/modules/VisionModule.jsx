import React from "react";
import ModuleCard from "../ModuleCard";

export default function VisionModule({ live }) {
  return (
    <ModuleCard
      title="AfriVision"
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
