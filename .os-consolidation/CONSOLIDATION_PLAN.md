# 🧠 OS AUTHORITY CONSOLIDATION PLAN

## ENTRY POINT (TARGET STATE)
- OSRuntimeBootstrap.jsx → SINGLE ENTRY

## SIDEBAR (TARGET STATE)
- OSShellSidebar.js → ONLY SIDEBAR AUTHORITY

## REGISTRY (TARGET STATE)
- UnifiedPluginRegistry.js → SINGLE REGISTRY SOURCE

## BRAIN (TARGET STATE)
- OSOrchestrator.js → ROOT AUTHORITY
- OSKernelGovernor.js → MONITOR ONLY
- OSBootLoader.js → INIT ONLY

## DAG (UNCHANGED CORE)
- DAGRuntime.js → EXECUTION ENGINE ONLY

## RULE
All modules must route through OSOrchestrator.
No direct UI → DAG mutation allowed.
