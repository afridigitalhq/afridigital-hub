import EnterpriseTopBar from "./EnterpriseTopBar";
import EnterpriseDashboardLayout from "./EnterpriseDashboardLayout";
import EnterpriseFooterBar from "./EnterpriseFooterBar";

export default function EnterpriseDashboard(){
  return(
    <section className="enterprise-dashboard">
      <EnterpriseTopBar />
      <EnterpriseDashboardLayout />
      <EnterpriseFooterBar />
    </section>
  );
}
