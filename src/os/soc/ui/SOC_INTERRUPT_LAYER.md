# SOC Interrupt Command Brain

This layer controls input arbitration:

Flow:
Input → Classification → Priority → Orchestrator → Advisory Output

Rules:
- No direct execution allowed
- All commands are evaluated, not executed
- Admin override is logged only
- AfriAi operates as conversational interface only

Purpose:
- Safe command interpretation
- Structured system control reasoning
- SOC-level decision simulation
