# AfriCCTV Runtime Ownership Map

R0 RuntimeKernel
- Owns lifecycle
- Owns dependency injection
- Owns module registry

R1 CameraRegistry
- Camera inventory
- Camera metadata
- Discovery
- Status

R2 AdapterManager
- ONVIF
- RTSP
- WebRTC
- Hikvision
- Dahua
- Plugin loading

R3 StreamManager
- Live streams
- Stream switching
- Stream health

R4 RecordingService
- Recording
- Clips
- Timeline

R5 StorageService
- Local storage
- Cloud storage
- NAS
- Archive
- Retention

R6 AIService
- Motion
- Person
- Vehicle
- Object
- AI Events

R7 SearchService
- Search
- Playback
- Timeline

R8 NotificationService
- Push
- Email
- WhatsApp
- Webhooks

R9 SecurityService
- Auth
- Permissions
- Audit
- Evidence Integrity

R10 HealthService
- Metrics
- Diagnostics
- Runtime Health

R11 ProviderRegistry
- MockProvider
- LiveProvider
- Provider Switching

Boundary Rule:
UI → ProviderRegistry → Runtime → Services → Adapters
Never bypass ownership boundaries.
