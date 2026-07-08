export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase cctv-showcase">

      <div className="showcase-header">
        <h3>🎥 AfriCCTV AI Monitoring</h3>
        <span>🟢 Platform Online</span>
      </div>

      <p className="showcase-description">
        Intelligent security monitoring powered by connected AI vision.
      </p>

      <div className="cctv-device-preview">

        <div className="cctv-desktop">
          <div className="device-header">
            🖥️ Desktop Monitoring Console
          </div>

          <div className="live-screen">
            <span>🟢 LIVE CAMERA FEED</span>
            <strong>AI Vision Active</strong>
            <small>Motion Intelligence Connected</small>
          </div>
        </div>


        <div className="cctv-mobile">
          <div className="device-header">
            📱 Mobile View
          </div>

          <div className="mobile-screen">
            🎥
            <br />
            Live Camera
            <br />
            🟢 AI Monitoring
          </div>
        </div>

      </div>


      <div className="ai-status-panel">
        🧠 AfriAI Vision Engine
        <br />
        ✓ Object Detection
        <br />
        ✓ Motion Intelligence
        <br />
        ✓ Smart Security Alerts
      </div>


      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>

    </section>
  );
}
