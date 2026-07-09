import { AfriCCTVLandingFeeds } from "../../../../../core/demo/LandingPreviewFeeds";
import CameraFeed from "./CameraFeed";

export default function DesktopCCTVWall() {
  return (
    <div className="desktop-cctv-wall">

      {AfriCCTVLandingFeeds.map((feed) => (
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
  );
}
