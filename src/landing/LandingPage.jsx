import React from "react";
import AfriDigitalLayoutEngine, { registerSection } from "../core/layout/AfriDigitalLayoutEngine";

import EnterpriseNavbar from "./EnterpriseNavbar";
import BrandHero from "./BrandHero";
import EcosystemGrid from "./EcosystemGrid";
import AfriVisionPreview from "./AfriVisionPreview";
import AfriSportsPreview from "./AfriSportsPreview";
import AfriCommerceShowcase from "./AfriCommerceShowcase";
import AfriCommShowcase from "./AfriCommShowcase";
import AfriBoostShowcase from "./AfriBoostShowcase";
import AfriWhatsAppShowcase from "./AfriWhatsAppShowcase";
import AfriTrackingShowcase from "./AfriTrackingShowcase";
import AfriMetaWorldShowcase from "./AfriMetaWorldShowcase";
import EnterpriseCTA from "./EnterpriseCTA";
import AfriAIDock from "./AfriAIDock";
import PremiumFooter from "./PremiumFooter";

registerSection(EnterpriseNavbar,{order:0,layout:"header"});
registerSection(BrandHero,{order:10,layout:"hero"});
registerSection(EcosystemGrid,{order:20,layout:"grid"});

registerSection(AfriVisionPreview,{order:30,layout:"flagship"});
registerSection(AfriSportsPreview,{order:40,layout:"flagship"});

registerSection(AfriCommerceShowcase,{order:50,layout:"half"});
registerSection(AfriCommShowcase,{order:60,layout:"half"});

registerSection(AfriBoostShowcase,{order:70,layout:"half"});
registerSection(AfriWhatsAppShowcase,{order:80,layout:"half"});

registerSection(AfriTrackingShowcase,{order:90,layout:"half"});
registerSection(AfriMetaWorldShowcase,{order:100,layout:"flagship"});

registerSection(EnterpriseCTA,{order:110,layout:"cta"});
registerSection(AfriAIDock,{order:120,layout:"dock"});
registerSection(PremiumFooter,{order:130,layout:"footer"});

export default function LandingPage(){
  return <AfriDigitalLayoutEngine />;
}
