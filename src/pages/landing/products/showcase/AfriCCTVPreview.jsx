export default function AfriCCTVPreview({onExplore}) {
  const cameras = [
    "CAM 01",
    "CAM 02",
    "CAM 03",
    "CAM 04"
  ];

  return (
    <section className="glass-card product-showcase cctv-showcase">

      <div className="showcase-header">
        <div>
          <h3>🎥 AfriCCTV AI Monitoring</h3>
          <p>
            Intelligent security monitoring powered by connected AI vision.
          </p>
        </div>

        <span className="status-online">
          🟢 Platform Online
        </span>
      </div>


      <div className="cctv-layout">

        <div className="cctv-desktop">

          <h4>🖥️ Desktop Monitoring Console</h4>

          <div className="camera-preview-grid">
            {cameras.map(camera => (
              <div className="camera-card" key={camera}>
                <strong>{camera}</strong>

                <span>
                  🟢 Live Preview
                </span>

                <small>
                  AI Vision Active
                </small>
              </div>
            ))}
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

        </div>


        <div className="cctv-mobile">

          <h4>📱 Mobile View</h4>

          <div className="mobile-device">

            <div>
              🎥 AfriCCTV
            </div>

            <span>
              🟢 Live Camera
            </span>

            <small>
              AI Monitoring Active
            </small>

          </div>

        </div>

      </div>


      <div className="showcase-description">

        Enterprise AI security monitoring for homes,
        businesses and connected environments.

      </div>


      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>


    </section>
  );
}
