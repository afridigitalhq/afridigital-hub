import { useEffect, useState } from "react";

export default function useAfriStream(eventName) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const bus = window.AfriBus;
    if (!bus) return;

    const handler = (payload) => {
      setData(payload);
    };

    bus.on(eventName, handler);

    return () => {};
  }, [eventName]);

  return data;
}
