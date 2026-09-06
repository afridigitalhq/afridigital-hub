import React, { useState } from "react";
import { askAfriAI } from "../../../api/AfriAIClient";

export default function AfriForexAIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "I’m ready to analyze Forex and Crypto markets. Ask me about a market, pair, trend, setup, risk, or current market conditions."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const text = message.trim();

    if (!text || loading) return;

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: text
      }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const result = await askAfriAI(text, "afriforex");

      const data = result?.data || result;
      const response = data?.response || data;
      const reply =
        response?.reply ||
        data?.reply ||
        "AfriAI received your request but did not return a market response.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            typeof reply === "string"
              ? reply
              : JSON.stringify(reply)
        }
      ]);
    } catch (error) {
      console.error("AfriForex AfriAI ERROR:", error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: `Unable to reach AfriAI: ${error.message}`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="afriforex-panel afriforex-ai-chat">
      <div className="afriforex-chat-header">
        <div>
          <span className="afriforex-label">AFRIAI</span>
          <h2>Market Intelligence</h2>
        </div>
        <span className="afriforex-ai-status">
          ● {loading ? "THINKING" : "READY"}
        </span>
      </div>

      <div className="afriforex-chat-messages">
        {messages.map((item, index) => (
          <div
            key={`${item.role}-${index}`}
            className={`afriforex-chat-message ${
              item.role === "assistant"
                ? "afriforex-chat-ai"
                : "afriforex-chat-user"
            }`}
          >
            <strong>{item.role === "assistant" ? "AfriAI" : "You"}</strong>
            <p>{item.content}</p>
          </div>
        ))}

        {loading && (
          <div className="afriforex-chat-message afriforex-chat-ai afriforex-chat-loading">
            <strong>AfriAI</strong>
            <p>Analyzing market intelligence…</p>
          </div>
        )}
      </div>

      <form className="afriforex-chat-input" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask AfriAI about the market..."
          aria-label="Ask AfriAI"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !message.trim()}>
          {loading ? "..." : "Send"}
        </button>
      </form>
    </section>
  );
}
