import FooterBrand from "./partials/FooterBrand";
import FooterContact from "./partials/FooterContact";
import FooterNewsletter from "./partials/FooterNewsletter";
import FooterLegal from "./partials/FooterLegal";

export default function LandingFooter() {
  return (
    <footer className="glass-card landing-footer">
      <div className="landing-footer-main">
        <FooterBrand />
        <FooterContact />
        <FooterNewsletter />
      </div>
      <FooterLegal />
    </footer>
  );
}
