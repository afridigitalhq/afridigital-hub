# SOC Cognitive Core

This layer unifies:
- Forecast Engine
- Cascade Simulation Engine
- DAG Runtime context
- Narrator Engine

Behavior:
- Receives events from Orchestrator
- Produces risk + narrative + decision context
- Does NOT mutate DAG directly
- Feeds SOC UI + Narrator + WarMap
