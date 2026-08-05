export default function AfriDebugSidebar(){

const items=[
"Projects",
"Investigations",
"Terminal",
"Evidence",
"AI Tools",
"Reports",
"Settings"
];

return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">

<h2 className="font-semibold text-white">
AfriDebug
</h2>

<div className="mt-4 space-y-2">

{items.map(item=>(
<div
key={item}
className="rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300"
>
{item}
</div>
))}

</div>

</div>
);

}
