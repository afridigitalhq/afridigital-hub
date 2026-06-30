import React from "react";
import WindowManager from "../window-manager/WindowManager";
import SOCWin11Taskbar from "../win11/taskbar/SOCWin11Taskbar";

export default function SOCDesktopShell({ children }) {

  const handleOpen = (app) => {
    console.log("OPEN APP:", app);
  };

  return (
    <div className="soc-desktop-root">

      {/* MAIN DESKTOP AREA */}
      <WindowManager>
        <div className="soc-desktop-area">
          {children}
        </div>
      </WindowManager>

      {/* WINDOWS 11 TASKBAR */}
      <SOCWin11Taskbar onOpen={handleOpen} />

    </div>
  );
}
