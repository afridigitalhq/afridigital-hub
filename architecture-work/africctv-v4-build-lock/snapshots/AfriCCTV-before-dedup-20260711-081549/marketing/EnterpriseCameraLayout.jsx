import EnterpriseCamera01 from "./EnterpriseCamera01";
import EnterpriseCamera02 from "./EnterpriseCamera02";
import EnterpriseCamera03 from "./EnterpriseCamera03";
import EnterpriseCamera04 from "./EnterpriseCamera04";

export default function EnterpriseCameraLayout(){
  return(
    <section className="enterprise-camera-wall">
      <EnterpriseCamera01 />
      <EnterpriseCamera02 />
      <EnterpriseCamera03 />
      <EnterpriseCamera04 />
    </section>
  );
}
