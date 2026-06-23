import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/kernel/snapshot";

export function useKernelSnapshot() {
  const [kernel, setKernel] = useState(null);

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setKernel);

    load();
    const t = setInterval(load, 5000);

    return () => clearInterval(t);
  }, []);

  return kernel;
}
