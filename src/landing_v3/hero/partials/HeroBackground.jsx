import React from "react";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[180px]" />
      </div>
    </>
  );
}
