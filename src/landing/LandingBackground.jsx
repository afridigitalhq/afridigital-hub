import React from "react";

export default function LandingBackground() {
  return (
    <>
      <div style={{
        position:"fixed",
        inset:0,
        zIndex:-2,
        background:
          "radial-gradient(circle at top,#113322 0%,#08110d 35%,#040404 100%)"
      }}/>

      <div style={{
        position:"fixed",
        inset:0,
        zIndex:-1,
        backgroundImage:
          "linear-gradient(rgba(0,255,136,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.08) 1px,transparent 1px)",
        backgroundSize:"40px 40px",
        opacity:.35
      }}/>
    </>
  );
}
