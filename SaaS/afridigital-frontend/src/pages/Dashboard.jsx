export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#050814] text-white">
      <div className="w-64 glass p-6">
        <h2 className="font-bold mb-6">Control Panel</h2>
        <p className="text-sm text-gray-400">DevOps • Security • Logs</p>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">System Overview</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {["CPU Load","Security Alerts","Uptime"].map((m,i)=>(
            <div key={i} className="glass p-6">
              <h3 className="font-bold">{m}</h3>
              <p className="text-gray-400 text-sm">Live metric feed</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
