import FooterBrand from "./partials/FooterBrand";
import FooterEcosystemMap from "./partials/FooterEcosystemMap";
import FooterQuickLinks from "./partials/FooterQuickLinks";
import FooterContact from "./partials/FooterContact";
import FooterNewsletter from "./partials/FooterNewsletter";
import FooterLegal from "./partials/FooterLegal";

export default function LandingFooter(){
  return (
    <footer className="glass-card landing-footer">
      <FooterBrand />
      <FooterEcosystemMap />
      <FooterQuickLinks />
      <FooterContact />
      <FooterNewsletter />
      <FooterLegal />
    </footer>
  );
}
