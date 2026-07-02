import React from "react";

const featured = [
  {
    title: "AfriVision",
    desc: "AI CCTV • Live Monitoring • Security Intelligence",
    size: "md:col-span-2 md:row-span-2",
    color: "from-blue-700 to-cyan-500"
  },
  {
    title: "AfriSports",
    desc: "Live Sports • Communities • Match Intelligence",
    size: "md:col-span-1",
    color: "from-green-700 to-emerald-500"
  },
  {
    title: "AfriMetaWorld",
    desc: "Virtual Experiences • Simulation Platform",
    size: "md:col-span-1",
    color: "from-purple-700 to-fuchsia-500"
  },
  {
    title: "AfriCommerce",
    desc: "Marketplace & Business Platform",
    color: "from-orange-600 to-amber-500"
  },
  {
    title: "AfriComm",
    desc: "Communication Ecosystem",
    color: "from-cyan-700 to-sky-500"
  },
  {
    title: "AfriBoost",
    desc: "Promotion & Advertising",
    color: "from-pink-700 to-rose-500"
  },
  {
    title: "AfriAI",
    desc: "Unified Intelligence Layer",
    color: "from-indigo-700 to-blue-500"
  },
  {
    title: "Device Tracking",
    desc: "Assets • Fleet • Location",
    color: "from-slate-700 to-slate-500"
  }
];

export default function EcosystemGrid() {
  return (
    <section className="bg-[#050B1A] px-8 py-20 text-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center">
          Explore the Ecosystem
        </h2>

        <p className="text-center text-white/70 mt-4 max-w-3xl mx-auto">
          Every platform inside AfriDigital is designed to operate as part of one intelligent ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">

          {featured.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl p-8 bg-gradient-to-br ${item.color} ${item.size || ""} min-h-[220px] flex flex-col justify-between hover:scale-[1.02] transition duration-300`}
            >
              <div>
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="mt-4 text-white/85">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 text-sm font-semibold opacity-90">
                Explore →
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
