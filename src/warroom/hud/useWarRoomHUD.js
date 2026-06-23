import { useState } from "react";
import { WarRoomHUD } from "./WarRoomHUD";

export function useWarRoomHUD(deps) {
  const [hud] = useState(() => new WarRoomHUD(deps));
  const [state, setState] = useState(hud.state);

  const sync = () => setState({ ...hud.state });

  return {
    hud,
    state,
    panic: () => { hud.togglePanicMode(); sync(); },
    scrub: () => { hud.enableScrubMode(); sync(); },
    cinematic: () => { hud.enableCinematicMode(); sync(); },
    archive: () => { hud.enableArchiveMode(); sync(); },
    rewind: (n) => hud.rewind(n),
    forward: (n) => hud.forward(n),
  };
}
