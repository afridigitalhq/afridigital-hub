AFRIDIGITAL SYSTEM LOCK

1. Scripts Layer
- READ ONLY
- NO file mutation inside src/
- NO UI influence

2. WhatsApp System
- OUTBOUND: AfriWhatsappCTA ONLY
- INBOUND: AfriAI ONLY

3. UI Rules
- No direct WhatsApp links
- No per-module CTAs
- Only shared CTA component allowed

4. Architecture Rules
- Single responsibility per file
- No cross-feature imports
- No runtime logic engines in frontend

5. Enforced Flow
Web → AfriWhatsappCTA → WhatsApp
WhatsApp → AfriAI → Module Router
