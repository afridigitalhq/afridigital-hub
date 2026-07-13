import React from "react";

export default function Sidebar({ active, onSelect }) {
  const items = ["Dashboard","SOC","WarRoom","AfriAI","Settings"];

  return (
    <aside>
      {items.map(item => (
        <button key={item} onClick={() => onSelect(item)}>
          {item}
        </button>
      ))}
    </aside>
  );
}
