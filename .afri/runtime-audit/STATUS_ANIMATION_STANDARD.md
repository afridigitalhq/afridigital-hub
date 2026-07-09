# AfriCCTV Status Animation Standard

🟢 LIVE
- Dot: breathing animation
- Text: static

🔴 REC
- Dot: static by default
- Dot pulses only during real recording
- Text: static

🟡 WARNING
- Dot pulses only while warning is active
- Text: static

⚪ OFFLINE
- No animation
- Text: static

UI Rule:
Components never own animation logic.
Animation state comes from Runtime → Provider → UI.

Landing:
MockProvider

User App:
MockProvider | LiveProvider

Admin:
MockProvider | LiveProvider | Diagnostics
