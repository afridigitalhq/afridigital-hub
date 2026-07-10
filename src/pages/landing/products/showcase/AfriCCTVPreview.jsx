import "./AfriCCTV/afri-cctv.css";
import DesktopCCTVWall from "./AfriCCTV/DesktopCCTVWall";
import MobileCCTVFeed from "./AfriCCTV/MobileCCTVFeed";
import useAfriCCTVLive from "./AfriCCTV/useAfriCCTVLive";

export default function AfriCCTVPreview({ onExplore }) {

  const runtime = useAfriCCTVLive();
  return (
    <section className="africctv-module">

      <h3>
        🎥 AfriCCTV AI Monitoring
      </h3>

      <p className="showcase-description">
        Monitor your home, business or organization in real time.
      </p>

      <div className="cctv-desktop-experience">

        <div className="africctv-module-test">AfriCCTV V4 Isolation Test</div>


      </div>

      

      <p className="showcase-summary">
        Intelligent camera monitoring across desktop and mobile experiences.
      </p>

      <button onClick={onExplore}>
        Explore AfriCCTV
      </button>

    </section>
  );
}
