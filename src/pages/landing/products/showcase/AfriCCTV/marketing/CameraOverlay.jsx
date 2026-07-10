export default function CameraOverlay({brand,id}){
  return(
    <>
      <div className="overlay-top">
        <span>🔴 Rec</span>
        <span>{brand}</span>
      </div>
      <div className="overlay-time">12 : 34 . 56 pm</div>
      <div className="overlay-bottom">
        <span>{id}</span>
        <span>🟢 Live Feed</span>
      </div>
    </>
  );
}
