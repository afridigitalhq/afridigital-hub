import React from "react";
import { useSocDeviceMode } from "../core/useSocDeviceMode";
import WindowManager from "./WindowManager";

export default function ResponsiveWindowManager({ children }) {
  const mode = useSocDeviceMode();

  // 📱 MOBILE = NO PHYSICS (STACKED UI)
  if (mode === "mobile") {
    return (
      <div className="mobile-stack">
        {children}
      </div>
    );
  }

  // 🖥️ DESKTOP = FULL PHYSICS WINDOW SYSTEM
  return (
    <WindowManager>
      {children}
    </WindowManager>
  );
}
