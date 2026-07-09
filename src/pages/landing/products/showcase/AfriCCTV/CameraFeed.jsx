import useAfriCCTVTimestamp from "../../../../../core/africctv/runtime/hooks/useAfriCCTVTimestamp";

export default function CameraFeed({
  id,
  name,
  image,
  status = "READY",
  recording = false
}) {
  const timestamp = useAfriCCTVTimestamp();

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

          <span className="cctv-camera-id">
            {id}
          </span>

          <span className="cctv-timestamp">
            {timestamp}
          </span>

        </div>

        <div
          className={
            recording
              ? "cctv-record-layer cctv-recording-active"
              : "cctv-record-layer cctv-recording-idle"
          }
        >

          <span>
            {recording ? "🔴 REC ACTIVE" : "○ STANDBY"}
          </span>

          <span>
            {status}
          </span>

        </div>

      </div>

    </div>
  );
}
