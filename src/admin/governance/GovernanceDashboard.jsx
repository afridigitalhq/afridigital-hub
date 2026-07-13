import { readSnapshot } from "../../runtime/snapshot/afriRuntimeSnapshot";

export default function GovernanceDashboard() {
  const kernel = readSnapshot();

  return (
    <div>
      <h2>🧠 Governance Control Cockpit</h2>
      <pre>{JSON.stringify(kernel, null, 2)}</pre>
    </div>
  );
}
