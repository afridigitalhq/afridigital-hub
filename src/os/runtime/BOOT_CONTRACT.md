AFRIDIGITAL OS BOOT CONTRACT

ENTRY POINT:
OSRuntimeBootstrap.jsx

FLOW:
Brain → DAG → Registry → Sidebar → UI

RULES:
- Only OSRuntimeBootstrap can initialize system
- All events must pass through OS Brain
- Sidebar cannot mutate state directly
- DAG is read/write only via OS Brain
