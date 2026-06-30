import React from "react";
import { SOCGlassTheme } from "../theme/SOCGlassTheme";

export default function SOCWindow({ title, children }) {
  return (
    <div
      style={{
        backdropFilter: `blur(${SOCGlassTheme.blur})`,
        background: SOCGlassTheme.bg,
        border: SOCGlassTheme.border,
        boxShadow: SOCGlassTheme.shadow,
        borderRadius: "12px",
        padding: "12px"
      }}
      className="soc-window"
    >
      <div className="title">{title}</div>
      {children}
    </div>
  );
}
