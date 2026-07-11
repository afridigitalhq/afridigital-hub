import CameraCard from "./CameraCard";

export default function EnterpriseMonitor() {
  const cameras = [
    { id: "CAM-01", title: "Main Entrance", status: "LIVE", indicator: "🟢" },
    { id: "CAM-02", title: "Parking Zone", status: "REC", indicator: "🔴" },
    { id: "CAM-03", title: "Warehouse", status: "MOTION", indicator: "🟡" },
    { id: "CAM-04", title: "Reception", status: "ONLINE", indicator: "⚪" }
  ];

  return (
    <section className="enterprise-monitor">
      <header className="enterprise-monitor-header">
        <div>
          <h2>🛡 AfriCCTV</h2>
          <small>Enterprise AI Security Monitoring Platform</small>
        </div>

        <div className="enterprise-monitor-status">
          <span>🟢 LIVE</span>
          <span>🔴 REC</span>
          <span>🟡 MOTION</span>
          <span>⚪ ONLINE</span>
        </div>
      </header>

      <div className="enterprise-monitor-grid">
        {cameras.map((camera) => (
          <CameraCard
            key={camera.id}
            id={camera.id}
            title={camera.title}
            status={camera.status}
            indicator={camera.indicator}
            brand="AfriCCTV"
            showOverlay
          />
        ))}
      </div>
    </section>
  );
}