import { useKernelStream } from "./useKernelStream";

export default function KernelHUDProjection() {
  const { events } = useKernelStream();

  return (
    <div>
      <h2>📡 Kernel Event Stream (Live)</h2>
      <pre style={{ background: "#000", color: "#0f0", padding: 10 }}>
        {JSON.stringify(events.slice(-20), null, 2)}
      </pre>
    </div>
  );
}
