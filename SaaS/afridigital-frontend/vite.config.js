import { defineConfig } from 'vite'
import fs from 'fs'

function partialsPlugin() {
  return {
    name: 'afri-partials',
    transformIndexHtml(html) {
      const hero = fs.readFileSync('./src/partials/hero.html', 'utf-8')
      const marquee = fs.readFileSync('./src/partials/marquee.html', 'utf-8')
      const auth = fs.readFileSync('./src/partials/auth.html', 'utf-8')
      const services = fs.readFileSync('./src/partials/services.html', 'utf-8')
      const footer = fs.readFileSync('./src/partials/footer.html', 'utf-8')
      const chat = fs.readFileSync('./src/partials/chat.html', 'utf-8')

      return html
        .replace('<!-- HERO -->', hero)
        .replace('<!-- MARQUEE -->', marquee)
        .replace('<!-- AUTH -->', auth)
        .replace('<!-- SERVICES -->', services)
        .replace('<!-- FOOTER -->', footer)
        .replace('<!-- CHAT -->', chat)
    }
  }
}

export default defineConfig({
  plugins: [partialsPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
})
