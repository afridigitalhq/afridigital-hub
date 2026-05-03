export default function Landing() {
  return (
    <div className="min-h-screen hero text-white p-10">
      <h1 className="text-5xl font-bold mb-6">AfriDigital Hub</h1>
      <p className="text-blue-200 mb-10">
        Cybersecurity • DevOps • Real-Time Intelligence
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {["Threat Detection","System Monitoring","DevOps Pipeline"].map((item,i)=>(
          <div key={i} className="glass p-6">
            <h2 className="text-xl font-bold mb-2">{item}</h2>
            <p className="text-sm text-gray-300">
              Real-time secure infrastructure monitoring system.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
