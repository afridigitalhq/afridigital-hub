# AfriCCTV Landing Gateway

Backend
    │
    ├── Server Time
    ├── Visitor Geo
    ├── WebSocket
    ├── Camera Summary
    ├── AI Summary
    ├── Runtime Health
    └── Notifications
          │
          ▼
LandingGateway
          │
          ▼
LandingRuntime
          │
          ▼
ProviderRegistry
          │
          ▼
Presentation Components

Rules

LandingGateway is the ONLY runtime entry point.

UI never talks to backend.

UI never owns sockets.

UI never owns timers.

UI renders Runtime state only.
