export default function CameraCard({id}){
  return (
    <article className="africctv-camera-card">
      <div className="camera-image">
        <span className="camera-rec">● REC</span>
        <span className="camera-live">LIVE</span>
      </div>
      <div className="camera-meta">
        <strong>{id}</strong>
        <small>AI Security Monitoring</small>
      </div>
    </article>
  );
}
