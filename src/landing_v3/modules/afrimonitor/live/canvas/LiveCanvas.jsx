import CameraFeedGrid from "../grid/CameraFeedGrid";
export default function LiveCanvas({feeds=[]}){
return <section className="afrimonitor-live-canvas"><CameraFeedGrid feeds={feeds}/></section>;
}
