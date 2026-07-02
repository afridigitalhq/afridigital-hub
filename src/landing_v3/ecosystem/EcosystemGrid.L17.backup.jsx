
import React from "react";
import { useLiveBindings } from "./useLiveBindings";

/**
 * EcosystemGrid — Now a Live System Dashboard
 */

const baseModules = [
  { key: "vision", name: "AfriVision", desc: "Live security & CCTV intelligence", color: "bg-blue-700" },
  { key: "sports", name: "AfriSports", desc: "Live matches & fan activity", color: "bg-green-700" },
  { key: "meta", name: "AfriMetaWorld", desc: "Immersive digital world engine", color: "bg-purple-700" },
];

export default function EcosystemGrid() {
  const { vision, sports, meta } = useLiveBindings();

  const liveState = {
    vision,
    sports,
    meta
  };

  return (
    <section className="w-full bg-[#050B1A] text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          AfriDigital Ecosystem (Live)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {baseModules.map((m) => {
            const state = liveState[m.key];

            return (
              <div
                key={m.key}
                className={`p-6 rounded-2xl ${m.color} transition relative overflow-hidden`}
              >

                {/* Live pulse indicator */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 bg-black/40 rounded">
                    {state ? "LIVE" : "IDLE"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-white/80 mt-2">{m.desc}</p>

                {/* Dynamic payload rendering */}
                {m.key === "sports" && sports && (
                  <div className="mt-4 text-sm">
                    ⚽ {sports.home} vs {sports.away}
                    <div className="text-xs opacity-80">
                      Score: {sports.score} • {sports.minute}'
                    </div>
                  </div>
                )}

                {m.key === "vision" && vision && (
                  <div className="mt-4 text-sm">
                    📡 Motion: {vision.motion ? "Detected" : "Stable"}
                  </div>
                )}

                {m.key === "meta" && meta && (
                  <div className="mt-4 text-sm">
                    🌍 Users Online: {meta.usersOnline}
                  </div>
                )}

                <div className="mt-4 text-xs opacity-70">
                  Status: Connected to LiveEngine
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
