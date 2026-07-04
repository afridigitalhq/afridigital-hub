import React from "react";
import useAfriMonitorStream from "../../streams/useAfriMonitorStream";

export default function AfriMonitorLiveFeed() {
  const { frame, status } = useAfriMonitorStream();

  return (
    <div className="module live-afrivision">
      <div>🎥 AfriMonitor Live Stream</div>
      <div>Status: {status}</div>
      <div>Frame: {frame}</div>
    </div>
  );
}
