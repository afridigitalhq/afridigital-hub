import { AfriBus } from "../../bus/AfriEventBus";

window.CLUSTER_ENERGY = 0.2;

AfriBus.on("*", (event) => {
  const energy =
    event.type === "DAG_NODE_EXECUTED" ? 1 :
    event.type === "GOVERNOR_INTERVENTION" ? 0.8 :
    0.3;

  window.CLUSTER_ENERGY = energy;

  // BLOCKED_ESCAPE_TO_DAGRUNTIME(
    new CustomEvent("CLUSTER_ENERGY_PULSE", {
      detail: { energy, event }
    })
  );
});
