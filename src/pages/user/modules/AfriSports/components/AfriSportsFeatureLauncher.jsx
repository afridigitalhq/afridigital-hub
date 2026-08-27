import { useEffect, useId, useRef, useState } from "react";
import { AFRISPORTS_FEATURES } from "../data/afriSportsFeatureRegistry";

export default function AfriSportsFeatureLauncher({ onSelect }) {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (!launcherRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (feature) => {
    setOpen(false);
    onSelect?.(feature);
  };

  return (
    <div ref={launcherRef} className="afrisports-feature-launcher">
      <button
        type="button"
        className="afrisports-feature-launcher-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        title="AfriSports features"
      >
        <span aria-hidden="true">⚽</span>
      </button>

      {open && (
        <div
          id={menuId}
          className="afrisports-feature-menu"
          role="menu"
          aria-label="AfriSports features"
        >
          <div className="afrisports-feature-menu-heading">
            <strong>AfriSports Features</strong>
            <small>{AFRISPORTS_FEATURES.length} available</small>
          </div>

          <div className="afrisports-feature-menu-list">
            {AFRISPORTS_FEATURES.map((feature) => (
              <button
                key={feature.id}
                type="button"
                className="afrisports-feature-item"
                role="menuitem"
                onClick={() => handleSelect(feature)}
              >
                <span className="afrisports-feature-icon">
                  {feature.icon}
                </span>

                <span className="afrisports-feature-copy">
                  <strong>{feature.label}</strong>
                  <small>{feature.description}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
