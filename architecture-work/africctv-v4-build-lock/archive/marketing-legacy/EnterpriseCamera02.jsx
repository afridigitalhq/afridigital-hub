import CameraFeed from "./CameraFeed";
import CameraHUD from "./CameraHUD";
import CameraFeedOverlay from "./CameraFeedOverlay";
import AIMotionTracker from "./AIMotionTracker";

export default function EnterpriseCamera02(){
  return(
    <article className="enterprise-camera-card">
      <CameraFeed source="parking-zone" />
      <CameraHUD
        id="CAM-02"
        title="Parking Zone"
        brand="AfriCCTV"
        status="RECORDING"
      />
      <AIMotionTracker />
      <CameraFeedOverlay />
    </article>
  );
}
