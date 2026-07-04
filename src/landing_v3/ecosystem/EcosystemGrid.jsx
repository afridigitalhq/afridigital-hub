import { BRAND } from '../../core/brand/brand.registry';
import React from "react";

const featured = [
  {
    title: "🎥 AfriMonitor",
    preview: "vision",
    desc: "AI CCTV • Live Monitoring • Security Intelligence",
    size: "md:col-span-2 md:row-span-2 min-h-[520px]",
    color: "from-blue-700 via-cyan-600 to-sky-500"
  },
  {
    title: "⚽ AfriSports",
    preview: "sports",
    desc: "Live Sports • Communities • Match Intelligence",
    size: "md:col-span-1 min-h-[250px]",
    color: "from-green-700 to-emerald-500"
  },
  {
    title: "🎮 AfriMetaWorld",
    preview: "meta",
    desc: "Virtual Experiences • Digital Worlds",
    size: "md:col-span-1 min-h-[250px]",
    color: "from-purple-700 to-fuchsia-500"
  },
  {
    title: "💰 AfriCommerce",
    preview: "commerce",
    desc: "Marketplace & Business Platform",
    color: "from-orange-600 to-amber-500"
  },
  {
    title: "📡 AfriComm",
    preview: "comm",
    desc: "Communication Ecosystem",
    color: "from-cyan-700 to-sky-500"
  },
  {
    title: "💚 AfriWhatsApp",
    preview: "whatsapp",
    desc: "Private Messaging Platform",
    color: "from-emerald-700 to-green-500"
  },
  {
    title: "🚀 AfriBoost",
    preview: "boost",
    desc: "Promotion & Advertising",
    color: "from-pink-700 to-rose-500"
  },
  {
    title: "📍 Device Tracking",
    preview: "tracking",
    desc: "Assets • Fleet • Live Location",
    color: "from-slate-700 to-slate-500"
  }
];

export default function EcosystemGrid() {
  return (
    <section className="relative bg-[#050B1A] text-white px-8 py-24">
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 relative z-10">
<p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-bold">
ONE INTELLIGENT ECOSYSTEM. UNLIMITED INNOVATION.
</p>
<div className="mx-auto mt-8 w-32 h-32 rounded-full border-2 border-cyan-500/40 bg-cyan-500/5 flex items-center justify-center text-cyan-300 text-sm font-bold">
LOGO
</div>
<h2 className="mt-8 text-5xl md:text-6xl font-black">
AfriDigital
</h2>
<p className="mt-6 max-w-3xl mx-auto text-white/70 text-lg">
Explore our eight core products working together as one intelligent platform.
</p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">

          {featured.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl bg-gradient-to-br ${item.color} ${item.size || "min-h-[220px]"} p-8 flex flex-col justify-between hover:scale-[1.02] transition duration-300 shadow-2xl`}
            >
              <div>
                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/90 leading-7">{item.desc}</p>

                {
(item.title.includes("AfriMonitor") || item.title.includes("AfriSports") || item.title.includes("AfriMetaWorld")) && (
<div className="mt-8 rounded-2xl bg-black/30 border border-white/20 p-4">
<div className="aspect-video rounded-xl bg-slate-900 flex items-center justify-center text-cyan-300 text-sm font-semibold">
{item.title.includes("AfriMonitor") ? "🎥 LIVE SECURITY PREVIEW" : item.title.includes("AfriSports") ? "⚽ LIVE MATCH PREVIEW" : "🎮 VIRTUAL WORLD PREVIEW"}
</div>
<div className="mt-4 flex justify-between text-xs text-white/70">
<span>● Live</span>
<span>● AI Powered</span>
<span>● Connected</span>
</div>
</div>
)
}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4">
<div className="aspect-video rounded-xl bg-slate-900 flex items-center justify-center text-sm font-semibold text-cyan-300">
{item.preview==="vision"?"🎥 LIVE SECURITY DASHBOARD":item.preview==="sports"?"⚽ LIVE MATCH CENTER":item.preview==="meta"?"🎮 VIRTUAL WORLD":item.preview==="commerce"?"🛒 STORE PREVIEW":item.preview==="comm"?"📡 COMMUNICATION HUB":item.preview==="whatsapp"?"💚 CHAT PREVIEW":item.preview==="boost"?"🚀 CAMPAIGN CENTER":"📍 LIVE TRACKING MAP"}
</div>
<div className="mt-4 flex justify-between text-xs text-white/70"><span>Live</span><span>AI Ready</span><span>Connected</span></div>
</div>
<div className="mt-6 font-bold text-cyan-300">Launch →</div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
