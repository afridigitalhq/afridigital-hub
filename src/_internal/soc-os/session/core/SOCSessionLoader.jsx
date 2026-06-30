import React, { useState } from "react";
import SOCLoginScreen from "../login/SOCLoginScreen";
import { SessionEngine } from "../state/SessionEngine";
import SOCDesktopShell from "../../shell/SOCDesktopShell";

const engine = new SessionEngine();

export default function SOCSessionLoader({ children }) {
  const [session, setSession] = useState(null);

  const handleLogin = (user) => {
    const s = engine.login(user);
    setSession(s);
  };

  const handleLogout = () => {
    engine.logout();
    setSession(null);
  };

  if (!session) {
    return <SOCLoginScreen onLogin={handleLogin} />;
  }

  return (
    <SOCDesktopShell>
      {children}
    </SOCDesktopShell>
  );
}
