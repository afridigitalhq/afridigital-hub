import React from "react";
import ModuleCard from "../ModuleCard";

export default function MetaModule({ live }) {
  return (
    <ModuleCard
      title="AfriMetaWorld"
      description="Immersive digital world engine"
      color="bg-purple-700"
      status={!!live}
    >
      {live && (
        <div className="text-sm">
          🌍 Users Online: {live.usersOnline}
        </div>
      )}
    </ModuleCard>
  );
}
