import React from "react";

export default function ModuleBadge({ live }) {
  return (
    <div className="absolute top-3 right-3">
      <span className="rounded bg-black/40 px-2 py-1 text-xs">
        {live ? "LIVE" : "IDLE"}
      </span>
    </div>
  );
}
