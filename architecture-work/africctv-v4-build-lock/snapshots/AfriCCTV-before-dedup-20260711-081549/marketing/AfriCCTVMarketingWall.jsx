import CameraCard from "./CameraCard";
import CameraOverlay from "./CameraOverlay";

export default function AfriCCTVMarketingWall(){
  const cams=["CAM-01","CAM-02","CAM-03","CAM-04"];
  return (
    <section className="africctv-marketing-wall">
      <CameraOverlay />
      <div className="africctv-grid">
        {cams.map(cam=><CameraCard key={cam} id={cam} />)}
      </div>
    </section>
  );
}
