
import React, { useEffect, useState } from "react";
import { liveEngine } from "../../core/live/liveEngine";

/**
 * AfriVisionWindow — Mock CCTV Intelligence Feed
 */

export default function AfriVisionWindow() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    liveEngine.subscribe("vision", (data) => {
      setFeed(data);
    });
  }, []);

  return (
    <div className="w-full max-w-md bg-black/60 border border-blue-500 rounded-xl p-4 text-white">

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold">AfriVision Live Feed</h3>
        <span className="text-xs text-green-400">
          {feed ? "LIVE" : "STANDBY"}
        </span>
      </div>

      {/* Fake camera viewport */}
      <div className="h-40 bg-[#0B1220] rounded-lg flex items-center justify-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />

        {!feed && (
          <span className="text-xs text-gray-400">Waiting for signal...</span>
        )}

        {feed && (
          <div className="text-center">
            <div className="text-xs text-green-300">
              Motion: {feed.motion ? "DETECTED" : "NONE"}
            </div>
            <div className="text-[10px] text-gray-400 mt-1">
              Timestamp: {new Date(feed.timestamp).toLocaleTimeString()}
            </div>
          </div>
        )}

      </div>

      <div className="mt-2 text-[10px] text-gray-400">
        Feed: MOCK_STREAM • Channel: vision.core.live
      </div>

    </div>
  );
}
