import { useEffect, useState } from "react";
import { DagStore } from "./DagCore";

export default function DagInspector() {
  const [events, setEvents] = useState(DagStore.events);

  useEffect(() => {
    const handler = (e) => {
      setEvents([...DagStore.events]);
    };
    window.addEventListener("DAG_EVENT", handler);
    return () => window.removeEventListener("DAG_EVENT", handler);
  }, []);

  return (
    <div style={{ padding: 10, color: "#0f0", fontFamily: "monospace" }}>
      <h3>DAG LIVE INSPECTOR</h3>
      <pre>{JSON.stringify(events.slice(-20), null, 2)}</pre>
    </div>
  );
}
