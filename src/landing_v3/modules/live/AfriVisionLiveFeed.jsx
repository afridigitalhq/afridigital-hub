import React from "react";
import useAfriVisionStream from "../../streams/useAfriVisionStream";

export default function AfriVisionLiveFeed() {
  const { frame, status } = useAfriVisionStream();

  return (
    <div className="module live-afrivision">
      <div>🎥 AfriVision Live Stream</div>
      <div>Status: {status}</div>
      <div>Frame: {frame}</div>
    </div>
  );
}
