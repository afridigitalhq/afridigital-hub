import avatar from "../../../../../assets/ai/avatars/afriai-avatar-idle.png";
import "../styles/avatar.css";

export default function LandingAfriAIAvatar({ status = "idle" }) {

  return (
    <div className={`landing-afriai-avatar ${status}`}>

      <img
        src={avatar}
        alt="AfriAI Avatar"
        className="landing-afriai-image"
      />

    </div>
  );
}
