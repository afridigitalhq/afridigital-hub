export default function TopActionBar(){
return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
<h2 className="font-semibold text-white">AfriDebug Actions</h2>

<div className="mt-3 flex flex-wrap gap-2">
{["Debug","Fix","Rollback","Snapshot","Export Report"].map(item=>(
<button key={item} className="rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-200">
{item}
</button>
))}
</div>

</div>
);
}
