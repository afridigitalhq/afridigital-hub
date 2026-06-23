import { AfriBus } from "../../core/bus/AfriEventBus";

AfriBus.on("*", (event) => {
  const intensity =
    event.type === "DAG_NODE_EXECUTED" ? 1 :
    event.type === "GOVERNOR_INTERVENTION" ? 0.7 :
    0.3;

  // BLOCKED_ESCAPE_TO_DAGRUNTIME(
    new CustomEvent("HOLO_PULSE", { detail: intensity })
  );
});
