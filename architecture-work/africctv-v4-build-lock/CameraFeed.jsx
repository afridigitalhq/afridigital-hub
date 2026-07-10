import useAfriCCTVTimestamp from "../../../../../core/africctv/runtime/hooks/useAfriCCTVTimestamp";

export default function CameraFeed({
  id,
  name,
  image,
  status="ONLINE",
  cameraState={}
}) {

  const timestamp = useAfriCCTVTimestamp()
    .replace("T"," ")
    .replace("Z"," WAT")
    .slice(11);

  const recording =
    cameraState?.recording?.state === "ACTIVE";

  const evidence =
    cameraState?.evidence || {};

  return (
    <div className="cctv-camera-feed">

      <div className="cctv-feed-frame">

        {image ? (
          <img
            src={image}
            alt={name}
            className="cctv-feed-image"
          />
        ) : (
          <div className="cctv-feed-placeholder">
            CAMERA READY
          </div>
        )}

        <div className="cctv-overlay">

          <div>
            <div className="cctv-camera-id">
              {id}
            </div>

            {recording && (
              <div>
                🔴 REC
              </div>
            )}

          </div>

          <div style={{textAlign:"right"}}>

            <div className="cctv-timestamp">
              {timestamp}
            </div>

            <div className="cctv-live-indicator">
              🟢 LIVE FEED
            </div>

            {evidence.motionDetected && (
              <div>
                🧠 Motion {evidence.confidence}%
              </div>
            )}

            {evidence.status === "SAVED" && (
              <div>
                📁 Evidence Saved
              </div>
            )}

          </div>

        </div>


        <div
          className={
            recording
            ? "cctv-record-layer cctv-recording-active"
            : "cctv-record-layer cctv-recording-idle"
          }
        >

          <span>{status}</span>

          <span>
            AfriCCTV Secure Vision
          </span>

        </div>


      </div>

    </div>
  );
}
