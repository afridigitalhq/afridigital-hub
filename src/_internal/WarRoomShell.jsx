import React from "react";
import WarRoomHUD from "../soc-os/hud/WarRoomHUD";
import WindowManager from "../soc-os/window-manager/WindowManager";

export default function WarRoomShell() {
  const stream = [];

  return (
    <WindowManager>
      <div className="warroom-desktop-root">
        {/* 🌐 SOC DESKTOP CORE */}
        <WarRoomHUD stream={stream} />
      </div>
    </WindowManager>
  );
}
