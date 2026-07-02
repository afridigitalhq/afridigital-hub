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

registerSection(EnterpriseNavbar, 0);
registerSection(BrandHero, 1);
registerSection(EcosystemGrid, 2);

registerSection(AfriVisionPreview, 10);
registerSection(AfriSportsPreview, 20);

registerSection(AfriCommerceShowcase, 30);
registerSection(AfriCommShowcase, 40);

registerSection(AfriBoostShowcase, 50);
registerSection(AfriWhatsAppShowcase, 60);

registerSection(AfriTrackingShowcase, 70);
registerSection(AfriMetaWorldShowcase, 80);

registerSection(EnterpriseCTA, 90);

registerSection(AfriAIDock, 99);
registerSection(PremiumFooter, 100);

export default function LandingPage() {
  return <AfriDigitalLayoutEngine />;
}
