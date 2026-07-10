# AfriCCTV Ownership Lock

## Landing Showcase Boundary

DesktopCCTVWall.jsx
- Owns desktop enterprise preview composition

MobileCCTVFeed.jsx
- Owns mobile preview composition

CameraFeed.jsx
- Owns camera visual representation

CCTVStatusPanel.jsx
- Owns security status presentation

components/
- Own reusable visual primitives only

data/
- Own landing preview data only

partials/
- Own showcase sections only

useAfriCCTVLive.js
- Data hook boundary only

## Forbidden

No camera engine creation.
No admin operations.
No user monitoring workflow.
No backend business logic.
