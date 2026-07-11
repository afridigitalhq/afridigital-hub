export default function CameraFeed({id="CAM-01"}) {
  return (
    <div className="camera-feed">
      <div className="camera-label">{id}</div>
      <div className="camera-screen">
        LIVE FEED
        <div className="ai-scan-overlay">AI SCAN</div>
      </div>
    </div>
  );
}
