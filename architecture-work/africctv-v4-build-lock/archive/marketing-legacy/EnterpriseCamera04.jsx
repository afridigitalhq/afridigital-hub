import CameraFeed from "./CameraFeed";
import CameraHUD from "./CameraHUD";
import CameraFeedOverlay from "./CameraFeedOverlay";
import AIZoneAnalytics from "./AIZoneAnalytics";

export default function EnterpriseCamera04(){
  return(
    <article className="enterprise-camera-card">
      <CameraFeed source="reception" />
      <CameraHUD
        id="CAM-04"
        title="Reception"
        brand="AfriCCTV"
        status="ONLINE"
      />
      <AIZoneAnalytics />
      <CameraFeedOverlay />
    </article>
  );
}
