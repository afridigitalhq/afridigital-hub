import { useEffect, useState } from "react";

const API = "API.base/api/ci/state";

export function useGovernanceTelemetry() {
  const [data, setData] = useState({});

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setData);

    load();
    const t = setInterval(load, 3000);

    return () => clearInterval(t);
  }, []);

  return data;
}
