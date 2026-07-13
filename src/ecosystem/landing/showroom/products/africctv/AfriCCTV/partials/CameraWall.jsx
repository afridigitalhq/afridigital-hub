export default function CameraWall(){

  const cameras = [
    {
      id:"CAM-01",
      status:"LIVE",
      scan:"AI SCAN ACTIVE",
      health:"ONLINE"
    },
    {
      id:"CAM-02",
      status:"LIVE",
      scan:"AI SCAN ACTIVE",
      health:"ONLINE"
    },
    {
      id:"CAM-03",
      status:"LIVE",
      scan:"AI SCAN ACTIVE",
      health:"ONLINE"
    },
    {
      id:"CAM-04",
      status:"LIVE",
      scan:"AI SCAN ACTIVE",
      health:"ONLINE"
    }
  ];

  return (
    <section className="camera-wall">

      <div className="camera-wall-header">
        <h2>
          SECURITY MONITORING WALL
        </h2>

        <span>
          4 CAMERAS ONLINE
        </span>
      </div>


      <div className="camera-grid">

        {cameras.map((camera)=>(
          <div 
            className="camera-feed"
            key={camera.id}
          >

            <div className="camera-overlay">

              <strong>
                {camera.id}
              </strong>

              <span>
                {camera.status}
              </span>

            </div>


            <div className="camera-screen">

              <span>
                🛡️
              </span>

              <p>
                {camera.scan}
              </p>

            </div>


            <footer>
              <span>
                HEALTH: {camera.health}
              </span>
            </footer>


          </div>
        ))}

      </div>

    </section>
  );
}
