import CameraFeedRenderer from "../render/CameraFeedRenderer";
export default function CameraFeedGrid({feeds=[]}){
return <div className="camera-feed-grid">{feeds.map(feed=><CameraFeedRenderer key={feed.id} camera={feed}/> )}</div>;
}
