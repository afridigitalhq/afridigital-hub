# AfriCCTV Landing Refinement Phase

Goals
- Remove remaining inline styles.
- Remove hardcoded status ownership from UI.
- Standardize status presentation.
- Use a single LandingPreviewFeeds source.
- Keep UI presentation-only.

Ownership
ProviderRegistry
    ↓
LandingRuntime
    ↓
CameraFeed
    ↓
Status Components

Rules
- UI never decides ONLINE/OFFLINE.
- UI never decides LIVE/REC.
- UI never owns timestamps.
- UI never owns animation.
- Runtime owns state.
- Provider owns data.
