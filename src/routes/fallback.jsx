import { useEffect } from "react";

export default function Fallback() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return null;
}
