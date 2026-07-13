import React, { createContext, useContext, useMemo, useState } from "react";

const UserNavigationContext = createContext(null);

export function UserNavigationProvider({ children }) {
  const [activePlugin, setActivePlugin] = useState("dashboard");

  const value = useMemo(
    () => ({
      activePlugin,
      setActivePlugin
    }),
    [activePlugin]
  );

  return (
    <UserNavigationContext.Provider value={value}>
      {children}
    </UserNavigationContext.Provider>
  );
}

export function useUserNavigation() {
  const context = useContext(UserNavigationContext);

  if (!context) {
    throw new Error("useUserNavigation must be used inside UserNavigationProvider");
  }

  return context;
}
