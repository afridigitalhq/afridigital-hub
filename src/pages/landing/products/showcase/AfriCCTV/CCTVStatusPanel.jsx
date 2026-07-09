import { AfriCCTVLandingFeeds } from "../../../../../core/demo/LandingPreviewFeeds";

export default function CCTVStatusPanel() {
  return (
    <aside className="cctv-status-panel">

      <h4>
        🎥 CCTV STATUS
      </h4>

      <div className="cctv-status-list">

        {AfriCCTVLandingFeeds.map((feed) => (
          <div key={feed.id} className="cctv-status-item">

            <span>
              {feed.recording ? "🔴" : "○"} {feed.id}
            </span>

            <span>
              {feed.status}
            </span>

          </div>
        ))}

      </div>

      <div className="cctv-ai-preview">

        <h5>
          🧠 AI MONITORING
        </h5>

        <p>
          Event detection layer ready
        </p>

      </div>

    </aside>
  );
}
