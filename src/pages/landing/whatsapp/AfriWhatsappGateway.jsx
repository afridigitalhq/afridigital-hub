import AfriWhatsappCTA from "../../../shared/components/cta/AfriWhatsappCTA";

export default function AfriWhatsappGateway() {
  return (
    <section className="glass-card ai-panel">
      <h3>💚 Use AfriDigital via WhatsApp</h3>

      <p>
        Access AfriDigital services through WhatsApp with AI-powered interaction.
      </p>

      <AfriWhatsappCTA
        label="💚 Open AfriDigital via WhatsApp"
        context="landing"
        module="gateway"
      />
    </section>
  );
}
