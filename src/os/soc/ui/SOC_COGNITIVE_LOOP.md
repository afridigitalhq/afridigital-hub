# SOC Cognitive Loop Engine

This layer introduces continuous reasoning:

- Runs periodic analysis ticks
- Observes DAG state over time
- Produces predictive insights
- Feeds SOC UI + Narrator

Constraints:
- Read-only observation only
- No DAG mutation allowed
- No direct system control
