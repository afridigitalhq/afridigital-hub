export default function CameraOverlay({brand,id}){
  return (
    <>
      <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>

      <div className="overlay-top">
        <span className="rec-indicator">🔴 Rec</span>
        <div className="overlay-brand">
          <strong>{brand}</strong>
          <small>12 : 34 . 56 pm</small>
        </div>
      </div>

      <div className="overlay-bottom">
        <span>{id}</span>
        <span className="live-indicator">🟢 Live Feed</span>
      </div>
    </>
  );
}
