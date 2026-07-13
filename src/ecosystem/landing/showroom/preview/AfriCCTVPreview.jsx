import "../products/africctv/AfriCCTV/marketing/marketing.css";
import AfriCCTVHero from "../products/africctv/AfriCCTV/marketing/AfriCCTVHero";
import EnterpriseMonitor from "../products/africctv/AfriCCTV/EnterpriseMonitor";
import EnterpriseSidebar from "../products/africctv/AfriCCTV/marketing/EnterpriseSidebar";
import EnterpriseCTA from "../products/africctv/AfriCCTV/marketing/EnterpriseCTA";

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
