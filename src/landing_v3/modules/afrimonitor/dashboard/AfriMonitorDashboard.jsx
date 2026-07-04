import LiveCanvas from "../live/canvas/LiveCanvas";
export default function AfriMonitorDashboard({feeds=[]}){
return <main className="afrimonitor-dashboard"><LiveCanvas feeds={feeds}/></main>;
}
