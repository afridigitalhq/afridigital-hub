import "../styles/conversation.css";

export default function LandingAfriAIConversation({
  messages = []
}) {

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
