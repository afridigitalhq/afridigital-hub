import "../styles/mic.css";

export default function LandingAfriAIMic({
  active = false,
  onActivate
}) {
  return (
    <button
      type="button"
      className={`landing-afriai-mic ${active ? "active" : ""}`}
      onClick={onActivate}
      aria-label="Activate AfriAI microphone"
    >
      🎙️
    </button>
  );
}
