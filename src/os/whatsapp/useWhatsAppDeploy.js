import { useState } from "react";

const API = "API.base/api/whatsapp/deploy";

export function useWhatsAppDeploy() {
  const [result, setResult] = useState(null);

  async function requestDeploy(message, role = "VIEWER") {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, role })
    });

    const data = await res.json();
    setResult(data);
    return data;
  }

  return { result, requestDeploy };
}
