import React from "react";
import AfriDigitalLayoutEngine from "../core/layout/AfriDigitalLayoutEngine";

import BrandHero from "./BrandHero";
import EcosystemGrid from "./EcosystemGrid";
import AfriVisionPreview from "./AfriVisionPreview";
import AfriSportsPreview from "./AfriSportsPreview";
import AfriAIDock from "./AfriAIDock";
import PremiumFooter from "./PremiumFooter";

import { registerSection } from "../core/layout/AfriDigitalLayoutEngine";

registerSection(BrandHero, 1);
registerSection(EcosystemGrid, 2);
registerSection(AfriVisionPreview, 3);
registerSection(AfriSportsPreview, 4);
registerSection(AfriAIDock, 99);
registerSection(PremiumFooter, 100);

export default function LandingPage() {
  return <AfriDigitalLayoutEngine />;
}
