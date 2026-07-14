════════════════════════════════════════════
AFRIDIGITAL LANDING V3 — IMPLEMENTATION BATCH 2
════════════════════════════════════════════

[REFACTOR TARGETS]
✔ Premium sticky top navigation
✔ Header: AfriDigital | Products | 🔔 | Login | Sign Up | ☰
✔ Remove hero logo image completely
✔ Center hero heading and subtitle
✔ Premium globe shell artwork
✔ Hero CTA buttons
✔ Trust badges
✔ Marquee directly below hero
✔ Product placeholders below marquee
✔ View All Products CTA
✔ AfriAI Dock
✔ Footer

[FILES TO REBUILD]
src/pages/landing/LandingPage.jsx
src/pages/landing/navigation/LandingNavigation.jsx
src/pages/landing/hero/LandingHero.jsx
src/pages/landing/landing.css

[COMPONENT ORDER]
LandingNavigation
↓
LandingHero
↓
EcosystemMarquee
↓
LandingEcosystemBridge
↓
View All Products
↓
AfriAIDock
↓
LandingFooter

[UI RULES]
• Full-width premium hero
• Facebook-style glass navigation
• Hero text perfectly centered
• Globe is visual focus
• Auth buttons only in header
• No auth card below hero
• No hero logo image
• Dark enterprise theme
• Responsive mobile layout
