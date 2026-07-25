import avatar from "../../../../../assets/ai/avatars/afriai-avatar-idle.png";
import "../styles/avatar.css";

export default function LandingAfriAIAvatar({ state = "idle" }) {
  return (
    <div className={`landing-afriai-avatar ${state}`}>
      <div className="landing-afriai-particles"></div>

      <div className="landing-afriai-halo"></div>

      <div className="landing-afriai-energy-ring"></div>

      <div className="landing-afriai-glass-ring">
        <img
          src={avatar}
          alt="AfriAI Avatar"
          className="landing-afriai-image"
        />
      </div>
    </div>
  );
}
