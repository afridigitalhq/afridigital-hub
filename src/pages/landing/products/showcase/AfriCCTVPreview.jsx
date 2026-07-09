import "./AfriCCTV/afri-cctv.css";
import DesktopCCTVWall from "./AfriCCTV/DesktopCCTVWall";
import MobileCCTVFeed from "./AfriCCTV/MobileCCTVFeed";
import CCTVStatusPanel from "./AfriCCTV/CCTVStatusPanel";
import useAfriCCTVLive from "./AfriCCTV/useAfriCCTVLive";

export default function AfriCCTVPreview({ onExplore }) {

  const runtime = useAfriCCTVLive();
  return (
    <section className="glass-card product-showcase cctv-showcase">

      <h3>
        🎥 AfriCCTV AI Monitoring
      </h3>

      <p className="showcase-description">
        Monitor your home, business or organization in real time.
      </p>

      <div className="cctv-desktop-experience">

        <DesktopCCTVWall runtime={runtime} />

        <CCTVStatusPanel runtime={runtime} />

      </div>

      <MobileCCTVFeed runtime={runtime} />

      <p className="showcase-summary">
        Intelligent camera monitoring across desktop and mobile experiences.
      </p>

      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>

    </section>
  );
}
