import AfriAIWhatsAppBusinessHero from "../products/afriaiwhatsappbusiness/AfriAIWhatsAppBusinessHero";
import AfriAIWhatsAppBusinessPreviewPanel from "../products/afriaiwhatsappbusiness/AfriAIWhatsAppBusinessPreview";
import AfriAIWhatsAppBusinessFeatures from "../products/afriaiwhatsappbusiness/AfriAIWhatsAppBusinessFeatures";
import AfriAIWhatsAppBusinessCTA from "../products/afriaiwhatsappbusiness/AfriAIWhatsAppBusinessCTA";

export default function AfriAIWhatsAppBusinessShowcase({ onExplore }) {
  return (
    <section className="glass-card product-showcase afriai-whatsapp-business-showcase">
      <AfriAIWhatsAppBusinessHero />
      <AfriAIWhatsAppBusinessPreviewPanel />
      <AfriAIWhatsAppBusinessFeatures />
      <AfriAIWhatsAppBusinessCTA onExplore={onExplore} />
    </section>
  );
}
