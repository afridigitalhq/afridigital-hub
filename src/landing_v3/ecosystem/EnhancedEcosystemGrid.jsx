
import React from "react";
import { useLiveBindings } from "./useLiveBindings";
import AfriMonitorWindow from "../modules/AfriMonitorWindow";

const modules = [
  { key: "vision", name: "AfriMonitor", color: "bg-blue-700" },
  { key: "sports", name: "AfriSports", color: "bg-green-700" },
  { key: "meta", name: "AfriMetaWorld", color: "bg-purple-700" }
];

export default function EnhancedEcosystemGrid() {
  const { vision, sports, meta } = useLiveBindings();

  return (
    <section className="w-full bg-[#050B1A] text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          AfriDigital Control Ecosystem (Live)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* AFRIVISION — FULL WINDOW EMBED */}
          <div className={`${modules[0].color} p-4 rounded-2xl`}>
            <h3 className="text-lg font-semibold mb-3">AfriMonitor</h3>
            <AfriMonitorWindow />
          </div>

          {/* AFRISPORTS */}
          <div className={`${modules[1].color} p-6 rounded-2xl`}>
            <h3 className="text-lg font-semibold">AfriSports</h3>

            {sports ? (
              <div className="mt-4 text-sm">
                ⚽ {sports.home} vs {sports.away}
                <div className="text-xs opacity-80">
                  {sports.score} • {sports.minute}'
                </div>
              </div>
            ) : (
              <div className="text-xs mt-4 opacity-70">Waiting for match feed...</div>
            )}
          </div>

          {/* AFRIMETAWORLD */}
          <div className={`${modules[2].color} p-6 rounded-2xl`}>
            <h3 className="text-lg font-semibold">AfriMetaWorld</h3>

            {meta ? (
              <div className="mt-4 text-sm">
                🌍 Users Online: {meta.usersOnline}
              </div>
            ) : (
              <div className="text-xs mt-4 opacity-70">World initializing...</div>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}
