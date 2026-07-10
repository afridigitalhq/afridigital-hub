import EnterpriseCameraLayout from "./EnterpriseCameraLayout";
import EnterpriseSOCPanel from "./EnterpriseSOCPanel";

export default function EnterpriseMainContent(){
  return(
    <main className="enterprise-main-content">
      <section className="enterprise-left-panel">
        <EnterpriseCameraLayout />
      </section>

      <aside className="enterprise-right-panel">
        <EnterpriseSOCPanel />
      </aside>
    </main>
  );
}
