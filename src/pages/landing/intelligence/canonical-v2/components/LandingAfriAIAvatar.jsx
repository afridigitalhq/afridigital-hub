import avatar from "../../../../../assets/ai/avatars/afriai-avatar-idle.png";
import "../styles/avatar.css";

export default function LandingAfriAIAvatar({
  status = "idle",
  avatarMode = "idle",
  voiceLevel = 0,
  small = false
}) {

  return (
    <div
      className={`landing-afriai-avatar ${small ? "small" : ""} ${status} ${avatarMode} ${status==="listening" ? "expanded" : ""}`}
      style={{
        "--voice-level": voiceLevel
      }}
    >

      <img
        src={avatar}
        alt="AfriAI Avatar"
        className="landing-afriai-image"
      />

    </div>
  );
}
