import React from "react";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500 transition">
        Launch Platform
      </button>

      <button className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10 transition">
        Explore Ecosystem
      </button>
    </div>
  );
}
