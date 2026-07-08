export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase cctv-showcase">

      <div className="showcase-header">
        <h3>🎥 AfriCCTV AI Monitoring</h3>
      </div>

      <p className="showcase-description">
        Intelligent security monitoring powered by connected AI vision.
      </p>


      <div className="cctv-console">

        <div className="desktop-monitor">

          <div className="device-header">
            🖥️ Desktop CCTV Console
          </div>

          <div className="camera-feed">

            <div className="camera-overlay">
              <span className="live-badge">
                🔴 LIVE
              </span>

              <span>
                ● Heartbeat Connected
              </span>

              <span>
                CAM-01 • Compound View
              </span>

              <span>
                08 Jul 2026 • 14:30:22
              </span>
            </div>


            <div className="compound-scene">

              <div className="compound-building">
                🏢
              </div>

              <div className="compound-gate">
                🚪
              </div>

              <div className="compound-yard">
                🚗
              </div>

              <div className="ai-scan">
                🧠 AI Vision Scan
              </div>

            </div>

          </div>

        </div>



        <div className="mobile-device">

          <div className="device-header">
            📱 Mobile CCTV
          </div>

          <div className="mobile-camera-feed">

            <span className="live-badge">
              🔴 LIVE
            </span>

            <br />

            🏠

            <br />

            CAM-01

            <br />

            AI Monitoring

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
