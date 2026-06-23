import React, { useEffect, useState } from "react";
import GlobalSOCCenter from "../ui/GlobalSOCCenter";
import { bootOS } from "../../brain/OSBootLoader";

export default function SOCBootstrap(props) {
  const [os, setOs] = useState(null);

  useEffect(() => {
    const instance = bootOS(props);
    instance.start();
    setOs(instance);
  }, []);

  if (!os) {
    return (
      <div style={{
        height: "100vh",
        background: "#050816",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        🧠 Rebuilding SOC Runtime...
      </div>
    );
  }

  return <GlobalSOCCenter os={os} />;
}
