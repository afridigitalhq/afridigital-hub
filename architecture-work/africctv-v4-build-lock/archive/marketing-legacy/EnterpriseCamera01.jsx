import CameraFeed from "./CameraFeed";
import CameraHUD from "./CameraHUD";
import CameraFeedOverlay from "./CameraFeedOverlay";
import AIObjectDetection from "./AIObjectDetection";

export default function EnterpriseCamera01(){
  return(
    <article className="enterprise-camera-card">
      <CameraFeed source="main-entrance" />
      <CameraHUD
        id="CAM-01"
        title="Main Entrance"
        brand="AfriCCTV"
        status="LIVE"
      />
      <AIObjectDetection />
      <CameraFeedOverlay />
    </article>
  );
}
