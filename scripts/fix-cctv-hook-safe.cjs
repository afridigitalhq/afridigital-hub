const fs = require("fs");

const file = "src/core/africctv/hooks/useAfriCCTVStream.js";
let code = fs.readFileSync(file, "utf8");

// ensure imports
if (!code.includes("useState")) {
  code = `import { useEffect, useRef, useState } from "react";\n` + code;
}

if (!code.includes("AfriCCTVDashboardRuntime")) {
  code = `import AfriCCTVDashboardRuntime from "../runtime/ui-adapters/AfriVisionDashboardRuntime.js";\n` + code;
}

// HARD SAFETY: if hook is broken, rebuild clean core
if (!code.includes("return layout")) {
  const cleanHook = `
export default function useAfriCCTVStream(eventSource) {
  const runtimeRef = useRef(null);
  const bufferRef = useRef([]);
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    if (!eventSource) return;

    const handler = (event) => {
      bufferRef.current.push(event);

      if (bufferRef.current.length >= 5) {
        setLayout([...bufferRef.current]);
        bufferRef.current = [];
      }
    };

    if (eventSource?.subscribe) {
      eventSource.subscribe(handler);
    }

    return () => {
      eventSource?.off?.("vision", handler);
    };
  }, [eventSource]);

  return layout;
}
`;
  code = cleanHook;
}

fs.writeFileSync(file, code);
console.log("CCTV_HOOK_SAFE_FIXED");
