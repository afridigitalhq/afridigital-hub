const fs = require("fs");

const file = "src/core/africctv/hooks/useAfriCCTVStream.js";
let code = fs.readFileSync(file, "utf8");

// repair broken hook structure if truncated
if (!code.includes("setLayout")) {
  const patch = `
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

    eventSource.subscribe(handler);

    return () => {
      eventSource.off && eventSource.off("vision", handler);
    };
  }, [eventSource]);

  return layout;
`;
  code = code.replace(/export default function useAfriCCTVStream\\([^]*?\\{/, 
    (m) => m + patch);
}

fs.writeFileSync(file, code);
console.log("CCTV_HOOK_REPAIRED");
