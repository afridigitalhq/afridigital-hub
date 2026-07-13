# AfriOS Kernel Plugin Runtime Lock

## Runtime Ownership

ControlCenterShell owns admin plugin selection.

## Routing Contract

ControlCenterShell
→ resolveAdminPlugin()
→ ViewRouter
→ plugin.component

## Component Responsibilities

ViewRouter:
- Pure plugin renderer
- No plugin discovery
- Configurable fallback

ControlCenterShell:
- Admin runtime state owner
- Resolves active admin plugins

WarRoomLayout:
- Admin operational workspace composition

## Separation Rules

- User Hub plugins remain isolated
- Admin plugins use adminPluginRegistry
- Runtime discovery stays outside render components
