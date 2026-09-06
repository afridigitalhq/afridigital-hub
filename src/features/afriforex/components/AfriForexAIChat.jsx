import React, { useState } from "react";

export default function AfriForexAIChat() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
  };

  return (
    <section className="afriforex-panel afriforex-ai-chat">
      <div className="afriforex-chat-header">
        <div>
          <span className="afriforex-label">AFRIAI</span>
          <h2>Market Intelligence</h2>
        </div>
        <span className="afriforex-ai-status">● READY</span>
      </div>

      <div className="afriforex-chat-messages">
        <div className="afriforex-chat-message afriforex-chat-ai">
          <strong>AfriAI</strong>
          <p>
            I’m ready to analyze live Forex and Crypto markets. Connect a
            market-data provider and I’ll begin reading real market conditions.
          </p>
        </div>
      </div>

      <form className="afriforex-chat-input" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask AfriAI about the market..."
          aria-label="Ask AfriAI"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
