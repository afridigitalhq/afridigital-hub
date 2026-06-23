import { AfriBus } from "../../bus/AfriEventBus";

AfriBus.on("*", (event) => {
  const energy =
    event.type === "DAG_NODE_EXECUTED" ? 1 :
    event.type === "GOVERNOR_INTERVENTION" ? 0.8 :
    0.3;

  // BLOCKED_ESCAPE_TO_DAGRUNTIME(
    new CustomEvent("GOD_MODE_PULSE", { detail: energy })
  );
});
