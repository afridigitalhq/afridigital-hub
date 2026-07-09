import DesktopCCTVWall from "./AfriCCTV/DesktopCCTVWall";
import MobileCCTVFeed from "./AfriCCTV/MobileCCTVFeed";
import CCTVStatusPanel from "./AfriCCTV/CCTVStatusPanel";

export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="glass-card product-showcase cctv-showcase">

      <h3>
        🎥 AfriCCTV AI Monitoring
      </h3>

      <p className="showcase-description">
        Monitor your home, business or organization in real time.
      </p>

      <div className="cctv-desktop-experience">

        <DesktopCCTVWall />

        <CCTVStatusPanel />

      </div>

      <MobileCCTVFeed />

      <p className="showcase-summary">
        Intelligent camera monitoring across desktop and mobile experiences.
      </p>

      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>

    </section>
  );
}
