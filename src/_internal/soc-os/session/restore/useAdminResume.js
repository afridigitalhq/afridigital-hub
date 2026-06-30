import { useState } from "react";
import { AdminSessionController } from "../core/AdminSessionController";

const controller = new AdminSessionController();

export function useAdminResume(adminId) {
  const [session, setSession] = useState(null);

  const login = () => {
    const s = controller.startSession(adminId);
    setSession(s);
  };

  const hibernate = () => {
    controller.hibernate(adminId);
  };

  const saveLayout = (layout) => {
    controller.saveLayout(adminId, layout);
  };

  const loadLayout = () => {
    return controller.loadLayout(adminId);
  };

  return {
    session,
    login,
    hibernate,
    saveLayout,
    loadLayout
  };
}
