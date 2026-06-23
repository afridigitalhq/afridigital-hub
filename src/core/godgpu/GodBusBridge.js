import { AfriBus } from "../../core/bus/AfriEventBus";

window.GOD_ENERGY = 0.3;

AfriBus.on("*", (event) => {
  const e =
    event.type === "DAG_NODE_EXECUTED" ? 1 :
    event.type === "GOVERNOR_INTERVENTION" ? 0.7 :
    0.2;

  window.GOD_ENERGY = e;

  // BLOCKED_ESCAPE_TO_DAGRUNTIME(
    new CustomEvent("GOD_GPU_PULSE", { detail: e })
  );
});
