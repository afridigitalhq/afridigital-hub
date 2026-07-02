import React from "react";
import VisionModule from "./modules/VisionModule";
import SportsModule from "./modules/SportsModule";
import MetaModule from "./modules/MetaModule";

/**
 * FeaturedModules — PURE RENDER LAYER
 * No business logic. No decisions. Only composition.
 */

export default function FeaturedModules({ liveState = {} }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <VisionModule live={liveState.vision} />
      <SportsModule live={liveState.sports} />
      <MetaModule live={liveState.meta} />

    </div>
  );
}
