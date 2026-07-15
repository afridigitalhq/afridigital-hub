from pathlib import Path
import re

p = Path("src/pages/landing/landing.css")
css = p.read_text()

# Hero reaches screen edges
css = re.sub(r'\.landing-shell\s*\{[^}]*?padding:\s*30px;',
             '.landing-shell {\n  min-height:100vh;\n  padding:0;',
             css, 1, flags=re.S)

# Reduce hero height
css = css.replace("min-height:85vh;", "min-height:72vh;")

# Reduce hero content padding
css = css.replace("padding:0 24px;", "padding:0 8px;")

# Move shield further left
css = css.replace("left:20px;", "left:40px;")

# Slightly reduce brand size
css = css.replace("font-size:2.8rem;", "font-size:2.6rem;")

p.write_text(css)
print("✔ Hero CSS updated")
