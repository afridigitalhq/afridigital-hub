# AfriDigital User Hub Plugin Navigation Lock

## Runtime Shell
UserAppShell is the single user runtime shell.

## Navigation Flow

UserAppShell
→ UserNavigationProvider
→ UserSidebar
→ SidebarNavigation
→ UserDashboard
→ PluginWorkspace

## Rules

- One shell authority
- Sidebar handles navigation only
- Workspace renders active plugin only
- Plugin registry remains the extension boundary
- No business logic inside UI composition files

## Validation

- npm run build: PASSED
- Plugin navigation context: ENABLED
- Duplicate UserShell removed
