export default function InvestigationPanel(){
return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
<h2 className="font-semibold text-white">Active Investigation</h2>

<div className="mt-3 space-y-2 text-sm text-zinc-300">
<p>Project: AfriDigital-api</p>
<p>Status: Waiting Approval</p>
<p>Root Cause: Runtime Error Detection</p>
<p>Patch: AI Generated Proposal</p>
</div>

<div className="mt-4 flex gap-2">
<button className="rounded bg-green-700 px-3 py-2 text-sm">
Approve
</button>

<button className="rounded bg-red-700 px-3 py-2 text-sm">
Reject
</button>
</div>

</div>
);
}
