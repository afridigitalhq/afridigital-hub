import { useEffect, useState } from "react";

export function useSOCWarRoomFeed(spine) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    if (!spine) return;

    spine.subscribe((event) => {
      setFeed((prev) => [event, ...prev].slice(0, 100));
    });
  }, [spine]);

  return feed;
}
