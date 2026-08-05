export default function LivePreviewPanel(){
return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
<h2 className="font-semibold text-white">Live Preview</h2>

<div className="mt-3 rounded-lg border border-zinc-700 p-4 text-sm text-zinc-400">
Runtime Preview
<br/>
Waiting for connected application...
</div>

<button className="mt-3 rounded-lg bg-zinc-800 px-3 py-2 text-sm">
Refresh
</button>

</div>
);
}
