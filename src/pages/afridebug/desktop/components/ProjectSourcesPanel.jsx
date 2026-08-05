export default function ProjectSourcesPanel(){
return (
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
<h2 className="font-semibold text-white">Project Sources</h2>

<div className="mt-3 space-y-2 text-sm text-zinc-300">
<p>📦 ZIP Import</p>
<p>🔗 Git Repository</p>
<p>☁ GitHub</p>
<p>🦊 GitLab</p>
<p>🐳 Docker</p>
<p>📷 Screenshot Capture</p>
<p>📄 Logs</p>
</div>

</div>
);
}
