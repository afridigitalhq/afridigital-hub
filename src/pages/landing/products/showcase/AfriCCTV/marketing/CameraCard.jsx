import CameraOverlay from "./CameraOverlay";

export default function CameraCard({id,title,brand,showOverlay}){
  return(
    <article className="enterprise-camera-card">
      <div className="enterprise-camera-image">
        {showOverlay && <CameraOverlay brand={brand} id={id}/>}
      </div>
      <div className="enterprise-camera-footer">
        <span>{title}</span>
        <span className="camera-live-dot">● Live Feed</span>
      </div>
    </article>
  );
}
