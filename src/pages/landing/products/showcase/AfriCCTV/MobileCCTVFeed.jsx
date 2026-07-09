import CameraFeed from "./CameraFeed";

export default function MobileCCTVFeed() {
  return (
    <div className="mobile-cctv-feed">

      <CameraFeed
        id="MOBILE-CAM-01"
        name="Mobile CCTV Feed"
        image="/mock/compound-feed.jpg"
        status="ONLINE"
        recording={true}
      />

    </div>
  );
}
