import { useEffect, useRef, useState } from "react";

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
