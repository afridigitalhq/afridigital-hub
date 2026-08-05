export default function AfriDebugTopBar(){

return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 flex items-center justify-between">

<div>
<h1 className="text-lg font-bold text-white">
AfriDebug Control Center
</h1>

<p className="text-sm text-zinc-400">
AI-powered investigation and debugging workspace
</p>
</div>


<div className="flex gap-2 text-sm">

<button className="rounded-lg bg-zinc-800 px-3 py-2">
New Case
</button>

<button className="rounded-lg bg-zinc-800 px-3 py-2">
Import
</button>

<button className="rounded-lg bg-zinc-800 px-3 py-2">
AI Scan
</button>

</div>

</div>
);

}
