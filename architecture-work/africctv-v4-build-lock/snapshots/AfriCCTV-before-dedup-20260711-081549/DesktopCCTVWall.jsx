import CCTVHeader from "./partials/CCTVHeader";
import AfriCCTVMonitorGrid from "./v4/AfriCCTVMonitorGrid";
import AfriCCTVSecurityCore from "./v4/AfriCCTVSecurityCore";

export default function DesktopCCTVWall(){

  return (
    <section className="desktop-cctv-shell">

      <CCTVHeader />

      <div className="africctv-v4-layout">

        <main className="africctv-v4-main">
          <AfriCCTVMonitorGrid />
        </main>

        <AfriCCTVSecurityCore />

      </div>

    </section>
  );
}
