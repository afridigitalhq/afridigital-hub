export function bindDAGToOS(dagRuntime, os) {

  if (!dagRuntime || !os) {
    throw new Error("DAG or OS not provided");
  }

  // Listen to DAG event stream
  dagRuntime.subscribe((event) => {

    // 🔁 route event into OS brain
    os.routeEvent(event);

    // 🧠 optional: log for debugging snapshot
    if (os._emit) {
      os._emit({
        type: "DAG_EVENT_RECEIVED",
        payload: event
      });
    }

  });

  return {
    status: "DAG_BOUND_TO_OS",
    mode: "REACTIVE_OS_ACTIVE"
  };
}
