import { useEffect } from "react";
import useAfriAIRouter from "../afriai/useAfriAIRouter";
import AfriBoostSidebar from "../../components/ads/AfriBoostSidebar";

export default function AfriDigitalShell({ children }) {

  // activate ecosystem brain globally
  useAfriAIRouter();

  return (
    <div>
      {children}

      {/* GLOBAL MONETIZATION LAYER */}
      <AfriBoostSidebar />

      {/* PLACEHOLDER: AfriWhatsApp CTA (future injection point) */}
      <div id="afri-whatsapp-cta" />
    </div>
  );
}
