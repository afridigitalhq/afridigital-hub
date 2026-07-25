import "../styles/mic.css";
import micImage from "../assets/afriai-mic.png";

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
      <img
        src={micImage}
        alt="AfriAI Microphone"
        className="landing-afriai-mic-image"
      />
    </button>
  );
}
