import "../styles/mic.css";

export default function LandingAfriAIMic({
  active = false,
  onActivate,
  onRelease
}) {
  return (
    <button
      type="button"
      className={`landing-afriai-mic ${active ? "active" : ""}`}
      onMouseDown={onActivate}
      onMouseUp={onRelease}
      onMouseLeave={onRelease}
      onTouchStart={onActivate}
      onTouchEnd={onRelease}
      aria-label="Activate AfriAI microphone"
    >
      🎙️
    </button>
  );
}
