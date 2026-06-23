import { useState } from "react";
import { SessionEngine } from "./SessionEngine";

const engine = new SessionEngine();

export function useSession() {
  const [session, setSession] = useState(engine.getActiveSession());

  const login = (user) => {
    const s = engine.login(user);
    setSession(s);
  };

  const logout = () => {
    engine.logout();
    setSession(null);
  };

  const switchWorkspace = (ws) => {
    engine.switchWorkspace(ws);
    setSession({ ...engine.getActiveSession() });
  };

  return { session, login, logout, switchWorkspace };
}
