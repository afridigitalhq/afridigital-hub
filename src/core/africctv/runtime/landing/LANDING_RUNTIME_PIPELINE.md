# AfriCCTV Landing Runtime Pipeline

Landing UI
    ↓
Presentation Components
    ↓
LandingRuntime
    ↓
ProviderRegistry
    ├── MockProvider
    └── LiveProvider
          ↓
Runtime Services
    ├── CameraService
    ├── RecordingService
    ├── StorageService
    ├── AIService
    ├── SearchService
    ├── NotificationService
    ├── SecurityService
    └── HealthService
          ↓
Adapters
    ├── ONVIF
    ├── RTSP
    ├── WebRTC
    ├── Hikvision
    └── Dahua
          ↓
Backend Runtime
    ├── WebSocket
    ├── EventBus
    ├── Streams
    ├── Storage
    └── AI Engine

Rules
- UI owns presentation only.
- Runtime owns state.
- Providers own data source selection.
- Services own business logic.
- Adapters own protocol integration.
