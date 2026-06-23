import { useEffect, useState } from "react";

export default function useDAGStream() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://afridigital-api.onrender.com");

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      setEvents((prev) => [...prev.slice(-50), data]);
    };

    return () => ws.close();
  }, []);

  return events;
}
