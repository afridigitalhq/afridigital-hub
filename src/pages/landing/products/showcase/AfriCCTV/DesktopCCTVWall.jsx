import { AfriCCTVLandingFeeds } from "../../../../../core/demo/LandingPreviewFeeds";
import CameraFeed from "./CameraFeed";
import CCTVStatusPanel from "./CCTVStatusPanel";
import CCTVHeader from "./partials/CCTVHeader";
import CCTVOperations from "./partials/CCTVOperations";
import CCTVFooter from "./partials/CCTVFooter";

export default function DesktopCCTVWall() {
  return (
    <section className="desktop-cctv-shell">

      <CCTVHeader />

      <div className="desktop-cctv-wall">

        <div className="desktop-cctv-main">

          <div className="desktop-cctv-grid">
            {AfriCCTVLandingFeeds.slice(0,4).map(feed=>(
              <CameraFeed
                key={feed.id}
                id={feed.id}
                name={feed.name}
                image={feed.image}
                status={feed.status}
                recording={feed.recording}
              />
            ))}
          </div>

          <div className="desktop-cctv-thumbnails">
            {["CAM-05","CAM-06","CAM-07","CAM-08","CAM-09","CAM-10","CAM-11","CAM-12"].map(cam=>(
              <div key={cam} className="cctv-thumbnail-feed">
                <CameraFeed
                  id={cam}
                  name={cam}
                  image="/mock/compound-feed.jpg"
                  status="ONLINE"
                  recording={true}
                />
              </div>
            ))}
            <div className="cctv-thumbnail-feed cctv-more-cameras">
              +12<br/>More Cameras
            </div>
          </div>

          <CCTVFooter />

        </div>

        <aside className="desktop-cctv-sidebar">
          <CCTVStatusPanel />
          <CCTVOperations />
        </aside>

      </div>

    </section>
  );
}
