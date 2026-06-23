import React from "react";
import Windows11Desktop from "../desktop/Windows11Desktop";
import WarRoomShell from "../../warroom/WarRoomShell";

export default function SOCDesktopRoot() {
  return (
    <Windows11Desktop>
      {/* 🧿 WAR ROOM = MAIN WINDOW */}
      <WarRoomShell />
    </Windows11Desktop>
  );
}
