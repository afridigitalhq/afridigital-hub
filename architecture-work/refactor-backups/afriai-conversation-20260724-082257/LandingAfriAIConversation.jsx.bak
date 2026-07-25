import "../styles/conversation.css";

export default function LandingAfriAIConversation({
  messages = []
}) {

  if(messages.length === 0){
    return (
      <div className="landing-afriai-conversation landing-afriai-conversation-empty">

        <h3>👋 Welcome to AfriDigital</h3>

        <p>
          Your intelligent assistant for the entire AfriDigital ecosystem.
        </p>

        <div className="landing-afriai-suggestions">

          <button type="button">🛒 Shop across Africa</button>
          <button type="button">💼 Find jobs</button>
          <button type="button">📈 Promote my business</button>
          <button type="button">🚚 Track my delivery</button>
          <button type="button">🎟️ Need work from home jobs?</button>
          <button type="button">🛡️ Secure my business</button>

        </div>

      </div>
    );
  }

  return (
    <div className="landing-afriai-conversation">

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
