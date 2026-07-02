import React from "react";
import ModuleCard from "../ModuleCard";

export default function SportsModule({ live }) {
  return (
    <ModuleCard
      title="AfriSports"
      description="Live matches & fan activity"
      color="bg-green-700"
      status={!!live}
    >
      {live && (
        <div className="text-sm">
          ⚽ {live.home} vs {live.away}
          <div className="text-xs opacity-80">
            Score: {live.score} • {live.minute}'
          </div>
        </div>
      )}
    </ModuleCard>
  );
}
