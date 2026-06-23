import { OSState } from "../state/osState";

export function bindPanicUI(uiRef, osBridge) {
  osBridge.subscribe((event) => {
    if (OSState.panic) {
      uiRef.current?.classList.add("panic-mode");
    }

    if (event.type === "STABILIZE") {
      OSState.panic = false;
      uiRef.current?.classList.remove("panic-mode");
    }
  });
}
