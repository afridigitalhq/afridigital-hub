import { useKernelSnapshot } from "../../os/kernel-contract/useKernelSnapshot";

export default function GovernanceDashboard() {
  const kernel = useKernelSnapshot();

  return (
    <div>
      <h2>🧠 Governance Control Cockpit</h2>
      <pre>{JSON.stringify(kernel, null, 2)}</pre>
    </div>
  );
}
