import { useState } from "react";

export function useDesktopManagerV2() {
  const [activeDesktop, setActiveDesktop] = useState("warroom");

  const switchDesktop = (id) => {
    setActiveDesktop(id);
  };

  return {
    activeDesktop,
    switchDesktop
  };
}
