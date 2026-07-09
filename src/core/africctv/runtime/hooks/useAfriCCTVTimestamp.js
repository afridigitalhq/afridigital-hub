import { useEffect, useState } from "react";

export default function useAfriCCTVTimestamp() {
  const [timestamp, setTimestamp] = useState(
    () => new Date().toISOString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toISOString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timestamp;
}
