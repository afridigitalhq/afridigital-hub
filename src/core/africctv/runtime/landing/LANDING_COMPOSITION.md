# AfriCCTV Landing Runtime Composition

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
LandingEventBus
             ↓
BackendBridge
      ├── ServerTimeBridge
      ├── VisitorGeoBridge
      ├── LandingWebSocketBridge
      └── StatusRegistry
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

UI Contract
- UI never imports services.
- UI never imports adapters.
- UI never owns timers.
- UI never owns websocket state.
- UI only renders Runtime state.
