import CameraFeed from "./CameraFeed";

export default function CameraWall(){
  return (
    <section className="camera-wall">
      <CameraFeed id="CAM-01"/>
      <CameraFeed id="CAM-02"/>
      <CameraFeed id="CAM-03"/>
      <CameraFeed id="CAM-04"/>
    </section>
  );
}
