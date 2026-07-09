import CameraFeed from "./CameraFeed";

export default function MobileCCTVFeed({ runtime }) {
  return (
    <div className="mobile-cctv-feed">

      <CameraFeed
        id={runtime?.cameras?.[0]?.id || "MOBILE-CAM-01"}
        name={runtime?.cameras?.[0]?.name || "Mobile CCTV Feed"}
        image="/mock/compound-feed.jpg"
        status={runtime?.cameras?.[0]?.status || "ONLINE"}
        recording={true}
      />

    </div>
  );
}
