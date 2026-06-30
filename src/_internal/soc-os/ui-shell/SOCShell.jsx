import React, { useEffect, useState } from "react";
import { SOCKernel } from "../kernel/SOCKernel";

const kernel = new SOCKernel();

export default function SOCShell({ children }) {
  const [state, setState] = useState(kernel.state);

  useEffect(() => {
    const unsub = kernel.subscribe(setState);
    kernel.setDevice(window.innerWidth < 768 ? "mobile" : "desktop");

    const resize = () => {
      kernel.setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={`soc-shell ${state.layout}`}>
      {children}
    </div>
  );
}
