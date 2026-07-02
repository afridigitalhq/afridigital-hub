import { useEffect, useState } from "react";

const API = "API.base/api/ci/deploy-requests";

export function useDeployRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setRequests);

    load();
    const t = setInterval(load, 4000);

    return () => clearInterval(t);
  }, []);

  return requests;
}
