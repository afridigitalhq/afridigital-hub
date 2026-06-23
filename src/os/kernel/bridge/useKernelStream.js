import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/kernel/ingress";

export function useKernelStream() {
  const [events, setEvents] = useState([]);

  async function send(event) {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    });

    const data = await res.json();
    setEvents(prev => [...prev, data.event]);
    return data;
  }

  return { events, send };
}
