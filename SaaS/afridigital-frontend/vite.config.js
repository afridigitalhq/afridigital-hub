import { defineConfig } from 'vite'
import fs from 'fs'

function buildPartials() {
  return {
    name: 'build-partials',
    transformIndexHtml(html) {
      const hero = fs.readFileSync('./src/partials/hero.html', 'utf-8')
      const marquee = fs.readFileSync('./src/partials/marquee.html', 'utf-8')
      const services = fs.readFileSync('./src/partials/services.html', 'utf-8')
      const footer = fs.readFileSync('./src/partials/footer.html', 'utf-8')

      return html
        .replace('<!-- HERO -->', hero)
        .replace('<!-- MARQUEE -->', marquee)
        .replace('<!-- SERVICES -->', services)
        .replace('<!-- FOOTER -->', footer)
    }
  }
}

export default defineConfig({
  plugins: [buildPartials()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
})
