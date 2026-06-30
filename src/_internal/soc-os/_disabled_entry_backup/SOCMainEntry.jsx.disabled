import React, { useState } from "react";
import SOCBootLoader from "../boot/SOCBootLoader";
import SOCDesktopShell from "../shell/SOCDesktopShell";

export default function SOCMainEntry() {

  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <SOCBootLoader onFinish={() => setBooted(true)} />
      ) : (
        <SOCDesktopShell />
      )}
    </>
  );
}
