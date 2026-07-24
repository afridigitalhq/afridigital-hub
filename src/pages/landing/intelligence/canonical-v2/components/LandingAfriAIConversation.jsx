import avatar from "../../../../../assets/ai/avatars/afriai-avatar-idle.png";
import "../styles/conversation.css";

export default function LandingAfriAIConversation({ messages=[] }){

  return(
    <div className="landing-afriai-conversation">

      <div className="landing-afriai-message assistant">

        <img
          className="landing-afriai-message-avatar"
          src={avatar}
          alt="AfriAI"
        />

        <div className="landing-afriai-message-body">

          <p className="landing-afriai-welcome-text">
            👋 Welcome to AfriDigital.<br/><br/>
            I'm your intelligent assistant for the entire AfriDigital ecosystem.
          </p>

          <div className="landing-afriai-suggestions">
            <button>🛒 Shop across Africa</button>
            <button>💼 Find jobs</button>
            <button>📈 Promote my business</button>
            <button>🚚 Track my delivery</button>
            <button>🏠 Work from home</button>
            <button>🛡 Secure my business</button>
          </div>

        </div>

      </div>

      {messages.map((message,index)=>(
        <div
          key={index}
          className={`landing-afriai-message ${message.role || "assistant"}`}
        >
          {message.content}
        </div>
      ))}

    </div>
  );

}
