import { useState } from "react";

export function useWindowStack() {
  const [stack, setStack] = useState([]);

  const focus = (id) => {
    setStack(prev => {
      const filtered = prev.filter(x => x !== id);
      return [...filtered, id];
    });
  };

  const getZIndex = (id) => {
    return stack.indexOf(id) + 1;
  };

  return { focus, getZIndex };
}
