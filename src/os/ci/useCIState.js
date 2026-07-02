import { useEffect, useState } from "react";

const API = "API.base/api/ci/state";

export function useCIState() {
  const [state, setState] = useState({});

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setState);

    load();
    const t = setInterval(load, 3000);

    return () => clearInterval(t);
  }, []);

  return state;
}
