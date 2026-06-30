import React, { useState } from "react";
import SOCBootScreen from "./SOCBootScreen";
import SOCDESKTOPShell from "../ui-shell/SOCDESKTOPShell";

export default function SOCBootLoader({ children }) {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return (
      <SOCBootScreen onFinish={() => setBooted(true)} />
    );
  }

  return (
    <SOCDESKTOPShell>
      {children}
    </SOCDESKTOPShell>
  );
}
