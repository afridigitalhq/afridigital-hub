import { useState } from "react";

export function useWarRoomHUD() {
  return {
    state: { panicMode: false },
    panic: () => console.log("PANIC"),
    scrub: () => console.log("SCRUB"),
    cinematic: () => console.log("CINEMATIC"),
    archive: () => console.log("ARCHIVE")
  };
}
