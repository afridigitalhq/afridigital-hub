import CameraFeed from "./CameraFeed";
import CameraHUD from "./CameraHUD";
import CameraFeedOverlay from "./CameraFeedOverlay";
import AIFaceRecognition from "./AIFaceRecognition";

export default function EnterpriseCamera03(){
  return(
    <article className="enterprise-camera-card">
      <CameraFeed source="warehouse" />
      <CameraHUD
        id="CAM-03"
        title="Warehouse"
        brand="AfriCCTV"
        status="MOTION"
      />
      <AIFaceRecognition />
      <CameraFeedOverlay />
    </article>
  );
}
