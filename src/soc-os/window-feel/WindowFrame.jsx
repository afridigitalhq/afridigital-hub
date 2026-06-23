import React from "react";

export default function WindowFrame({ children, zIndex = 1, onClick }) {
  return (
    <div
      className="window"
      style={{ zIndex }}
      onMouseDown={onClick}
    >
      {children}
    </div>
  );
}
