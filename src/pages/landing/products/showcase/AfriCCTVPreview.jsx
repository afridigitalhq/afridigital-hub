import "./AfriCCTV/marketing/marketing.css";
import AfriCCTVHero from "./AfriCCTV/marketing/AfriCCTVHero";
import EnterpriseMonitor from "./AfriCCTV/EnterpriseMonitor";
import EnterpriseSidebar from "./AfriCCTV/marketing/EnterpriseSidebar";
import EnterpriseCTA from "./AfriCCTV/marketing/EnterpriseCTA";

export default function AfriCCTVPreview({ onExplore }) {
  return (
    <section className="africctv-marketing">
      <AfriCCTVHero />

      <section className="africctv-enterprise-layout">
        <EnterpriseMonitor />
        <EnterpriseSidebar />
      </section>


      <EnterpriseCTA onExplore={onExplore} />
    </section>
  );
}
