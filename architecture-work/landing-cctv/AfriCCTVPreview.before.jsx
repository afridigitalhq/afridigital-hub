export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase cctv-showcase">

      <h3>🎥 AfriCCTV AI Monitoring</h3>

      <p className="showcase-description">
        Monitor your home, business or organization in real time.
      </p>

      <div className="cctv-preview-layout">

        <div className="desktop-monitor">
          <div className="monitor-top">
            <span className="live-pill">🔴 LIVE</span>
            <span>CAM-01</span>
            <span>08 Jul 2026 • 15:42</span>
          </div>

          <div className="camera-feed-placeholder">
          </div>

          <div className="monitor-bottom">
            <span>REC ● 1080P</span>
            <span>Connected</span>
          </div>
        </div>

        <div className="mobile-monitor">
          <div className="mobile-live">🔴 LIVE</div>

          <div className="mobile-feed-placeholder">
          </div>

          <small>CAM-01</small>
        </div>

      </div>

      <p className="showcase-summary">
        View live cameras from desktop and mobile.
      </p>

      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>

    </section>
  );
}
