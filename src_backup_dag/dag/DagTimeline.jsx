import { useState } from "react";
import { DagStore } from "./DagCore";

export default function DagTimeline() {
  const [index, setIndex] = useState(DagStore.events.length);

  const stepBack = () => setIndex(i => Math.max(0, i - 1));
  const stepForward = () => setIndex(i => Math.min(DagStore.events.length, i + 1));

  const event = DagStore.travel(index);

  return (
    <div style={{ padding: 10 }}>
      <h3>TIME TRAVEL DEBUG</h3>
      <button onClick={stepBack}>⬅</button>
      <button onClick={stepForward}>➡</button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
