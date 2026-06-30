import { useState } from "react";

export function useWindowDrag(initial = { x: 0, y: 0 }) {
  const [pos, setPos] = useState(initial);

  const onDrag = (dx, dy) => {
    setPos(p => ({
      x: p.x + dx,
      y: p.y + dy
    }));
  };

  return { pos, onDrag };
}
