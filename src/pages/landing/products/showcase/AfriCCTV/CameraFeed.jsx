export default function CameraFeed({
  id,
  name,
  image,
  status = "READY",
  recording = false
}) {
  const timestamp = new Date().toLocaleString();

  return (
    <div className="cctv-camera-feed">

      <div className="cctv-feed-frame">

        {image ? (
          <img
            src={image}
            alt={`${name} CCTV Feed`}
            className="cctv-feed-image"
          />
        ) : (
          <div className="cctv-feed-placeholder">
            CAMERA FEED READY
          </div>
        )}

        <div className="cctv-overlay">

          <span>
            {id}
          </span>

          <span>
            {timestamp}
          </span>

        </div>

        <div className="cctv-record-layer">

          <span>
            {recording ? "🔴 REC" : "○ READY"}
          </span>

          <span>
            {status}
          </span>

        </div>

      </div>

    </div>
  );
}
