import EnterpriseHeader from "./EnterpriseHeader";
import EnterpriseLegend from "./EnterpriseLegend";

export default function EnterpriseTopBar(){
  return(
    <header className="enterprise-top-bar">
      <EnterpriseHeader />
      <EnterpriseLegend />
    </header>
  );
}
